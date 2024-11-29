// Classe Prato
class Prato {
    constructor(nome, tipo, descricao) {
        this.nome = nome;
        this.tipo = tipo;
        this.descricao = descricao; // Adiciona a descrição da receita
        this.ingredientes = [];
    }

    adicionarIngrediente(ingrediente) {
        this.ingredientes.push(ingrediente);
    }

    removerIngrediente(ingrediente) {
        this.ingredientes = this.ingredientes.filter(ing => ing.nome !== ingrediente.nome);
    }
}

// Classe Ingrediente
class Ingrediente {
    constructor(nome, quantidade) {
        this.nome = nome;
        this.quantidade = quantidade;
    }

    getNome() {
        return this.nome;
    }

    getQuantidade() {
        return this.quantidade;
    }
}

// Classe Filtro
class Filtro {
    filtrarPorTipo(listaPratos, tipo) {
        return listaPratos.filter(prato => prato.tipo === tipo);
    }

    filtrarPorIngrediente(listaPratos, ingrediente) {
        return listaPratos.filter(prato => prato.ingredientes.some(ing => ing.nome.toLowerCase().includes(ingrediente.toLowerCase())));
    }
}

// Criação da lista de pratos
let pratos = [
    new Prato("Torta de Limão", "doce", `
    <h4>Ingredientes da Massa:</h4>
    <ul>
        <li>4 ovos</li>
        <li>2 xícaras de chá de farinha de trigo</li>
        <li>1 xícara de chá de açúcar</li>
        <li>1 xícara de chá de leite</li>
        <li>2 colheres de sopa de margarina ou manteiga sem sal</li>
        <li>2 colheres de sopa de coco ralado</li>
        <li>1 colher de sopa de fermento em pó</li>
    </ul>
    <h4>Modo de Preparo:</h4>
    <ol>
        <li>No liquidificador, misture ovos, leite, margarina, açúcar e coco ralado. Bata até misturar bem.</li>
        <li>Adicione a farinha aos poucos e mexa com uma espátula. Acrescente fermento devagar.</li>
        <li>Espalhe a massa em uma forma untada e asse por 40 minutos ou até dourar.</li>
    </ol>`),

    new Prato("Frango Agridoce com Abobrinha e Parmesão", "salgado", `
    <h4>Ingredientes do Frango:</h4>
    <ul>
        <li>1 quilo de coxa e sobrecoxa de frango</li>
        <li>2 colheres de sopa de extrato de tomate</li>
        <li>2 colheres de sopa de azeite</li>
        <li>2 colheres de sopa de vinagre</li>
        <li>1 colher de sopa de mel</li>
        <li>Sal parrilla a gosto</li>
        <li>150 ml de suco de laranja</li>
        <li>1 colher de sopa de páprica defumada</li>
        <li>50g de manteiga derretida</li>
        <li>4 dentes de alho cortados em lâminas</li>
    </ul>
    <h4>Modo de Preparo:</h4>
    <ol>
        <li>Tempere o frango com todos os ingredientes e deixe marinar por 24 horas.</li>
        <li>Asse na brasa, pincelando com a mistura de manteiga e caldo restante.</li>
        <li>Grelhe abobrinhas com azeite e alho em pó, finalize com parmesão.</li>
    </ol>`),

    new Prato("Peixe com Limão e Alcaparras", "salgado", `
    <h4>Ingredientes:</h4>
    <ul>
        <li>2 postas de robalo (180g cada)</li>
        <li>2 colheres de sopa de manteiga</li>
        <li>1 colher de sopa de azeite</li>
        <li>1 limão-siciliano</li>
        <li>2-3 colheres de sopa de alcaparras</li>
        <li>Pimenta-do-reino branca moída</li>
        <li>1 dente de alho laminado</li>
    </ul>
    <h4>Modo de Preparo:</h4>
    <ol>
        <li>Aqueça o azeite e coloque as postas de peixe com o lado da pele para baixo.</li>
        <li>Adicione fatias de limão na frigideira. Após dourar, vire o peixe e adicione alcaparras e alho.</li>
        <li>Tampe e cozinhe por mais 6 minutos. Finalize com endro.</li>
    </ol>`),

    new Prato("Batata Assada Recheada", "salgado", `
        <h4>Ingredientes:</h4>
        <ul>
            <li>4 batatas grandes</li>
            <li>200g de bacon picado</li>
            <li>200g de queijo muçarela ralado</li>
            <li>1 colher de sopa de manteiga</li>
            <li>Sal e pimenta a gosto</li>
            <li>Cheiro-verde picado para decorar</li>
        </ul>
        <h4>Modo de Preparo:</h4>
        <ol>
            <li>Lave bem as batatas e faça furos com um garfo. Asse em forno pré-aquecido a 200°C por 45 minutos ou até ficarem macias.</li>
            <li>Enquanto isso, frite o bacon até dourar e reserve.</li>
            <li>Retire as batatas do forno, corte ao meio e retire parte da polpa com cuidado.</li>
            <li>Misture a polpa retirada com a manteiga, o bacon e metade do queijo. Tempere com sal e pimenta.</li>
            <li>Recheie as batatas com essa mistura, cubra com o restante do queijo e leve ao forno para gratinar.</li>
            <li>Decore com cheiro-verde antes de servir.</li>
        </ol>
    `),

    new Prato("Mousse de Chocolate Vegano", "doce", `
        <h4>Ingredientes:</h4>
        <ul>
            <li>170 gramas de tofu mole</li>
            <li>3 colheres de sopa de xarope de bordo</li>
            <li>2 colheres de sopa de cacau em pó amargo</li>
            <li>1 colher de chá de pasta de baunilha</li>
            <li>40 gramas de chocolate amargo 70%</li>
            <li>1 colher de sobremesa de licor de amêndoas</li>
            <li>2 colheres de sopa de leite de aveia</li>
            <li>1 figo (opcional)</li>
        </ul>
        <h4>Modo de Preparo:</h4>
        <ol>
            <li>Retire o excesso de água do tofu envolvendo com um papel toalha e pressionando bem.</li>
            <li>Em um processador, coloque o tofu, o leite de aveia, o xarope de bordo, o licor, a baunilha e o cacau em pó. Processe até ficar bem cremoso.</li>
            <li>Derreta o chocolate e espere chegar à temperatura ambiente.</li>
            <li>Acrescente o chocolate derretido ao creme no processador e bata um pouco mais.</li>
            <li>Transfira o creme para um saco de confeiteiro com bico pitanga e sirva na taça de sua preferência.</li>
            <li>Deixe descansar na geladeira por pelo menos 30 minutos antes de servir.</li>
            <li>Finalize com uma fatia de figo fresco e sirva a seguir.</li>
        </ol>
    `),

    new Prato("Sablée de Pistache com Creme Mascarpone e Frutas", "doce", `
        <h4>Ingredientes - Sablée de Pistache:</h4>
        <ul>
            <li>150 gramas de farinha de trigo</li>
            <li>40 gramas de açúcar de confeiteiro</li>
            <li>1 pitada de sal</li>
            <li>80 gramas de manteiga bem fria cortada em cubos</li>
            <li>45 gramas de farinha de pistache</li>
            <li>1 gema de ovo</li>
            <li>1 colher de sopa cheia de água gelada</li>
        </ul>
        
        <h4>Ingredientes - Creme Mascarpone:</h4>
        <ul>
            <li>200 gramas de mascarpone (ou ricota cremosa fresca, ou cream cheese)</li>
            <li>50 mililitros de creme de leite fresco</li>
            <li>30 gramas de açúcar de confeiteiro</li>
            <li>Baunilha em pasta, favas ou essência (ou raspas de limão, conhaque ou cachaça)</li>
        </ul>
        
        <h4>Ingredientes - Cobertura:</h4>
        <ul>
            <li>Frutas vermelhas ou frutas frescas a gosto</li>
            <li>Doce de leite cremoso a gosto</li>
        </ul>
        
        <h4>Modo de Preparo - Sablée de Pistache:</h4>
        <ol>
            <li>Misture a farinha de trigo, açúcar de confeiteiro e sal em um bowl.</li>
            <li>Adicione a manteiga fria e misture com as mãos até formar uma farofa.</li>
            <li>Incorpore a farinha de pistache, gema de ovo e a água gelada. Misture até formar uma massa homogênea.</li>
            <li>Embrulhe a massa em filme plástico e leve à geladeira por 30 minutos.</li>
            <li>Abra a massa e forre uma forma. Asse em forno pré-aquecido a 180°C até dourar levemente.</li>
        </ol>
        
        <h4>Modo de Preparo - Creme Mascarpone:</h4>
        <ol>
            <li>Bata o mascarpone com o creme de leite fresco até obter uma textura suave e cremosa.</li>
            <li>Adicione o açúcar de confeiteiro e a baunilha (ou a substituição escolhida) e misture bem.</li>
        </ol>
        
        <h4>Montagem:</h4>
        <ol>
            <li>Após a massa esfriar, espalhe o creme mascarpone sobre a base de sablée.</li>
            <li>Decore com frutas vermelhas ou frutas frescas a gosto e finalize com doce de leite cremoso.</li>
        </ol>
    `),

    new Prato("Bolo Invertido de Abacaxi", "doce", `
        <h4>Ingredientes:</h4>
        <ul>
            <li>1/2 abacaxi</li>
            <li>1 xícara de chá de açúcar</li>
            <li>1/2 xícara de chá de água</li>
        </ul>
    
        <h4>Modo de Preparo:</h4>
        <ol>
            <li>Lave, descasque e corte o abacaxi ao meio no sentido do comprimento.</li>
            <li>Corte uma das metades ao meio novamente, formando duas tiras. Reserve a outra metade na geladeira por até 3 dias.</li>
            <li>Remova o miolo das tiras (que pode ser usado em outra receita ou consumido depois) e corte as tiras em fatias de 8 mm.</li>
            <li>Em uma panela pequena, misture o açúcar com a água, evitando agitar para não espirrar na lateral da panela.</li>
            <li>Leve ao fogo médio por cerca de 10 minutos, até formar um caramelo claro, sem mexer para evitar a cristalização do açúcar.</li>
            <li>Transfira a calda para uma fôrma retangular (30x20 cm), espalhando a calda para cobrir todo o fundo enquanto ainda está quente.</li>
            <li>Distribua as fatias de abacaxi sobre a calda, lado a lado, até cobrir toda a fôrma. Reserve.</li>
        </ol>
    `),

    new Prato("Carne Assada na Pressão Marinada na Cerveja", "salgado", `
        <h4>Ingredientes:</h4>
        <ul>
            <li>1,2 kg de lagarto redondo</li>
            <li>2 colheres de sopa de molho inglês</li>
            <li>2 colheres de sopa de molho shoyu</li>
            <li>15 g de mostarda amarela</li>
            <li>1 colher de sopa de sal</li>
            <li>Pimenta-do-reino a gosto</li>
            <li>300 ml de cerveja clara</li>
            <li>2 colheres de sopa de óleo</li>
            <li>1 cebola grande picadinha</li>
            <li>3 dentes de alho picadinhos</li>
            <li>2 folhas de louro</li>
            <li>3 tomates picados</li>
            <li>180 g de linguiça calabresa cortada em rodelas</li>
            <li>1 colher de sopa de extrato de tomate</li>
            <li>1 colher de café de pimenta-dedo-de-moça picada sem sementes</li>
            <li>Cheiro-verde picadinho a gosto</li>
        </ul>
    
        <h4>Modo de Preparo:</h4>
        <ol>
            <li>Tempere o lagarto com molho inglês, shoyu, mostarda, sal, pimenta-do-reino e cerveja clara. Deixe marinar por 6 horas ou de um dia para o outro.</li>
            <li>Retire a carne da marinada, seque levemente e doure numa panela de pressão aquecida com óleo, pingando água conforme necessário. Reserve.</li>
            <li>Na mesma panela, refogue a cebola, alho, pimenta-dedo-de-moça até dourar.</li>
            <li>Adicione a carne dourada, folhas de louro, tomates picados, extrato de tomate e o líquido da marinada.</li>
            <li>Complete com água até quase cobrir a carne. Tampe a panela de pressão e cozinhe por 40 minutos após pegar pressão.</li>
            <li>Retire a carne, fatie e volte para o molho junto com a linguiça calabresa. Cozinhe até o molho engrossar.</li>
            <li>Finalize com cheiro-verde picadinho e sirva.</li>
        </ol>
    `),

    new Prato("Galinha Ensopada", "salgado", `
        <h4>Ingredientes:</h4>
        <ul>
            <li>1 frango inteiro</li>
            <li>1/2 xícara de chá de óleo</li>
            <li>1 xícara de chá de vinagre</li>
            <li>1 colher de sopa de azeite de dendê</li>
            <li>5 dentes de alho descascados e socados</li>
            <li>1 e 1/2 tomate picado</li>
            <li>1 e 1/2 cebola picada</li>
            <li>1/2 pimentão picado</li>
            <li>2 pimentas-de-cheiro picadas</li>
            <li>1/2 maço de salsinha</li>
            <li>1 colher de sopa de colorau dissolvido em 1/2 xícara de chá de água</li>
            <li>Sal a gosto</li>
        </ul>
    
        <h4>Modo de Preparo:</h4>
        <ol>
            <li>Lave bem o frango com vinagre e água corrente.</li>
            <li>Em uma panela, coloque o óleo e o azeite de dendê e leve ao fogo para aquecer.</li>
            <li>Adicione o alho, tomate e cebola e refogue bem.</li>
            <li>Junte o pimentão e a salsinha e misture.</li>
            <li>Adicione o frango e refogue até dourar.</li>
            <li>Acrescente o colorau e a pimenta-de-cheiro e misture.</li>
            <li>Adicione água, mas não cubra totalmente o frango, e tempere com sal a gosto.</li>
            <li>Cozinhe por 30 minutos e sirva.</li>
        </ol>
    `),    

    new Prato("Kibe de Forno com Recheio", "saldado", `
        <h4>Ingredientes:</h4>
        <ul>
            <li>500 g de patinho moído</li>
            <li>500 g de trigo para kibe</li>
            <li>750 ml de água quente</li>
            <li>3 dentes de alho picados</li>
            <li>1 cebola picada</li>
            <li>4 colheres de sopa de hortelã picada</li>
            <li>1 colher de sobremesa de sal</li>
            <li>1 fio de azeite</li>
        </ul>
    
        <h4>Modo de Preparo:</h4>
        <ol>
            <li>Em um recipiente, coloque o trigo para kibe e a água quente. Deixe hidratar por 1 hora.</li>
            <li>Depois de hidratado, adicione a carne moída, alho, cebola picada, hortelã, sal e um fio de azeite.</li>
            <li>Misture e amasse bem para liberar o glúten do trigo e dar liga à massa. Reserve.</li>
        </ol>
    
        <h4>Ingredientes (Recheio):</h4>
        <ul>
            <li>1 fio de azeite</li>
            <li>1 cebola em rodelas</li>
            <li>500 g de requeijão cremoso</li>
        </ul>
    
        <h4>Modo de Preparo (Recheio):</h4>
        <ol>
            <li>Em uma panela, refogue a cebola em rodelas com um fio de azeite até dourar.</li>
            <li>Em um refratário untado com azeite, espalhe metade da massa de kibe e adicione a cebola refogada.</li>
            <li>Espalhe o requeijão cremoso por cima e cubra com o restante da massa de kibe.</li>
            <li>Faça riscos na superfície com uma faca e regue com bastante azeite.</li>
            <li>Leve para assar em forno preaquecido a 180°C por 30 minutos.</li>
        </ol>
    `),

    new Prato("Mousse de Chocolate com Arroz", "doce", `
        <h4>Ingredientes:</h4>
        <ul>
            <li>250 g de arroz bem cozido sem tempero</li>
            <li>1 xícara de chá de água quente (ou leite ou suco de fruta)</li>
            <li>300 g de chocolate meio amargo derretido</li>
            <li>1 pitadinha de sal</li>
            <li>Chocolate em pó a gosto para polvilhar</li>
        </ul>
    
        <h4>Modo de Preparo:</h4>
        <ol>
            <li>No liquidificador, coloque o arroz cozido e a água quente. Bata por cerca de 30 segundos.</li>
            <li>Adicione o chocolate derretido, uma pitadinha de sal e bata por mais 3 minutos, até formar uma mousse lisa. Se necessário, acrescente mais meia xícara de água quente enquanto bate.</li>
            <li>Desligue o liquidificador, raspe as laterais com uma espátula de silicone e transfira a mousse para uma tigela.</li>
            <li>Cubra com plástico-filme e leve à geladeira para gelar por aproximadamente 1 hora.</li>
            <li>Antes de servir, polvilhe chocolate em pó a gosto. Sirva e aproveite!</li>
        </ol>
    `),

    new Prato("Tiramisu com Licor de Café", "doce", `
        <h4>Ingredientes:</h4>
        <ul>
            <li>16 unidades de biscoito champagne</li>
            <li>250 mililitros de café forte</li>
            <li>1/4 de xícara de chá de licor de café</li>
            <li>300 gramas de queijo mascarpone</li>
            <li>3 gemas de ovos frescos</li>
            <li>60 gramas de açúcar</li>
            <li>40 mililitros de vinho marsala</li>
            <li>1 colher de chá de pasta de baunilha</li>
            <li>Raspas de meio limão-siciliano</li>
            <li>1 colher de chá de cacau em pó</li>
        </ul>
    
        <h4>Modo de Preparo (Creme):</h4>
        <ol>
            <li>Coloque uma panela para aquecer em banho-maria.</li>
            <li>Quebre os ovos separadamente e transfira para uma tigela. Adicione o açúcar, acomode sobre o banho-maria e bata até atingir 80°C.</li>
            <li>Desligue a batedeira, acrescente o vinho marsala e a baunilha. Bata até triplicar de volume.</li>
            <li>Em outra tigela, misture o mascarpone ao creme de ovos até ficar homogêneo.</li>
            <li>Leve à geladeira por 1 hora. Prepare o café e acrescente o licor de café. Reserve.</li>
        </ol>
    
        <h4>Modo de Preparo (Montagem):</h4>
        <ol>
            <li>Em uma travessa, distribua uma camada de biscoitos embebidos no café com licor, seguida de uma camada de creme de mascarpone.</li>
            <li>Polvilhe raspas de limão-siciliano.</li>
            <li>Repita o processo para a segunda camada, finalizando com cacau em pó.</li>
            <li>Resfrie por pelo menos 2 horas antes de servir.</li>
        </ol>
    `)


];

