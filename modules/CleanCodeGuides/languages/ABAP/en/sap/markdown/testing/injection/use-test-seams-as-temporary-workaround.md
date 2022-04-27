#### Use test seams as temporary workaround

> [Clean ABAP] > [Content] > [Testing] > [Injection] > [This section]

If all other techniques fail, or when in dangerous shallow waters of legacy code,
refrain to [test seams](https://help.sap.com/doc/abapdocu_751_index_htm/7.51/en-US/index.htm?file=abaptest-seam.htm)
to make things testable.

Although they look comfortable at first sight, test seams are invasive and tend to get entangled
in private dependencies, such that they are hard to keep alive and stable in the long run.

We therefore recommend to refrain to test seams only as a temporary workaround
to allow you refactoring the code into a more testable form.
