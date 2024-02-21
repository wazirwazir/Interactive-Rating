const regards = document.getElementsByClassName('select')[0]
const btn = document.getElementsByName('mell')
const link = document.getElementById('link')
const submit = document.getElementById('submit')
const select = document.getElementsByClassName('select')[0]
const container1 = document.getElementsByClassName('hide')[0]
const container = document.getElementsByClassName('container')[0]
let ark;

btn.forEach(function(btn) {
    btn.addEventListener('click', function() {
        ark = 'You selected ' + btn.value + ' out of 5'       
        select.innerHTML = ark
    })
});

submit.addEventListener('click', function() {
    container1.setAttribute('class', 'container1') 
    container.setAttribute('class', 'hide')
})
  


    
    
       
   
     