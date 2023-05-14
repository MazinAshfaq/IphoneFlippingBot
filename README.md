# 🤖 My Profitable iPhone Bot

A Discord bot powered by ChatGPT and AI that helps you check the profitability of buying and selling iPhones. By using eBay data, the bot calculates the average selling price of specific iPhone models and allows you to determine if you will make a profit or loss based on your buying price.

## 📝 Description

This Discord bot provides you with real-time information on iPhone prices from eBay. You can use it to find the average selling price of a specific iPhone model or calculate the potential profit or loss you might incur when buying an iPhone to sell later.

The bot is powered by ChatGPT and AI, enabling it to provide accurate and up-to-date information to assist you in making informed decisions about your iPhone transactions.

## ⚙️ Setup

To use the bot on your own Discord server, follow these steps:

1. Clone or download the repository to your local machine.
2. Install the necessary dependencies by running `npm install` in your terminal.
3. Create a new Discord bot on the [Discord Developer Portal](https://discord.com/developers/applications).
4. Copy the bot token and replace the `your_discord_bot_token` value in the `.env` file with your bot token.
5. Obtain an eBay API key by signing up for the [eBay Developers Program](https://developer.ebay.com).
6. Copy the eBay API key and replace the `your_ebay_api_key` value in the `.env` file with your API key.
7. Find the ID of the text channel in your Discord server where you want the bot to listen for commands.
8. Copy the channel ID and replace the `your_channel_id` value in the `.env` file with your channel ID.
9. Save the `.env` file.
10. Invite the bot to your Discord server using the following link: [Invite Bot to Server](https://discordapp.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&scope=bot), replacing `YOUR_CLIENT_ID` with your bot's client ID.
11. Run the bot using `node bot.js` in your terminal.

## 📚 Usage

Once the bot is set up and running on your server, you can use the following commands:

- `!iphone <model>` - Retrieves the average selling price of the specified iPhone model from eBay.
- `!profit <buying_price> <model>` - Calculates the potential profit or loss if you buy the iPhone at the specified price and sell it at the average price from eBay.

Make sure to replace `<model>` with the desired iPhone model (e.g., iPhone 12) and `<buying_price>` with the price you intend to purchase the iPhone for.

## 🤝 Contributing

Contributions, bug reports, and feature requests are welcome! If you encounter any issues or have ideas to improve the bot, please open an issue on the GitHub repository.

## 📃 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

Feel free to deploy this bot to your own Discord server and start exploring the profitability of your iPhone transactions. Enjoy using the bot and make informed decisions for your buying and selling endeavors!

*Powered by ChatGPT and AI*
