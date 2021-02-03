document.addEventListener('DOMContentLoaded',function(){
    let pageDiv = document.createElement('Div')
    pageDiv.className = 'page'
    document.body.appendChild(pageDiv)
    let formDiv = document.createElement('Div')
    formDiv.className = 'form1'
    pageDiv.appendChild(formDiv)

    let btn1 = document.createElement('Div')
    btn1.className = 'BUTTON1'
    pageDiv.appendChild(btn1)
    
    
    let btn = document.createElement('button')
    btn.className = 'newBtn'
    btn1.appendChild(btn)
    btn.type = 'button'
    btn.innerHTML = "Click Me"


    btn.addEventListener ('click', function() {
        alert('nice')
    })
    
    let inputBtn = document.getElementById('inputForm')
    let message = document.getElementById('inputForm').value;
    inputBtn.addEventListener('click', function({
         alert(message)
    )})
        
    

    
    




})