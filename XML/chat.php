<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $xml_data = file_get_contents("php://input");

    $xml = simplexml_load_string($xml_data);
    $surname = $xml->surname;
    $name = $xml->name;
    $patronymic = $xml->patronymic;
    $birthdate = $xml->birthdate;
    $birthplace = $xml->birthplace;
    $phone = $xml->phone;

    $message = "Фамилия: $surname\nИмя: $name\nОтчество: $patronymic\nДата рождения: $birthdate\nМесто рождения: $birthplace\nТелефон: $phone";
    
    echo "<p><strong>Пользователь:</strong><br>$message</p>";
}
?>