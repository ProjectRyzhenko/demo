const { Telegraf } = require("telegraf");
const TOKEN = "5732265646:AAE5aqq3BCa4CNLjS2soFLjQ2s0h2nZms-w";
const bot = new Telegraf(TOKEN);

const web_link = "";

bot.start((ctx) =>
  ctx.reply("Welcome  Добро пожаловать:))", {
    reply_markup: {
      keyboard: [[{ text :'click' , web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
