
const stopBtn = document.getElementById("stopButton")
const stopLt = document.getElementById("stopLight")
  stopBtn.addEventListener("click", function (event) {
    console.log(event)
  if (stopLt.style.backgroundColor === "black"){
    stopLt.style.backgroundColor = "red"
  }else{(stopLt.style.backgroundColor = "black")}
})

  stopBtn.addEventListener("mouseenter", function(){
    console.log("Entered stop button")
  })
  stopBtn.addEventListener("mouseleave", function(){
    console.log("Left stop button")
  })



const slowBtn = document.getElementById("slowButton")
const slowLt = document.getElementById("slowLight")
  slowBtn.addEventListener("click", function (event) {
  console.log(event)
  if (slowLt.style.backgroundColor === "black"){
  slowLt.style.backgroundColor = "yellow"
}else{(slowLt.style.backgroundColor = "black")}
})

slowBtn.addEventListener("mouseenter", function(){
  console.log("Entered slow button")
})
slowBtn.addEventListener("mouseleave", function(){
  console.log("Left slow button")
})



const goBtn = document.getElementById("goButton")
const goLt = document.getElementById("goLight")
goBtn.addEventListener("click", function (event) {
  console.log(event)
if (goLt.style.backgroundColor === "black"){
  goLt.style.backgroundColor = "green"
}else{(goLt.style.backgroundColor = "black")}
})

goBtn.addEventListener("mouseenter", function(){
  console.log("Entered go button")
})
goBtn.addEventListener("mouseleave", function(){
  console.log("Left go button")
})
