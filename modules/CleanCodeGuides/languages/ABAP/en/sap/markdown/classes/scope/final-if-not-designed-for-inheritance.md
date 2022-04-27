#### FINAL if not designed for inheritance

> [Clean ABAP] > [Content] > [Classes] > [Scope] > [This section]

Make classes that are not explicitly designed for inheritance `FINAL`.

When designing class cooperation,
your first choice should be [composition, not inheritance](#prefer-composition-to-inheritance).
Enabling inheritance is not something that should be done lightly,
as it requires you to think about things like `PROTECTED` vs. `PRIVATE`
and the [Liskov substitution principle](https://en.wikipedia.org/wiki/Liskov_substitution_principle),
and freezes a lot of design internals.
If you didn't consider these things in your class design,
you should thus prevent accidental inheritance by making your class `FINAL`.

There _are_ some good applications for inheritance, of course,
for example the design pattern [composite](https://en.wikipedia.org/wiki/Composite_pattern).
Business Add-Ins can also become more useful by allowing sub-classes,
enabling the customer to reuse most of the original code.
However, note that all of these cases have inheritance built in by design from the start.

Unclean classes that don't [implement interfaces](#public-instance-methods-should-be-part-of-an-interface)
should be left non-`FINAL` to allow consumers mocking them in their unit tests.