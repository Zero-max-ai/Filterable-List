// Getting the id of input tag
let nameInput = document.getElementById('names');

// Event: Listening keyup event on nameInput
nameInput.addEventListener('keyup', filterData);

function filterData() {
    // Getting the true value from input tag
    let nameInputValue = document.getElementById('names').value.toUpperCase();

    // Getting the ul tag
    let ul = document.getElementById('ul-lists');

    // Getting the li tags under the ul tag
    let li = ul.querySelectorAll('li.collection-items');

    // Iterating through all li elements
    for(let i = 0; i < li.length; i++) {
        // Getting anchor tag to match texts
        let a = li[i].getElementsByTagName('a')[0];

        // Checking if the texts match or not
        if(a.innerHTML.toUpperCase().indexOf(nameInputValue) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }
}