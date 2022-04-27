#### Use descriptive names for multiple creation methods

> [Clean ABAP] > [Content] > [Classes] > [Constructors] > [This section]

Good words to start creation methods are `new_`, `create_`, and `construct_`.
People intuitively connect them to the construction of objects.
They also add up nicely to verb phrases like `new_from_template`, `create_as_copy`, or `create_by_name`.

```ABAP
CLASS-METHODS new_describe_by_data IMPORTING p_data TYPE any [...]
CLASS-METHODS new_describe_by_name IMPORTING p_name TYPE any [...]
CLASS-METHODS new_describe_by_object_ref IMPORTING p_object_ref TYPE REF TO object [...]
CLASS-METHODS new_describe_by_data_ref IMPORTING p_data_ref TYPE REF TO data [...]
```

instead of something meaningless like

```ABAP
" anti-pattern
CLASS-METHODS create_1 IMPORTING p_data TYPE any [...]
CLASS-METHODS create_2 IMPORTING p_name TYPE any [...]
CLASS-METHODS create_3 IMPORTING p_object_ref TYPE REF TO object [...]
CLASS-METHODS create_4 IMPORTING p_data_ref TYPE REF TO data [...]
```