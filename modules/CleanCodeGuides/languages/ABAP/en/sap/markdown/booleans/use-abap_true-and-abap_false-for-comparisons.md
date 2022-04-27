### Use ABAP_TRUE and ABAP_FALSE for comparisons

> [Clean ABAP] > [Content] > [Booleans] > [This section]

```ABAP
has_entries = abap_true.
IF has_entries = abap_false.
```

Don't use the character equivalents `'X'` and `' '` or `space`;
they make it hard to see that this is a Boolean expression:

```ABAP
" anti-pattern
has_entries = 'X'.
IF has_entries = space.
```

Avoid comparisons with `INITIAL` - it forces readers to recollect that `abap_bool`'s default is `abap_false`:

```ABAP
" anti-pattern
IF has_entries IS NOT INITIAL.
```

> ABAP may be the one single programming language that does not come with built-in "constants" for true and false.
> However, having them is imperative.
> This recommendation is based on the ABAP Programming Guidelines.