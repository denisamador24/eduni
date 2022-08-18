let time = [];
console.log(sessionStorage.getItem('time'));
if (sessionStorage.getItem('time') == null){
  time = [0, 0, 0]; // [hours, minutes, seconds]
} else {
  time = JSON.parse(sessionStorage.getItem('time'));
}
const sTime = document.getElementById('time-cound');

function timer (){
  if (time[2] === 59){ // seconds 
    time[2] = 0;
    
    if (time[1] === 59){ // minutes 
      time[1] = 0;
    
      if (time[0] === 24){ // hours 
        time[0] = 0;
        alert('Te recomendamos descansar');
      } else {
        time[0] += 1;
      }
    } else {
    time[1] += 1;
    }
  } else {
    time[2] += 1;
  }
  sTime.innerText = formatDate();
  if (time[1] === 30 && time[2] === 0) {
    alert('Haz pasado 30 minutos aprendiendo, te recomiendo descansar');
  }
}

function formatDate (){
  let date = ''
  if(time[0] > 0){
    date += time[0]+'h ';
  }
  if (time[1] > 0) {
    date += time[1]+'m ';
  }
  if (time[2] > 0){
    date += time[2]+'s';
  }
  console.log(date);
  return date;
}

function saveTime (){
  sessionStorage.setItem('time', JSON.stringify(time));
}
