//contenedor de la lista de cuentos en el HTML
const main = document.getElementById('main');

listCuentos()

function listCuentos() {
  const mainContainer = document.createElement('div');
  mainContainer.setAttribute('id', 'stories')
  //recorer lista de cuentos en el archivo 'cuentos.js'
  for (cuento of cuentos) {
    let card = cardCuento(cuento)

    //agregar nuevo cuento al contenedor
    mainContainer.appendChild(card)
  }
  
  main.appendChild(mainContainer)
}

//crear card del cuento y componentes
function cardCuento(cuento) {

  let cardCuento = document.createElement('div')

  cardCuento.innerHTML = `
    <img src="${cuento.img}">
    <p>${cuento.name}</p>
  `

  cardCuento.addEventListener('click', () => {
    readStorie(cuento)
  })

  return cardCuento;
}

function readStorie(cuento) {

  let { name, img, content } = cuento;

  //crear cotenedor para leer cuento
  let divContentStorie = `
    <div class="contentStorie">
    
      <div class="title">
        <div id="back">
          <img src="../assets/icon/back.png">
        </div>
        <p>${name}</p>
      </div>
    
      <div class="picture">
        <img src="${img}">
      </div>
      
      <div class="content">
        <p>${content}</p>
      </div>
      
    </div>
  `
  //guardar lista de cuento del main para remplazar el contenido del cuento para leer
  main.innerHTML = divContentStorie
  let body = document.getElementById('body')
  body.setAttribute('class', 'body')
  
  const backArrow = document.getElementById('back')
  backArrow.addEventListener('click', () => {
   main.innerHTML = ''
   body.setAttribute('class', '')
   listCuentos()
  })
}
