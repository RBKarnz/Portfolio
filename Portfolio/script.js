// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


function copyToClipboard(text) {
    // Create a temporary textarea element
    const tempInput = document.createElement("textarea");
    tempInput.value = text;

    // Append it to the body
    document.body.appendChild(tempInput);

    // Select the text in the textarea
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // For mobile devices

    // Copy the selected text to the clipboard
    document.execCommand("copy");

    // Remove the temporary textarea from the document
    document.body.removeChild(tempInput);

    // Optional: Show a notification or alert to the user
    alert(`Copied: "${text}" success!`);
}

// Get the theme toggle link
const themeToggleLink = document.getElementById('theme-toggle-link');

// Check the current theme from localStorage เลือกสีตามที่เคยตั้งไว้
let currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
}

// Add event listener to toggle theme เปลี่ยนtheme
themeToggleLink.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the default anchor behavior
    document.body.classList.toggle('dark-mode'); // Toggle dark mode class

    // Update the current theme in localStorage
    if (document.body.classList.contains('dark-mode')) {
        currentTheme = 'dark';
    } else {
        currentTheme = 'light';
    }
    localStorage.setItem('theme', currentTheme); // Save the theme in localStorage
});


