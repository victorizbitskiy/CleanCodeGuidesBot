#### Use either RETURNING or EXPORTING or CHANGING, but not a combination

> [Clean ABAP] > [Content] > [Methods] > [Parameter Types] > [This section]

```ABAP
METHODS copy_class
  IMPORTING
    old_name      TYPE seoclsname
    new name      TYPE secolsname
  RETURNING
    VALUE(result) TYPE copy_result
  RAISING
    /clean/class_copy_failure.
```

instead of confusing mixtures like

```ABAP
" anti-pattern
METHODS copy_class
  ...
  RETURNING
    VALUE(result)      TYPE vseoclass
  EXPORTING
    error_occurred     TYPE abap_bool
  CHANGING
    correction_request TYPE trkorr
    package            TYPE devclass.
```

Different sorts of output parameters is an indicator that the method does more than one thing.
It confuses the reader and makes calling the method needlessly complicated.

An acceptable exception to this rule may be builders that consume their input while building their output:

```ABAP
METHODS build_tree
  CHANGING
    tokens        TYPE tokens
  RETURNING
    VALUE(result) TYPE REF TO tree.
```

However, even those can be made clearer by objectifying the input:

```ABAP
METHODS build_tree
  IMPORTING
    tokens        TYPE REF TO token_stack
  RETURNING
    VALUE(result) TYPE REF TO tree.
```
