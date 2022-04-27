### Предпочитайте LOOP AT WHERE вместо вложенных IF

> [Чистый ABAP] > [Содержание] > [Таблицы] > [Эта секция]

```ABAP
LOOP AT my_table REFERENCE INTO DATA(line) WHERE key = 'A'.
```

выражает намерение яснее и короче, чем

```ABAP
LOOP AT my_table REFERENCE INTO DATA(line).
  IF line->key = 'A'.
    EXIT.
  ENDIF.
ENDLOOP.
```