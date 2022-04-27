### Use ABAP_BOOL for Booleans

> [Clean ABAP] > [Content] > [Booleans] > [This section]

```ABAP
DATA has_entries TYPE abap_bool.
```

Don't use the generic type `char1`.
Although it is technically compatible it obscures the fact that we're dealing with a Boolean variable.

Also avoid other Boolean types as they often have strange side effects,
for example `boolean` supports a third value "undefined" that results in subtle programming errors.

In some cases you may need a data dictionary element, for example for DynPro fields.
`abap_bool` cannot be used here because it is defined in the type pool `abap`, not in the data dictionary.
In this case, resort to `boole_d` or `xfeld`.
Create your own data element if you need a custom description.

> ABAP may be the one single programming language that does not come with a universal Boolean data type.
> However, having one is imperative.
> This recommendation is based on the ABAP Programming Guidelines.