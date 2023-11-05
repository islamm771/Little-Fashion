let questionBtns = document.querySelectorAll(".question-item button");

questionBtns.forEach(btn =>{
    btn.onclick = function(){
        questionBtns.forEach(btn =>{
            btn.classList.remove('active')
        })
        this.classList.add('active')
        document.querySelectorAll(".question-item div").forEach(div =>{
            div.style.cssText = "height:0px"
        })
        let text = this.nextElementSibling.querySelector('p')
        this.nextElementSibling.style.height = `${text.clientHeight}px`;
    }
})