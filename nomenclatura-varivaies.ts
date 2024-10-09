// Nomenclatora de variáveis
//

const users = ['Raphael', 'Diego', 'Mayk']

const usersStartingWithLatterD = users.filter(user => {
  return user.startsWith('D')
})

// Evite nomes genéricos (data, response, list, args, params)

function getUser() {
  const user = getUsersFromDatabase()


  // validação
  // manipulação dos dados (mapping)

  return user
}

