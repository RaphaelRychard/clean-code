/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react"
import { Footer } from "./components/footer"
import { Header } from "./components/header"


import * as Input from './components/input'

// 1 - Quando eu tenho algo repetitivo
// 2 - Quando eu consigo isolar algo do seu contexto (sem prejudicar o comportamento original)

/* 
  ### Components puros -> 
    ## funções puras
      - são funções que não depende do seu meio, do seu contexto, de informações externas nem de side effects chamadas API
      - são funções que elas dependem apenas dos paramentos enviados para ela e com esses parâmetros ela consegue fazer tudo aquilo que ela precisa fazer e devolver uma resposta, assim ela não depende  de nenhum meio externo que pode mudar essa função
      - quando for separar em um component cuidado para não levar muita logica que torna esse componente inutilizarem em outros contextos da sua aplicação
    ## Padrões de funções e evento listem 
      - handle, on:
        ### Quando uso handle: 
          - sempre que eu for criar uma função dentro do meu component e essa função é disparada através de um evento do usuário como: click, submit
          - com isso eu consigo diferenciar com facilidade as funções enviadas a partir de um evento do usuário de funções que são apenas axilares que são para fazer algum tipo de calculo, operação, chamadas API ...
        
        ### Quando usar ON:
          - quando eu crio um componente e esse component precisa receber uma função que é disparada a partir de um evento do usuário, ou seja, eu estou recebendo um parâmetro que é uma função que vai ser disparada através de um evento do usuário, assim como temos a qui a adição de um novo TODO, eu sempre inicio essas funções com ON.
          - assim como exemplo o onClique
    ## condicionais dentro do render
      - evite colocar muitas operações javascript dentro do seu render, tetar manter o máximo possível na camada anterior ao return

  
*/  

function App() {
  const [todos, setTodo] = useState<string[]>([])
  
  useEffect(() => {
    // carrega uma lista de todos do back-end
  }, [])

  function handleCreateNewTodo() {

  }

  const isTodoListEmpty = todos.length === 0 

  return (
   <div>
      <Header onCreateNewTodo={() => {}} />

      <Input.Root>
        <Input.Label>Nome</Input.Label>
        <Input.Icon>Icons</Input.Icon>
        <Input.FormField />
        <Input.ErrorMessage message="Digite seu nome corretamente" />
      </Input.Root>

      <section>
        <div>
          <h3>Blazing fast</h3>
          <p>This to-do list app is insanely fast.</p>
        </div>

        <div>
          <h3>No CSS</h3>
          <p>Clean on flat design with no CSS.</p>
        </div>
      </section>

      <ul>
        {todos.map(todo => <li key={todo}>{todo}</li>)}
      </ul>

      {isTodoListEmpty && (
        <p>Nenhum TODO cadastrado</p>
      )}

      <Footer />
   </div>
  )
}

export default App
