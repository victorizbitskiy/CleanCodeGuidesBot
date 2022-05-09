## Functions

### Function arguments \(2 or fewer ideally\)

Limiting the amount of function parameters is incredibly important because it makes
testing your function easier. Having more than three leads to a combinatorial explosion
where you have to test tons of different cases with each separate argument.

Zero arguments is the ideal case. One or two arguments is ok, and three should be avoided.
Anything more than that should be consolidated. Usually, if you have more than two
arguments then your function is trying to do too much. In cases where it's not, most
of the time a higher-level object will suffice as an argument.

**Bad:**

```python
def create_menu(title, body, button_text, cancellable):
    pass
```

**Java-esque**:

```python
class Menu:
    def __init__(self, config: dict):
        self.title = config["title"]
        self.body = config["body"]
        # ...

menu = Menu(
    {
        "title": "My Menu",
        "body": "Something about my menu",
        "button_text": "OK",
        "cancellable": False
    }
)
```

**Also good**

```python
class MenuConfig:
    """A configuration for the Menu.

    Attributes:
        title: The title of the Menu.
        body: The body of the Menu.
        button_text: The text for the button label.
        cancellable: Can it be cancelled?
    """
    title: str
    body: str
    button_text: str
    cancellable: bool = False
def create_menu(config: MenuConfig) -> None:
    title = config.title
    body = config.body
    # ...
config = MenuConfig()
config.title = "My delicious menu"
config.body = "A description of the various items on the menu"
config.button_text = "Order now!"
# The instance attribute overrides the default class attribute.
config.cancellable = True
create_menu(config)
```

**Fancy**

```python
from typing import NamedTuple
class MenuConfig(NamedTuple):
    """A configuration for the Menu.

    Attributes:
        title: The title of the Menu.
        body: The body of the Menu.
        button_text: The text for the button label.
        cancellable: Can it be cancelled?
    """
    title: str
    body: str
    button_text: str
    cancellable: bool = False
def create_menu(config: MenuConfig):
    title, body, button_text, cancellable = config
    # ...
create_menu(
    MenuConfig(
        title="My delicious menu",
        body="A description of the various items on the menu",
        button_text="Order now!"
    )
)
```

**Even fancier**

```python
from dataclasses import astuple, dataclass
@dataclass
class MenuConfig:
    """A configuration for the Menu.

    Attributes:
        title: The title of the Menu.
        body: The body of the Menu.
        button_text: The text for the button label.
        cancellable: Can it be cancelled?
    """
    title: str
    body: str
    button_text: str
    cancellable: bool = False
def create_menu(config: MenuConfig):
    title, body, button_text, cancellable = astuple(config)
    # ...
create_menu(
    MenuConfig(
        title="My delicious menu",
        body="A description of the various items on the menu",
        button_text="Order now!"
    )
)
```

**Even fancier, Python3.8+ only**

```python
from typing import TypedDict
class MenuConfig(TypedDict):
    """A configuration for the Menu.

    Attributes:
        title: The title of the Menu.
        body: The body of the Menu.
        button_text: The text for the button label.
        cancellable: Can it be cancelled?
    """
    title: str
    body: str
    button_text: str
    cancellable: bool
def create_menu(config: MenuConfig):
    title = config["title"]
    # ...
create_menu(
    # You need to supply all the parameters
    MenuConfig(
        title="My delicious menu",
        body="A description of the various items on the menu",
        button_text="Order now!",
        cancellable=True
    )
)
```