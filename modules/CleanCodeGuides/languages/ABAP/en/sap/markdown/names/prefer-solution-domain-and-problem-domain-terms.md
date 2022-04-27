### Prefer solution domain and problem domain terms

> [Clean ABAP] > [Content] > [Names] > [This section]

Search for good names in the solution domain, i.e. computer science terms such as "queue" or "tree",
and in the problem domain, i.e. business field terms such as "account" or "ledger".

Layers that are business-like will sound best when named according to the problem domain.
This is especially true for components that are designed with Domain-Driven Design, such as APIs and business objects.

Layers that provide mostly technical functionality, such as factory classes and abstract algorithms,
will sound best when named according to the solution domain.

In any case, do not attempt to make up your own language.
We need to be able to exchange information between developers, product owners, partners and customers,
so choose names that all of these can relate to without a customized dictionary.

> Read more in _Chapter 2: Meaningful Names: Use Solution Domain Names_ and _[...]:
> Use Problem Domain Names_ of [Robert C. Martin's _Clean Code_].
