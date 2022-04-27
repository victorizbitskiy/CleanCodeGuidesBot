#### Throw CX_NO_CHECK for usually unrecoverable situations

> [Clean ABAP] > [Content] > [Error Handling] > [Throwing] > [This section]

If an exception is so severe that the receiver is unlikely to recover from it, use `CX_NO_CHECK`:
failure to read a must-have resource, failure to resolve the requested dependency, etc.

```ABAP
CLASS cx_out_of_memory DEFINITION INHERITING FROM cx_no_check.

METHODS create_guid
  RETURNING
    VALUE(result) TYPE /bobf/conf_key.
```

`CX_NO_CHECK` _cannot_ be declared in method signatures,
such that its occurrence will come as a bad surprise to the consumer.
In the case of unrecoverable situations, this is okay
because the consumer will not be able to do anything useful about it anyway.

However, there _may_ be cases where the consumer actually wants to recognize and react to this kind of failure.
For example, a dependency manager could throw a `CX_NO_CHECK` if it's unable to provide an implementation
for a requested interface because regular application code will not be able to continue.
However, there may be a test report that tries to instantiate all kinds of things just to see if it's working,
and that will report failure simply as a red entry in a list -
this service should be able to catch and ignore the exception instead of being forced to dump.
