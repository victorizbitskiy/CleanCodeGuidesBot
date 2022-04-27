### Prefer READ TABLE to LOOP AT

> [Clean ABAP] > [Content] > [Tables] > [This section]

```ABAP
READ TABLE my_table REFERENCE INTO DATA(line) WITH KEY key = 'A'.
```

expresses the intent clearer and shorter than

```ABAP
" anti-pattern
LOOP AT my_table REFERENCE INTO DATA(line) WHERE key = 'A'.
  EXIT.
ENDLOOP.
```

or even

```ABAP
" anti-pattern
LOOP AT my_table REFERENCE INTO DATA(line).
  IF line->key = 'A'.
    EXIT.
  ENDIF.
ENDLOOP.
```