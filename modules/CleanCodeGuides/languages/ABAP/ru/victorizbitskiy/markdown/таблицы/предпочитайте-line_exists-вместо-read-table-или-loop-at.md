### Предпочитайте LINE_EXISTS вместо READ TABLE или LOOP AT

> [Чистый ABAP] > [Содержание] > [Таблицы] > [Эта секция]

```ABAP
IF line_exists( my_table[ key = 'A' ] ).
```

выражает намерение яснее и короче, чем

```ABAP
" anti-pattern
READ TABLE my_table TRANSPORTING NO FIELDS WITH KEY key = 'A'.
IF sy-subrc = 0.
```

или даже

```ABAP
" anti-pattern
LOOP AT my_table REFERENCE INTO DATA(line) WHERE key = 'A'.
  line_exists = abap_true.
  EXIT.
ENDLOOP.
```
