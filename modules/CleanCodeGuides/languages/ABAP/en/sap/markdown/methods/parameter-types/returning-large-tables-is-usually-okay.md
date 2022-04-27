#### RETURNING large tables is usually okay

> [Clean ABAP] > [Content] > [Methods] > [Parameter Types] > [This section]

Although the ABAP language documentation and performance guides say otherwise,
we rarely encounter cases where handing over a large or deeply-nested table in a VALUE parameter
_really_ causes performance problems.
We therefore recommend to generally use

```ABAP
METHODS get_large_table
  RETURNING
    VALUE(result) TYPE /clean/some_table_type.

METHOD get_large_table.
  result = me->large_table.
ENDMETHOD.

DATA(my_table) = get_large_table( ).
```

Only if there is actual proof \(= a bad performance measurement\) for your individual case
should you resort to the more cumbersome procedural style

```ABAP
" anti-pattern
METHODS get_large_table
  EXPORTING
    result TYPE /dirty/some_table_type.

METHOD get_large_table.
  result = me->large_table.
ENDMETHOD.

get_large_table( IMPORTING result = DATA(my_table) ).
```

> This section contradicts the ABAP Programming Guidelines and Code Inspector checks,
> both of whom suggest that large tables should be EXPORTED by reference to avoid performance deficits.
> We consistently failed to reproduce any performance and memory deficits
> and received notice about kernel optimization that generally improves RETURNING performance.