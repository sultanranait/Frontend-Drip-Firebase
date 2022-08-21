var video = document.getElementById('video')
var button = document.getElementById('play')
var alertMessage = document.querySelectorAll(".alert")
var modal = new bootstrap.Modal(document.getElementById("modal"), {})
var startTime = 0
var endTime = 64

button.addEventListener('click', playVideo, !1)

document.querySelectorAll("input").forEach(item => {
    item.addEventListener("change", () => {
        if (item.id.match('option1')) {
            alertMessage[1].classList.remove('d-none')
            alertMessage[0].classList.add('d-none')
            setTimeout(function () {
                modal.hide()
                video.play()
                alertMessage[1].classList.add('d-none')
                item.checked = false
            }, 1000);
        } else {
            alertMessage[0].classList.remove('d-none')
            alertMessage[1].classList.add('d-none')
            video.pause()
        }
    })
})

function playVideo(e) {
    function checkTime() {
        if (video.currentTime >= endTime) {
            video.pause()
            modal.show()
        } else {
            setTimeout(checkTime, 100)
        }
    }
    video.currentTime = startTime
    video.play()
    checkTime()
}

function pauseVideo() {
    video.pause()
}