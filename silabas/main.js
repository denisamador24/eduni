
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

syllables.push(new Syllable('B', ['Ba', 'Be', 'Bi', 'Bo', 'Bu']));

syllables.push(new Syllable('C', ['Ca', 'Ce', 'Ci', 'Co', 'Cu']));

syllables.push(new Syllable('D', ['Da', 'De', 'Di', 'Do', 'Du']));

syllables.push(new Syllable('G', ['Ga', 'Ge', 'Gi', 'Go', 'Gu']));

syllables.push(new Syllable('J', ['Ja', 'Je', 'Ji', 'Jo', 'Ju']));

syllables.push(new Syllable('S', ['Sa', 'Se', 'Si', 'So', 'Su']));

syllables.push(new Syllable('K', ['Ka', 'Ke', 'Ki', 'Ko', 'Ku']));

syllables.push(new Syllable('L', ['La', 'Le', 'Li', 'Lo', 'Lu']));

syllables.push(new Syllable('N', ['Na', 'Ne', 'Ni', 'No', 'Nu']));

syllables.push(new Syllable('T', ['Ta', 'Te', 'Ti', 'To', 'Tu']));


const syllablesDiv = document.getElementById('silabas');

for (syllable of syllables) {
  let card = CreateElements(syllable);
 
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
