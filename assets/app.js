const bodyTag = document.querySelector('body')
const navTag = document.querySelector('header')
const sectionTag = document.querySelector('section')


const go = function () {
    const items = document.querySelectorAll('section figure')
    const navHeight = navTag.offsetHeight
    const itemNum = items.length

    sectionTag.style.height = window.innerHeight - 40 - navHeight + "px"
    const typeSize = (window.innerHeight - navHeight - (itemNum - 1)) / (1.2 * itemNum)
    bodyTag.style.fontSize = `${typeSize}px`

    items.forEach(item => {
        display(item)
        turnoffImage(item)
    })
}

document.addEventListener('DOMContentLoaded', function () {

    setTimeout(go, 2000)

}, false);


window.addEventListener('resize', () => {
    go()
})

// inside every figure element, if image display is block, add event listener click to be none
const turnoffImage = function (element) {
    if (element.classList.contains('text-block')) {
        console.log("this block is text only!")
    }
    else if (element.classList.contains('video-file-block')) {
        element.querySelector('video').addEventListener('click', () => {
            element.querySelector('video').style.display = 'none'
        })
    } else if (element.classList.contains('image-block')) {
        element.querySelector('img').addEventListener('click', () => {
            element.querySelector('img').style.display = 'none'
        })
    } else {
        console.log("this block type has not been configured!")
    }
}


const display = function (element) {
    element.addEventListener('mouseenter', function () {

        if (element.classList.contains('image-block')) {
            element.querySelector('img').style.display = 'block'
        } else if (element.classList.contains('video-file-block')) {
            element.querySelector('video').style.display = 'block'
            element.addEventListener('click', () => {
                element.querySelector('video').play()
            })
        } else {
            console.log('This block type has not been configured!')
        }
    })
    element.addEventListener('mouseleave', function () {
        if (element.classList.contains('image-block')) {
            element.querySelector('img').style.display = 'none'
        } else if (element.classList.contains('video-file-block')) {
            element.querySelector('video').style.display = 'none'
            element.querySelector('video').pause()
        } else {
            console.log('This block type has not been configured!')
        }
    })
}


