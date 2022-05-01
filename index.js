const TelegramBot = require("node-telegram-bot-api");

const TOKEN = process.env.BOT_TOKEN;

const bot = new TelegramBot(TOKEN);

(async function () {
  await bot.startPolling();
  console.log("Bot started!");
})();

bot.on("message", async (msg) => {
  const { chat, message_id: messageId, text } = msg;
  const { id: chatId } = chat;

  await bot.sendMessage(chatId, text.toUpperCase());
});
