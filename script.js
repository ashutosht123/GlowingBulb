document.querySelector("button").addEventListener("click",function(){
  
if(document.querySelector(".tg").getAttribute("src")==="b-1.png" && document.querySelector("button").innerHTML==="OFF")
{
    document.querySelector(".tg").setAttribute("src","b-2.png")
    document.querySelector("button").innerHTML="ON"
}
else
{
    document.querySelector(".tg").setAttribute("src","b-1.png")
    document.querySelector("button").innerHTML="OFF"
}
})
