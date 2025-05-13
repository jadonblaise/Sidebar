document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.getElementById('checkbox');
    const pageBody = document.getElementById('pageBody');

    // Check localStorage to persist dark mode setting
    if (localStorage.getItem('darkMode') === 'enabled') {
        pageBody.classList.add('dark-mode');
        checkbox.checked = true;
    } else {
        pageBody.classList.add('light-mode');
    }

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            pageBody.classList.remove('light-mode');
            pageBody.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'enabled'); // Save dark mode setting
        } else {
            pageBody.classList.remove('dark-mode');
            pageBody.classList.add('light-mode');
            localStorage.setItem('darkMode', 'disabled'); // Save light mode setting
        }
    });
});
