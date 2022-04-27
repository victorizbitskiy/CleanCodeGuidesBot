### Optimize for reading, not for writing

> [Clean ABAP] > [Content] > [Formatting] > [This section]

Developers spend most time _reading_ code.
Actually _writing_ code takes up a way smaller portion of the day.

As a consequence, you should optimize your code formatting for reading and debugging, not for writing.

For example, you should prefer

```ABAP
DATA:
  a TYPE b,
  c TYPE d,
  e TYPE f.
```

to hacks such as

```ABAP
" anti-pattern
DATA:
  a TYPE b
  ,c TYPE d
  ,e TYPE f.
```