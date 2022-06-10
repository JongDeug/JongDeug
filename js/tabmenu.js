const tabItems = document.querySelectorAll('.tab-items');
const tabContents = document.querySelectorAll('.content-items');

tabItems.forEach((item) => {
    item.addEventListener('click', tabHandler);
});

function tabHandler(event) {
    event.preventDefault();
    const tabTarget = event.currentTarget;
    const target = tabTarget.dataset.tab;

    // 초기화 과정
    tabItems.forEach((title) => {
        title.classList.remove('active');
    });
    tabContents.forEach((target) => {
        target.classList.remove('target');
    });

    document.querySelector(`#${target}`).classList.add('target');
    tabTarget.classList.add('active');
}