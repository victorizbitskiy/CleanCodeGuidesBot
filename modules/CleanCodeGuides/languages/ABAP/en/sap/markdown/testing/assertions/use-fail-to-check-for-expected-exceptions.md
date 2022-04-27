#### Use FAIL to check for expected exceptions

> [Clean ABAP] > [Content] > [Testing] > [Assertions] > [This section]

```ABAP
METHOD throws_on_empty_input.
  TRY.
      " when
      cut->do_something( '' ).
      cl_abap_unit_assert=>fail( ).
    CATCH /clean/some_exception.
      " then
  ENDTRY.
ENDMETHOD.
```