const drop = document.querySelector('.dropdown');
const dropContent = document.querySelector('.dropdown-content');
drop.addEventListener('click', function () {
    dropContent.classList.remove('hidden');
});

// 버블링이 발생해서 mouseout이 아닌 mouseleave를 사용한다.
dropContent.addEventListener('mouseleave', function () {
    dropContent.classList.add('hidden');
})