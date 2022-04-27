#### Make messages easy to find

> [Clean ABAP] > [Content] > [Error Handling] > [Messages] > [This section]

To make messages easy to find through a where-used search from transaction SE91, use the following pattern:

```ABAP
MESSAGE e001(ad) INTO DATA(message).
```

In case variable `message` is not needed, add the pragma `##NEEDED`:

```ABAP
MESSAGE e001(ad) INTO DATA(message) ##NEEDED.
```

Avoid the following:

```ABAP
" anti-pattern
IF 1 = 2. MESSAGE e001(ad). ENDIF.
```

This is an anti-pattern since:
- It contains unreachable code.
- It tests a condition which can never be true for equality.
