#### Fail fast

> [Clean ABAP] > [Content] > [Methods] > [Control flow] > [This section]

Validate and fail as early as possible:

```ABAP
METHOD do_something.
  IF input IS INITIAL.
    RAISE EXCEPTION cx_sy_illegal_argument( ).
  ENDIF.
  DATA(massive_object) = build_expensive_object_from( input ).
  result = massive_object->do_some_fancy_calculation( ).
ENDMETHOD.
```

Later validations are harder to spot and understand and may have already wasted resources to get there.

```ABAP
" anti-pattern
METHOD do_something.
  DATA(massive_object) = build_expensive_object_from( input ).
  IF massive_object IS NOT BOUND. " happens if input is initial
    RAISE EXCEPTION cx_sy_illegal_argument( ).
  ENDIF.
  result = massive_object->do_some_fancy_calculation( ).
ENDMETHOD.
```