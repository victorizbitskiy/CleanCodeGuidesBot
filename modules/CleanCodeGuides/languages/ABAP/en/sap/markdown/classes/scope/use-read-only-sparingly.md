#### Use READ-ONLY sparingly

> [Clean ABAP] > [Content] > [Classes] > [Scope] > [This section]

Many modern programming languages, especially Java, recommend making class members read-only
wherever appropriate to prevent accidental side effects.

While ABAP _does_ offer the `READ-ONLY` addition for data declarations, we recommend to use it sparingly.

First, the addition is only available in the `PUBLIC SECTION`, reducing its applicability drastically.
You can neither add it to protected or private members nor to local variables in a method.

Second, the addition works subtly different from what people might expect from other programming languages:
READ-ONLY data can still be modified freely from any method within the class itself, its friends, and its sub-classes.
This contradicts the more widespread write-once-modify-never behavior found in other languages.
The difference may lead to bad surprises.

> To avoid misunderstandings: Protecting variables against accidental modification is a good practice.
> We would recommend applying it to ABAP as well if there was an appropriate statement.