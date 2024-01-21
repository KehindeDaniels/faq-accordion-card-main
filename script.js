
let accordion = document.querySelectorAll('.accordion');
let btn = document.querySelectorAll('.accordion h2');


btn.forEach((btns) => {

    btns.addEventListener('click', function(){
        accordion.forEach((accordions) => {
            
           if(accordions != this.parentElement) {
            
             accordions.classList.remove('active')
           } else
           accordions.classList.toggle('active')
        })

    })
})

