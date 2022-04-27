#### Prefer RETURNING to EXPORTING

> [Clean ABAP] > [Content] > [Methods] > [Parameter Types] > [This section]

```ABAP
METHODS square
  IMPORTING
    number        TYPE i
  RETURNING
    VALUE(result) TYPE i.

DATA(result) = square( 42 ).
```

Instead of the needlessly longer

```ABAP
" anti-pattern
METHODS square
  IMPORTING
    number TYPE i
  EXPORTING
    result TYPE i.

square(
  EXPORTING
    number = 42
  IMPORTING
    result = DATA(result) ).
```

`RETURNING` not only makes the call shorter,
it also allows method chaining and prevents [same-input-and-output errors](#take-care-if-input-and-output-could-be-the-same).
