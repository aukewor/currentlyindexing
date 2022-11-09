const printbtn = document.querySelector('a#print')
const CSS = document.querySelectorAll('link')[1]
const bodyTag = document.querySelector('body')

// printbtn.addEventListener('click', function () {
//     CSS.href = "assets/print.css";
// })

// jquery version: 
// $(document).ready(function(){
// 	function go(){
// 		console.log($('section figure').length)
// 	}
// 	setTimeout(go, 500)
// })

// vanilla js:
document.addEventListener('DOMContentLoaded', function () {
    function go(){
        const itemNum = document.querySelectorAll('section figure').length
        console.log(itemNum)
        const navHeight = document.querySelector('nav').offsetHeight
        const typeSize = (window.innerHeight - navHeight) / (1.3 * itemNum)
        console.log(typeSize)
        bodyTag.style.fontSize = `${typeSize}px`
     }
     setTimeout(go, 500)
}, false);

