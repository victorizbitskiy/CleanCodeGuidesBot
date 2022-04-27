#### Split methods instead of adding OPTIONAL parameters

> [Clean ABAP] > [Content] > [Methods] > [Parameter Number] > [This section]

```ABAP
METHODS do_one_thing IMPORTING what_i_need TYPE string.
METHODS do_another_thing IMPORTING something_else TYPE i.
```

to achieve the desired semantic as ABAP does not support [overloading](https://en.wikipedia.org/wiki/Function_overloading).

```ABAP
" anti-pattern
METHODS do_one_or_the_other
  IMPORTING
    what_i_need    TYPE string OPTIONAL
    something_else TYPE i OPTIONAL.
```

Optional parameters confuse callers:

- Which ones are really required?
- Which combinations are valid?
- Which ones exclude each other?

Multiple methods with specific parameters for the use case avoid this confusion by giving clear guidance which parameter combinations are valid and expected.
