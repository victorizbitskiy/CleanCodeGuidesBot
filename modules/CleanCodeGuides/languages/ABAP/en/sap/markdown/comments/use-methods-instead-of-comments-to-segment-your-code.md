### Use methods instead of comments to segment your code

> [Clean ABAP] > [Content] > [Comments] > [This section]

```ABAP
DATA(statement) = build_statement( ).
DATA(data) = execute_statement( statement ).
```

This not only makes the intent, structure, and dependencies of the code much clearer,
it also avoids carry-over errors when temporary variables aren't properly cleared between the sections.

```ABAP
" anti-pattern
" -----------------
" Build statement
" -----------------
DATA statement TYPE string.
statement = |SELECT * FROM d_document_roots|.

" -----------------
" Execute statement
" -----------------
DATA(result_set) = adbc->execute_sql_query( statement ).
result_set->next_package( IMPORTING data = data ).
```