### Use nouns for classes and verbs for methods

> [Clean ABAP] > [Content] > [Names] > [This section]

Use nouns or noun phrases to name classes, interfaces, and objects:

```ABAP
CLASS /clean/account
CLASS /clean/user_preferences
INTERFACE /clean/customizing_reader
```

Use verbs or verb phrases to name methods:

```ABAP
METHODS withdraw
METHODS add_message
METHODS read_entries
```

Starting Boolean methods with verbs like `is_` and `has_` yields nice reading flow:

```ABAP
IF is_empty( table ).
```

We recommend naming functions like methods:

```ABAP
FUNCTION /clean/read_alerts
```