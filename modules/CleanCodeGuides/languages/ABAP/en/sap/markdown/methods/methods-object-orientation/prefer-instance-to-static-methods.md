#### Prefer instance to static methods

> [Clean ABAP] > [Content] > [Methods] > [Methods: Object orientation] > [This section]

Methods should be instance members by default.
Instance methods better reflect the "object-hood" of the class.
They can be mocked easier in unit tests.

```ABAP
METHODS publish.
```

Methods should be static only in exceptional cases, such as static creation methods.

```ABAP
CLASS-METHODS create_instance
  RETURNING
    VALUE(result) TYPE REF TO /clean/blog_post.
```