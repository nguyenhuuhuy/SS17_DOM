//cách 1: 
/*
let btn = document.querySelector('#btn');
function display() {
    alert('Is was clicked!');
}
btn.addEventListener('click',display)
 */

// cách 2:
/*let btn = document.querySelector('#btn');
btn.addEventListener('click',function() {
    alert('alo');
})
*/


// let link = document.querySelector('a');
// link.addEventListener('click',function(event) {
//     console.log('clicked');
//     event.preventDefault();
// });



let btn = document.querySelector('#btn');

btn.addEventListener('click', function(event) {
    console.log('The button was clicked!');
    event.stopPropagation();
});

document.body.addEventListener('click',function(event) {
    console.log('The body was clicked!');
    
});