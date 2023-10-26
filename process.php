<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получите данные из формы
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    $consent = isset($_POST["consent"]) ? "Да" : "Нет";

    // Адрес, на который будет отправлено письмо
    $to = "mega.denisenko@ukr.net"; // Замените на свой адрес электронной почты

    // Тема письма
    $subject = "Сообщение с вашего веб-сайта от $name";

    // Сообщение
    $messageBody = "Имя: $name\n";
    $messageBody .= "Email: $email\n";
    $messageBody .= "Сообщение: $message\n";
    $messageBody .= "Согласие на обработку данных: $consent\n";

    // Заголовок письма
    $headers = "From: $email";

    // Отправка письма
    if (mail($to, $subject, $messageBody, $headers)) {
        echo "Ваше сообщение успешно отправлено. Мы свяжемся с вами в ближайшее время.";
    } else {
        echo "Ошибка при отправке сообщения. Пожалуйста, попробуйте позже.";
    }
} else {
    echo "Доступ запрещен";
}
?>

