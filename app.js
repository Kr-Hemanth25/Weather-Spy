let a=document.body.querySelector(".place")
a.addEventListener("keydown",(e)=>{
    if(e.key==='Enter')
    {
        main()
      
    }
  })
  
  let b=document.body.querySelector(".simg")
  b.addEventListener("click",(e)=>{
    main()
  }) 

  async function main()
        {
          let city=a.value
          // console.log(city)
          let apik='c79c2a1637d9a6185791a322bcbcca8a'
          let response=await fetch("https://api.openweathermap.org/data/2.5/weather?units=metric"+`&q=${city}`+`&appid=${apik}`)
          let data=await response.json()
          console.log(data,data.name,data.main.temp)
          var c=document.body.querySelector(".temp")
          let d=document.body.querySelector(".loc")

          c.innerHTML=parseInt(data.main.temp)+'&#8451';
          d.innerHTML=data.name

          let e=document.body.querySelector(".flf")
          let f=document.body.querySelector(".humf")
          document.getElementById("hum").style.visibility="visible"
          document.getElementById("feel").style.visibility="visible"
          e.innerHTML='Feelslike:'+data.main.feels_like
          f.innerHTML='Humidity:'+data.main.humidity
          
        }
        
