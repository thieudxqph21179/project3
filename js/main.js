// Trở về đầu trang
$(document).ready(function() {
    $(window).scroll(function() { // Bắt sự kiện thanh cuộn
        if ($(this).scrollTop()) { // Lấy vị trí thanh cuộn
            $('#click').fadeIn(); // hiện
        } else {
            $('#click').fadeOut(); // ẩn
        }
    });
    $('#click').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

    // Sticky
    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $(".menu").addClass("sticky");
        } else {
            $(".menu").removeClass("sticky");
        }
    });

    //Chi tiết sản phẩm
    $('.img-child img').click(function() {
        let imgPath = $(this).attr('src');
        $('#img-father').attr('src', imgPath);
    });

    // reply
    $('.reply form').slideUp();
    $('.reply a').click(function() {
        $(this).next().slideToggle();
    });

    $('.reply p').click(function() {
        $('.close-comment').prev().slideUp();
    });
});

// Slider
window.addEventListener("scroll", function() {
    var header = document.getElementsByClassName(".menu");
    header.classList.toggle("sticky", window.scrollY > 0);
});


let slide_index = 0
let slide_play = true
let slides = document.querySelectorAll('.slide')

hideAllSlide = () => {
    slides.forEach(e => {
        e.classList.remove('active')
    })
}

showSlide = () => {
    hideAllSlide()
    slides[slide_index].classList.add('active')
}

nextSlide = () => slide_index = slide_index + 1 === slides.length ? 0 : slide_index + 1

prevSlide = () => slide_index = slide_index - 1 < 0 ? slides.length - 1 : slide_index - 1


document.querySelector('.slider').addEventListener('mouseover', () => slide_play = false)


document.querySelector('.slider').addEventListener('mouseleave', () => slide_play = true)



document.querySelector('.slide-next').addEventListener('click', () => {
    nextSlide()
    showSlide()
})

document.querySelector('.slide-prev').addEventListener('click', () => {
    prevSlide()
    showSlide()
})

showSlide()

setInterval(() => {
    if (!slide_play) return
    nextSlide()
    showSlide()
}, 2000);

// Date
var date = new Date("jan 1,2022 00:00:00").getTime();
setInterval(function() {
    var now = new Date().getTime();
    var D = date - now;
    var days = Math.floor(D / (1000 * 60 * 60 * 24));
    var hours = Math.floor(D / (1000 * 60 * 60));
    var minutes = Math.floor(D / (1000 * 60));
    var seconds = Math.floor(D / (1000));

    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}, 1000);

// Thay ảnh đại diện
function showPreview(event) {
    var image = URL.createObjectURL(event.target.files[0]);
    var imagediv = document.getElementById('preview');
    var newimg = document.createElement('img');
    imagediv.innerHTML = '';
    newimg.src = image;
    imagediv.appendChild(newimg);
}