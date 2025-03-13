var count = 1
var interval
function before() {
    var img = document.getElementById("imge")
    if (count === 1) {
        img.setAttribute("src", `../images/${count}.jpg`)
        count = 5
    }
    count--
    img.setAttribute("src", `../images/${count}.jpg`)
    console.log(img)
}
function after() {
    var img = document.getElementById("imge")
    if (count === 4) {
        img.setAttribute("src", `../images/${count}.jpg`)
        count = 0
    }
    count++
    img.setAttribute("src", `../images/${count}.jpg`)
    console.log(img)
}

function play() {
    var img = document.getElementById("imge")
    interval = setInterval(function () {
        if (count === 4) {
            img.setAttribute("src", `../images/${count}.jpg`)
            count = 0
        }
        count++
        img.setAttribute("src", `../images/${count}.jpg`)
        console.log(img)
    }, 1000)

}

function stop() {
    clearInterval(interval)
    interval = null
}

