### Use constants instead of magic numbers

> [Clean ABAP] > [Content] > [Constants] > [This section]

```ABAP
IF abap_type = cl_abap_typedescr=>typekind_date.
```

is clearer than

```ABAP
" anti-pattern
IF abap_type = 'D'.
```

> Read more in _Chapter 17: Smells and Heuristics: G25:
> Replace Magic Numbers with Named Constants_ of [Robert C. Martin's _Clean Code_].