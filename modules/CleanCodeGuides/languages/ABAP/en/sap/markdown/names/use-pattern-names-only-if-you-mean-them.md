### Use pattern names only if you mean them

> [Clean ABAP] > [Content] > [Names] > [This section]

Don't use the names of software design patterns for classes and interfaces unless you really mean them.
For example, don't call your class `file_factory` unless it really implements the factory design pattern.
The most common patterns include:
[singleton](https://en.wikipedia.org/wiki/Singleton_pattern),
[factory](https://en.wikipedia.org/wiki/Factory_method_pattern),
[facade](https://en.wikipedia.org/wiki/Facade_pattern),
[composite](https://en.wikipedia.org/wiki/Composite_pattern),
[decorator](https://en.wikipedia.org/wiki/Decorator_pattern),
[iterator](https://en.wikipedia.org/wiki/Iterator_pattern),
[observer](https://en.wikipedia.org/wiki/Observer_pattern), and
[strategy](https://en.wikipedia.org/wiki/Strategy_pattern).

> Read more in _Chapter 2: Meaningful Names: Avoid Disinformation_ of [Robert C. Martin's _Clean Code_]