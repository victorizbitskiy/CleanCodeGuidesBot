#### Exceptions are for errors, not for regular cases

> [Clean ABAP] > [Content] > [Error Handling] > [Exceptions] > [This section]

```ABAP
" anti-pattern
METHODS entry_exists_in_db
  IMPORTING
    key TYPE char10
  RAISING
    cx_not_found_exception.
```

If something is a regular, valid case, it should be handled with regular result parameters.

```ABAP
METHODS entry_exists_in_db
  IMPORTING
    key           TYPE char10
  RETURNING
    VALUE(result) TYPE abap_bool.
```

Exceptions should be reserved for cases that you don't expect and that reflect error situations.

```ABAP
METHODS assert_user_input_is_valid
  IMPORTING
    user_input TYPE string
  RAISING
    cx_bad_user_input.
```

Misusing exceptions misguides the reader into thinking something went wrong, when really everything is just fine.
Exceptions are also much slower than regular code because they need to be constructed
and often gather lots of context information.