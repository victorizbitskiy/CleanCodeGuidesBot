### Prefer object orientation to procedural programming

> [Clean ABAP] > [Content] > [Language] > [This section]

Object-oriented programs \(classes, interfaces\) are segmented better
and can be refactored and tested more easily than procedural code \(functions, programs\).
Although there are situations where you must provide procedural objects
\(a function for an RFC, a program for a transaction\),
these objects should do little more than call a corresponding class that provides the actual feature:

```ABAP
FUNCTION check_business_partner [...].
  DATA(validator) = NEW /clean/biz_partner_validator( ).
  result = validator->validate( business_partners ).
ENDFUNCTION.
```

> [Function Groups vs. Classes](sub-sections/FunctionGroupsVsClasses.md)
> describes the differences in detail.