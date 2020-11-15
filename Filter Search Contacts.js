// Get input box.
var filterInput = document.getElementById('filterInput');
filterInput.addEventListener('keyup', () => {
    // Get input value.
    let filterValue = filterInput.value.toUpperCase();
    // Get selected lists.
    let li = document.querySelectorAll('li.item');

    // looping.
    for (let i = 0; i < li.length; i++) {
        let a = li[i].querySelector('a');

        // Check if match.
        if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            li[i].style.display = 'block';
        } else {
            li[i].style.display = 'none';
        }
    }
})