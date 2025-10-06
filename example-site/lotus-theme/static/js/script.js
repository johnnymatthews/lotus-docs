// Initialize theme
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

// Toggle theme
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

// Update theme icon
function updateThemeIcon(theme) {
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');

    if (theme === 'dark') {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    } else {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    }
}

// Toggle mobile sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}

// Toggle sidebar children
function toggleChildren(element) {
    element.classList.toggle('expanded');
    const children = element.nextElementSibling;
    if (children && children.classList.contains('sidebar-children')) {
        children.classList.toggle('expanded');
    }
}

// Switch code tabs
function switchTab(button, lang) {
    const codeBlock = button.closest('.code-block');

    // Update tab buttons
    const tabs = codeBlock.querySelectorAll('.code-tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    button.classList.add('active');

    // Update code content
    const contents = codeBlock.querySelectorAll('.code-content');
    contents.forEach(content => {
        content.classList.remove('active');
        if (content.dataset.lang === lang) {
            content.classList.add('active');
        }
    });
}

// Copy code to clipboard
function copyCode(button) {
    const codeBlock = button.closest('.code-block');
    const activeContent = codeBlock.querySelector('.code-content.active');
    const code = activeContent.querySelector('code').textContent;
    navigator.clipboard.writeText(code).then(() => {
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        setTimeout(() => {
            button.textContent = originalText;
        }, 2000);
    });
}

// Highlight active TOC item on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('h2[id], h3[id]');
    // Support both custom .toc-item and Hugo-generated TOC links
    const tocItems = document.querySelectorAll('.toc-item, .toc a');

    let current = '';
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100) {
            current = section.getAttribute('id');
        }
    });

    tocItems.forEach(item => {
        item.classList.remove('active');
        const href = item.getAttribute('href');
        if (href === '#' + current) {
            item.classList.add('active');
        }
    });
});

// Toggle language dropdown
function toggleLanguageDropdown() {
    const dropdown = document.getElementById('language-dropdown');
    dropdown.classList.toggle('open');
}

// Set language
function setLanguage(code, name) {
    // Update the current language display
    document.getElementById('current-language').textContent = code;

    // Update active state
    const options = document.querySelectorAll('.language-option');
    options.forEach(option => {
        option.classList.remove('active');
        if (option.textContent === name) {
            option.classList.add('active');
        }
    });

    // Close dropdown
    document.getElementById('language-dropdown').classList.remove('open');

    // Store preference
    localStorage.setItem('language', code);

    // In a real implementation, you would redirect to the translated page
    // or load translated content here
    console.log('Language changed to:', code);
}

// Close language dropdown when clicking outside
document.addEventListener('click', function(event) {
    const languageSelector = document.querySelector('.language-selector');
    const dropdown = document.getElementById('language-dropdown');

    if (languageSelector && !languageSelector.contains(event.target)) {
        dropdown.classList.remove('open');
    }
});

// Initialize language on page load
function initLanguage() {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
        document.getElementById('current-language').textContent = savedLanguage;
    }
}

// Set correct keyboard shortcut hint based on OS
function initSearchShortcut() {
    const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
    const shortcutHint = document.getElementById('search-shortcut');
    if (shortcutHint) {
        shortcutHint.textContent = isMac ? '⌘K' : 'Ctrl+K';
    }
}

// Keyboard shortcut for search (CMD+K or CTRL+K)
document.addEventListener('keydown', function(event) {
    // Check for CMD+K (Mac) or CTRL+K (Windows/Linux)
    if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault();
        const searchBox = document.getElementById('search-box');
        searchBox.focus();
    }
});

// Initialize theme on page load
initTheme();

// Initialize language on page load
initLanguage();

// Initialize search shortcut hint
initSearchShortcut();
