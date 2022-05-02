## SOLID

### Принцип единственной ответственности \(Single Responsibility Principle, SRP\)

Как говорится в книге Clean Code: "Для изменения класса никогда не должно быть более одной причины". Порой заманчиво набить класс всевозможной функциональностью, как мы это делаем с сумками и рюкзаками, которые разрешается взять в качестве ручной клади в самолёт. Проблема в том, что ваш класс не будет концептуально связанным \(conceptually cohesive\), и поэтому возникнет много причин изменить его. Важно минимизировать количество случаев, когда вам нужно изменять класс. А важно потому, что когда в классе избыток функциональности и вам нужно поменять её часть, то может быть трудно понять, как это отразится на зависимых модулях в кодовой базе.

**Плохо:**

```php
class UserSettings
{
    private $user;

    public function __construct(User $user)
    {
        $this->user = $user;
    }

    public function changeSettings(array $settings): void
    {
        if ($this->verifyCredentials()) {
            // ...
        }
    }

    private function verifyCredentials(): bool
    {
        // ...
    }
}
```

**Хорошо:**

```php
class UserAuth
{
    private $user;

    public function __construct(User $user)
    {
        $this->user = $user;
    }

    public function verifyCredentials(): bool
    {
        // ...
    }
}

class UserSettings
{
    private $user;
    private $auth;

    public function __construct(User $user)
    {
        $this->user = $user;
        $this->auth = new UserAuth($user);
    }

    public function changeSettings(array $settings): void
    {
        if ($this->auth->verifyCredentials()) {
            // ...
        }
    }
}
```