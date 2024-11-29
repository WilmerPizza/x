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
    <video id="videoBG" autoplay muted loop>
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
        <section class="texto">
            <h2>Bem-vindo ao Receitas do Chef!</h2>
            <h2 class="explore">Explore receitas deliciosas feitas com carinho e tradição.</h2>
        </section>

        <!-- <section class="imagens-principais">
            <img src="assets/torta-de-limao.jpg.jpeg" alt="torta de limao">
            <img src="assets/frango.jpg.jpg" alt="Frango na brasa">
            <img src="assets/peixe.jpg.png" alt="Peixe com limão e alcaparras">
        </section> -->
        <section id="fotos">
            <ul class="galeria">
                <li id="foto01"><span>Bife Angus</span></li> 
                <li id="foto02"><span>Drinks</span></li>
                <li id="foto03"><span>Gnocchi</span></li>
                <li id="foto04"><span>Petit Gateau</span></li>
                <li id="foto05"><span>Sanduíche Natural</span></li>
                <li id="foto06"><span>Torta De Morango </span></li>
                <li id="foto07"><span>Bolo invertido de abacaxi</span></li>
                <li id="foto08"><span>Carne assada na pressão marinada na cerveja</span></li>
                <li id="foto09"><span>Galinha ensopada</span></li>
                <li id="foto10"><span>Kibe de forno recheado</span></li>
                <li id="foto11"><span>Mousse de chocolate com arroz</span></li>
                <li id="foto12"><span>Tiramissu</span></li>

            </ul>
        </section>

    </main>

    <footer>
        <p>&copy; 2024 Receitas do Chefe. Todos os direitos reservados.</p>
    </footer>
</body>

</html>