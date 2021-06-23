document.onkeydown = function (e) {
    var silver = document.getElementById("silver");
    if (e.keyCode == 37) {
        var left = parseInt(window.getComputedStyle(silver).getPropertyValue("left"));
        left -= 100;
        if (left >= 0) {
            silver.style.left = left + "px";
        }
    }
    if (e.keyCode == 39) {
        var left = parseInt(window.getComputedStyle(silver).getPropertyValue("left"));
        left += 100;
        if (left < 300) {
            silver.style.left = left + "px";
        }
    }
}
var counter = 0;

var corona = document.getElementById("corona");
corona.addEventListener("animationiteration", () => {
    var random = Math.floor(Math.random() * 3);
    left = random * 100;
    corona.style.left = left + "px";
})

var corona1 = document.getElementById("corona1");
corona1.addEventListener("animationiteration", () => {
    var random = Math.floor(Math.random() * 3);
    left = random * 100;
    corona1.style.left = left + "px";
})

var sanitizer = document.getElementById("sanitizer");
sanitizer.addEventListener("animationiteration", () => {
    var random = Math.floor(Math.random() * 3);
    left = random * 100;
    sanitizer.style.left = left + "px";
})

var mask = document.getElementById("mask");
mask.addEventListener("animationiteration", () => {
    var random = Math.floor(Math.random() * 3);
    left = random * 100;
    mask.style.left = left + "px";
})
setInterval(function () {
    var silver = document.getElementById("silver");
    var silverX = parseInt(window.getComputedStyle(silver).getPropertyValue("left"));
    var maskX = parseInt(window.getComputedStyle(mask).getPropertyValue("left"));
    var maskY = parseInt(window.getComputedStyle(mask).getPropertyValue("top"));
    var sanitizerX = parseInt(window.getComputedStyle(sanitizer).getPropertyValue("left"));
    var sanitizerY = parseInt(window.getComputedStyle(sanitizer).getPropertyValue("top"));
    var coronaX = parseInt(window.getComputedStyle(corona).getPropertyValue("left"));
    var coronaY = parseInt(window.getComputedStyle(corona).getPropertyValue("top"));
    var corona1X = parseInt(window.getComputedStyle(corona1).getPropertyValue("left"));
    var corona1Y = parseInt(window.getComputedStyle(corona1).getPropertyValue("top"));
    var sanitizerBar = document.getElementById("sanBar");
    var sanitizerWidth = sanitizerBar.clientWidth;
    var maskBar = document.getElementById("maskBar");
    var maskWidth = maskBar.clientWidth;
    console.log("mask = " + maskWidth, "sanitizer = " + sanitizerWidth);
    //checking if silver touches to mask
    if (silverX == maskX && maskY > 275 && maskY < 500) {
        maskWidth += 1;
        maskBar.style.width = maskWidth + "px";
    }

    //checking if silver touches to sanitizer 
    if (silverX == sanitizerX && sanitizerY > 275 && sanitizerY < 500) {
        sanitizerWidth += 1;
        sanitizerBar.style.width = sanitizerWidth + "px";
    }

    //sanitizerwidth
    if (sanitizerWidth < 99) {
        if (!sanitizerWidth == 0) {
            if (silverX == corona1X && corona1Y > 275 && corona1Y < 500 && sanitizerWidth < 99) {
                window.alert("game over, reload to play again, score " + counter);
                mask.style.animation = "none";
                sanitizer.style.animation = "none";
                corona.style.animation = "none";
                corona1.style.animation = "none";
                document.getElementById("score").innerHTML = "Score: " + counter;
            }

            if (silverX == coronaX && coronaY > 275 && coronaY < 500 && sanitizerWidth < 99) {
                window.alert("game over, reload to play again, score " + counter);
                mask.style.animation = "none";
                sanitizer.style.animation = "none";
                corona.style.animation = "none";
                corona1.style.animation = "none";
                document.getElementById("score").innerHTML = "Score: " + counter;
            }
        }
    }
    if (sanitizerWidth > 99) {
        sanitizerBar.style.width = 100 + "px";
        sanitizerBar.style.backgroundColor = "green";
        if (silverX == corona1X && corona1Y > 275 && corona1Y < 500 && sanitizerWidth > 99) {
            counter++;
            mask.style.animation = "mask 0.9 linear infinite";
            sanitizer.style.animation = "sanitizer 0.9 linear infinite";
            corona.style.animation = "corona 0.9 linear infinite";
            corona1.style.animation = "corona 0.9s linear infinite";
            sanitizerBar.style.backgroundColor = "yellow";
            sanitizerBar.style.width = 0 + "px";
        }
        if (silverX == coronaX && coronaY > 275 && coronaY < 500 && sanitizerWidth > 99) {
            counter++;
            mask.style.animation = "mask 0.9 linear infinite";
            sanitizer.style.animation = "sanitizer 0.9 linear infinite";
            corona.style.animation = "corona 0.9 linear infinite";
            corona1.style.animation = "corona 0.9s linear infinite";
            sanitizerBar.style.backgroundColor = "yellow";
            sanitizerBar.style.width = 0 + "px";
        }
    }
    //maskwidth
    if (maskWidth < 99) {
        if (!maskWidth == 0) {
            if (silverX == coronaX && coronaY > 275 && coronaY < 500 && maskWidth < 99) {
                window.alert("game over, reload to play again, score " + counter);
                mask.style.animation = "none";
                sanitizer.style.animation = "none";
                corona.style.animation = "none";
                corona1.style.animation = "none";
                document.getElementById("score").innerHTML = "Score: " + counter;
            }

            if (silverX == coronaX && coronaY > 275 && coronaY < 500 && maskWidth < 99) {
                window.alert("game over, reload to play again, score " + counter);
                mask.style.animation = "none";
                sanitizer.style.animation = "none";
                corona.style.animation = "none";
                corona1.style.animation = "none";
                document.getElementById("score").innerHTML = "Score: " + counter;
            }
        }
    }
    if (maskWidth > 99) {
        maskBar.style.width = 100 + "px";
        maskBar.style.backgroundColor = "green";
        if (silverX == coronaX && coronaY > 275 && coronaY < 500 && maskWidth > 99) {
            counter++;
            mask.style.animation = "mask 0.9 linear infinite";
            sanitizer.style.animation = "sanitizer 0.9 linear infinite";
            corona.style.animation = "corona 0.9 linear infinite";
            corona1.style.animation = "corona 0.9s linear infinite";
            maskBar.style.backgroundColor = "yellow";
            maskBar.style.width = 0 + "px";
        }
        if (silverX == corona1X && corona1Y > 275 && corona1Y < 500 && maskWidth > 99) {
            counter++;
            mask.style.animation = "mask 0.9 linear infinite";
            sanitizer.style.animation = "sanitizer 0.9 linear infinite";
            corona.style.animation = "corona 0.9 linear infinite";
            corona1.style.animation = "corona 0.9s linear infinite";
            maskBar.style.backgroundColor = "yellow";
            maskBar.style.width = 0 + "px";
        }
    }
}, 1)
