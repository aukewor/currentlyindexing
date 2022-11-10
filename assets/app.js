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

        items.forEach( item => display(item))
        
     }
     setTimeout(go, 1000)
}, false);



// for each item, mouseover it, 
// find children of a image or video, set display = block, and video plays;
// when mouseout, video pauses.

const display = function (element){
    element.addEventListener('mouseenter', function(){

        if (element.classList.contains('image-block')){
            element.querySelector('img').style.display = 'block'
        } else if (element.classList.contains('video-file-block')) {
            element.querySelector('video').style.display = 'block'
            // element.querySelector('h3').insertAdjacentHTML('beforebegin', '&#9654;');
            element.addEventListener('click', ()=>{
                element.querySelector('video').play()
            })
        } else {
            console.log('here it is!')
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