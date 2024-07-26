const successCallback = (position) => {

  let app=position
  console.log(position,app.coords.longitude);
  async function main() {
    let key='c79c2a1637d9a6185791a322bcbcca8a'
    let lat=app.coords.latitude
    let long=app.coords.longitude
    let udata1=await fetch('https://api.openweathermap.org/data/2.5/weather?units=metric'+`&lat=${lat}`+`&lon=${long}`+`&appid=${key}`)
    let data1 =await udata1.json()
    let loc1=data1.name
    var c1=document.body.querySelector(".temp")
    let d1=document.body.querySelector(".loc")

    c1.innerHTML=parseInt(data1.main.temp)+'&#8451';
    d1.innerHTML=data1.name

    let e1=document.body.querySelector(".flf")
    let f1=document.body.querySelector(".humf")
    e1.innerHTML='Feelslike:'+data1.main.feels_like
    f1.innerHTML='Humidity:'+data1.main.humidity
    document.getElementById("hum").style.visibility="visible"
    document.getElementById("feel").style.visibility="visible"
    

    
  }
  main()
};

const errorCallback = (error) => {
  console.log(error);
};
// let a=5;
navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

