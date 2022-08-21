window.addEventListener('hashchange', navigate);
headerImg.addEventListener('click', () => {
  saveScroll();
  history.back();
});
let positionSection = 0;
let scrollTopAbc = 0;
let scrollTopSyllable = 0;
let scrollTopStories = 0;

function navigate (){
  saveScroll();
  if (location.hash.startsWith('#alphabet')) {
    positionSection = 1;
    startAlphabet();
  } else if (location.hash.startsWith('#syllables')){
    positionSection = 2;
    startSyllables();
  } else if (location.hash.startsWith('#stories')){
    positionSection = 3;
    startStories();
  } else if (location.hash.startsWith('#story=')){
    positionSection = 4;
    startReadStories();
  } else {
    positionSection = 0;
    starHome();
  }
}

function saveScroll (){
  if (positionSection == 1){
    scrollTopAbc = bodyMain.scrollTop
  } else if (positionSection == 2){
    scrollTopSyllable = bodyMain.scrollTop;
  } else if (positionSection == 3) {
    scrollTopStories = bodyMain.scrollTop;
  }
}

function starHome (){
  gridAbecedario.classList.add('hide');
  syllablesDiv.classList.add('hide');
  storiesContainer.classList.add('hide');
  readStorieContainer.classList.add('hide');
  
  headerImg.src = './assets/img/logo.jpg';
  headerTitle.innerText = 'EDUNI';
  categoryContainer.classList.remove('hide');
}

function startAlphabet (){
  categoryContainer.classList.add('hide');
  syllablesDiv.classList.add('hide');
  storiesContainer.classList.add('hide');
  readStorieContainer.classList.add('hide');
  
  headerImg.src = './assets/img/abecedario.png';
  headerTitle.innerText = 'Abecedario';
  gridAbecedario.classList.remove('hide');
  bodyMain.scrollTop = scrollTopAbc;
}

function startSyllables () {
  categoryContainer.classList.add('hide');
  gridAbecedario.classList.add('hide');
  storiesContainer.classList.add('hide');
  readStorieContainer.classList.add('hide');
  
  headerImg.src = './assets/img/silabas.jpg';
  headerTitle.innerText = 'Sílabas';
  syllablesDiv.classList.remove('hide');
  bodyMain.scrollTop = scrollTopSyllable;
}

function startStories (){
  body.classList.remove('background-white');
  body.classList.add('background-image');
  categoryContainer.classList.add('hide');
  gridAbecedario.classList.add('hide');
  syllablesDiv.classList.add('hide');
  readStorieContainer.classList.add('hide');
  
  headerImg.src = './assets/img/cuentos.jpg';
  headerImg.classList.remove('back-img');
  headerTitle.innerText = 'Cuentos';
  storiesContainer.classList.remove('hide');
  bodyMain.scrollTop = scrollTopStories;
}

function startReadStories (){
  categoryContainer.classList.add('hide');
  gridAbecedario.classList.add('hide');
  syllablesDiv.classList.add('hide');
  storiesContainer.classList.add('hide');
  
  headerImg.src = './assets/icon/back.png';
  headerImg.classList.add('back-img');
  // se escribe en en la creancion de cuento
  readStorieContainer.classList.remove('hide');
  body.classList.remove('background-image');
  body.classList.add('background-white');
  bodyMain.scrollTop = 0;
}
