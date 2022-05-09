## Variables

### Use searchable names 

We will read more code than we will ever write. It's important that the code we do write is
readable and searchable. By *not* naming variables that end up being meaningful for
understanding our program, we hurt our readers.
Make your names searchable.

**Bad:**

```python
import time


# What is the number 86400 for again?
time.sleep(86400)
```

**Good**

```python
import time


# Declare them in the global namespace for the module.
SECONDS_IN_A_DAY = 60 * 60 * 24
time.sleep(SECONDS_IN_A_DAY)
```