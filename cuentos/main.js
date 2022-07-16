//contenedor de la lista de cuentos en el HTML
const mainContainer = document.getElementById('stories');
const main = document.getElementById('main');
let saveMainContainer = ''

const urlImg = '../assets/img/'

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
  
  let cardCuento = document.createElement('div')
  
  let img = document.createElement('img')
  img.src = urlImg + cuento.img + '.jpg'
  cardCuento.appendChild(img)
  
  let nameP = document.createElement('p')
  nameP.innerHTML = cuento.name
  cardCuento.appendChild(nameP)
  
  cardCuento.addEventListener('click',() => {
    readStorie(cuento)
  })
 
  return cardCuento;
}

function readStorie (cuento) {
  
  let {name, img, content} = cuento;
  //guardar html para remplarza otra vista de leer cuento
  saveMainContainer = main.innerHTML;
  
  let divContentStorie = document.createElement('div');
  divContentStorie.setAttribute('class', 'contentStorie');
  
  let divPicture = document.createElement('div');
  divPicture.setAttribute('class', 'picture');
  let pictureImg = document.createElement('img');
  pictureImg.src = urlImg+img+'.jpg';
  let pictureP = document.createElement('p');
  pictureP.innerHTML = name;
  
  divPicture.appendChild(pictureImg);
  divPicture.appendChild(pictureP);
  
  let divContent = document.createElement('div');
  divContent.setAttribute('class', 'content');
  let contentP = document.createElement('p');
  contentP.innerHTML = content;
  
  divContent.appendChild(contentP);
  
  divContentStorie.appendChild(divPicture);
  divContentStorie.appendChild(divContent);
  
  main.innerHTML = '';
  main.appendChild(divContentStorie)
  //storieTransaction = cuento;
 // window.location.href = '/cuentos/leerCuento/'
}


