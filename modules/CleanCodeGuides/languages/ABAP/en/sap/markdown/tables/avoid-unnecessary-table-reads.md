### Avoid unnecessary table reads

> [Clean ABAP] > [Content] > [Tables] > [This section]

In case you _expect_ a row to be there,
read once and react to the exception,

```ABAP
TRY.
    DATA(row) = my_table[ key = input ].
  CATCH cx_sy_itab_line_not_found.
    RAISE EXCEPTION NEW /clean/my_data_not_found( ).
ENDTRY.
```

instead of littering and slowing down
the main control flow with a double read

```ABAP
" anti-pattern
IF NOT line_exists( my_table[ key = input ] ).
  RAISE EXCEPTION NEW /clean/my_data_not_found( ).
ENDIF.
DATA(row) = my_table[ key = input ].
```

> Besides being a performance improvement,
> this is a special variant of the more general
> [Focus on the happy path or error handling, but not both].