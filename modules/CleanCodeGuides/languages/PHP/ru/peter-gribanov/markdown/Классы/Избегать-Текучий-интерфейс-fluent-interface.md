## Классы

### Избегать Текучий интерфейс \(Fluent interface\)

[Текучий интерфейс (Fluent interface)](https://ru.wikipedia.org/wiki/Fluent_interface) - это объектно-ориентированный API, целью которого является улучшение читабельности исходного кода с помощью [Цепочки методов (Method chaining)](https://en.wikipedia.org/wiki/Method_chaining).

Хотя могут быть некоторые случаи в которых этот шаблон уменьшает многословность кода \(например, [PHPUnit Mock Builder](https://phpunit.de/manual/current/en/test-doubles.html) или [Doctrine Query Builder](http://docs.doctrine-project.org/projects/doctrine-dbal/en/latest/reference/query-builder.html)\), но чаще всего это происходит с некоторыми издержками:

1. Нарушение [Инкапсуляции](https://ru.wikipedia.org/wiki/Инкапсуляция_(программирование)).
2. Нарушение [Декораторов](https://ru.wikipedia.org/wiki/Декоратор_(шаблон_проектирования)).
3. Затрудняет [мокинг (mock)](https://ru.wikipedia.org/wiki/Mock-объект) в тестах.
4. Осложняет чтение diff коммитов.

Для получения дополнительной информации вы можете прочитать [сообщение в блоге](https://ocramius.github.io/blog/fluent-interfaces-are-evil/), написанное [Marco Pivetta](https://github.com/Ocramius).

**Плохо:**

```php
class Car
{
    private $make = 'Honda';
    private $model = 'Accord';
    private $color = 'white';

    public function setMake(string $make): self
    {
        $this->make = $make;

        // NOTE: Returning this for chaining
        return $this;
    }

    public function setModel(string $model): self
    {
        $this->model = $model;

        // NOTE: Returning this for chaining
        return $this;
    }

    public function setColor(string $color): self
    {
        $this->color = $color;

        // NOTE: Returning this for chaining
        return $this;
    }

    public function dump(): void
    {
        var_dump($this->make, $this->model, $this->color);
    }
}

$car = (new Car())
  ->setColor('pink')
  ->setMake('Ford')
  ->setModel('F-150')
  ->dump();
```

**Хорошо:**

```php
class Car
{
    private $make = 'Honda';
    private $model = 'Accord';
    private $color = 'white';

    public function setMake(string $make): void
    {
        $this->make = $make;
    }

    public function setModel(string $model): void
    {
        $this->model = $model;
    }

    public function setColor(string $color): void
    {
        $this->color = $color;
    }

    public function dump(): void
    {
        var_dump($this->make, $this->model, $this->color);
    }
}

$car = new Car();
$car->setColor('pink');
$car->setMake('Ford');
$car->setModel('F-150');
$car->dump();
```