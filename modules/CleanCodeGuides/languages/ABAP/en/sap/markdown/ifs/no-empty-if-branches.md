### No empty IF branches

> [Clean ABAP] > [Content] > [Ifs] > [This section]

```ABAP
IF has_entries = abap_false.
  " do some magic
ENDIF.
```

is shorter and clearer than

```ABAP
" anti-pattern
IF has_entries = abap_true.
ELSE.
  " do some magic
ENDIF.
```