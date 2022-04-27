### Избегайте неинформативных слов, таких как "data", "info", "object"

> [Чистый ABAP] > [Содержание] > [Имена] > [Эта секция]

Опустите неинформативные слова

```ABAP
account  " instead of account_data
alert    " instead of alert_object
```

или замените их чем-то конкретным, что добавит смысла

```ABAP
user_preferences          " instead of user_info
response_time_in_seconds  " instead of response_time_variable
```

> Подробнее в _Chapter 2: Meaningful Names: Make Meaningful Distinctions_ [Robert C. Martin's _Clean Code_]