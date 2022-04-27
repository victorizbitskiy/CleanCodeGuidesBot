### Prefer INSERT INTO TABLE to APPEND TO

> [Clean ABAP] > [Content] > [Tables] > [This section]

```ABAP
INSERT VALUE #( ... ) INTO TABLE itab.
```

`INSERT INTO TABLE` works with all table and key types,
thus making it easier for you to refactor the table's type and key definitions if your performance requirements change.

Use `APPEND TO` only if you use a `STANDARD` table in an array-like fashion,
if you want to stress that the added entry shall be the last row.