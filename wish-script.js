// URL থেকে নাম এবং জেন্ডার সংগ্রহ করা
const urlParams = new URLSearchParams(window.location.search);
const rawName = urlParams.get('name') || "Sweetheart";
const type = urlParams.get('type') || "girl";
const title = (type === "girl") ? "Princess" : "King";

// টাইটেল আপডেট করা
document.getElementById("personalized-title").innerText = `Eid Mubarak, ${title} ${rawName}! 🌙`;

const wishes = [
    {
        text: `May this Eid bring you as much joy as your smile brings to my heart, my ${title}. 💖`,
        gif: "https://gifdb.com/images/high/mochi-mochi-peach-cat-gif-file-494kb-aax9dv39khdby1xh.webp"
    },
    {
        text: "Wishing you a day filled with laughter, love, and endless happiness. ✨",
        gif: "https://gifdb.com/images/high/mochi-mochi-peach-cat-gif-file-2169kb-sz5qb2llabzg46qu.webp"
    },
    {
        text: `You are the most beautiful part of my life. Eid Mubarak, my ${title}! 🌹`,
        gif: "https://gifdb.com/images/high/mochi-mochi-peach-cat-gif-file-2671kb-uudx29i0jja0yyim.webp"
    },
    {
        text: "Always stay by my side, just like this. Happy Eid! 💕",
        gif: "https://gifdb.com/images/high/mochi-mochi-peach-cat-gif-file-5725kb-2p6g03lbblpoe1z7.webp"
    },
    {
        text: "A special hug for you on this special day! 🎀",
        gif: "https://gifdb.com/images/high/mochi-mochi-peach-cat-gif-file-724kb-81bia62wfd2oyiu3.webp"
    }
];

let currentWish = 0;
const container = document.getElementById("cards-container");
const nextBtn = document.getElementById("next-btn");

function showWish() {
    if (currentWish < wishes.length) {
        container.innerHTML = "";
        const wish = wishes[currentWish];
        
        const card = document.createElement("div");
        card.className = "wish-card";
        card.innerHTML = `
            <img src="${wish.gif}" alt="Cat GIF">
            <p style="font-size: 1.2rem; color: #d63384; font-weight: 600;">${wish.text}</p>
        `;
        
        container.appendChild(card);
        gsap.from(card, { opacity: 0, scale: 0.8, duration: 0.5 });
        
        currentWish++;
        
        if (currentWish === wishes.length) {
            nextBtn.innerText = "One Last Surprise... 🎁";
        }
    } else {
        container.innerHTML = `
            <div class="wish-card">
                <img src="https://gifdb.com/images/high/mochi-mochi-peach-cat-gif-file-1136kb-tb9vrnxamrsn3cva.webp" alt="Last GIF">
                <h3 class="title" style="font-size: 2rem;">I Love You Forever! ❤️</h3>
                <p>May our bond stay strong forever and ever.</p>
            </div>
        `;
        nextBtn.style.display = "none";
        createHearts();
    }
}

nextBtn.addEventListener("click", showWish);
showWish(); 

function createHearts() {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.className = "floating";
        heart.innerHTML = "💖";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "100vh";
        heart.style.fontSize = Math.random() * 20 + 20 + "px";
        document.body.appendChild(heart);

        gsap.to(heart, {
            y: "-110vh",
            x: (Math.random() - 0.5) * 200,
            duration: 4 + Math.random() * 2,
            onComplete: () => heart.remove()
        });
    }, 300);
}