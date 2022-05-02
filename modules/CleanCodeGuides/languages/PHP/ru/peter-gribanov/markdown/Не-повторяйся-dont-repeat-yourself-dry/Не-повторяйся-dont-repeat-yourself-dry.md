## Не повторяйся \(Don’t repeat yourself, DRY\)

Постарайтесь соблюдать принцип [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself).

Старайтесь полностью избавиться от дублирующего кода. Он плох тем, что если вам нужно менять логику, то это придётся делать в нескольких местах.

Представьте, что вы владеете ресторанчиком и отслеживаете, есть ли продукты: помидоры, лук, чеснок, специи и т. д. Если у вас несколько списков с содержимым холодильников, то вам придётся обновлять их все, когда вы готовите какое-то блюдо. А если список один, то и вносить изменения придётся только в него.

Зачастую дублирующий код возникает потому, что вы делаете две и более вещи, у которых много общего. Но небольшая разница между ними заставляет вас писать несколько функций, и те по большей части делают одно и то же. Удаление дублирующего кода означает, что вы создаёте абстракцию, которая может обрабатывать все различия с помощью единственной функции/модуля/класса.

Правильный выбор абстракции критически важен, поэтому нужно следовать принципам SOLID, описанным в разделе "[Классы](#Классы)". Плохие абстракции могут оказаться хуже дублирующего кода, так что будьте осторожны! Но если можете написать хорошие, то делайте это! Не повторяйтесь, иначе окажется, что при каждом изменении вам нужно обновлять код в нескольких местах.

**Плохо:**

```php
function showDeveloperList(array $developers): void
{
    foreach ($developers as $developer) {
        $expectedSalary = $developer->calculateExpectedSalary();
        $experience = $developer->getExperience();
        $githubLink = $developer->getGithubLink();
        $data = [
            $expectedSalary,
            $experience,
            $githubLink
        ];

        render($data);
    }
}

function showManagerList(array $managers): void
{
    foreach ($managers as $manager) {
        $expectedSalary = $manager->calculateExpectedSalary();
        $experience = $manager->getExperience();
        $githubLink = $manager->getGithubLink();
        $data = [
            $expectedSalary,
            $experience,
            $githubLink
        ];

        render($data);
    }
}
```

**Хорошо:**

```php
function showList(array $employees): void
{
    foreach ($employees as $employee) {
        $expectedSalary = $employee->calculateExpectedSalary();
        $experience = $employee->getExperience();
        $githubLink = $employee->getGithubLink();
        $data = [
            $expectedSalary,
            $experience,
            $githubLink
        ];

        render($data);
    }
}
```

**Очень хорошо:**

Лучше использовать компактную версию кода.

```php
function showList(array $employees): void
{
    foreach ($employees as $employee) {
        render([
            $employee->calculateExpectedSalary(),
            $employee->getExperience(),
            $employee->getGithubLink()
        ]);
    }
}
```