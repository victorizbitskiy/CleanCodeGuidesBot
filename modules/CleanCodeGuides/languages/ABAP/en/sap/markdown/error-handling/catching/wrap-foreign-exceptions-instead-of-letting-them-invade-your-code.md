#### Wrap foreign exceptions instead of letting them invade your code

> [Clean ABAP] > [Content] > [Error Handling] > [Catching] > [This section]

```ABAP
METHODS generate RAISING cx_generation_failure.

METHOD generate.
  TRY.
      generator->generate( ).
    CATCH cx_amdp_generation_failure INTO DATA(exception).
      RAISE EXCEPTION NEW cx_generation_failure( previous = exception ).
  ENDTRY.
ENDMETHOD.
```

The [Law of Demeter](https://en.wikipedia.org/wiki/Law_of_Demeter) recommends de-coupling things.
Forwarding exceptions from other components violates this principle.
Make yourself independent from the foreign code by catching those exceptions
and wrapping them in an exception type of your own.

```ABAP
" anti-pattern
METHODS generate RAISING cx_sy_gateway_failure.

METHOD generate.
  generator->generate( ).
ENDMETHOD.
```