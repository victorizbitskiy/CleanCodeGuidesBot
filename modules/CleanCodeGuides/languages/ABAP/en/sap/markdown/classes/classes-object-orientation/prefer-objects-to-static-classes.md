#### Prefer objects to static classes

> [Clean ABAP] > [Content] > [Classes] > [Classes: Object orientation] > [This section]

Static classes give up all advantages gained by object orientation in the first place.
They especially make it nearly impossible to replace productive dependencies with test doubles in unit tests.

If you think about whether to make a class or method static, the answer will nearly always be: no.

One accepted exception to this rule are plain type utils classes.
Their methods make it easier to interact with certain ABAP types.
They are not only completely stateless, but so basic that they look like ABAP statements or built-in functions.
The discriminating factor is that their consumers tie them into their code so tightly
that they actually don't want to mock them in unit tests.

```ABAP
CLASS /clean/string_utils DEFINITION [...].
  CLASS-METHODS trim
   IMPORTING
     string        TYPE string
   RETURNING
     VALUE(result) TYPE string.
ENDCLASS.

METHOD retrieve.
  DATA(trimmed_name) = /clean/string_utils=>trim( name ).
  result = read( trimmed_name ).
ENDMETHOD.
```