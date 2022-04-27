#### Make singletons only where multiple instances don't make sense

> [Clean ABAP] > [Content] > [Classes] > [Constructors] > [This section]

```ABAP
METHOD new.
  IF singleton IS NOT BOUND.
    singleton = NEW /clean/my_class( ).
  ENDIF.
  result = singleton.
ENDMETHOD.
```

Apply the singleton pattern where your object-oriented design says
that having a second instance of something doesn't make sense.
Use it to ensure that every consumer is working with the same thing in the same state and with the same data.

Do not use the singleton pattern out of habit or because some performance rule tells you so.
It is the most overused and wrongly applied pattern and
produces unexpected cross-effects and needlessly complicates testing.
If there are no design-driven reasons for a unitary object,
leave that decision to the consumer - he can still reach the same by means outside the constructor,
for example with a factory.