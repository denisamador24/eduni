//contenedor de la lista de cuentos en el HTML
const mainContainer = document.getElementById('stories');

listCuentos()

function listCuentos() {
  
  //recorer lista de cuentos en el archivo 'cuentos.js'
  for (cuento of cuentos){
    let card = cardCuento(cuento)
    
    //agregar nuevo cuento al contenedor
    mainContainer.appendChild(card)
  }
}

//crear card del cuento y componentes
function cardCuento(cuento) {
  let urlImg = '../../assets/img/'
  
  let cardCuento = document.createElement('div')
  
  let img = document.createElement('img')
  img.src = urlImg + cuento.img + '.jpg'
  cardCuento.appendChild(img)
  
  let nameP = document.createElement('p')
  nameP.innerHTML = cuento.name
  cardCuento.appendChild(nameP)
  
  cardCuento.addEventListener('clicl', readStorie)
  
  return cardCuento;
}

function readStorie () {
  console.log('hello')
}
