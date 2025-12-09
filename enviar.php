<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $mensagem = $_POST["mensagem"];

    $para = "natielevitoria285@gmail.com";
    $assunto = "Mensagem do site VITRIX";

    $corpo = "Nome: $nome\nEmail: $email\nMensagem:\n$mensagem";

    $cabecalhos = "From: $email" . "\r\n" .
        "Reply-To: $email" . "\r\n" .
        "X-Mailer: PHP/" . phpversion();

    if (mail($para, $assunto, $corpo, $cabecalho)) {
        echo "Mensagem enviada! Valeu :)";
    } else {
        echo "Deu ruim. Tenta de novo mais tarde.";
    }
}
