const Discord = require("discord.js");
const client = new Discord.Client();
const axios = require("axios");
require("dotenv").config();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("message", (message) => {
  // Check if the message is in the specific channel
  if (message.channel.id !== process.env.CHANNEL_ID) {
    return; // Ignore messages from other channels
  }

  if (message.content.startsWith("!iphone")) {
    const args = message.content.split(" ");
    if (args.length < 2) {
      message.reply("Please specify the iPhone model.");
      return;
    }
    const model = args.slice(1).join(" ");
    message.reply(`Finding average price for ${model}...`);
    // Retrieve average price from eBay and send the response
    getAveragePrice(model)
      .then((averagePrice) => {
        message.reply(
          `The average price for ${model} on eBay is $${averagePrice}`
        );
      })
      .catch((error) => {
        console.error("Error retrieving average price:", error);
        message.reply(
          "Failed to retrieve the average price. Please try again later."
        );
      });
  } else if (message.content.startsWith("!profit")) {
    const args = message.content.split(" ");
    if (args.length < 3) {
      message.reply("Please specify the buying price and iPhone model.");
      return;
    }
    const buyingPrice = parseFloat(args[1]);
    const model = args.slice(2).join(" ");
    message.reply(
      `Calculating profit for buying price $${buyingPrice} and ${model}...`
    );
    // Calculate profit and send the response
    getAveragePrice(model)
      .then((averagePrice) => {
        const profit = calculateProfit(buyingPrice, averagePrice);
        const profitPercentage = calculateProfitPercentage(
          buyingPrice,
          averagePrice
        );
        let replyMessage = `If you buy an ${model} for $${buyingPrice} and sell it for the average price of $${averagePrice}, `;
        if (profit > 0) {
          replyMessage += `you will make a profit of $${profit} (${profitPercentage}%) ✅`;
        } else if (profit < 0) {
          replyMessage += `you will incur a loss of $${Math.abs(
            profit
          )} (${profitPercentage}%) ❌`;
        } else {
          replyMessage += `you will break even. ➖`;
        }
        message.reply(replyMessage);
      })
      .catch((error) => {
        console.error("Error retrieving average price:", error);
        message.reply(
          "Failed to calculate the profit. Please try again later."
        );
      });
  }
});

client.login(process.env.DISCORD_BOT_TOKEN);

async function getAveragePrice(model) {
  const ebayUrl = `https://api.ebay.com/buy/browse/v1/item_summary/search?q=${encodeURIComponent(
    model
  )}`;
  try {
    const response = await axios.get(ebayUrl, {
      headers: {
        Authorization: `Bearer ${process.env.EBAY_API_KEY}`,
      },
    });
    const averagePrice = response.data.itemSummaries[0].price.value;
    return averagePrice;
  } catch (error) {
    throw error;
  }
}

function calculateProfit(buyingPrice, averagePrice) {
  return averagePrice - buyingPrice;
}

function calculateProfitPercentage(buyingPrice, averagePrice) {
  const profit = calculateProfit(buyingPrice, averagePrice);
  return ((profit / buyingPrice) * 100).toFixed(2);
}
