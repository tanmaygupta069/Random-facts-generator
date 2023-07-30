'use strict'
const btn = document.getElementById('12')
const n = document.getElementById('11')
const a = document.getElementById('p')
let arr = [0, 1]
btn.addEventListener('click', () => {
  let fact = fetch("https://api.api-ninjas.com/v1/facts?limit=1", {
    method: "GET",
    headers: {
      "x-api-key": "RqpCE6XEryIHIEi10kCbWw==yT5s5YTkyyrEPfvS"
    }
  })
  fact.then(fct => {
    if (fct.ok) {
      console.log("Success")
      console.log("Status:", fct.status)
      return fct.json()
    }
    else {
      console.log("Unsuccessful")
    }
  }).then((data) => {
    console.log(data)
    a.innerHTML = data[0].fact + "."
  }).catch((er) => alert("Something went wrong"))
})
let count = 0;
n.addEventListener('click', () => {
    ++count;
    if(count===1){
  document.body.style.backgroundColor = 'black'
  document.getElementById('container').style.backgroundColor = "#E8CD08"
  document.getElementById('12').style.backgroundColor = "black"
  document.getElementById('12').style.color = "white"
  p.style.color = "black"
  document.getElementById('11').style.backgroundColor = "black"
  document.getElementById('11').innerHTML = '<i class="fa-regular fa-moon"></i>'
  document.getElementById('11').style.color = "white"
    }
    else{
        document.body.style.backgroundColor = '#E8CD08'
        document.getElementById('container').style.backgroundColor = "black"
        document.getElementById('12').style.backgroundColor = "#E8CD08"
        document.getElementById('12').style.color = "black"
        p.style.color = "white"
        document.getElementById('11').style.backgroundColor = "#E8CD08"
        document.getElementById('11').innerHTML = '<i class="fa-solid fa-moon"></i>'
        document.getElementById('11').style.color = "black"
        count=0
    }
})