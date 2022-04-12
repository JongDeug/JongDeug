// configuration variables
const itemsPerPage = 5;

// reference to keep track of current pages
let currentPage = 1;

// data
const articles = [
    {   
        title : "Title1",
        article : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, minima. Excepturi sequi dolorem sunt et corporis! Nesciunt reprehenderit facilis commodi neque aspernatur dolorum repudiandae ex accusantium sit maiores, quaerat consectetur?",
        date : new Date().getDate()
    },
    {   
        title : "Title2",
        article : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, minima. Excepturi sequi dolorem sunt et corporis! Nesciunt reprehenderit facilis commodi neque aspernatur dolorum repudiandae ex accusantium sit maiores, quaerat consectetur?",
        date : new Date().getDate()
    },
    {   
        title : "Title3",
        article : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, minima. Excepturi sequi dolorem sunt et corporis! Nesciunt reprehenderit facilis commodi neque aspernatur dolorum repudiandae ex accusantium sit maiores, quaerat consectetur?",
        date : new Date().getDate()
    },
    {   
        title : "Title4",
        article : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, minima. Excepturi sequi dolorem sunt et corporis! Nesciunt reprehenderit facilis commodi neque aspernatur dolorum repudiandae ex accusantium sit maiores, quaerat consectetur?",
        date : new Date().getDate()
    },
    {   
        title : "Title5",
        article : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, minima. Excepturi sequi dolorem sunt et corporis! Nesciunt reprehenderit facilis commodi neque aspernatur dolorum repudiandae ex accusantium sit maiores, quaerat consectetur?",
        date : new Date().getDate()
    },
    {   
        title : "Title6",
        article : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, minima. Excepturi sequi dolorem sunt et corporis! Nesciunt reprehenderit facilis commodi neque aspernatur dolorum repudiandae ex accusantium sit maiores, quaerat consectetur?",
        date : new Date().getDate()
    },
    {   
        title : "Title7",
        article : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, minima. Excepturi sequi dolorem sunt et corporis! Nesciunt reprehenderit facilis commodi neque aspernatur dolorum repudiandae ex accusantium sit maiores, quaerat consectetur?",
        date : new Date().getDate()
    },
    {   
        title : "Title8",
        article : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, minima. Excepturi sequi dolorem sunt et corporis! Nesciunt reprehenderit facilis commodi neque aspernatur dolorum repudiandae ex accusantium sit maiores, quaerat consectetur?",
        date : new Date().getDate()
    },
    {   
        title : "Title9",
        article : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, minima. Excepturi sequi dolorem sunt et corporis! Nesciunt reprehenderit facilis commodi neque aspernatur dolorum repudiandae ex accusantium sit maiores, quaerat consectetur?",
        date : new Date().getDate()
    },
    {   
        title : "Title10",
        article : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, minima. Excepturi sequi dolorem sunt et corporis! Nesciunt reprehenderit facilis commodi neque aspernatur dolorum repudiandae ex accusantium sit maiores, quaerat consectetur?",
        date : new Date().getDate()
    },
    {   
        title : "Title11",
        article : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, minima. Excepturi sequi dolorem sunt et corporis! Nesciunt reprehenderit facilis commodi neque aspernatur dolorum repudiandae ex accusantium sit maiores, quaerat consectetur?",
        date : new Date().getDate()
    },
    {   
        title : "Title12",
        article : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, minima. Excepturi sequi dolorem sunt et corporis! Nesciunt reprehenderit facilis commodi neque aspernatur dolorum repudiandae ex accusantium sit maiores, quaerat consectetur?",
        date : new Date().getDate()
    },
    {   
        title : "Title13",
        article : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, minima. Excepturi sequi dolorem sunt et corporis! Nesciunt reprehenderit facilis commodi neque aspernatur dolorum repudiandae ex accusantium sit maiores, quaerat consectetur?",
        date : new Date().getDate()
    },
    {   
        title : "Title14",
        article : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, minima. Excepturi sequi dolorem sunt et corporis! Nesciunt reprehenderit facilis commodi neque aspernatur dolorum repudiandae ex accusantium sit maiores, quaerat consectetur?",
        date : new Date().getDate()
    },
    {   
        title : "Title15",
        article : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, minima. Excepturi sequi dolorem sunt et corporis! Nesciunt reprehenderit facilis commodi neque aspernatur dolorum repudiandae ex accusantium sit maiores, quaerat consectetur?",
        date : new Date().getDate()
    },
    {   
        title : "Title16",
        article : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, minima. Excepturi sequi dolorem sunt et corporis! Nesciunt reprehenderit facilis commodi neque aspernatur dolorum repudiandae ex accusantium sit maiores, quaerat consectetur?",
        date : new Date().getDate()
    },
    {   
        title : "Title17",
        article : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, minima. Excepturi sequi dolorem sunt et corporis! Nesciunt reprehenderit facilis commodi neque aspernatur dolorum repudiandae ex accusantium sit maiores, quaerat consectetur?",
        date : new Date().getDate()
    },
    {   
        title : "Title18",
        article : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, minima. Excepturi sequi dolorem sunt et corporis! Nesciunt reprehenderit facilis commodi neque aspernatur dolorum repudiandae ex accusantium sit maiores, quaerat consectetur?",
        date : new Date().getDate()
    },

];

