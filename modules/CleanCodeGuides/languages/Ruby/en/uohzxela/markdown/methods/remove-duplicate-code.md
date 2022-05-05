## **Functions**
### Remove duplicate code

Do your absolute best to avoid duplicate code. Duplicate code is bad because it
means that there's more than one place to alter something if you need to change
some logic.

Imagine if you run a restaurant and you keep track of your inventory: all your
tomatoes, onions, garlic, spices, etc. If you have multiple lists that
you keep this on, then all have to be updated when you serve a dish with
tomatoes in them. If you only have one list, there's only one place to update!

Oftentimes you have duplicate code because you have two or more slightly
different things, that share a lot in common, but their differences force you
to have two or more separate methods that do much of the same things. Removing
duplicate code means creating an abstraction that can handle this set of
different things with just one method/module/class.

Getting the abstraction right is critical, that's why you should follow the
SOLID principles laid out in the *Classes* section. Bad abstractions can be
worse than duplicate code, so be careful! Having said this, if you can make
a good abstraction, do it! Don't repeat yourself, otherwise you'll find yourself
updating multiple places anytime you want to change one thing.

**Bad:**
```ruby
def show_developer_list(developers)
  developers.each do |developer|
    data = {
      expected_salary: developer.expected_salary,
      experience: developer.experience,
      github_link: developer.github_link
    }

    render(data)
  end
end

def show_manager_list(managers)
  managers.each do |manager|
    data = {
      expected_salary: manager.expected_salary,
      experience: manager.experience,
      portfolio: manager.mba_projects
    }

    render(data)
  end
end
```

**Good:**
```ruby
def show_employee_list(employees)
  employees.each do |employee|
    data = build_data(employee)
    render(data)
  end
end

def build_data(employee)
  general_data = {
    expected_salary: employee.expected_salary,
    experience: employee.experience
  }

  general_data.merge(position_specific_data(employee))
end

def position_specific_data(employee)
  case employee.type
  when 'manager'
    { portfolio: employee.mba_projects }
  when 'developer'
    { github_link: employee.github_link }
  end
end
```