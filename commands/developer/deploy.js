module.exports = {
    name: "deploy",
    code: `
        ГОТОВО!
    $djsEval[
(async () => {
  const { ApplicationCommandOptionType } = require("discord.js");
  const commands = client.application.commands;

  // 1. leaderboard (обновлённая)
await commands.create({
    name: "leaderboard",
    description: "Таблица лидеров сервера",
    options: [
        {
            type: ApplicationCommandOptionType.String,
            name: "type",
            description: "Выберите тип таблицы",
            required: true,
            choices: [
                { name: "💰 На руках", value: "korm" },
                { name: "🏦 В банке", value: "bank" }
            ]
        }
    ]
});

  // 2. walk
  await commands.create({
    name: "walk",
    description: "Погулять с вашим Бубом"
  });

  // 3. mine
  await commands.create({
    name: "mine",
    description: "Работа в глубокой шахте"
  });

  // 4. builder
  await commands.create({
    name: "builder",
    description: "Работать на стройке"
  });

  // 5. bot
  await commands.create({
    name: "bot",
    description: "Информация о боте"
  });

  // 6. bub
  await commands.create({
    name: "bub",
    description: "Ваш профиль",
    options: [
      {
        type: ApplicationCommandOptionType.User,
        name: "member",
        description: "профиль другого пользователя",
        required: false
      }
    ]
  });

  // 7. skins
  await commands.create({
    name: "skins",
    description: "Магазин скинов"
  });

  // 8. name
  await commands.create({
    name: "name",
    description: "Изменить ваше имя",
    options: [
      {
        type: ApplicationCommandOptionType.String,
        name: "nickname",
        description: "ваше новое имя",
        required: true
      }
    ]
  });

  // 9. wardrobe
  await commands.create({
    name: "wardrobe",
    description: "Ваш шкаф скинов"
  });

  // 10. bonus
  await commands.create({
    name: "bonus",
    description: "Ваша 12-часовая награда"
  });

  // 11. add_role
  await commands.create({
    name: "add_role",
    description: "Добавить роль в магазин",
    options: [
      {
        type: ApplicationCommandOptionType.Number,
        name: "number",
        description: "номер роли в магазине",
        required: true
      },
      {
        type: ApplicationCommandOptionType.Role,
        name: "role",
        description: "Роль которую вы хотите добавить в магазин",
        required: true
      },
      {
        type: ApplicationCommandOptionType.Number,
        name: "price",
        description: "цена роли",
        required: true
      }
    ]
  });

  // 12. store
  await commands.create({
    name: "store",
    description: "Магазин ролей"
  });

  // 13. buy_role
  await commands.create({
    name: "buy_role",
    description: "Купить роль из магазина ролей",
    options: [
      {
        type: ApplicationCommandOptionType.Number,
        name: "number",
        description: "номер роли в магазине",
        required: true
      }
    ]
  });

  // 14. delete_role
  await commands.create({
    name: "delete_role",
    description: "Удаление роли из магазина ролей",
    options: [
      {
        type: ApplicationCommandOptionType.Number,
        name: "number",
        description: "номер слота роли",
        required: true
      }
    ]
  });

  // 15. casino
  await commands.create({
    name: "casino",
    description: "Сыграть на деньги",
    options: [
      {
        type: ApplicationCommandOptionType.String,
        name: "amount",
        description: "ставка",
        required: true
      }
    ]
  });

  // 16. rob
  await commands.create({
    name: "rob",
    description: "Ограбить пользователя",
    options: [
      {
        type: ApplicationCommandOptionType.User,
        name: "member",
        description: "кого вы хотите ограбить",
        required: true
      }
    ]
  });

  // 17. chest
  await commands.create({
    name: "chest",
    description: "Меню управления сундуками",
    options: [
      {
        type: ApplicationCommandOptionType.Subcommand,
        name: "buy",
        description: "купить сундук",
        options: [
          {
            type: ApplicationCommandOptionType.String,
            name: "type",
            description: "тип сундука",
            required: true,
            choices: [
              { name: "Обычный", value: "1" },
              { name: "Редкий", value: "2" },
              { name: "Эпический", value: "3" }
            ]
          },
          {
            type: ApplicationCommandOptionType.String,
            name: "amount",
            description: "количество сундуков которые вы хотите купить",
            required: true,
            choices: [
              { name: "1", value: "1" },
              { name: "2", value: "2" },
              { name: "3", value: "3" },
              { name: "5", value: "5" },
              { name: "10", value: "10" }
            ]
          }
        ]
      },
      {
        type: ApplicationCommandOptionType.Subcommand,
        name: "open",
        description: "открыть сундук",
        options: [
          {
            type: ApplicationCommandOptionType.String,
            name: "type",
            description: "тип кейса",
            required: true,
            choices: [
              { name: "Обычный", value: "1" },
              { name: "Редкий", value: "2" },
              { name: "Эпический", value: "3" }
            ]
          }
        ]
      },
      {
        type: ApplicationCommandOptionType.Subcommand,
        name: "transfer",
        description: "передать сундук другому участнику",
        options: [
          {
            type: ApplicationCommandOptionType.User,
            name: "member",
            description: "участник которому вы хотите передать сундук",
            required: true
          },
          {
            type: ApplicationCommandOptionType.String,
            name: "type",
            description: "тип кейса",
            required: true,
            choices: [
              { name: "Обычный", value: "1" },
              { name: "Редкий", value: "2" },
              { name: "Эпический", value: "3" }
            ]
          }
        ]
      }
    ]
  });

  // 18. bank
  await commands.create({
    name: "bank",
    description: "Управление банковским счётом",
    options: [
      {
        type: ApplicationCommandOptionType.Subcommand,
        name: "put",
        description: "положить деньги на банковский счёт",
        options: [
          {
            type: ApplicationCommandOptionType.String,
            name: "amount",
            description: "количество денег которые надо положить на банковский счёт",
            required: true
          }
        ]
      },
      {
        type: ApplicationCommandOptionType.Subcommand,
        name: "take",
        description: "снять деньги с банковского счёта",
        options: [
          {
            type: ApplicationCommandOptionType.String,
            name: "amount",
            description: "количество денег которые надо снять с банковского счёта",
            required: true
          }
        ]
      }
    ]
  });

  // 19. pay
  await commands.create({
    name: "pay",
    description: "Передать деньги другому участнику",
    options: [
      {
        type: ApplicationCommandOptionType.User,
        name: "member",
        description: "пользователь которому вы хотите передать деньги",
        required: true
      },
      {
        type: ApplicationCommandOptionType.String,
        name: "amount",
        description: "количество денег которые вы хотите передать",
        required: true
      }
    ]
  });

  // 20. upcoin
  await commands.create({
    name: "upcoin",
    description: "Выдать пользователю деньги",
    options: [
      {
        type: ApplicationCommandOptionType.User,
        name: "member",
        description: "пользователь которому вы хотите пополнить баланс",
        required: true
      },
      {
        type: ApplicationCommandOptionType.String,
        name: "amount",
        description: "сколько монет вы хотите выдать",
        required: true
      }
    ]
  });

  // 21. uncoin
  await commands.create({
    name: "uncoin",
    description: "Забрать у пользователя деньги",
    options: [
      {
        type: ApplicationCommandOptionType.User,
        name: "member",
        description: "пользователь у которого нужно забрать деньги",
        required: true
      },
      {
        type: ApplicationCommandOptionType.String,
        name: "amount",
        description: "сколько монет забрать",
        required: true
      }
    ]
  });

  // 22. help
  await commands.create({
    name: "help",
    description: "Список команд бота"
  });

  // 23. rank (как bub, но с карточкой)
await commands.create({
    name: "rank",
    description: "Посмотреть карточку пользователя",
    options: [
        {
            type: ApplicationCommandOptionType.User,
            name: "member",
            description: "пользователь, карточку которого вы хотите посмотреть",
            required: false
        }
    ]
});

// 24. science (как mine)
await commands.create({
    name: "science",
    description: "Работа учёным"
});

  return "✅ Все 24 глобальные команды успешно созданы!";
})()
]
$onlyif[$authorID==920735973694902312;У вас нет прав]    
`
}
