### Use the right table type

> [Clean ABAP] > [Content] > [Tables] > [This section]

- You typically use `HASHED` tables for **large tables**
that are **filled in a single step**, **never modified**, and **read often by their key**.
Their inherent memory and processing overhead makes hash tables only valuable
for large amounts of data and lots of read accesses.
Each change to the table's content requires expensive recalculation of the hash,
so don't use this for tables that are modified too often.

- You typically use `SORTED` tables for **large tables**
that need to be **sorted at all times**, that are **filled bit by bit** or **need to be modified**,
and **read often by one or more full or partial keys** or processed **in a certain order**.
Adding, changing, or removing content requires finding the right insertion spot,
but doesn't require adjusting the rest of the table's index.
Sorted tables demonstrate their value only for large numbers of read accesses.

- Use `STANDARD` tables for **small tables**, where indexing produces more overhead than benefit, and **"arrays"**, where you either don't care at all for the order of the rows, or you want to process them in exactly the order they were appended. Also, if different access to the table is needed e.g. indexed access and sorted access via `SORT` and `BINARY SEARCH`.

> These are only rough guidelines.
> Find more details in the article [_Selection of Table Category_ in the ABAP Language Help](https://help.sap.com/doc/abapdocu_751_index_htm/7.51/en-US/abenitab_kind.htm).
