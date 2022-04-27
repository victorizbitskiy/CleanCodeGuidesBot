### Design goes into the design documents, not the code

> [Clean ABAP] > [Content] > [Comments] > [This section]

```ABAP
" anti-pattern
" This class serves a double purpose. First, it does one thing. Then, it does another thing.
" It does so by executing a lot of code that is distributed over the local helper classes.
" To understand what's going on, let us at first ponder the nature of the universe as such.
" Have a look at this and that to get the details.
```

Nobody reads that - seriously.
If people need to read a textbook to be able to use your code,
this may be an indicator that your code has severe design issues that you should solve otherwise.
Some code _does_ need some explanation beyond a single line of comment;
consider linking the design document in these cases.
