### Comment with ", not with *

> [Clean ABAP] > [Content] > [Comments] > [This section]

Quote comments indent along with the statements they comment

```ABAP
METHOD do_it.
  IF input IS NOT INITIAL.
    " delegate pattern
    output = calculate_result( input ).
  ENDIF.
ENDMETHOD.
```

Asterisked comments tend to indent to weird places

```ABAP
" anti-pattern
METHOD do_it.
  IF input IS NOT INITIAL.
* delegate pattern
    output = calculate_result( input ).
  ENDIF.
ENDMETHOD.
```