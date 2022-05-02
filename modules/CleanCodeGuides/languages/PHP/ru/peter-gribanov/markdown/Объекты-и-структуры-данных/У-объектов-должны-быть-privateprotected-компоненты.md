## Объекты и структуры данных

### У объектов должны быть private/protected компоненты

* `public`  методы и свойства наиболее опасны для изменений, поскольку внешний код может легко опираться на них, и вы не можете контролировать, какой код опирается на них. **Изменения в классе опасны для всех пользователей класса.**
* `protected` модификатор являются столь же опасными, как и `public`, поскольку они доступны в рамках любого дочернего класса. Это фактически означает, что разница между `public` и `protected` является только механизмом доступа, но гарантия инкапсуляции остается неизменной. **Модификации в классе опасны для всех классов потомков.**
* `private` модификатор гарантирует, что код **опасен для изменения только в границах одного класса** \(вы защищены от модификаций, и у вас не будет [Jenga эффекта](http://www.urbandictionary.com/define.php?term=Jengaphobia&defid=2494196)\).

Поэтому используйте `private` по умолчанию и `public/protected`, когда вам нужно предоставить доступ для внешних классов.

Для получения дополнительной информации вы можете прочитать [сообщение в блоге](http://fabien.potencier.org/pragmatism-over-theory-protected-vs-private.html), написанное [Fabien Potencier](https://github.com/fabpot).

**Плохо:**

```php
class Employee
{
    public $name;

    public function __construct(string $name)
    {
        $this->name = $name;
    }
}

$employee = new Employee('John Doe');
echo 'Employee name: '.$employee->name; // Employee name: John Doe
```

**Хорошо:**

```php
class Employee
{
    private $name;

    public function __construct(string $name)
    {
        $this->name = $name;
    }

    public function getName(): string
    {
        return $this->name;
    }
}

$employee = new Employee('John Doe');
echo 'Employee name: '.$employee->getName(); // Employee name: John Doe
```