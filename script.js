document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.toggle');
    const containnotesDiv = document.querySelector('.containnotes');
    const deleteButton = document.getElementById('deleteButton');

    toggleButton.addEventListener('click', function () {
        if (containnotesDiv.style.display === 'none' || containnotesDiv.style.display === '') {
            containnotesDiv.style.display = 'block';
        } else {
            containnotesDiv.style.display = 'none';
        }
    });

    deleteButton.addEventListener('click', function () {
        containnotesDiv.style.display = 'none';
    });
});
