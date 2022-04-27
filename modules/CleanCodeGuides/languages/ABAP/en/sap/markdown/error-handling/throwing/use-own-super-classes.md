#### Use own super classes

> [Clean ABAP] > [Content] > [Error Handling] > [Throwing] > [This section]

```ABAP
CLASS cx_fra_static_check DEFINITION ABSTRACT INHERITING FROM cx_static_check.
CLASS cx_fra_no_check DEFINITION ABSTRACT INHERITING FROM cx_no_check.
```

Consider creating abstract super classes for each exception type for your application,
instead of sub-classing the foundation classes directly.
Allows you to `CATCH` all _your_ exceptions.
Enables you to add common functionality to all exceptions, such as special text handling.
`ABSTRACT` prevents people from accidentally using these non-descriptive errors directly.