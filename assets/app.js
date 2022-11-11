const bodyTag = document.querySelector('body')
const navTag = document.querySelector('nav')
const sectionTag = document.querySelector('section')


document.addEventListener('DOMContentLoaded', function () {
    function go() {
        const items = document.querySelectorAll('section figure')
        const navHeight = navTag.offsetHeight
        const itemNum = items.length

        sectionTag.style.height = window.innerHeight - navHeight + "px"
        const typeSize = (window.innerHeight - navHeight - (itemNum - 1)) / (1.3 * itemNum)
        bodyTag.style.fontSize = `${typeSize}px`

        if (typeSize >= 30) {
            sectionTag.style.letterSpacing = `${-0.0003 * typeSize}em`
        } else if (typeSize <= 20) {
            sectionTag.style.letterSpacing = `${0.0025 * typeSize}em`
        } else {
            sectionTag.style.letterSpacing = '0'
        }

        console.log(0.039 * window.innerWidth >= 30)
        if (0.039 * window.innerWidth >= 30) {
            navTag.style.letterSpacing = `${-0.0003 * typeSize}em`
        } else if (0.039 * window.innerWidth <= 20) {
            navTag.style.letterSpacing = `${0.0025 * typeSize}em`
        } else {
            navTag.style.letterSpacing = '0'
        }
        // sectionTag.style.letterSpacing = `${(-0.0146 * typeSize) + 0.423}em`

        console.log("this page has " + itemNum + " items")
        console.log("window height is" + window.innerHeight)
        console.log("section height is" + sectionTag.offsetHeight)
        console.log("type size is" + " " + typeSize)


        items.forEach(item => {
            display(item)
            turnoffImage(item)
        })
    }
    setTimeout(go, 1000)

    window.addEventListener('resize', () => {
        go()
    })

}, false);


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


