### Mind the performance

> [Clean ABAP] > [Content] > [Language] > [This section]

If you code high performance components, take the advice in this guide with care:
Some aspects of Clean Code may make things slower \(more method calls\) or consume more memory \(more objects\).
ABAP has some specialties that may intensify this, for example it compares data types when calling a method,
such that splitting a single large method into many sub-methods may make the code slower.

However, we strongly recommend to not optimize prematurely, based on obscure fears.
The vast majority of rules \(e.g. naming, commenting\) has no negative impact at all.
Try to build things in a clean, object-oriented way.
If something is too slow, make a performance measurement.
Only then should you take a fact-based decision to discard selected rules.

Some further thoughts, taken in part from Chapter 2 of
[Martin Fowler's _Refactoring_](https://martinfowler.com/books/refactoring.html):

In a typical application the majority of the runtime is spent in a very small proportion
of the code. As little as 10% of the code can account for 90% of the runtime, and especially
in ABAP a large proportion of runtime is likely to be database time.

Thus it is not the best use of resources to spend significant effort on trying to make _all_
code super-efficient all the time. We're not suggesting ignoring performance, but rather
focus more on clean and well structured code during initial development, and use the
profiler to identify critical areas to optimize.

In fact, we would argue that such an approach will have a net positive effect on performance
because it is a more targeted optimization effort, and it should be easier
to identify performance bottlenecks and easier to refactor and tune well structured code.