## **Methods**
### Methods should do one thing  

This is by far the most important rule in software engineering. When methods
do more than one thing, they are harder to compose, test, and reason about.
When you can isolate a method to just one action, they can be refactored
easily and your code will read much cleaner. If you take nothing else away from
this guide other than this, you'll be ahead of many developers.

**Bad:**
```ruby
def email_clients(clients)
  clients.each do |client|
    client_record = database.lookup(client)
    email(client) if client_record.active?
  end
end

email_clients(clients)
```

**Good:**
```ruby
def email_clients(clients)
  clients.each { |client| email(client) }
end

def active(objects)
  objects.select { |object| active?(object) }
end

def active?(object)
  record = database.lookup(object)
  record.active?
end

email_clients(active(clients))
```