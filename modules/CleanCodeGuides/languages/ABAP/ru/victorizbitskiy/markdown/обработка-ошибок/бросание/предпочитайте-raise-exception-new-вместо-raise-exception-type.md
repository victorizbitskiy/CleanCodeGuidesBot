#### Предпочитайте RAISE EXCEPTION NEW вместо RAISE EXCEPTION TYPE

> [Чистый ABAP] > [Содержание] > [Обработка ошибок] > [Бросание] > [Эта секция]

Примечание. Доступно начиная с NW 7.52.

```ABAP
RAISE EXCEPTION NEW cx_generation_error( previous = exception ).
```

в целом короче, чем излишне длиннее

```ABAP
RAISE EXCEPTION TYPE cx_generation_error
  EXPORTING
    previous = exception.
```

Однако, если вы часто используете опцию `MESSAGE`, рекомендуется придерживаться варианта с `TYPE`:

```ABAP
RAISE EXCEPTION TYPE cx_generation_error
  MESSAGE e136(messages)
  EXPORTING
    previous = exception.
```