## Variables

### Use explanatory variables

**Bad:**

```python
import re


address = "One Infinite Loop, Cupertino 95014"
city_zip_code_regex = r"^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$"

matches = re.match(city_zip_code_regex, address)
if matches:
    print(f"{matches[1]}: {matches[2]}")
```

**Not bad**:

It's better, but we are still heavily dependent on regex.

```python
import re


address = "One Infinite Loop, Cupertino 95014"
city_zip_code_regex = r"^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$"
matches = re.match(city_zip_code_regex, address)

if matches:
    city, zip_code = matches.groups()
    print(f"{city}: {zip_code}")
```

**Good**:

Decrease dependence on regex by naming subpatterns.

```python
import re


address = "One Infinite Loop, Cupertino 95014"
city_zip_code_regex = r"^[^,\\]+[,\\\s]+(?P<city>.+?)\s*(?P<zip_code>\d{5})?$"

matches = re.match(city_zip_code_regex, address)
if matches:
    print(f"{matches['city']}, {matches['zip_code']}")
```