#### Global by default, local only where appropriate

> [Clean ABAP] > [Content] > [Classes] > [Scope] > [This section]

Work with global classes as default.
Use local classes only where appropriate.

> Global classes are the ones that are visible in the data dictionary.
> Local classes live within an include of another development object
> and are only visible to this other object.

Local classes are suited

- for very specific private data structures,
for example an iterator for the global class's data,
which will only ever be needed here,

- to extract a complex private piece algorithm,
for example to disentangle that special purpose multi-method
sort-aggregate algorithm from the rest of your class's code,

- to enable mocking certain aspects of the global class,
for example by extracing all database access to a separate local class
that can the be replaced with a test double in the unit tests.

Local classes hinder reuse because they cannot be used elsewhere.
Although they are easy to extract, people will usually fail to even find them,
leading to undesired code duplication.
Orientation, navigation, and debugging in very long local class includes
is tedious and annoying. 
As ABAP locks on include level, people will not be able to work on
different parts of the local include simultaneously
\(which would be possible if they were separate global classes\).

Reconsider your use of local classes if

- your local include spans dozens of classes and thousands of lines of code,
- you think about global classes as "packages" that hold other classes,
- your global classes degenerate into empty hulls,
- you find duplicate code repeated throughout separate local includes,
- your developers start locking each other out and become unable to work in parallel,
- your backlog estimates go sky-high because your teams fail to understand each other's local sub-trees.