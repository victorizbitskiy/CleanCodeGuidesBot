## **Variables**
### Use meaningful and pronounceable variable names

**Bad:**
```ruby
yyyymmdstr = Time.now.strftime('%Y/%m/%d')
```

**Good:**
```ruby
current_date = Time.now.strftime('%Y/%m/%d')
```
**[⬆ back to top](#table-of-contents)**

### Use the same vocabulary for the same type of variable

Pick one word for the concept and stick to it.

**Bad:**
```ruby
user_info
user_data
user_record

starts_at
start_at
start_time
```

**Good:**
```ruby
user

starts_at
```