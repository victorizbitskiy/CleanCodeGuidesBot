#### Make it easy to spot differences

> [Clean ABAP] > [Content] > [Testing] > [Test Data] > [This section]

```ABAP
exp_parameter_in = VALUE #( ( parameter_name = '45678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789END1' )
                            ( parameter_name = '45678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789END2' ) ).
```

Don't force readers to compare long meaningless strings to spot tiny differences.
