function transferBlock(e){
    if (e.target.classList.contains('block')){
        var zero = document.getElementById(id_button_with_zero)
        console.log(zero)
        if(zero.dataset.position.split(', ').indexOf(e.target.id) != -1){
            zero.innerText = e.target.innerText
            e.target.innerText = null
            id_button_with_zero = e.target.id
        }
    }
}

//Массив
var arr = [1, 2, 3, 4, 5, 6, 7, 8, null];
function compareRandom(a, b){
    return Math.random() - 0.5
}
arr = arr.sort(compareRandom)
var id_button_with_zero

//Добавление контента

var blocks = document.getElementsByClassName('block');
for (let index = 0; index < blocks.length; index++) {
    blocks[index].textContent = arr[index]
    if (arr[index] == null){
        id_button_with_zero = blocks[index].id
    }
    if (arr[index] > 0){
        blocks[index].addEventListener ('click', function(e){            
            transferBlock(e)
        });
    }
}