// Adicionando ingredientes aos pratos
pratos[0].adicionarIngrediente(new Ingrediente("Limão", "2 unidades"));
pratos[0].adicionarIngrediente(new Ingrediente("Farinha", "200g"));
pratos[1].adicionarIngrediente(new Ingrediente("Frango", "1kg"));
pratos[1].adicionarIngrediente(new Ingrediente("Mel", "1 colher de sopa"));
pratos[2].adicionarIngrediente(new Ingrediente("Peixe", "2 postas"));
pratos[2].adicionarIngrediente(new Ingrediente("Alcaparras", "3 colheres de sopa"));

// Função para aplicar o filtro
function aplicarFiltro() {
    const tipo = document.getElementById("tipoPrato").value;
    const ingrediente = document.getElementById("ingrediente").value;

    const filtro = new Filtro();
    let pratosFiltrados = filtro.filtrarPorTipo(pratos, tipo);

    if (ingrediente) {
        pratosFiltrados = filtro.filtrarPorIngrediente(pratosFiltrados, ingrediente);
    }

    exibirPratosFiltrados(pratosFiltrados);
}

// Função para exibir os resultados filtrados
function exibirPratosFiltrados(listaPratos) {
    const resultadoDiv = document.getElementById("resultadoFiltro");
    resultadoDiv.innerHTML = '';  // Limpa os resultados anteriores

    if (listaPratos.length === 0) {
        resultadoDiv.innerHTML = '<p>Nenhum prato encontrado.</p>';
    } else {
        listaPratos.forEach(prato => {
            const pratoDiv = document.createElement('div');
            pratoDiv.innerHTML = `
                <h3>${prato.nome}</h3>
                <p>Tipo: ${prato.tipo}</p>
                <div>${prato.descricao}</div>
            `;
            resultadoDiv.appendChild(pratoDiv);
        });
    }
}
