const hour= document.getElementById('hour');
const min= document.getElementById('min');
const sec= document.getElementById('sec'); 

function DisplayTime(){
    let date= new Date();

    let h= date.getHours();
    let m= date.getMinutes();
    let s= date.getSeconds();

    let hR= h*30 + m/2;
    let mR=6*m;
    let sR=6*s;

    hour.style.transform=`rotate(${hR}deg)`;
    min.style.transform=`rotate(${mR}deg)`;
    sec.style.transform=`rotate(${sR}deg)`;
}
 setInterval(DisplayTime,1000);