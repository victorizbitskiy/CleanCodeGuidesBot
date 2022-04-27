### Indent in-line declarations like method calls

> [Clean ABAP] > [Content] > [Formatting] > [This section]

Indent in-line declarations with VALUE or NEW as if they were method calls:

```ABAP
DATA(result) = merge_structures( a = VALUE #( field_1 = 'X'
                                              field_2 = 'A' )
                                 b = NEW /clean/structure_type( field_3 = 'C'
                                                                field_4 = 'D' ) ).
```