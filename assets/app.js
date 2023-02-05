const templateTag = document.querySelector('template')
const sectionTag = document.querySelector('section')
const imgTag = document.querySelector('img.image')
const bodyTag = document.querySelector('body')
const navTag = document.querySelector('header')


const channelId = document.getElementById('channel-url').href.split('/').filter(Boolean).pop()

async function getChannelInfo(channelId) {
    const response = await fetch(`https://api.are.na/v2/channels/${channelId}`);

    const data = await response.json();
    const title = data.title; // this is channel title
    const blocks = data.contents;

    for (let i = 0; i < blocks.length; i++) {
        const block = templateTag.content.cloneNode(true)

        block.querySelector("h3").textContent = blocks[i].title;
        block.querySelector("p").textContent = blocks[i].image.display.url

        sectionTag.appendChild(block)

    }

    document.getElementById("channel-title").innerHTML = title;

    const blockDivs = document.querySelectorAll('.image-block')
    blockDivs.forEach(function (ele) {
        ele.addEventListener('mouseover', function () {
            imgTag.style.display = "block"
            imgTag.src = ele.querySelector("p").textContent
        })
        ele.addEventListener('mouseout', function () {
            imgTag.style.display = "none"
            imgTag.src = "assets/loading-l-600.gif"
        })
    })
}

getChannelInfo(channelId)



const go = function () {
    const items = document.querySelectorAll('section figure')
    const navHeight = navTag.offsetHeight
    const itemNum = items.length

    sectionTag.style.height = window.innerHeight - 40 - navHeight + "px"
    const typeSize = (window.innerHeight - navHeight - (itemNum - 1)) / (1.2 * itemNum)
    bodyTag.style.fontSize = `${typeSize}px`
}

document.addEventListener('DOMContentLoaded', function () {
    setTimeout(go, 400)
    turnoffImage()
}, false);


window.addEventListener('resize', () => {
    turnoffImage()
    go()
})

const turnoffImage = function () {

    imgTag.addEventListener('click', () => {
        imgTag.style.display = 'none'
    })
}



