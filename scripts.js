// 添加滚动加载动画
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight) {
            section.classList.add('animate__animated', 'animate__fadeIn');
        }
    });
});

// 添加按钮点击事件
document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('#contact button');
    if (button) {
        button.addEventListener('click', function() {
            alert('感谢您的关注！');
        });
    }
});

// 添加图片轮播功能
let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');
const totalImages = images.length;
const indicators = document.querySelectorAll('.carousel-indicators li');

function showNextImage() {
    images[currentIndex].classList.remove('active');
    indicators[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalImages;
    images[currentIndex].classList.add('active');
    indicators[currentIndex].classList.add('active');
}

function showImage(index) {
    images[currentIndex].classList.remove('active');
    indicators[currentIndex].classList.remove('active');
    currentIndex = index;
    images[currentIndex].classList.add('active');
    indicators[currentIndex].classList.add('active');
}

setInterval(showNextImage, 3000);

// 添加点击图片放大功能
function enlargeImage(img) {
    const enlargedImg = document.createElement('img');
    enlargedImg.src = img.src;
    enlargedImg.style.position = 'fixed';
    enlargedImg.style.top = '50%';
    enlargedImg.style.left = '50%';
    enlargedImg.style.transform = 'translate(-50%, -50%)';
    enlargedImg.style.width = '90%';
    enlargedImg.style.height = '90%';
    enlargedImg.style.zIndex = '1000';
    enlargedImg.style.cursor = 'zoom-out';
    enlargedImg.onclick = function() {
        document.body.removeChild(enlargedImg);
    };
    document.body.appendChild(enlargedImg);
}
