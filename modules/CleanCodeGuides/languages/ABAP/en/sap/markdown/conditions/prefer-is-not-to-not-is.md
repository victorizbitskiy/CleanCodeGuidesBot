### Prefer IS NOT to NOT IS

> [Clean ABAP] > [Content] > [Conditions] > [This section]

```ABAP
IF variable IS NOT INITIAL.
IF variable NP 'TODO*'.
IF variable <> 42.
```

Negation is logically equivalent
but requires a "mental turnaround"
that makes it harder to understand.

```ABAP
" anti-pattern
IF NOT variable IS INITIAL.
IF NOT variable CP 'TODO*'.
IF NOT variable = 42.
```

> A more specific variant of
[Try to make conditions positive](#try-to-make-conditions-positive).
Also as described in the section
[Alternative Language Constructs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/index.htm?file=abenalternative_langu_guidl.htm)
in the ABAP programming guidelines.