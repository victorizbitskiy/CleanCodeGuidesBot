### Don't obsess with separating blank lines

> [Clean ABAP] > [Content] > [Formatting] > [This section]

```ABAP
METHOD do_something.
  do_this( ).
  then_that( ).
ENDMETHOD.
```

No reason for the bad habit to tear your code apart with blank lines

```ABAP
" anti-pattern
METHOD do_something.

  do_this( ).

  then_that( ).

ENDMETHOD.
```

Blank lines actually only make sense if you have statements that span multiple lines

```ABAP
METHOD do_something.

  do_this( ).

  then_that(
    EXPORTING
      variable = 'A'
    IMPORTING
      result   = result ).

ENDMETHOD.
```