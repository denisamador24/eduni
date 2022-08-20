// decisiones visitadas 
let abcVisited = false;
let syllablesVisited = false;
let storiesVisited = false;
let readStoryVited = false;

cardAbedario.addEventListener('click', () => {
  if (!abcVisited) {
    startListAlphabet();
    abcVisited = true;
  }
  location.hash = '#alphabet';
});
cardSilabas.addEventListener('click', () => {
  if (!syllablesVisited){
    startListSyllables();
    syllablesVisited = true;
  }
  location.hash = '#syllables';
});
cardCuentos.addEventListener('click', () => {
  if (!storiesVisited){
    startListStories();
    storiesVisited = true;
  }
  location.hash = '#stories';
});

setInterval(timer, 1000);

