### Avoid DEFAULT KEY

> [Clean ABAP] > [Content] > [Tables] > [This section]

```ABAP
" anti-pattern
DATA itab TYPE STANDARD TABLE OF row_type WITH DEFAULT KEY.
```

Default keys are often only added to get the newer functional statements working.
The keys themselves in fact are usually superfluous and waste resources for nothing.
They can even lead to obscure mistakes because they ignore numeric data types.
The `SORT` and `DELETE ADJACENT` statements without explicit field list will resort to the primary key of the
 internal table, which in case of usage of `DEFAULT KEY` can lead to very unexpected results when having
 e.g. numeric fields as component of the key, in particular in combination with `READ TABLE ... BINARY` etc.

Either specify the key components explicitly

```ABAP
DATA itab2 TYPE STANDARD TABLE OF row_type WITH NON-UNIQUE KEY comp1 comp2.
```

or resort to `EMPTY KEY` if you don't need a key at all.

```ABAP
DATA itab1 TYPE STANDARD TABLE OF row_type WITH EMPTY KEY.
```

> Following [Horst Keller's blog on _Internal Tables with Empty Key_](https://blogs.sap.com/2013/06/27/abap-news-for-release-740-internal-tables-with-empty-key/)
> 
> **Caution:** `SORT` on internal tables with `EMPTY KEY` \(without explicit sort fields\) will not sort at all,
> but syntax warnings are issued in case the key's emptiness can be determined statically.