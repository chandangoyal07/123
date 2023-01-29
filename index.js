let inputField = document.querySelector('input')
let submitBtn =document.querySelector('button')
let todoPara = document.querySelector('.para')


//Events Applied Click
submitBtn.addEventListener('click', function(){
    var paragraph = document.createElement('p')
    paragraph.innerText = inputField.value;
    todoPara.append(paragraph);
    inputField.value=""

    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration='line-through'
    })

    paragraph.addEventListener('dblclick',function(){
        paragraph.remove(paragraph)
    })
})

//Events Applied  Mouseover
submitBtn.addEventListener('mouseover',function(){
    var paragraph = document.createElement('h1')
    paragraph.innerText=inputField.value;
    todoPara.append(paragraph);
    inputField.value=""

    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration='line-through'
    })

    paragraph.addEventListener('dblclick',function(){
        paragraph.remove(paragraph)
    })
})

//Events Applied MouseOut
submitBtn.addEventListener('mouseout',function(){
    var paragraph = document.createElement('h1')
    paragraph.innerText=inputField.value;
    todoPara.append(paragraph);
    inputField.value=""

    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration='line-through'
    })

    paragraph.addEventListener('dblclick',function(){
        paragraph.remove(paragraph)
    })
})

//Events Applied Keypress
inputField.addEventListener('keypress',(e)=>{
    if(e.key == 'Enter') {
        var paragraph = document.createElement('h4')
        //paragraph.innerText  means what we want to insert in paragraph
        //inputField.value means whatever we are wrting inside input tag 
        paragraph.innerText = inputField.value;
        todoPara.append(paragraph);
        inputField.value=""

        paragraph.addEventListener('click',function(){
            paragraph.style.textDecoration='line-through'
        })
    
        paragraph.addEventListener('dblclick',function(){
            paragraph.remove(paragraph)
        })
    }
})



// Different way to achieve this for index2.html

let item = document.querySelector('#item')
let todo= document.querySelector('#to-do')

item.addEventListener('keyup',function(event){
    if(event.key == 'Enter'){
        todo(this.value)
        this.value=''
    }
})

const additem = (item) =>{
    const paragraph1 = document.createElement('h3')
    paragraph1.innerText = item.value
    todo.appendChild(paragraph1);
    item.value=''
    
}



x == 8
y == '8'

if(x===y){
    console.log('x and y are equal')
}else{
    console.log('x and y are not equal')  
}

//Output: x and y are not equal

if(x==y){
    console.log('x and y are equal')
}else{
    console.log('x and y are not equal')  
}

// output: x and y are equal





(x===y) ? console.log('equal') : console.log('unequal')

//