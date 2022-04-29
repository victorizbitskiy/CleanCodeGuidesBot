## Functions

### Don't use flags as function parameters

Flags tell your user that this function does more than one thing. Functions
should do one thing. Split your functions if they are following different code
paths based on a boolean.

**Bad:**

```python
from tempfile import gettempdir
from pathlib import Path


def create_file(name: str, temp: bool) -> None:
    if temp:
        (Path(gettempdir()) / name).touch()
    else:
        Path(name).touch()
```

**Good:**

```python
from tempfile import gettempdir
from pathlib import Path


def create_file(name: str) -> None:
    Path(name).touch()


def create_temp_file(name: str) -> None:
    (Path(gettempdir()) / name).touch()
```
