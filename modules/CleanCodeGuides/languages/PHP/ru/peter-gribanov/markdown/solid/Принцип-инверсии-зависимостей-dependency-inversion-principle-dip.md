## SOLID

### Принцип инверсии зависимостей \(Dependency Inversion Principle, DIP\)

Этот принцип гласит:

1. Высокоуровневые модули не должны зависеть от низкоуровневых. Оба вида должны зависеть от абстракций.
2. Абстракции не должны зависеть от деталей. Детали должны зависеть от абстракций.

Сначала это может быть трудным для понимания, но если вы работали с PHP-фреймворками \(вроде Symfony\), то уже встречались с реализацией этого принципа в виде инъекции зависимости \(Dependency Injection, DI\). Однако эти принципы не идентичны, DI ограждает высокоуровневые модули от деталей своих низкоуровневых модулей и их настройки. Это может быть сделано посредством DI. Огромное преимущество в том, что снижается сцепление \(coupling\) между модулями. Сцепление — очень плохой шаблон разработки, затрудняющий рефакторинг кода.

**Плохо:**

```php
class Employee
{
    public function work(): void
    {
        // ....working
    }
}

class Robot extends Employee
{
    public function work(): void
    {
        //.... working much more
    }
}

class Manager
{
    private $employee;

    public function __construct(Employee $employee)
    {
        $this->employee = $employee;
    }

    public function manage(): void
    {
        $this->employee->work();
    }
}
```

**Хорошо:**

```php
interface Employee
{
    public function work(): void;
}

class Human implements Employee
{
    public function work(): void
    {
        // ....working
    }
}

class Robot implements Employee
{
    public function work(): void
    {
        //.... working much more
    }
}

class Manager
{
    private $employee;

    public function __construct(Employee $employee)
    {
        $this->employee = $employee;
    }

    public function manage(): void
    {
        $this->employee->work();
    }
}
```