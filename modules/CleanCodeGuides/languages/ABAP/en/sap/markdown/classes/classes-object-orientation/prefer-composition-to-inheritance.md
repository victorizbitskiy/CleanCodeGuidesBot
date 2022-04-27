#### Prefer composition to inheritance

> [Clean ABAP] > [Content] > [Classes] > [Classes: Object orientation] > [This section]

Avoid building hierarchies of classes with inheritance. Instead, favor composition.

Clean inheritance is hard to design because you need to respect rules
like the [Liskov substitution principle](https://en.wikipedia.org/wiki/Liskov_substitution_principle).
It is also hard to understand because people need to realize and digest the guiding principles behind the hierarchy.
Inheritance reduces reuse because methods tend to be made available only to sub-classes.
It also complicates refactoring because moving or changing members tend to require changes to the whole hierarchy tree.

Composition means that you design small, independent objects, each of which serves one specific purpose.
These objects can be recombined into more complex objects by simple delegation and facade patterns.
Composition may produce more classes, but has otherwise no further disadvantages.

Don't let this rule discourage you from using inheritance in the right places.
There are good applications for inheritance,
for example the [Composite design pattern](https://en.wikipedia.org/wiki/Composite_pattern).
Just ask yourself critically whether inheritance in your case will really provide more benefits than disadvantages.
If in doubt, composition generally is the safer choice.

> [Interfaces vs. abstract classes](sub-sections/InterfacesVsAbstractClasses.md)
compares some details.