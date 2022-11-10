// const printbtn = document.querySelector('a#print')
// const CSS = document.querySelectorAll('link')[1]
const bodyTag = document.querySelector('body')


// printbtn.addEventListener('click', function () {
//     CSS.href = "assets/print.css";
// })

// vanilla js:
document.addEventListener('DOMContentLoaded', function () {
    function go(){
        const items = document.querySelectorAll('section figure')
        const itemNum = items.length
        console.log(itemNum)
        const navHeight = document.querySelector('nav').offsetHeight
        console.log(window.innerHeight - navHeight)

        const typeSize = (window.innerHeight - navHeight) / ((1.45 * itemNum))
        console.log(typeSize)
        bodyTag.style.fontSize = `${typeSize}px`

        items.forEach( item => {
            display(item)
            turnoffImage(item)
        })
     }
     setTimeout(go, 1000)
}, false);



// for each item, mouseover it, 
// find children of a image or video, set display = block, and video plays;
// when mouseout, video pauses.

// inside every figure element, if image display is block, add event listener click to be none
const turnoffImage = function(element){
    if (element.classList.contains('image-block')){
        element.querySelector('img').addEventListener('click', ()=>{
            element.querySelector('img').style.display = 'none'
        })
    } else if (element.classList.contains('video-file-block')){
        element.querySelector('video').addEventListener('click', ()=>{
            element.querySelector('video').style.display = 'none'
        })
    }

}


const display = function (element){
    element.addEventListener('mouseenter', function(){

        if (element.classList.contains('image-block')){
            element.querySelector('img').style.display = 'block'
        } else if (element.classList.contains('video-file-block')) {
            element.querySelector('video').style.display = 'block'
            element.addEventListener('click', ()=>{
                element.querySelector('video').play()
            })
        } else {
            console.log('This block type has not been configured!')
        }
    })
    element.addEventListener('mouseleave', function(){
        if (element.classList.contains('image-block')){
            element.querySelector('img').style.display = 'none'
        } else if (element.classList.contains('video-file-block')) {
            element.querySelector('video').style.display = 'none'
            element.querySelector('video').pause()
        } else {
            console.log('here it is!')
        }})     
}


// &#9654;