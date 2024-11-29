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
    <header>
        <nav>
            <ul>
                <li><a href="index.php">Início</a></li>
                <li><a href="receitas.php">Receitas</a></li>
                <li><a href="contato.php">Contatos</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <h2 class="filtrar">Filtrar Receitas</h2>

        <!-- Formulário para Filtrar -->
        <form id="filtroForm">
            <label for="tipoPrato">Tipo de Prato:</label>
            <select id="tipoPrato" name="tipoPrato">
                <option value="doce">Doce</option>
                <option value="salgado">Salgado</option>
            </select>

            <label for="ingrediente">Ingrediente:</label>
            <input type="text" id="ingrediente" name="ingrediente" placeholder="Digite o ingrediente">

            <button type="button" onclick="aplicarFiltro()">Filtrar</button>
        </form>

        <!-- Seção para Resultados -->
        <section id="resultadoFiltro">
            <!-- Resultados filtrados aparecerão aqui -->
        </section>
    </main>

    <footer>
        <p>&copy; 2024 Receitas do Chefe. Todos os direitos reservados.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
