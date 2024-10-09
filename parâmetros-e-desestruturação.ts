// Rota para criação do usuário (nome, email, password)
// Controller (nome, email, password)
// Repositório (nome, email, password)

function crateUserRoute(body) {
  // validações

  createUserController(body)
}

// desestruturar 
// adicionar typescript aqui dentro até ia ajudar a dizer o que espero dentro de data, 
// mais o typescript só funciona em ambiente de dev, em prod o javascript não ia certificar que só tinha esses campos nome, email e password
// sempre que possível receba parâmetros em funções em formato de objetos e devolvo em informações da função em formato de objeto, é muito mais extensível, mais fáceis de ler, são nomeados e evita ter que refatorar o código no futuro por adicionar ou remover informação

function createUserController(data) {
  const { nome, email, password } = data

  userRepository.create({
    nome,
    email, 
    password
  })
}

const userRepository = {
  create (data) {
    // cria o usuário (nome, email, password)
  }
}