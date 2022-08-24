window.addEventListener('hashchange', navigate);
window.addEventListener('DOMContentLoaded', navigate);
headerImg.addEventListener('click', () => {
  saveScroll();
  history.back();
});
let positionSection = 0;
let scrollTopAbc = 0;
let scrollTopAbcEnglish = 0;
let scrollTopSyllable = 0;
let scrollTopStories = 0;

function navigate (){
  saveScroll();
  hideAll();
  
  if (location.hash == '#alphabet') {
    positionSection = 1;
    startAlphabet();
    
  } else if (location.hash == '#alphabet-english') {
    positionSection = 2;
    startAlphabetEnglish();
    
  } else if (location.hash == '#syllables'){
    positionSection = 3;
    startSyllables();
    
  } else if (location.hash == '#stories'){
    positionSection = 4;
    startStories();
    
  } else if (location.hash.startsWith('#story=')){
    positionSection = 5;
    startReadStories();
    
  } else {
    positionSection = 0;
    starHome();
  }
}

function saveScroll (){
  if (positionSection == 1){
    scrollTopAbc = bodyMain.scrollTop;
    
  } else if (positionSection == 2){
    scrollTopAbcEnglish = bodyMain.scrollTop;
  
  } else if (positionSection == 3){
    scrollTopSyllable = bodyMain.scrollTop;
    
  } else if (positionSection == 4) {
    scrollTopStories = bodyMain.scrollTop;
  }
}

function starHome (){
  headerImg.src = './assets/img/logo.jpg';
  headerTitle.innerText = 'EDUNI';
  categoryContainer.classList.remove('hide');
}

function startAlphabet (){
  headerImg.src = './assets/img/abecedario.png';
  headerTitle.innerText = 'Abecedario';
  gridAbecedario.classList.remove('hide');
  bodyMain.scrollTop = scrollTopAbc;
}

function startAlphabetEnglish (){
  headerImg.src = './assets/img/abecedario.png';
  headerTitle.innerText = 'Abecedario Inglés';
  alphabetEnglish.classList.remove('hide');
  bodyMain.scrollTop = scrollTopAbcEnglish;
}

function startSyllables () {
  headerImg.src = './assets/img/silabas.jpg';
  headerTitle.innerText = 'Sílabas';
  syllablesDiv.classList.remove('hide');
  bodyMain.scrollTop = scrollTopSyllable;
}

function startStories (){
  body.classList.remove('background-white');
  body.classList.add('background-image');
  
  headerImg.src = './assets/img/cuentos.jpg';
  headerImg.classList.remove('back-img');
  headerTitle.innerText = 'Cuentos';
  storiesContainer.classList.remove('hide');
  bodyMain.scrollTop = scrollTopStories;
}

function startReadStories (){
  headerImg.src = './assets/icon/back.png';
  headerImg.classList.add('back-img');
  // se escribe en en la creancion de cuento
  readStorieContainer.classList.remove('hide');
  body.classList.remove('background-image');
  body.classList.add('background-white');
  bodyMain.scrollTop = 0;
}

function hideAll (){
  categoryContainer.classList.add('hide');
  gridAbecedario.classList.add('hide');
  alphabetEnglish.classList.add('hide');
  syllablesDiv.classList.add('hide');
  storiesContainer.classList.add('hide');
  readStorieContainer.classList.add('hide');
}
