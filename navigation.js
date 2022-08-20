window.addEventListener('hashchange', navigate);
headerImg.addEventListener('click', () => {
  history.back();
})

function navigate (){
  body.style = `
    background-image: './assets/img/globos.jpg';`
    
  if (location.hash.startsWith('#alphabet')) {
    startAlphabet();
  } else if (location.hash.startsWith('#syllables')){
    startSyllables();
  } else if (location.hash.startsWith('#stories')){
    startStories();
  } else if (location.hash.startsWith('#story=')){
    startReadStories();
  } else {
    starHome();
  }
  console.log(location.hash);
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
}

function startSyllables () {
  categoryContainer.classList.add('hide');
  gridAbecedario.classList.add('hide');
  storiesContainer.classList.add('hide');
  readStorieContainer.classList.add('hide');
  
  headerImg.src = './assets/img/silabas.jpg';
  headerTitle.innerText = 'Sílabas';
  syllablesDiv.classList.remove('hide');
}

function startStories (){
  categoryContainer.classList.add('hide');
  gridAbecedario.classList.add('hide');
  syllablesDiv.classList.add('hide');
  readStorieContainer.classList.add('hide');
  
  headerImg.src = './assets/img/cuentos.jpg';
  headerTitle.innerText = 'Cuentos';
  storiesContainer.classList.remove('hide');
}

function startReadStories (){
  categoryContainer.classList.add('hide');
  gridAbecedario.classList.add('hide');
  syllablesDiv.classList.add('hide');
  storiesContainer.classList.add('hide');
  
  headerImg.src = './assets/icon/back.png';
  // se escribe en en la creancion de cuento
  readStorieContainer.classList.remove('hide');
  body.style.background = 'white';
}
