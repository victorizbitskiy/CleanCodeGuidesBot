#### Assert quality, not content

> [Clean ABAP] > [Content] > [Testing] > [Assertions] > [This section]

If you are interested in a meta quality of the result,
but not in the actual content itself, express that with a suitable assert:

```ABAP
assert_all_lines_shorter_than( actual_lines        = table
                               expected_max_length = 80 ).
```

Asserting the precise content obscures what you actually want to test.
It is also fragile because refactoring may produce a different
but perfectly acceptable result although it breaks all your too-precise unit tests.

```ABAP
" anti-pattern
assert_equals( act = table
               exp = VALUE string_table( ( `ABC` ) ( `DEF` ) ( `GHI` ) ) ).
```