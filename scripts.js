// Example JavaScript for interactivity (e.g., Hide Menu button)
document.querySelector('.hide-menu').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.toggle('hidden');
});

// Toggle sidebar visibility
document.querySelector('.hide-menu').addEventListener('click', () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = sidebar.style.display === 'none' ? 'block' : 'none';
});
