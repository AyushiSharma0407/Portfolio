// Open Modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

// Close Modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Close modal when clicking outside the content
window.onclick = function(event) {
    const modals = document.getElementsByClassName('modal');
    for (let modal of modals) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
};
