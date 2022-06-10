const imgContainer = [
    { img: "img/profile.jpg" },
    { img: "img/cream.jpg" },
    { img: "img/dog.jpg" },
    { img: "img/frog.png" },
    { img: "img/jar.jpg" }
]
const prevBtn = document.querySelector('.prev_btn');
const nextBtn = document.querySelector('.next_btn');


// 번호 관리 변수
const totalImage = imgContainer.length;
let currentImage = 1;


// 총 관리자
function paintImage(current) {
    const output = document.querySelector('.aside .image');

    if (current < 1) currentImage = totalImage;
    if (current > totalImage) currentImage = 1;

    output.innerHTML = `<img class="mySlide" src="${imgContainer[currentImage - 1].img}" alt="">`;

    paintPagination(currentImage);
}

// 세부 관리자
function paintPagination(current) {
    const output = document.querySelector('.aside ul');

    output.innerHTML = "";
    for (let i = 0; i < totalImage; i++) {
        if (i === current-1) output.innerHTML += `<li class="active">•</li>`;
        else output.innerHTML += `<li>•</li>`;
    }
    
    const paginationItems = document.querySelectorAll('.aside ul li');
    paginationItems.forEach((item, key)=>{
        item.addEventListener('click', function(){
            currentImage = ++key;
            paintImage(currentImage);
        })
    })
}

function prevBtnHandler() {
    paintImage(--currentImage);
}
prevBtn.addEventListener('click', prevBtnHandler);

function nextButnHandler() {
    paintImage(++currentImage);
}
nextBtn.addEventListener('click', nextButnHandler);


//setup
paintImage(currentImage);

