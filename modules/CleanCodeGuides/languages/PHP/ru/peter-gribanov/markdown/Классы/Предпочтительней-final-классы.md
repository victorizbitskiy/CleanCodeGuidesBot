## Классы

### Предпочтительней final классы

`final` должен использоваться всякий раз, когда это возможно:

1. Это предотвращает неконтролируемую цепочку наследования.
2. Поощряет [композицию](#Композиция-лучше-наследования).
3. Поощряет [Single Responsibility Principle](#Принцип-единственной-ответственности-single-responsibility-principle-srp).
4. Поощряет использовать открытые методы вместо расширения класса для получения доступа к защищенным.
5. Это позволяет изменять ваш код без вероятности сломать приложения, которые используют ваш класс.

Единственное условие - ваш класс должен реализовывать интерфейс и не определять никакие другие открытые методы.

Для получения дополнительной информации вы можете прочитать [пост в блоге](https://ocramius.github.io/blog/when-to-declare-classes-final/) на эту тему, написанный [Marco Pivetta \(Ocramius\)](https://ocramius.github.io/).

**Плохо:**

```php
final class Car
{
    private $color;

    public function __construct($color)
    {
        $this->color = $color;
    }

    /**
     * @return string The color of the vehicle
     */
    public function getColor()
    {
        return $this->color;
    }
}
```

**Хорошо:**

```php
interface Vehicle
{
    /**
     * @return string The color of the vehicle
     */
    public function getColor();
}

final class Car implements Vehicle
{
    private $color;

    public function __construct($color)
    {
        $this->color = $color;
    }

    /**
     * {@inheritdoc}
     */
    public function getColor()
    {
        return $this->color;
    }
}
```