# O que é clean code

- legibilidade: Código de fácil leitura e não quer dizer que o código é simples e sim que mesmo com código complexo é de fácil leitura a pessoa consegue ler ee entender o código;
- Se o código não form manutenível não é código limpo;
- Para conseguir dar manutenção em um código limpo eu preciso ter duas coisa: previsibilidade e confiança;
  - se um pessoa consegue ler o código, fazer manutenção mais não tem confiança e previsibilidade talvez o código não seja limpo;
- Se uma pessoa consegue ler o nosso código e realizar manutenção com confiança e previsibilidade, então nosso código é um código limpo;

# O que não é clean code 
-  clean code não é um manua e não é um livro, clean code é muito mais que tu constrói com anos de aprendizado, com uma alto critica constate em times. Mas não é teoria;
-  Código limpo, nasce a partir de muito código ruim;
-  Clean code não é estrutura de pastas;
-  Clean node não tem nada a aver com código menor, muita das vezes um código maior é muito melhor que um código menor;
-  clean code não tem nada ver com arquitetura do seu software, mas claro que uma desses praticas pode ajudar o seu código ficar mais manutenível;
-  clean code não tem nada a ver com a performance;
   
# Clean code é
- Legibilidade
- Manutenção 
- Previsibilidade 
- Confiança
    
### Dica: Seu projeto vai creaser e não se preocupa com o tamanho dele


- Revisão
- Refatoração: Se não fizer de forma constate a chance de seu código ficar sujo é muito grande


### Princípios do código limpo
- Teste
- Revisão
- Refatoração
- Simplicidade isso quer dizer mantenha o código o mais simples possível e só traga complexidade se realmente for necessário; e"KISS" significa "Keep It Simple, Stupid", que em português seria "Mantenha isso Simples, Idiota".
- Iterações curtas, caso uma funcionalize for muito grande quebra em pequenas partes para para enviar para revisão ao invés de um codilho com mais de 100 linhas, pq ninguém aguenta ficar revisando um código muito grande

## Nomenclatura de variáveis
- evite diminutivos 
- nomes claraS 
- nomes mesmo que grandes mais descritivos

## Nomenclatura de Booleans
- Variáveis que armazena estados da aplicação
- Booleans sempre faz como se fosse uma pergunta em um aplicação
- is, does, has
- Booleans sempre como perguntas / semânticas
- Evite variáveis genéricas como: loading, disabled, fetching, list  
- Booleans como perguntas

## Causa VS Efeito
- Sempre deve ser criado a variável pela causa e **nunca pelo pelo efeito**
- nomes com base no efeito que aquela variável via ter e não pela cousa: Exemplo 
  ``` jsx
  function Button () {
    // Sempre deve ser criado a variável pela causa e nunca pelo pelo efeito
    const isFormSubmitting = true

    return (
      <button disabled={isFormSubmitting}>
        <span></span>
        {isFormSubmitting ? 'Carregando...' : 'enviar'}
      </button>
    )
  }

  ```

## Regras en condicionais
-  ### Negação dentro de ifs
    -  Sempre que possível evite negações
    -  sempre que possível escreva condicionais sem negação
    -  negação atrapalha pq muitas vezes tem que trocar o operador
    -  tenta escrever varáveis auxiliares, escrever outras variáveis que façam que a nossa condicional não precisa de negação
    ``` ts
      const isUserYoungerThan18Years = true
      const doesUserLivesOutsideBrasil = true


      if(isUserYoungerThan18Years && doesUserLivesOutsideBrasil) {

      }
    ```
  
-  ### Early return vs else
   -  quando utilizar o else?
   -  normalmente quando o Early return não é facilmente visto no código, exemplo: no caso seria quanto tenho vários ifs aninhados 
   ```  ts
      function isUserOlderThan18Years (user) {
      if (!user) {
          return { error: true }
        }
        
        return user.age >= 18
      }
   ``` 
  
- ### Evite condicionais aninhadas
  - **nunca** optar por condicionais aninhadas como exemplo abaixo
    ``` ts
      user.age >= 18 ?  user.age === 18 ? : :

      if(user.age > 18) {
        if() {

        }
      }
    ```
    ---
  - E optar a **fazer isso**
    ```  ts
      // optar a fazer isso
      if(user.age > 18) {

      }

      if() {

        
      }
    ```

## Parâmetros e Desestruturação

- Sempre que possível, **receba parâmetros em funções no formato de objetos** e **retorne informações também no formato de objeto**. Isso torna o código mais extensível, legível e fácil de manter.

- Usar **TypeScript** ajuda a definir quais campos são esperados dentro de um objeto (como `nome`, `email`, `password`), mas é importante lembrar que TypeScript só realiza essas validações durante o desenvolvimento. Em produção, o JavaScript não faz esse tipo de validação, então as verificações manuais ainda são necessárias.

  ### Exemplo:

  ```ts
    // Função que recebe um objeto como parâmetro e desestrutura suas propriedades
    function createUserController(data) {
      const { nome, email, password } = data;

      userRepository.create({
        nome,
        email,
        password,
      });
    }

    // Repositório para criar um usuário
    const userRepository = {
      create(data) {
        // Lógica para criação do usuário com os campos (nome, email, password)
      },
    };
  ``` 


## Comentários

- Comentários não é a mesma coisa que documentação;
- se vc ta adicionado cometários para informar o que o código faz ai é um erro;
- o código por si só já deveria dizer isso ou você deveria ter uma documentação expecializada para dizer pq aquela regra de negócios está ali, ter diagrams de sequencias, diagramas de caso de uso para  explicar como aquilo funcionar, especialmente em regras de negócios mais complexas agente tem esses tipos de diagrams;
- comentário não é documentação;
- comentário serve muito mais como aviso para a proxima pessoa que vai olhar aquele código, di pq da coisa que foi feita foi feita da forma que foi feita, por alguma limitação, por algum problema da biblioteca, por algum erro, ou para sinalizar algum padrão seguido de alguma forma diferente para que a próxima pessoa saiba como agir naquela determinada momento;
- comentário é ok de você ter mais documentação não é legal de ter dentro de comentário;
- exemplo: é muito comum agente vai usar uma biblioteca mais quando vai usar uma determinada funcionalidade da biblioteca e aquela funcionalidade está com algum probleminha, ai agente tem que escrever o código diferente para contornar esse problema;
  ``` ts

    '/**
     * Esse código foi escrito assim porque a biblioteca X ainda não suporta Y
     *
     * https://github.com/author/X/issues/12323232
     */

    // código
  
  ```
****
