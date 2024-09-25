let navItems = document.getElementsByClassName('nav__item')
navItems = Object.values(navItems)
let activeBox = document.querySelector('.active-box')
let contents = document.getElementsByClassName('content')
contents = Object.values(contents)
let colorItem1 = document.querySelector('.color-item-1')
let colorItem2 = document.querySelector('.color-item-2')
let colorItem3 = document.querySelector('.color-item-3')
let left,target,getTarget
let arr = {}
function operator(target= 'home',lef = '0'){
    activeBox.style.left = lef;
    navItems.forEach(function (navItem){
        getTarget = navItem.dataset.item
        if (getTarget == target){
            navItem.classList.add('nav__item--active')
        }else {
            navItem.classList.remove('nav__item--active')
        }
    })
    contents.forEach(function (content){
        content.classList.remove('content--active')
    })
    document.getElementById(target).classList.add('content--active')
}
navItems.forEach(function (navItem){
    navItem.addEventListener('click',function (event){
        target = event.target.dataset.item
        left = event.target.dataset.left
        arr = {
            target : target,
            left : left
        }
        localStorage.setItem('localArr',JSON.stringify(arr))
        operator(target,left)
    })
})
let colorArray={}
function setColorLocalStorage(colorArray){
    localStorage.setItem('localColors',JSON.stringify(colorArray))
}
colorItem1.addEventListener('click',function (){
    document.documentElement.style.setProperty('--color-select','rgb(0, 128, 0)')
    document.documentElement.style.setProperty('--background-hover','rgba(0, 128, 0, .3)')
    colorArray = {
        color : 'rgb(0, 128, 0)',
        bgColor : 'rgba(0, 128, 0, .3)'
    }
    setColorLocalStorage(colorArray)
})
colorItem2.addEventListener('click',function (){
    document.documentElement.style.setProperty('--color-select','rgb(255, 140, 0)')
    document.documentElement.style.setProperty('--background-hover','rgba(255, 140, 0, .3)')
    colorArray = {
        color : 'rgb(255, 140, 0)',
        bgColor : 'rgba(255, 140, 0, .3)'
    }
    setColorLocalStorage(colorArray)
})
colorItem3.addEventListener('click',function (){
    document.documentElement.style.setProperty('--color-select','#17a2b8')
    document.documentElement.style.setProperty('--background-hover','rgba(23,162,184,0.3)')
    colorArray = {
        color : '#17a2b8',
        bgColor : 'rgba(23,162,184,0.3)'
    }
    setColorLocalStorage(colorArray)
})
window.onload = function (){
    let savedArr = JSON.parse(localStorage.getItem('localArr'))
    if (savedArr != null){
        target = savedArr['target']
        left = savedArr['left']
    }
    operator(target,left)
    let savedLocalColors = JSON.parse(localStorage.getItem('localColors'))
    if (savedLocalColors != null){
        document.documentElement.style.setProperty('--color-select',savedLocalColors['color'])
        document.documentElement.style.setProperty('--background-hover',savedLocalColors['bgColor'])
    }
}