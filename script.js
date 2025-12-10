// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Dynamic Year Update in Footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Simple Console Log (For verification)
    console.log("Academic Page Loaded Successfully");

    // 3. Optional: Add 'target="_blank"' to all external PDF links automatically
    // This ensures your paper opens in a new tab so users don't leave your site.
    const links = document.querySelectorAll('.link-btn');
    links.forEach(link => {
        if (link.getAttribute('href').startsWith('http')) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
});