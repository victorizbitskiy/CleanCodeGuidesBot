##### Take care if input and output could be the same

> [Clean ABAP] > [Content] > [Methods] > [Parameter Initialization] > [This section]

Generally, it is a good idea to clear the parameter as a first thing in the method after type and data declarations.
This makes the statement easy to spot and avoids that the still-contained value is accidentally used by later statements.

However, some parameter configurations could use the same variable as input and output.
In this case, an early `CLEAR` would delete the input value before it can be used, producing wrong results.

```ABAP
" anti-pattern
DATA value TYPE i.

square_dirty(
  EXPORTING
    number = value
  IMPORTING
    result = value ).

METHOD square_dirty.
  CLEAR result.
  result = number * number.
ENDMETHOD.
```

Consider redesigning such methods by replacing `EXPORTING` with `RETURNING`.
Also consider overwriting the `EXPORTING` parameter in a single result calculation statement.
If neither fits, resort to a late `CLEAR`.
