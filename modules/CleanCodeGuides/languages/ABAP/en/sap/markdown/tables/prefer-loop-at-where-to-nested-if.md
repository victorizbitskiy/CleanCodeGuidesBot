### Prefer LOOP AT WHERE to nested IF

> [Clean ABAP] > [Content] > [Tables] > [This section]

```ABAP
LOOP AT my_table REFERENCE INTO DATA(line) WHERE key = 'A'.
```

expresses the intent clearer and shorter than

```ABAP
LOOP AT my_table REFERENCE INTO DATA(line).
  IF line->key = 'A'.
    EXIT.
  ENDIF.
ENDLOOP.
```