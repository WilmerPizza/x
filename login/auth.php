<?php
session_start();

$usuarios = [
    'admin' => '123456', // Usuário padrão para login
];

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $action = $_POST['action'];
    $username = $_POST['username'];
    $password = $_POST['password'];

    if ($action == 'register') {
        // Armazenar novo usuário no cookie (apenas para fins didáticos)
        $usuariosSalvos = isset($_COOKIE['usuarios']) ? json_decode($_COOKIE['usuarios'], true) : [];
        $usuariosSalvos[$username] = $password;
        
        // Configura o cookie com o novo usuário (expira em 30 dias)
        setcookie('usuarios', json_encode($usuariosSalvos), time() + (30 * 24 * 60 * 60), "/");
        
        echo "Usuário cadastrado com sucesso! <a href=' ../index.php'>Faça login</a>";
    } elseif ($action == 'login') {
        // Verificar login utilizando os usuários salvos no cookie
        $usuariosSalvos = isset($_COOKIE['usuarios']) ? json_decode($_COOKIE['usuarios'], true) : [];
        $todosUsuarios = array_merge($usuarios, $usuariosSalvos);
        
        if (isset($todosUsuarios[$username]) && $todosUsuarios[$username] == $password) {
            $_SESSION['logado'] = true;
            header('Location: ../page/index.php');
        } else {
            echo "Usuário ou senha incorretos! <a href='../page/404.php'>Tente novamente</a>";
        }
    }
}
?>
