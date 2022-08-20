function startListStories() {
  const storiesContainer = document.getElementById('cuentos');

  cuentos.forEach(cuento => {
    const cardCuento = document.createElement('div')

    cardCuento.innerHTML = `
    <img src="${cuento.img}">
    <p>${cuento.name}</p>
  `

    cardCuento.addEventListener('click', () => {
      readStoryImg.src = cuento.img;
      readStoryContent.innerText = cuento.content;
      location.hash = '#story='+cuento.name;
      headerTitle.innerText = cuento.name;
    });
    
    storiesContainer.appendChild(cardCuento);
  });
}
