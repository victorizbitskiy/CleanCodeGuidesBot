### Prefer REF TO to FIELD-SYMBOL

> [Clean ABAP] > [Content] > [Variables] > [This section]

> This section [is being challenged](https://github.com/SAP/styleguides/issues/115).
> `FIELD-SYMBOL`s seem to be considerably faster
> when iterating internal tables,
> such that the recommendation to use `REF TO`
> for these cases may worsen performance.

```ABAP
LOOP AT components REFERENCE INTO DATA(component).
```

instead of the equivalent

```ABAP
" anti-pattern
LOOP AT components ASSIGNING FIELD-SYMBOL(<component>).
```

except where you need field symbols

```ABAP
ASSIGN generic->* TO FIELD-SYMBOL(<generic>).
ASSIGN COMPONENT name OF STRUCTURE structure TO FIELD-SYMBOL(<component>).
ASSIGN (class_name)=>(static_member) TO FIELD-SYMBOL(<member>).
```

Code reviews demonstrate that people tend to choose between the two arbitrarily,
"just because", "because we are always LOOPing that way", or "for no special reason".
Arbitrary choices make the reader waste time on the pointless question why one is used over the other
and thus should be replaced with well-founded, precise decisions.
Our recommendation is based on this reasoning:

- Field symbols can do some things that references cannot, such as dynamically accessing the components of a structure.
Likewise, references can do things that field symbols can't, such as constructing a dynamically typed data structure.
In summary, settling for one alone is not possible.

- In object-oriented ABAP, references are all over the place and cannot be avoided,
as any object is a `REF TO <class-name>`.
In contrast, field symbols are only strictly required in few, special cases concerned with dynamic typing.
References thus form a natural preference in any object-oriented program.

- Field symbols are shorter than references, but the resulting memory saving is so tiny that it can be safely neglected.
Similarly, speed is not an issue. As a consequence, there is no performance-related reason to prefer one to the other.

> Read more in the article
> [_Accessing Data Objects Dynamically_ in the ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_751_index_htm/7.51/en-US/index.htm?file=abendyn_access_data_obj_guidl.htm).