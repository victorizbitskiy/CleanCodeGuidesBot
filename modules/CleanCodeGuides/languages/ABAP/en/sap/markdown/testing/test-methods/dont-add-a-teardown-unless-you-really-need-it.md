#### Don't add a TEARDOWN unless you really need it

> [Clean ABAP] > [Content] > [Testing] > [Test Methods] > [This section]

`teardown` methods are usually only needed to clear up database entries
or other external resources in integration tests.

Resetting members of the test class, esp. `cut` and the used test doubles, is superfluous;
they are overwritten by the `setup` method before the next test method is started.
