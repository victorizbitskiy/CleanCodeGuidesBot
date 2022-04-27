#### "When" is exactly one call

> [Clean ABAP] > [Content] > [Testing] > [Test Methods] > [This section]

Make sure that the "when" section of your test method contains exactly one call to the class under test:

```ABAP
METHOD rejects_invalid_input.
  " when
  DATA(is_valid) = cut->is_valid_input( 'SOME_RANDOM_ENTRY' ).
  " then
  cl_abap_unit_assert=>assert_false( is_valid ).
ENDMETHOD.
```

Calling multiple things indicates that the method has no clear focus and tests too much.
This makes it harder to find the cause when the test fails:
was it the first, second, or third call that caused the failure?
It also confuses the reader because he is not sure what the exact feature under test is.