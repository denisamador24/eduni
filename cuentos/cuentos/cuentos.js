class Cuento{
  constructor({
    img,
    name,
    content,
  }){
    this._img = img;
    this.name = name;
    this.content = content;
  }
  
  //recivir nombre de imagen y retortar componente
  get img(){
    let picture = 'https://denisamador24.github.io/eduni/assets/img/' + this._img + '.jpg';
    
    return picture;
  }
}

const cuentos = [];

cuentos.push(new Cuento({
  img: 'superman',
  name: 'Superman',
  content: "Un día Superman estaba  volando cuando vio a un monstruo. Superman le ganó y se fue volando a" +
  " su casa. Se subió al tejado, el tejado se rompió porque estaba sucio y Superman se cayó, se " +
  "rompió un diente y fue al dentista. El dentista era otro monstruo que se llamaba Samuel," +
  " entonces Superman le ganó también y se fue a otro dentista que no dijera mentiras y fuera " +
  "simpático. Alli se curó el diente. Al salir se encontre a una mosca, se hicieron amigos, se fueron de " +
  "excursión a la selva y la pasaron muy bien."
}));


cuentos.push(new Cuento({
  img: 'tortuga',
  name: 'Tortuga Tomasa',
  content: "Un día de sol la Tortuga Tomasa se fue al columpió y luego se cayó del columpio. Vino al " +
  "parque. Allí una amiga tortuga  la ayudó a levantarse. Jugando las dos tortugas encontraron una casa." +
  " La casa estaba llena de agua.  Abrieron las ventanas y la puerta y se vació de agua. Subieron al " +
  "tejado y había un tambor y una trompeta. Las cogieron y se pusieron a tocarlas. Al rato fueron a " +
  "un bar a comprar un bocadillo de tomate y se lo tomaron en casa de Tomasa con un tenedor."
}));

cuentos.push(new Cuento({
  img: 'rana',
  name: 'El Raton y el Rey',
  content: "Érase una vez un ratón que iba caminando y se encontró con una rana, el ratón luego se fue al río " +
    "que estaba debajo de las montañas y  había mucha, mucha agua. Entonces decidió echar a la rana " +
    "al río para que pudiera nadar. Empezó a llover y se escondió debajo de un árbol. Allí había también " +
    "un rey que tampoco se quería mojar. Se quedaron allí y entre los dos hicieron una cueva debajo de " +
    "la tierra. Al lado había una rosa. El rey la tocó y se pincho. Le salió mucha sangre pero el ratón lo " +
    "curó y le puso una tirita"
}))

cuentos.push(new Cuento({
  img: 'patitos',
  name: 'Los Patitos',
  content: "En un día de mucho calor, cinco patitos fueron a nadar al lago.\n " +
    "Ellos jugaron con los pececitos hasta que cayó la tarde. Cuando  volvieron a casa, mamá " +
    "pata los esperaba para cenar con ellos."
}))

cuentos.push(new Cuento({
  img: 'huevo_unicornio',
  name: 'El Unicornio y el Huevo',
  content:  "Érase una vez un huevo que andaba por la carretera. Cuando el semáforo se puso en verde se fue a la " +
   "universidad. En la universidad estaba aprendiendo números y sacó un uno porque no lo hizo bien. " +
   "Cuando se acabó la clase se fue al patio a comerse sus uvas de  desayuno. Cuando terminó se fue a " +
   "jugar y se encontró una uña que era mágica. Se puso la uña y pidió un deseo. Pidió que apareciera " +
   "un unicornio. Después se montó en el unicornio y se fue volando."
}))

cuentos.push(new Cuento({
  img: 'rana_nena',
  name: 'La Rana Nena',
  content: "Érase una vez una rana que se llamaba Nena, que estaba haciendo un muñeco de nieve. Cuando " +
  "Nena terminó se fue a patinar y luego  entró en una cueva. Como hacía mucho frío la rana se puso " +
  "a saltar y una araña que había allí se le subió por su cuerpo. Nena dejó de saltar Y la araña se bajó. " +
  "Se fue a patinar otra vez y encontró  su muñeco de nieve, entonces avisó d su amiga la araña y " +
  "jugaron juntas. Se cansaron y se sentaron en la nieve. Entonces se enfermaron y se tomaron un " +
  "jarabe con naranja y se acostaron."
}))

cuentos.push(new Cuento({
  img: 'leon',
  name: 'El León Lolo',
  content: "Había una vez un león que se llamaba Lolo, un día se encontró un teléfono en el suelo. Lo cogió y " +
  "llamó a su amigo el lobo para que  fuera a verle. Entonces vino un elefante a la cueva y el león le " +
  "dijo: ¡vete de mi casa!. De repente se hizo de noche y apareció el lobo. El león le dijo a su amigo " +
  "lobo que echara al elefante. El elefante se marchó porque pesaba mucho y Lolo el Lobo se fueron " +
  "de paseo. Se encontraron al elefante que estaba llorando y se lo llevaron a su casa. Le dieron " +
  "longaniza de cena, le acostaron cuando salió la luna y le prometieron que serían sus amigos."
}))

cuentos.push(new Cuento({
  img: 'mariquita',
  name: 'La Mariquita y el Mosquito',
  content:  "Una mariquita que se llamaba Quica fue a pasear al bosque. En el bosque había un periquito y un " +
   "estanque con ranas y cisnes. Llegó un mosquito y le chupó la sangre. Entonces Quica se quedó sin " +
   "sangre y no podía pensar, el periquito como estaba vigilando lo vio todo y le ayudó dándole queso " +
   "y quicos porque dan mucha fuerza. Cuando Quica se puso bien ya podia pensar y le dio las gracias " +
   "y un paquete al periquito. Dentro del paquete había una quimona. El periquito se lo puso y le gustó " +
   "porque era muy cómodo."
}))

cuentos.push(new Cuento({
  img: 'pata',
  name: 'La Pata y el Pato',
  content: "Había una vez una pata que se llamaba Pepa, vivía en el agua del parque, jugaba con una " +
   "pelota al fútbol y le daba patadas. Un dia preparó un pastel de piñones y peras para su amigo Pepe " +
   "porque era su cumpleaños. Cumplia seis años. Cuando le llevaba el pastel a su amigo se le " +
   "olvidaron las velas y se las pidió a su papá. Entonces puso las velas y soplaron. Pero soplaron tan " +
   "fuerte que se quemaron los piñones y las peras, echaron agua con una manguera para apagarlo, " +
   "fregaron el suelo y al final Pepa y Pepe merendaron otro pastel."
}))
