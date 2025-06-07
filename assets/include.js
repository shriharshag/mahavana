function loadHTML(file, elementId) {
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('There has been a problem with your fetch operation:', error));
}

document.addEventListener("DOMContentLoaded", function() {
    loadHTML('header.html', 'header');
    loadHTML('footer.html', 'footer');
});
