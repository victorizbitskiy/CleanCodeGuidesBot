## SOLID
### Open/Closed Principle \(OCP\)

As stated by [Bertrand Meyer](https://en.wikipedia.org/wiki/Bertrand_Meyer), "software entities \(classes, modules, functions,
etc.\) should be open for extension, but closed for modification." What does that
mean though? This principle basically states that you should allow users to
add new functionalities without changing existing code.

In the "bad" example below adding another adapter would require changing `HttpRequester` class. This violates OCP.

**Bad:**

```ruby
class AjaxAdapter
  attr_reader :name

  def initialize
    @name = 'ajaxAdapter'
  end
end

class NodeAdapter
  attr_reader :name

  def initialize
    @name = 'nodeAdapter'
  end
end

class HttpRequester
  def initialize(adapter)
    @adapter = adapter
  end

  def fetch(url)
    case @adapter.name
    when 'ajaxAdapter'
      make_ajax_call(url)
    when 'nodeAdapter'
      make_http_call(url)
    end
  end

  def make_ajax_call(url)
    # ...
  end

  def make_http_call(url)
    # ...
  end
end
```

**Good:**

```ruby
class AjaxAdapter
  def request(url)
    # ...
  end
end

class NodeAdapter
  def request(url)
    # ...
  end
end

class HttpRequester
  def initialize(adapter)
    @adapter = adapter
  end

  def fetch(url)
    @adapter.request(url)
  end
end
```