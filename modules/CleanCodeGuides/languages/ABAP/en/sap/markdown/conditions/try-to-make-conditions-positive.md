### Try to make conditions positive

> [Clean ABAP] > [Content] > [Conditions] > [This section]

```ABAP
IF has_entries = abap_true.
```

For comparison, see how hard to understand the same statement gets by reversing it:

```ABAP
" anti-pattern
IF has_no_entries = abap_false.
```

The "try" in the section title means you shouldn't force this
up to the point where you end up with something like [empty IF branches](#no-empty-if-branches):

```ABAP
" anti-pattern
IF has_entries = abap_true.
ELSE.
  " only do something in the ELSE block, IF remains empty
ENDIF.
```

> Read more in _Chapter 17: Smells and Heuristics: G29: Avoid Negative Conditionals_ of [Robert C. Martin's _Clean Code_].