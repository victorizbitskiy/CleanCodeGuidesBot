## Methods

### Methods should only be one level of abstraction

When you have more than one level of abstraction your method is usually
doing too much. Splitting up methods leads to reusability and easier
testing. Furthermore, methods should descend by the level of abstraction: one very abstract method should call methods that are less abstract and so on.

**Bad:**

```ruby
def interpret(code)
  regexes = [
    # ...
  ]
  statements = code.split(' ')

  tokens = regexes.each_with_object([]) do |regex, memo|
    statements.each do |statement|
      # memo.push(...)
    end
  end

  ast = tokens.map do |token|
    # ...
  end

  ast.map do |node|
    # ...
  end
end
```

**Good:**

```ruby
def interpret(code)
  tokens = tokenize(code)
  ast = lex(tokens)
  parse(ast)
end

def tokenize(code)
  regexes = [
    # ...
  ]
  statements = code.split(' ')

  regexes.each_with_object([]) do |regex, tokens|
    statements.each do |statement|
      # tokens.push(...)
    end
  end
end

def lex(tokens)
  tokens.map do |token|
    # ...
  end
end

def parse(ast)
  ast.map do |node|
    # ...
  end
end
```
