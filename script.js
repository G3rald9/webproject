function yesClicked() {
    document.getElementById("message").innerHTML =
        "You just made me very happy 💕<br>" +
        "Happy Valentine’s Day, Olivia ❤️<br><br>" +
        "<em>— From me Gerald ❤️</em>";

    startRain();
}

function moveNo() {
    const noBtn = document.querySelector(".no");
    const x = Math.random() * 220;
    const y = Math.random() * 40;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

function startRain() {
    setInterval(() => {
        const item = document.createElement("div");
        item.className = "fall";

        // Heart or Valentine badge only
        if (Math.random() > 0.5) {
            item.innerHTML = "❤️";
            item.style.fontSize = "24px";
        } else {
            item.innerHTML = `
                <div class="valentine-badge">
                    Happy Valentine’s Day 💖
                </div>
            `;
        }

        item.style.left = Math.random() * window.innerWidth + "px";
        item.style.animationDuration = (3 + Math.random() * 3) + "s";

        document.body.appendChild(item);

        setTimeout(() => {
            item.remove();
        }, 7000);

    }, 350);
}
