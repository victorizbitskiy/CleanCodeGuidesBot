#### CHECK vs. RETURN

> [Clean ABAP] > [Content] > [Methods] > [Control flow] > [This section]

There is no consensus on whether you should use `CHECK` or `RETURN` to exit a method
if the input doesn't meet expectations.

While `CHECK` definitely provides the shorter syntax

```ABAP
METHOD read_customizing.
  CHECK keys IS NOT INITIAL.
  " do whatever needs doing
ENDMETHOD.
```

the statement's name doesn't reveal what happens if the condition fails,
such that people will probably understand the long form better:

```ABAP
METHOD read_customizing.
  IF keys IS INITIAL.
    RETURN.
  ENDIF.
  " do whatever needs doing
ENDMETHOD.
```

You can avoid the question completely by reversing the validation
and adopting a single-return control flow

```ABAP
METHOD read_customizing.
  IF keys IS NOT INITIAL.
    " do whatever needs doing
  ENDIF.
ENDMETHOD.
```

In any case, consider whether returning nothing is really the appropriate behavior.
Methods should provide a meaningful result, meaning either a filled return parameter, or an exception.
Returning nothing is in many cases similar to returning `null`, which should be avoided.

> The [section _Exiting Procedures_ in the ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_751_index_htm/7.51/en-US/index.htm?file=abenexit_procedure_guidl.htm)
> recommends using `CHECK` in this instance.
> Community discussion suggests that the statement is so unclear
> that many people will not understand the program's behavior.
