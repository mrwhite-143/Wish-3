// Custom Cursor
const cursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1
    });
});

function showInput() {
    gsap.to("#welcome-screen", {
        opacity: 0,
        y: -50,
        duration: 0.8,
        onComplete: () => {
            document.getElementById("welcome-screen").style.display = "none";
            const inputScreen = document.getElementById("input-screen");
            inputScreen.style.display = "block";
            gsap.to(inputScreen, { opacity: 1, y: 0, duration: 0.8 });
        }
    });
}

function generateMagicLink() {
    const name = document.getElementById("userName").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    if (name.trim() === "") {
        alert("Please enter a name! ❤️");
        return;
    }

    // Creating the URL with parameters
    const baseUrl = window.location.href.split('index.html')[0] + 'wish.html';
    const finalURL = `${baseUrl}?name=${encodeURIComponent(name)}&type=${gender}`;

    document.getElementById("finalLink").value = finalURL;
    const resultDiv = document.getElementById("link-result");
    resultDiv.style.display = "block";
    gsap.from(resultDiv, { opacity: 0, y: 20, duration: 0.5 });
}

function copyLink() {
    const copyText = document.getElementById("finalLink");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Magic Link Copied! Send it to your special person. ❤️");
}