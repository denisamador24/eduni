function startListAlphabet (){
  const alphabet = ['A','B','C','D','E','F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ' ,'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  const formatSound = ".m4a"
  const srcSounds = "./assets/sound/"
  
  alphabet.forEach(letter => {
    const itemGrid = document.createElement('div');
    
    const divLetter = document.createElement("div")
    divLetter.setAttribute("class", "abecedario__item")
    
    var p = document.createElement("p")
    var sound = document.createElement("audio")
    
    p.innerText = letter
    
    sound.src = srcSounds + letter.toLowerCase() + formatSound
    divLetter.appendChild(p)
    divLetter.appendChild(sound)
    
    divLetter.addEventListener("click", () => {
        sound.play()
      }
    )
    
    itemGrid.appendChild(divLetter);
    gridAbecedario.appendChild(itemGrid);
  });
  
}
