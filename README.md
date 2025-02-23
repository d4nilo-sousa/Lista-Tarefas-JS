# Lista de Tarefas

Este é um projeto simples de uma lista de tarefas desenvolvido com HTML, CSS e JavaScript.



## Aparência 
![tela_inicial](https://github.com/user-attachments/assets/f9d9d083-15ec-4020-8a8a-1b5a741192ee)
Essa é a tela inicial da lista de tarefas! Ela é composta por um layout limpo e moderno, com um design centrado que facilita a usabilidade.

## Funcionalidades
- Adicionar tarefas.
- Marcar tarefas como concluídas.
- Remover tarefas.
- Salvar tarefas no localStorage.

## Medidas de Segurança
- **Proteção contra XSS (Cross-Site Scripting):**
  - O conteúdo inserido pelo usuário é escapado para evitar a execução de scripts maliciosos.
  - Uso de `textContent` em vez de `innerHTML` para adicionar tarefas à lista.
  - Sanitização de entradas para remover caracteres especiais que poderiam ser interpretados como HTML.

  ### código:
  ![Código](c:\Users\danil\Downloads\xss atack.png)

  ### Exemplo na lista:
  ![XSS atack](c:\Users\danil\Downloads\ataque_xss_exemplo.png)

## Como Usar
1. Clone o repositório.
2. Abra o arquivo `index.html` no seu navegador.
3. Adicione tarefas digitando no campo de texto e pressionando "Enter" ou clicando no botão "Adicionar".

## Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.
