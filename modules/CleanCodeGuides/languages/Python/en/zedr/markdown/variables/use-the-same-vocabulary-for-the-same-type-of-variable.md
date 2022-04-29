## Variables

### Use the same vocabulary for the same type of variable

**Bad:**
Here we use three different names for the same underlying entity:

```python
def get_user_info(): pass
def get_client_data(): pass
def get_customer_record(): pass
```

**Good**:
If the entity is the same, you should be consistent in referring to it in your functions:

```python
def get_user_info(): pass
def get_user_data(): pass
def get_user_record(): pass
```

**Even better**
Python is \(also\) an object oriented programming language. If it makes sense, package the functions together with the concrete implementation
of the entity in your code, as instance attributes, property methods, or methods:

```python
from typing import Union, Dict


class Record:
    pass


class User:
    info : str

    @property
    def data(self) -> Dict[str, str]:
        return {}

    def get_record(self) -> Union[Record, None]:
        return Record()
```