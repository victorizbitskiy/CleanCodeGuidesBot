## Variables

### Avoid mental mapping

Don’t force the reader of your code to translate what the variable means.
Explicit is better than implicit.

**Bad:**

```python
seq = ("Austin", "New York", "San Francisco")

for item in seq:
    #do_stuff()
    #do_some_other_stuff()

    # Wait, what's `item` again?
    print(item)
```

**Good**:

```python
locations = ("Austin", "New York", "San Francisco")

for location in locations:
    #do_stuff()
    #do_some_other_stuff()
    # ...
    print(location)
```