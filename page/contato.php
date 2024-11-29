<?php
session_start();
if (!isset($_SESSION['logado'])) {
    header('Location: ../page/404.php');
    exit();
}
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Receitas do Chefe</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="shortcut icon" href="assets/icone.ico" type="image/x-icon">
</head>
<body>
    <video id="videoBG" autoplay muted loop >           
        <source src="video-bg/cozinhando.mp4" type="video/mp4">
    </video>
    <!-- Cabeçalho -->
    <header>
        <nav>
            <ul>
                <li><a href="index.php">Início</a></li>
                <li><a href="receitas.php">Receitas</a></li>
                <li><a href="contato.php">Contatos</a></li>
            </ul>
        </nav>
    </header>

    <!-- Seção de Contato -->
    <section class="contato">
        <h2 class="h2-contato">Entre em contato conosco</h2>
        <p>Estamos aqui para ajudar! Entre em contato por e-mail, WhatsApp, telefone ou através do nosso site.</p>

        <!-- Informações de Contato -->
        <div class="contato-box">
            <div class="informacoes-contato">
                <h3>Informações de Contato</h3>
                <ul>
                    <li><strong>E-mail:</strong> <a href="mailto:contato@vovoonline.com">contato@receitasdochefe.com</a></li>
                    <li><strong>WhatsApp:</strong> <a href="https://wa.me/5599999999999" target="_blank">(11) 98765-4321</a></li>
                    <li><strong>Telefone:</strong> <a href="#">(11) 4002-8922</a></li>
                    <li><strong>Nosso site:</strong> <a href="https://www.vovoonline.com" target="_blank">www.receitasdochefe.com</a></li>
                </ul>
            </div>
            <h3>Envie-nos uma mensagem</h3>
            <!-- Formulário de Contato -->
            <div class="formulario-contato">
            
                <form action="enviar-contato.php" method="POST">
                    <label for="nome">Nome:</label>
                    <input type="text" id="nome" name="nome" required>
                    <label for="email">E-mail:</label>
                    <input type="email" id="email" name="email" required>
                    <label for="mensagem">Mensagem:</label>
                    <textarea id="mensagem" name="mensagem" rows="5" required></textarea>
                    <button type="submit">Enviar</button>
                </form>
            </div>
            
        </div>
    </section>

    <!-- Rodapé -->
    <footer>
        <p>&copy; 2024 Receitas do Chefe. Todos os direitos reservados.</p>
    </footer>

</body>
</html>