## Variables

### Use meaningful and pronounceable variable names

**Bad:**

```python
import datetime


ymdstr = datetime.date.today().strftime("%y-%m-%d")
```

**Good**:

```python
import datetime


current_date: str = datetime.date.today().strftime("%y-%m-%d")
```