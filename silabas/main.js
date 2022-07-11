
const srcSound = '../assets/sound/';
const soundFormat = '.m4a';

class Syllable {
  constructor(
    letter,
    letters
  ){
    this.letter = letter;
    this.letters = letters;
    
  }
  
  getSrcSoud(position) {
    //console.log(srcSound + name + soundFormat);
    return srcSound + this.letters[position].toLowerCase() + soundFormat;
    
  }
}

const syllables = [];

syllables.push(new Syllable('P', ['Pa', 'Pe', 'Pi', 'Po', 'Pu']));

syllables.push(new Syllable('M', ['Ma', 'Me', 'Mi', 'Mo', 'Mu']));

syllables.push(new Syllable('F', ['Fa', 'Fe', 'Fi', 'Fo', 'Fu']
  ));

syllables.push(new Syllable('R', ['Ra', 'Re', 'Ri', 'Ro', 'Ru']));

syllables.push(new Syllable('S', ['Sa', 'Se', 'Si', 'So', 'Su']));

const syllablesDiv = document.getElementById('silabas');

for (index in syllables) {
  let card = CreateElements(syllables[index]);
 
  syllablesDiv.appendChild(card);
}


function CreateElements(elemen) {
  
  const syllableCard = document.createElement('div');
  
  const letterP = document.createElement('p');
  letterP.setAttribute('class', 'silabas__letter');
  letterP.innerHTML = elemen.letter;
  
  const syllablesContainer = document.createElement('div');
  syllablesContainer.setAttribute('class', 'silabas__container');
  
  for (position in elemen.letters) {
    
    let syllable = document.createElement('div');
    syllable.innerHTML = elemen.letters[position];
    
    let audio = document.createElement('audio');
    audio.src = elemen.getSrcSoud(position);
    
    syllable.appendChild(audio);
    syllable.addEventListener('click', 
      function() {
        audio.play();
      }
    )
    
    syllablesContainer.appendChild(syllable);
  }
  
  syllableCard.appendChild(letterP);
  syllableCard.appendChild(syllablesContainer);
  
  return syllableCard;
}
