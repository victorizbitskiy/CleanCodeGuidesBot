## SOLID

### Принцип разделения интерфейса \(Interface Segregation Principle, ISP\)

Согласно ISP, "Клиенты не должны зависеть от интерфейсов, которые не используют".

Хороший пример демонстрации принципа: классы, для которых требуются большие объекты настроек \(settings objects\). Рекомендуется не требовать от клиентов настраивать много параметров, потому что по большей части они им не нужны. Если сделать их опциональными, то это поможет избежать раздутости интерфейса.

**Плохо:**

```php
interface Employee
{
    public function work(): void;

    public function eat(): void;
}

class HumanEmployee implements Employee
{
    public function work(): void
    {
        // ....working
    }

    public function eat(): void
    {
        // ...... eating in lunch break
    }
}

class RobotEmployee implements Employee
{
    public function work(): void
    {
        //.... working much more
    }

    public function eat(): void
    {
        //.... robot can't eat, but it must implement this method
    }
}
```

**Хорошо:**

Не каждый работник является сотрудником, но каждый сотрудник является работником.

```php
interface Workable
{
    public function work(): void;
}

interface Feedable
{
    public function eat(): void;
}

interface Employee extends Feedable, Workable
{
}

class HumanEmployee implements Employee
{
    public function work(): void
    {
        // ....working
    }

    public function eat(): void
    {
        //.... eating in lunch break
    }
}

// robot can only work
class RobotEmployee implements Workable
{
    public function work(): void
    {
        // ....working
    }
}
```