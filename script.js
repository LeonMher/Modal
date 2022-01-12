const button = document.querySelector('.btn');
const content = document.querySelector('.content');
const theDiv = document.querySelector('.justDiv')


button.addEventListener('click', function(){

    document.body.classList = 'showMore'
    theDiv.classList= 'layer'
    content.classList = 'contentClass'
    content.innerHTML = 'Here you can see more information than before because you have clicked on the button and thats what you see.'
    button.style.visibility = 'hidden'

    const cont = document.querySelector('.container')

    const newEl = document.createElement('button')

    newEl.innerHTML = 'Show less'

    cont.appendChild(newEl)

    newEl.addEventListener('click', function(){
        document.body.classList = 'showLess'
        content.innerHTML = 'Hello World'
        button.style.visibility = 'visible'
        theDiv.classList= 'justDiv'
        if(button.style.visibility = 'visible'){
            cont.removeChild(newEl);
        }else{

        }
    })

   
    
})