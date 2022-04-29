## Functions

### Avoid side effects

A function produces a side effect if it does anything other than take a value in
and return another value or values. For example, a side effect could be writing
to a file, modifying some global variable, or accidentally wiring all your money
to a stranger.

Now, you do need to have side effects in a program on occasion - for example, like
in the previous example, you might need to write to a file. In these cases, you
should centralize and indicate where you are incorporating side effects. Don't have
several functions and classes that write to a particular file - rather, have one
\(and only one\) service that does it.

The main point is to avoid common pitfalls like sharing state between objects
without any structure, using mutable data types that can be written to by anything,
or using an instance of a class, and not centralizing where your side effects occur.
If you can do this, you will be happier than the vast majority of other programmers.

**Bad:**

```python
# type: ignore

# This is a module-level name.
# It's good practice to define these as immutable values, such as a string.
# However...
fullname = "Ryan McDermott"

def split_into_first_and_last_name() -> None:
    # The use of the global keyword here is changing the meaning of the
    # the following line. This function is now mutating the module-level
    # state and introducing a side-effect!
    global fullname
    fullname = fullname.split()

split_into_first_and_last_name()

# MyPy will spot the problem, complaining about 'Incompatible types in
# assignment: (expression has type "List[str]", variable has type "str")'
print(fullname)  # ["Ryan", "McDermott"]

# OK. It worked the first time, but what will happen if we call the
# function again?
```

**Good:**

```python
from typing import List, AnyStr


def split_into_first_and_last_name(name: AnyStr) -> List[AnyStr]:
    return name.split()

fullname = "Ryan McDermott"
name, surname = split_into_first_and_last_name(fullname)

print(name, surname)  # => Ryan McDermott
```

**Also good**

```python
from dataclasses import dataclass


@dataclass
class Person:
    name: str

    @property
    def name_as_first_and_last(self) -> list:
        return self.name.split()


# The reason why we create instances of classes is to manage state!
person = Person("Ryan McDermott")
print(person.name)  # => "Ryan McDermott"
print(person.name_as_first_and_last)  # => ["Ryan", "McDermott"]
```