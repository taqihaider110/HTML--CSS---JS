// File drop functionality
const dropArea = document.getElementById('dropArea');
const fileContent = document.getElementById('fileContent');

dropArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropArea.classList.add('drag-over');
});

dropArea.addEventListener('dragleave', () => {
    dropArea.classList.remove('drag-over');
});

dropArea.addEventListener('drop', (e) => {
    e.preventDefault();
    dropArea.classList.remove('drag-over');
    const file = e.dataTransfer.files[0];
    const reader = new FileReader();

    reader.onload = function (event) {
        fileContent.textContent = event.target.result;
    };

    reader.readAsText(file);
});

// Login form submission
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Perform login authentication (You can add your logic here)
    console.log('Username:', username);
    console.log('Password:', password);
    // For a real application, you'd handle the login logic and potentially redirect the user.
});
