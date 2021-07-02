let btn_Yes = document.querySelector('.btn-Yes')
let btn_No = document.querySelector('.btn-No')
let num = 0
let p = document.querySelectorAll('.contenr p')
let btnBox = document.querySelector('.btn-box')
let noBox = document.querySelector('.no-box')
let yesBox = document.querySelector('.yes-box')


let wrapper = document.querySelector('.wrapper')
let info = document.querySelector('.info')
function yes() {
    yesBox.style.display = 'block'
    btnBox.style.display = 'none'
    setTimeout(() => {
        wrapper.style.display = 'none'
        info.style.display = 'block'
    }, 2000);
}
function no() {
    num++
    // console.log(num)
    if(num > 6) {
        // console.log(btnBox)
        btnBox.style.display = 'none'
        noBox.style.display = 'block'
    }else {
        // console.log(p[num])
        p[num].style.display = 'block'
    }
    
}


function aa() {
    btn_Yes.onclick = yes
    btn_No.onclick = no
}
aa()
noBox.onclick = function() {
    btnBox.style.display = 'block'
    noBox.style.display = 'none'
}
