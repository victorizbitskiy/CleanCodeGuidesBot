### Use descriptive names

> [Clean ABAP] > [Content] > [Names] > [This section]

Use names that convey the content and meaning of things.

```ABAP
CONSTANTS max_wait_time_in_seconds TYPE i ...
DATA customizing_entries TYPE STANDARD TABLE ...
METHODS read_user_preferences ...
CLASS /clean/user_preference_reader ...
```

Do not focus on the data type or technical encoding.
They hardly contribute to understanding the code.

```ABAP
" anti-pattern
CONSTANTS sysubrc_04 TYPE sysubrc ...
DATA iso3166tab TYPE STANDARD TABLE ...
METHODS read_t005 ...
CLASS /dirty/t005_reader ...
```

[Do not attempt to fix bad names by comments.](#comments-are-no-excuse-for-bad-names)

> Read more in _Chapter 2: Meaningful Names: Use Intention-Revealing Names_ of [Robert C. Martin's _Clean Code_].
