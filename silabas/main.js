function startListSyllables (){
  class Syllable {
    constructor(
      letter,
      letters
    ){
      this.letter = letter;
      this.letters = letters;
    }
  }
  
  const syllables = [];
  
  syllables.push(new Syllable('B', ['Ba', 'Be', 'Bi', 'Bo', 'Bu']));
  syllables.push(new Syllable('C', ['Ca', 'Ce', 'Ci', 'Co', 'Cu']));
  syllables.push(new Syllable('D', ['Da', 'De', 'Di', 'Do', 'Du']));
  syllables.push(new Syllable('F', ['Fa', 'Fe', 'Fi', 'Fo', 'Fu']
    ));
  syllables.push(new Syllable('G', ['Ga', 'Ge', 'Gi', 'Go', 'Gu']));
  syllables.push(new Syllable('J', ['Ja', 'Je', 'Ji', 'Jo', 'Ju']));
  syllables.push(new Syllable('K', ['Ka', 'Ke', 'Ki', 'Ko', 'Ku']));
  syllables.push(new Syllable('L', ['La', 'Le', 'Li', 'Lo', 'Lu']));
  syllables.push(new Syllable('M', ['Ma', 'Me', 'Mi', 'Mo', 'Mu']));
  syllables.push(new Syllable('N', ['Na', 'Ne', 'Ni', 'No', 'Nu']));
  syllables.push(new Syllable('P', ['Pa', 'Pe', 'Pi', 'Po', 'Pu']));
  syllables.push(new Syllable('R', ['Ra', 'Re', 'Ri', 'Ro', 'Ru']));
  syllables.push(new Syllable('S', ['Sa', 'Se', 'Si', 'So', 'Su']));
  syllables.push(new Syllable('T', ['Ta', 'Te', 'Ti', 'To', 'Tu']));
  syllables.push(new Syllable('V', ['va', 've', 'vi', 'vo', 'vu']));
  syllables.push(new Syllable('W',['Wa','We','Wi','Wo','Wu']));
  syllables.push(new Syllable('Y',['Ya','Ye','Yi','Yo','Yu']));
  syllables.push(new Syllable('Z',['Za','Ze','Zi','Zo','Zu']));
  
  
  syllables.forEach(elemen => {
    const syllableCard = document.createElement('div');
  
    const letterP = document.createElement('p');
    letterP.setAttribute('class', 'silabas__letter');
    letterP.innerHTML = elemen.letter;
    
    const syllablesContainer = document.createElement('div');
    syllablesContainer.setAttribute('class', 'silabas__container');
    
    
    elemen.letters.forEach(position => {
      let syllable = document.createElement('div');
      syllable.innerHTML = position;
      
      let audio = document.createElement('audio');
      audio.src = `./assets/sound/${position.toLowerCase()}.m4a`
      
      syllable.appendChild(audio);
      syllable.addEventListener('click',
        function() {
          audio.play();
        }
      )
      
      syllablesContainer.appendChild(syllable);
    });
    
    syllableCard.appendChild(letterP);
    syllableCard.appendChild(syllablesContainer);
    syllablesDiv.appendChild(syllableCard);
  });
}
