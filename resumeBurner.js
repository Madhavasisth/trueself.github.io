document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('resumeForm');
    const input = document.getElementById('resumeInput');
    const resumePaper = document.getElementById('resumePaper');
    const resumeFileName = document.getElementById('resumeFileName');
    const ashes = document.getElementById('ashes');
    const flames = document.getElementById('flames');
    const burnedMessage = document.getElementById('burnedMessage');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (!input.files.length) return;

        // Show file name on the paper
        resumeFileName.textContent = input.files[0].name;

        // Reset
        resumePaper.className = '';
        ashes.innerHTML = '';
        ashes.className = '';
        flames.innerHTML = '';
        flames.className = '';
        burnedMessage.textContent = '';

        // Start shredder animation
        resumePaper.classList.add('shredding');
        setTimeout(() => {
            // After shredding, show burning
            resumePaper.classList.remove('shredding');
            resumePaper.classList.add('burning');
            // Show flames
            flames.className = 'visible';
            flames.innerHTML = `
                <div class="flame"></div>
                <div class="flame small"></div>
                <div class="flame tiny"></div>
            `;
            // Show ashes
            setTimeout(() => {
                ashes.className = 'visible';
                for (let i = 0; i < 7; i++) {
                    const ash = document.createElement('div');
                    ash.className = 'ash';
                    ash.style.left = (10 + i * 15) + 'px';
                    ash.style.animationDelay = (Math.random() * 0.7) + 's';
                    ashes.appendChild(ash);
                }
            }, 900);
            // Remove paper and flames, show message
            setTimeout(() => {
                resumePaper.style.opacity = 0;
                flames.className = '';
                ashes.className = '';
                ashes.innerHTML = '';
                burnedMessage.textContent = "Your resume has been burned to ashes! Welcome to the revolution.";
            }, 2200);
        }, 1200);
    });
});
