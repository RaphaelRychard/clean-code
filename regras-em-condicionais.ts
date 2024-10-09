// negação dentro de ifs
// Sempre que possível evite negações
// sempre que possível escreva condicionais sem negação
// negação atrapalha pq muitas vezes tem que trocar o operador
// tenta escrever varáveis auxiliares, escrever outras variáveis que façam que a nossa condicional não precisa de negação

const isUserYoungerThan18Years = true
const doesUserLivesOutsideBrasil = true


if(isUserYoungerThan18Years && doesUserLivesOutsideBrasil) {

}

// Early return vs else

function isUserOlderThan18Years (user) {
if (!user) {
    return { error: true }
  }
  
  return user.age >= 18
}

// quando utilizar o else?
// normalmente quando o Early return não é facilmente visto no código


// Evite condicionais aninhadas

// nunca fazer
user.age >= 18 ?  user.age === 18 ? : :

if(user.age > 18) {
  if() {

  }
}

optar por fazer

if(user.age > 18) {

}

if() {

  
}