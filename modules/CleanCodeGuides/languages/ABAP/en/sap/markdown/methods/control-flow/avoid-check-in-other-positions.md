#### Avoid CHECK in other positions

> [Clean ABAP] > [Content] > [Methods] > [Control flow] > [This section]

Do not use `CHECK` outside of the initialization section of a method.
The statement behaves differently in different positions and may lead to unclear, unexpected effects.

For example,
[`CHECK` in a `LOOP` ends the current iteration and proceeds with the next one](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcheck_loop.htm);
people might accidentally expect it to end the method or exit the loop.
Prefer using an `IF` statement in combination with `CONTINUE` instead, since `CONTINUE` only can be used in loops.

> Based on the [section _Exiting Procedures_ in the ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_751_index_htm/7.51/en-US/index.htm?file=abenexit_procedure_guidl.htm).
> Note that this contradicts the [keyword reference for `CHECK` in loops](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcheck_loop.htm).
