const box1 = document.querySelector('.box1')
const box2 = document.querySelector('.box2')
const box3 = document.querySelector('.box3')

/*function mostrarQueClicou(){
    console.log(`Clicou no botao`)
}*/


////// event listener //////

/*box1.addEventListener('click', mostrarQueClicou)*/

/*box1.addEventListener('click', () => {
    console.log(`Clicou no botao`)
})*/


////// diferenças com o onclick //////

/*box1.onclick = () => {
    console.log('primeiro evento')
} 
box1.onclick = () => {
    console.log('segundo evento')
}*/

/*box1.addEventListener('click', () => {
    console.log(`Primeiro evento`)
})
box1.addEventListener('click', () => {
    console.log(`Segundo evento`)
})*/


//////// objeto event ///////////

/*box1.addEventListener('click', function(event){
    console.log(`Clicou no botao`)
    console.log(event)
})*/

/*document.addEventListener('keypress', function(event){
    //console.log(event)
    if(event.key === 'Enter'){
        console.log('clicou no Enter')
    }
})*/


/////// event bubbling /////////

function adicionarClick(div, cor) {
    div.addEventListener('click', (e) => {
        e.stopPropagation()
        console.log(`clicou no ${cor}`)
    }/*, {capture: true}*/)
}

adicionarClick(box1, 'vermelho')
adicionarClick(box2, 'verde')
adicionarClick(box3, 'azul')