### Prefer LINE_EXISTS to READ TABLE or LOOP AT

> [Clean ABAP] > [Content] > [Tables] > [This section]

```ABAP
IF line_exists( my_table[ key = 'A' ] ).
```

expresses the intent clearer and shorter than

```ABAP
" anti-pattern
READ TABLE my_table TRANSPORTING NO FIELDS WITH KEY key = 'A'.
IF sy-subrc = 0.
```

or even

```ABAP
" anti-pattern
LOOP AT my_table REFERENCE INTO DATA(line) WHERE key = 'A'.
  line_exists = abap_true.
  EXIT.
ENDLOOP.
```
