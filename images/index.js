let giftImages = document.getElementsByClassName("gift-img");
for (let i = 0; i < giftImages.length; i++) {
    giftImages[i].onmouseout = function() {
        alert("Bir bybi ye metnak");
    };
}


window.onload = function() {
    alert("Welcome DOG!");
}
