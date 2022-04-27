#### Keep methods small

> [Clean ABAP] > [Content] > [Methods] > [Method Body] > [This section]

Methods should have less than 20 statements, optimal around 3 to 5 statements.

```ABAP
METHOD read_and_parse_version_filters.
  DATA(active_model_version) = read_random_version_under( model_guid ).
  DATA(filter_json) = read_model_version_filters( active_model_version-guid ).
  result = parse_model_version_filters( filter_json ).
ENDMETHOD.
```

The following `DATA` declaration alone is sufficient to see that the surrounding method does way more than one thing:

```ABAP
" anti-pattern
DATA:
  class           TYPE vseoclass,
  attributes      TYPE seoo_attributes_r,
  methods         TYPE seoo_methods_r,
  events          TYPE seoo_events_r,
  types           TYPE seoo_types_r,
  aliases         TYPE seoo_aliases_r,
  implementings   TYPE seor_implementings_r,
  inheritance     TYPE vseoextend,
  friendships     TYPE seof_friendships_r,
  typepusages     TYPE seot_typepusages_r,
  clsdeferrds     TYPE seot_clsdeferrds_r,
  intdeferrds     TYPE seot_intdeferrds_r,
  attribute       TYPE vseoattrib,
  method          TYPE vseomethod,
  event           TYPE vseoevent,
  type            TYPE vseotype,
  alias           TYPE seoaliases,
  implementing    TYPE vseoimplem,
  friendship      TYPE seofriends,
  typepusage      TYPE vseotypep,
  clsdeferrd      TYPE vseocdefer,
  intdeferrd      TYPE vseoidefer,
  new_clskey_save TYPE seoclskey.
```

Of course there are occasions where it does not make sense to reduce a larger method further.
This is perfectly okay as long as the method remains [focused on one thing](#do-one-thing-do-it-well-do-it-only):

```ABAP
METHOD decide_what_to_do.
  CASE temperature.
    WHEN burning.
      result = air_conditioning.
    WHEN hot.
      result = ice_cream.
    WHEN moderate.
      result = chill.
    WHEN cold.
      result = skiing.
    WHEN freezing.
      result = hot_cocoa.
  ENDCASE.
ENDMETHOD.
```

However, it still makes sense to validate whether the verbose code hides a more suitable pattern:

```ABAP
METHOD decide_what_to_do.
  result = VALUE #( spare_time_activities[ temperature = temperature ] OPTIONAL ).
ENDMETHOD.
```

> Cutting methods very small can have bad impact on performance because it increases the number of method calls.
> The [section _Mind the performance_](#mind-the-performance) gives guidance on how to balance Clean Code and performance.