const alphabet = ['A','B','C','D','E','F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'Ñ' ,'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

var formatSound = ".m4a"
var srcSounds = "../assets/sound/"

var gridAbecedario = document.getElementById("abecedario")

for (var i = 0; i < alphabet.length; i++){
  setAlphabet(i)
}

function setAlphabet (position) {
  var divLetter = document.createElement("div")
  divLetter.setAttribute("class", "abecedario__item")
  
  var p = document.createElement("p")
  var sound = document.createElement("audio")
  
  p.innerHTML = alphabet[position]
  sound.src = srcSounds + alphabet[position].toLowerCase() + formatSound
  divLetter.appendChild(p)
  divLetter.appendChild(sound)
  
  divLetter.addEventListener("click",
    function () {
      sound.play()
    }
  )
  
  gridAbecedario.appendChild(divLetter)
}
