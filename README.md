

# - Projeto Extra Driven Education Bootcamp 
  - ### (Para quem quiser fazer - Não obrigatório)
	- Apenas desktop.
	
	
### Você pode acessar a aplicação neste link:
  ### - <a href="https://filipetenedini.github.io/fashionDriven/"> Fashion Driven </a>
<br><br><br>
<p align="center">
  |&nbsp;&nbsp;&nbsp<a href="#Projeto">Projeto</a>&nbsp;&nbsp;
  |&nbsp;&nbsp;&nbsp<a href="#Tecnologias">Tecnologias</a>&nbsp;&nbsp;
  |&nbsp;&nbsp;&nbsp<a href="#Aprendizados">Aprendizados</a>&nbsp;&nbsp;&nbsp;&nbsp;
</p>
<br><br>

<div align="center">
	
![image](https://user-images.githubusercontent.com/105571583/215667822-c560961c-2ea6-4210-bc2b-54e20e3eedd2.png)
	
</div>

<h1 id="Projeto"> 💻 Projeto</h1>

<h3>- Requisitos passados </h3>
<p align="center">
  |&nbsp;&nbsp;&nbsp;<a href="#API">API</a>&nbsp;&nbsp;&nbsp;|
</p>
<details>
<summary>    
- Geral
</summary>

- [ ]  Não utilize nenhuma biblioteca para implementar este projeto (jquery, lodash, react, etc), nem outras linguagens que compilem para JS (TypeScript, ELM, etc), somente JavaScript puro.
- [ ]  Seu projeto deverá ser desenvolvido utilizando Git e GitHub, em um repositório público.
- [ ]  A cada requisito implementado faça um commit com uma mensagem descritiva do que você evoluiu.
  
 </details>
 
<details>
<summary>    
- Layout
</summary>

  - [ ]  Aplicar layout para desktop seguindo o Figma fornecido.
 
 </details>
 
 <details>
<summary>    
- Montar blusa
</summary>

- [ ]  Ao entrar no sistema, deve ser perguntado o nome da pessoa através de um `prompt()`.
- [ ]  O usuário deve selecionar obrigatoriamente e somente 1 tipo de modelo, gola e tecido. Que deve ficar destacado conforme *layout*.
- [ ]  O usuário deve preencher obrigatoriamente um campo de texto para colocar um link para uma imagem de referencia.

</details>

<details>
<summary>
- Encomenar blusa
</summary

- [ ]  Somente após preencher todas as informações acima o botão "confirmar" deve ficar clicável.
- [ ]  Após clicar no botão deve mostrar um `alert()` confirmando a encomenda.
- [ ]  Caso a requisição seja de sucesso a encomenda é confirmada.
- [ ]  Caso a requisição seja com erro deve mostrar a mensagem "Ops, não conseguimos processar sua encomenda".

 </details>
 
 <details>
 <summary>
- Mostrar blusas encomendadas recentemente
 </summary>

- [ ]  Assim que abrir a página deve mostrar as ultimas 10 blusas, mostrando o criador da blusa, conforme o *layout*.
- [ ]  Assim que uma blusa for criada pelo usuário, deve atualizar a lista de últimos pedidos.

 </details>  


 <details>
 <summary>
- Encomendar blusa criada por alguém
 </summary>

- [ ]  Ao clicar em uma blusa na lista "últimos pedidos" deve aparecer um confirm() e caso o usuário aceite. Deve fazer uma encomenda com os dados da blusa clicada. 

 </details>  
 

 <h2 id="API"> 💻 Projeto - API </h2>

<details>
<summary>    
- Receber modelos de camiseta
</summary>

- Para receber os modelos de camisetas do servidor faça uma requisição get para:
    
    ```jsx
    https://mock-api.driven.com.br/api/v4/shirts-api/shirts
    ```
    
- Você irá obter:
    
    
```jsx

[
  {
    "id": number,
    "model": string,
    "neck": string,
    "material": string,
    "image": string,
    "owner": string,
    "author": string
  }
]

```


</details>

<details>
<summary>    
 - Enviar modelo de camiseta
</summary>

- Para enviar o modelo de camiseta criada para o servidor envia uma requisição post para:
    
```jsx
https://mock-api.driven.com.br/api/v4/shirts-api/shirts
```
    
- Enviando um objeto no formato enviando o nome do usuário que foi pedido ao entrar na página.
    
    
```jsx
    
{
  "model": "t-shirt" | "long" | "top-tank",
  "neck": "v-neck" | "round" | "polo",
  "material": "silk" | "cotton" | "polyester",
  "image": string no formato de url,
  "owner": string,
  "author": string
}    

```
    
- Ao enviar um corpo num formato errado, a API responde com status `422` e detalha o que aconteceu de errado no corpo da resposta.
- Se tudo der certo, a API responde com status `201` com o objeto criado no corpo da resposta.

</details>
 
<h1 id="Tecnologias">🚀 Tecnologias</h1>

Esse projeto foi desenvolvido com as seguintes tecnologias:

- HTML e CSS
- JavaScript Vanilla


<h1 id="Aprendizados">🧠 Aprendizados</h1>

- Requisição a API
	- Pude aprender como renderizar dados trazidos do servidor bem como enviar dados para o servidor
	- Utiizei requisição nativa do javascript fetch()
- Aprendi sobre storages e apliquei área do cliente utilizando localStorage
