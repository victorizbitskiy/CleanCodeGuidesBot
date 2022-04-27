### Prefer enumeration classes to constants interfaces

> [Clean ABAP] > [Content] > [Constants] > [This section]

```ABAP
CLASS /clean/message_severity DEFINITION PUBLIC ABSTRACT FINAL.
  PUBLIC SECTION.
    CONSTANTS:
      warning TYPE symsgty VALUE 'W',
      error   TYPE symsgty VALUE 'E'.
ENDCLASS.
```

or

```ABAP
CLASS /clean/message_severity DEFINITION PUBLIC CREATE PRIVATE FINAL.
  PUBLIC SECTION.
    CLASS-DATA:
      warning TYPE REF TO /clean/message_severity READ-ONLY,
      error   TYPE REF TO /clean/message_severity READ-ONLY.
  " ...
ENDCLASS.
```

instead of mixing unrelated things
or misleading people to the conclusion
that constants collections could be "implemented":

```ABAP
" anti-pattern
INTERFACE /dirty/common_constants.
  CONSTANTS:
    warning      TYPE symsgty VALUE 'W',
    transitional TYPE i       VALUE 1,
    error        TYPE symsgty VALUE 'E',
    persisted    TYPE i       VALUE 2.
ENDINTERFACE.
```

> [Enumerations](sub-sections/Enumerations.md)
> describes common enumeration patterns
> and discusses their advantages and disadvantages.
>
> Read more in _Chapter 17: Smells and Heuristics: J3: Constants versus Enums_ of [Robert C. Martin's _Clean Code_].