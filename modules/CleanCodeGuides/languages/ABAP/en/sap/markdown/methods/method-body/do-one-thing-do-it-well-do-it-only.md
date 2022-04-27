#### Do one thing, do it well, do it only

> [Clean ABAP] > [Content] > [Methods] > [Method Body] > [This section]

A method should do one thing, and only one thing.
It should do it in the best way possible.

A method likely does one thing if

- it has [few input parameters](#aim-for-few-importing-parameters-at-best-less-than-three)
- it [doesn't include Boolean parameters](#split-method-instead-of-boolean-input-parameter)
- it has [exactly one output parameter](#return-export-or-change-exactly-one-parameter)
- it is [small](#keep-methods-small)
- it [descends one level of abstraction](#descend-one-level-of-abstraction)
- it only [throws one type of exception](#throw-one-type-of-exception)
- you cannot extract meaningful other methods
- you cannot meaningfully group its statements into sections