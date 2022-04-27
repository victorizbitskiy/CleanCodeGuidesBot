#### Make it easy to spot meaning

> [Clean ABAP] > [Content] > [Testing] > [Test Data] > [This section]

In unit tests, you want to be able to quickly tell which data and doubles are important,
and which ones are only there to keep the code from crashing.
Support this by giving things that have no meaning obvious names and values, for example:

```ABAP
DATA(alert_id) = '42'.                             " well-known meaningless numbers
DATA(detection_object_type) = '?=/"&'.             " 'keyboard accidents'
CONSTANTS some_random_number TYPE i VALUE 782346.  " revealing variable names
```

Don't trick people into believing something connects to real objects or real customizing if it doesn't:

```ABAP
" anti-pattern
DATA(alert_id) = '00000001223678871'.        " this alert really exists
DATA(detection_object_type) = 'FRA_SCLAIM'.  " this detection object type, too
CONSTANTS memory_limit TYPE i VALUE 4096.    " this number looks carefully chosen
```