const alphabet = ['A','B','C','D','E','F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'Ñ' ,'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const formatSound = ".m4a"
const srcSounds = "../assets/sound/"

const gridAbecedario = document.getElementById("abecedario")

for (letter of alphabet){
  setAlphabet(letter)
}

function setAlphabet (letter) {
  
  /*let itemGrid = `
    <div>
      <div class="abecedario__item">
        <p>${letter}</p>
        
      </div>
    </div>
  `
  gridAbecedario.innerHTML += itemGrid
  const item = document.getElementsByClassName('abecedario__item')
  const audio = document.createElement('audio')
  
  audio.src = `../assets/sound/${letter.toLowerCase()}.m4a`
  item.appendChild(audio)
  item.addEventListener('click', () => {
    
  })
  */
  
  
  const itemGrid = document.createElement('div');
  
  const divLetter = document.createElement("div")
  divLetter.setAttribute("class", "abecedario__item")
  
  var p = document.createElement("p")
  var sound = document.createElement("audio")
  
  p.innerHTML = letter
  sound.src = srcSounds + letter.toLowerCase() + formatSound
  divLetter.appendChild(p)
  divLetter.appendChild(sound)
  
  divLetter.addEventListener("click",
    function () {
      sound.play()
    }
  )
  
  itemGrid.appendChild(divLetter);
  gridAbecedario.appendChild(itemGrid);
}
