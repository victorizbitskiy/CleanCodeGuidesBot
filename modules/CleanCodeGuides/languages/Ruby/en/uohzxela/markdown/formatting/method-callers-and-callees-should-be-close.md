### Method callers and callees should be close

If a method calls another, keep those methods vertically close in the source
file. Ideally, keep the caller right above the callee. We tend to read code from
top-to-bottom, like a newspaper. Because of this, make your code read that way.

**Bad:**

```ruby
class PerformanceReview
  def initialize(employee)
    @employee = employee
  end

  def lookup_peers
    db.lookup(@employee, :peers)
  end

  def lookup_manager
    db.lookup(@employee, :manager)
  end

  def peer_reviews
    peers = lookup_peers
    # ...
  end

  def perf_review
    peer_reviews
    manager_review
    self_review
  end

  def manager_review
    manager = lookup_manager
    # ...
  end

  def self_review
    # ...
  end
end

review = PerformanceReview.new(employee)
review.perf_review
```

**Good:**

```ruby
class PerformanceReview
  def initialize(employee)
    @employee = employee
  end

  def perf_review
    peer_reviews
    manager_review
    self_review
  end

  def peer_reviews
    peers = lookup_peers
    # ...
  end

  def lookup_peers
    db.lookup(@employee, :peers)
  end

  def manager_review
    manager = lookup_manager
    # ...
  end

  def lookup_manager
    db.lookup(@employee, :manager)
  end

  def self_review
    # ...
  end
end

review = PerformanceReview.new(employee)
review.perf_review
```