// reference to total pages
const pages = numPages(articles);


function numPages(articleArray){
    // return the number of pages
    return Math.ceil(articleArray.length/itemsPerPage);
}

function changePage(page){
    // reference to output containing element
    const output = document.querySelector("#main .content .article");

    // make sure page is in bounds
    if(page < 1) page = 1;
    if(page > pages) page = pages;

    // clear output containing element
    output.innerHTML = "";

    // for each item within the range of the current page
    for(let i = (page - 1) * itemsPerPage; i<articles.length && i<(page * itemsPerPage); i++){
        // append the html to output containing element
        output.innerHTML += `<article class="cont_col">
                            <h3>${articles[i].title}</h3>
                            <p>${articles[i].article}</p>
                            <span>${articles[i].date}</span>
                            </article> `;
    }
}

function nextPage(){
    // if not on last page, goto next page
    if(currentPage < pages) changePage(++currentPage);
}

function prevPage(){
    // if not on first page, goto previous page
    if(currentPage > 1) changePage(--currentPage);
}

// directly access a page by number
function gotoPage(page){
    // set the current page to the selected page
    currentPage = page;
    // change the page to the selected page
    changePage(currentPage);
}

// creates individual page navigation
function addPages(){
    // grab reference to containing element
    let el = document.querySelector("#main .content .pagination #pages");
    // for each page
    for(let i=1; i<pages+1; i++){
        // append a link with the respective page number
        el.innerHTML += `<li><a href="javascript:gotoPage(${i})">${i}</a></li>`;
    }
}

window.onload = function(){
    changePage(1); // set default page
    addPages();
};
//여기서 배운 점 : a태그 href에 javascript 함수를 쓸 수 있다는 거
// filter가 아니라 for 구문을 사용해서 직접 index로 들어가서 설정하는거






// const article = document.querySelectorAll("#main .content .cont_col");
// const paginationNum = document.querySelector(".pagination ul");

// // 어떤 기능이 필요할까?
// // pagination을 클릭했을 때 반응이 일어나야함.
// // 버튼을 클릭했을 때 이동한 숫자에 맞게 페이지가 달라져야함.

// // 지금 코드에서의 문제점 
// // 1. 버튼을 클릭 했을 때 숫자의 이동이 있어야 되는데 그 숫자가 a태그여야 하는지? 
// // a. a태그 써야되는거 맞고 href에 경로명도 있어야하네,,?
// // 2. 클릭한 숫자에 맞게끔 인자를 받아 예를들어 4면 16~20까지만 출력을 해야됨.



// function paintArticle(){
//     let arr = Array.from(article);
//     let hidden = arr.filter(element => arr.indexOf(element) >= 5);
//     hidden.forEach(element => element.classList.add("hidden"));

//     let noHidden = arr.filter(element => arr.indexOf(element) < 5);
//     noHidden.forEach(element => element.classList.remove("hidden"));
// }
// paintArticle();



// function paintPagination(){
//     const num = Math.ceil(article.length/5); //페이지 번호
//     for(let i=1; i<=num; i++){
//         const li = document.createElement("li");
//         const span = document.createElement("span");
//         paginationNum.appendChild(li);
//         li.appendChild(span);
//         span.innerText = i;
//     }    
// }
// paintPagination();