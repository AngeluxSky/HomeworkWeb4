# Урок 5. JSON и XML.

*Задача №1: проверить XML на Well formed: (check)*

<req>
    
    <surname>Иванов</surname>
    
    <name>Иван</name>
    
    <patronymic>Иванович</patronymic>
    
    <birthdate>01.01.1990</birthdate>
    
    <birthplace>Москва</birthplace>
    
    <phone>8 926 766 48 48</phone>
    
</req>

!Данный код корректный. На примере реального сайта-чата реализован в файле "XML".


*Задача №2: проверить JSON на Well formed: (check)*
{

    "surname": "Иванов"
    
    "name": "Иван"
    
    "patronymic": "Иванович"
    
    "birthdate": "01.01.1990"
    
    "birthplace": "Москва"
    
    "phone": "8 926 766 48 48"
}

Приложите правильный на ваш взгляд вариант.

!Данный код не корректный. Ошибка: Отсутсвие запятой между объектами. На примере страницы с профилем реализован в файле "JSON".

Задача №3: Переделайте чат под json формат и добавьте имя пользователя. (unchecked)
