var App=new(function(){
    this.changeTitle=function(title){
        h=document.getElementsByTagName('h1')[0]
        h.innerHTML=title
    }
    this.listContacts=function(){
        a=document.getElementsByTagName('h2')
        r=new Array()
        for(i=0;i<a.length;i++){
            r.push(a[i].textContent)
        }
        return r
    }
    this.addContact=function(name,description,status){
        c=document.getElementsByClassName('contact')[0]
        b=c.cloneNode()
        b.lastElementChild
         .firstElementChild.textContent=name
        b.lastElementChild
         .children[1].textContent=description
        b.lastElementChild
         .lastElementChild
         .setAttribute('class','status '+status)

        a=document.querySelector('section')
        d=document.querySelector('section>.clear')
        a.insertBefore(b,d)
        
    }
})()

window.onload = function() {
    setTimeout(function() {
        App.changeTitle('ejemplo')
    }, 3000)
}


