#### Consider using immutable instead of getter

> [Clean ABAP] > [Content] > [Classes] > [Scope] > [This section]

An immutable is an object that never changes after its construction.
For this kind of object consider using public read-only attributes instead of getter methods.

```ABAP
CLASS /clean/some_data_container DEFINITION.
  PUBLIC SECTION.
    METHODS constructor
      IMPORTING
        a TYPE i
        b TYPE c
        c TYPE d.
    DATA a TYPE i READ-ONLY.
    DATA b TYPE c READ-ONLY.
    DATA c TYPE d READ-ONLY.
ENDCLASS.
```

instead of

```ABAP
CLASS /dirty/some_data_container DEFINITION.
  PUBLIC SECTION.
    METHODS get_a ...
    METHODS get_b ...
    METHODS get_c ...
  PRIVATE SECTION.
    DATA a TYPE i.
    DATA b TYPE c.
    DATA c TYPE d.
ENDCLASS.
```

> **Caution**: For objects which **do** have changing values, do not use public read-only attributes.
> Otherwise this attributes always have to be kept up to date,
> regardless if their value is needed by any other code or not.
