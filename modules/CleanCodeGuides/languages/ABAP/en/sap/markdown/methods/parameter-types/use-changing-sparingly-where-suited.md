#### Use CHANGING sparingly, where suited

> [Clean ABAP] > [Content] > [Methods] > [Parameter Types] > [This section]

`CHANGING` should be reserved for cases where an existing local variable
that is already filled is updated in only some places:

```ABAP
METHODS update_references
  IMPORTING
    new_reference TYPE /bobf/conf_key
  CHANGING
    bo_nodes      TYPE root_nodes.

METHOD update_references.
  LOOP AT bo_nodes REFERENCE INTO DATA(bo_node).
    bo_node->reference = new_reference.
  ENDLOOP.
ENDMETHOD.
```

Do not force your callers to introduce unnecessary local variables only to supply your `CHANGING` parameter.
Do not use `CHANGING` parameters to initially fill a previously empty variable.