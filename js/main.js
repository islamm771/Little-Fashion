let about_btns = document.querySelectorAll(".about-btns button");
about_btns = Array.from(about_btns)
let about_change = document.querySelectorAll(".about-change section")
let header_btns = document.querySelectorAll(".header-btns li span");
header_btns = Array.from(header_btns);
let header_details = document.querySelectorAll('.fades div');
let img_container = document.querySelectorAll('.img-container img')

about_btns.forEach((btn) =>{
    btn.onclick = function(){
        about_btns.forEach(btn =>{
            btn.classList.remove('active')
        })
        this.classList.add('active')
        about_change.forEach((c) =>{
            c.classList.remove('active')
        })
        about_change[about_btns.indexOf(this)].classList.add("active");
    }
})

let transition = 256
header_btns.forEach(btn =>{
    btn.onclick = function(){
        header_btns.forEach((btn) => {
            btn.classList.remove("active");
        });
        this.classList.add('active')
        if (header_btns.indexOf(this) == 0) {
          header_details.forEach((s) => {
            s.style.cssText = `transform: translateY(${0}px)`;
          });
        } else if (header_btns.indexOf(this) == 1) {
          header_details.forEach((s) => {
            s.style.cssText = `transform: translateY(-${transition}px)`;
          });
        } else {
          header_details.forEach((s) => {
            s.style.cssText = `transform: translateY(-${transition * 2}px)`;
          });
        }
        img_container.forEach(img =>{
            img.classList.remove('active')
        })
        img_container[header_btns.indexOf(this)].classList.add('active');
    }
})