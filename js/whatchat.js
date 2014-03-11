


window.onload = function() {
    function changeTitle(title){
        h=document.getElementsByTagName('h1')[0]
        h.innerHTML=title
    }

    setTimeout(function() {
        changeTitle('ejemplo')
    }, 3000)
}


