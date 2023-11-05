let team_btns = document.querySelectorAll(".team button")
let close_btn = document.querySelector(".close")
team_btns.forEach(btn =>{
    btn.onclick = function () { 
        document.querySelector("body").style.overflowY = "hidden"
        document.querySelector(".pop").classList.add('active')
        // document.querySelector(".pop").style.cssText = `top:${window.scrollY}px`
     }
})

document.onclick = function(e){
    if(e.target == document.querySelector(".pop")){
        document.querySelector("body").style.overflowY = "visible";
        document.querySelector(".pop").classList.remove("active");
    }
}

close_btn.onclick = function(){
    document.querySelector("body").style.overflowY = "visible";
    document.querySelector(".pop").classList.remove("active");
}