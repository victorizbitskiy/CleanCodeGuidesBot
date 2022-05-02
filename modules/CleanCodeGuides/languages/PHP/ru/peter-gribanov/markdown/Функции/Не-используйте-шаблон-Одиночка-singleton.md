## Функции

### Не используйте шаблон Одиночка \(Singleton\)

Шаблон проектирования Одиночка \(Singleton\) является [антипаттерном](https://ru.wikipedia.org/wiki/Одиночка_\(шаблон_проектирования\)). Перефразируем Brian Button:

1. Как правило, одиночки используются в качестве **глобального экземпляра**, почему это так плохо? Потому, что вы **скрываете зависимости вашего приложения** в своем коде, вместо того, чтобы сделать их явными через интерфейсы. Сделать что-то глобальным, чтобы избежать его распространения - это [чем-то попахивает](https://ru.wikipedia.org/wiki/Код_с_запашком).
2. Одиночки нарушают принцип [единой ответственности](#Принцип-единственной-ответственности-single-responsibility-principle-srp): в силу того, что **они контролируют собственное создание и жизненный цикл**.
3. Одиночки по своей сути приводят к тому, что код получается тесно [связанным](https://ru.wikipedia.org/wiki/Зацепление \(программирование\)). Это во многих случаях **затрудняет его тестирование**.
4. Одиночки несут состояние на протяжении всей жизни приложения. Еще один удар по тестированию, **так как вы можете столкнуться с ситуацией, когда необходимо закончить тесты**, что является большим нет для модульных тестов. Зачем? Потому что каждый модульный тест должен быть независимым от другого.

[Misko Hevery](http://misko.hevery.com/about/) также очень хорошо разбирается в [корне проблемы](http://misko.hevery.com/2008/08/25/root-cause-of-singletons/).

**Плохо:**

```php
class DBConnection
{
    private static $instance;

    private function __construct(string $dsn)
    {
        // ...
    }

    public static function getInstance(): DBConnection
    {
        if (self::$instance === null) {
            self::$instance = new self();
        }

        return self::$instance;
    }

    // ...
}

$singleton = DBConnection::getInstance();
```

**Хорошо:**

```php
class DBConnection
{
    public function __construct(string $dsn)
    {
        // ...
    }

     // ...
}
```

Создайте экземпляр класса `DBConnection` и настройте его с помощью [DSN](http://php.net/manual/en/pdo.construct.php#refsect1-pdo.construct-parameters).

```php
$connection = new DBConnection($dsn);
```

И теперь вы должны использовать экземпляр класса `DBConnection` в своем приложении.