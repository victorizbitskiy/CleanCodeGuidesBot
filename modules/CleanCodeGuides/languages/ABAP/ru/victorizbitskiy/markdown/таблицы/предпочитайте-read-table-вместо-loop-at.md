### Предпочитайте READ TABLE вместо LOOP AT

> [Чистый ABAP] > [Содержание] > [Таблицы] > [Эта секция]

```ABAP
READ TABLE my_table REFERENCE INTO DATA(line) WITH KEY key = 'A'.
```

выражает намерение яснее и короче, чем

```ABAP
" anti-pattern
LOOP AT my_table REFERENCE INTO DATA(line) WHERE key = 'A'.
  EXIT.
ENDLOOP.
```

или даже

```ABAP
" anti-pattern
LOOP AT my_table REFERENCE INTO DATA(line).
  IF line->key = 'A'.
    EXIT.
  ENDIF.
ENDLOOP.
```