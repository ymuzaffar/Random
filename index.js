const plus = document.querySelector('#plus'),
minus = document.querySelector('#minus'),
number = document.querySelector('#number');
reset = document.querySelector('#reset')
random = document.querySelector('#random')
let a = 1

plus.addEventListener('click' , () => {
    a++
    number.innerText = a

});
minus.addEventListener('click' , () => {
    a--
    number.innerText = a

})

reset.addEventListener('click' , () => {
    a=0
    number.innerText = a

})

random.addEventListener('click' , () => {
    return  Math.floor(Math.random() * 10),
    number.innerText = Math.floor(Math.random() * 100)
})


