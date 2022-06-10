const articles = [
    {   
        title : "Title1",
        content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, minima. Excepturi sequi dolorem sunt et corporis! Nesciunt reprehenderit facilis commodi neque aspernatur dolorum repudiandae ex accusantium sit maiores, quaerat consectetur?",
        date : new Date().getDate()
    },
    {   
        title : "Title2",
        content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, minima. Excepturi sequi dolorem sunt et corporis! Nesciunt reprehenderit facilis commodi neque aspernatur dolorum repudiandae ex accusantium sit maiores, quaerat consectetur?",
        date : new Date().getDate()
    },
    {   
        title : "Title3",
        content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, minima. Excepturi sequi dolorem sunt et corporis! Nesciunt reprehenderit facilis commodi neque aspernatur dolorum repudiandae ex accusantium sit maiores, quaerat consectetur?",
        date : new Date().getDate()
    },
    {   
        title : "Title4",
        content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, minima. Excepturi sequi dolorem sunt et corporis! Nesciunt reprehenderit facilis commodi neque aspernatur dolorum repudiandae ex accusantium sit maiores, quaerat consectetur?",
        date : new Date().getDate()
    },
    {   
        title : "Title5",
        content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, minima. Excepturi sequi dolorem sunt et corporis! Nesciunt reprehenderit facilis commodi neque aspernatur dolorum repudiandae ex accusantium sit maiores, quaerat consectetur?",
        date : new Date().getDate()
    },
    {   
        title : "Title6",
        content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, minima. Excepturi sequi dolorem sunt et corporis! Nesciunt reprehenderit facilis commodi neque aspernatur dolorum repudiandae ex accusantium sit maiores, quaerat consectetur?",
        date : new Date().getDate()
    },
    {   
        title : "Title7",
        content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, minima. Excepturi sequi dolorem sunt et corporis! Nesciunt reprehenderit facilis commodi neque aspernatur dolorum repudiandae ex accusantium sit maiores, quaerat consectetur?",
        date : new Date().getDate()
    },
    {   
        title : "Title8",
        content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, minima. Excepturi sequi dolorem sunt et corporis! Nesciunt reprehenderit facilis commodi neque aspernatur dolorum repudiandae ex accusantium sit maiores, quaerat consectetur?",
        date : new Date().getDate()
    },
    {   
        title : "Title9",
        content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, minima. Excepturi sequi dolorem sunt et corporis! Nesciunt reprehenderit facilis commodi neque aspernatur dolorum repudiandae ex accusantium sit maiores, quaerat consectetur?",
        date : new Date().getDate()
    },
    {   
        title : "Title10",
        content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, minima. Excepturi sequi dolorem sunt et corporis! Nesciunt reprehenderit facilis commodi neque aspernatur dolorum repudiandae ex accusantium sit maiores, quaerat consectetur?",
        date : new Date().getDate()
    },
    {   
        title : "Title11",
        content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, minima. Excepturi sequi dolorem sunt et corporis! Nesciunt reprehenderit facilis commodi neque aspernatur dolorum repudiandae ex accusantium sit maiores, quaerat consectetur?",
        date : new Date().getDate()
    },
    {   
        title : "Title12",
        content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, minima. Excepturi sequi dolorem sunt et corporis! Nesciunt reprehenderit facilis commodi neque aspernatur dolorum repudiandae ex accusantium sit maiores, quaerat consectetur?",
        date : new Date().getDate()
    },
    {   
        title : "Title13",
        content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, minima. Excepturi sequi dolorem sunt et corporis! Nesciunt reprehenderit facilis commodi neque aspernatur dolorum repudiandae ex accusantium sit maiores, quaerat consectetur?",
        date : new Date().getDate()
    },
    {   
        title : "Title14",
        content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, minima. Excepturi sequi dolorem sunt et corporis! Nesciunt reprehenderit facilis commodi neque aspernatur dolorum repudiandae ex accusantium sit maiores, quaerat consectetur?",
        date : new Date().getDate()
    },
    {   
        title : "Title15",
        content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, minima. Excepturi sequi dolorem sunt et corporis! Nesciunt reprehenderit facilis commodi neque aspernatur dolorum repudiandae ex accusantium sit maiores, quaerat consectetur?",
        date : new Date().getDate()
    },
    {   
        title : "Title16",
        content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, minima. Excepturi sequi dolorem sunt et corporis! Nesciunt reprehenderit facilis commodi neque aspernatur dolorum repudiandae ex accusantium sit maiores, quaerat consectetur?",
        date : new Date().getDate()
    },
    {   
        title : "Title17",
        content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, minima. Excepturi sequi dolorem sunt et corporis! Nesciunt reprehenderit facilis commodi neque aspernatur dolorum repudiandae ex accusantium sit maiores, quaerat consectetur?",
        date : new Date().getDate()
    },
    {   
        title : "Title18",
        content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, minima. Excepturi sequi dolorem sunt et corporis! Nesciunt reprehenderit facilis commodi neque aspernatur dolorum repudiandae ex accusantium sit maiores, quaerat consectetur?",
        date : new Date().getDate()
    },
];


const itemsPerPage = 5;
const totalPages =  Math.ceil(articles.length/itemsPerPage);
let currentPage = 1;


function paintArticle(currentPage){
    // reference to output(.article) containing elements
    const output = document.querySelector("#main .content .article");
    
    if(currentPage < 1) currentPage = 1;
    if(currentPage > totalPages) currentPage = totalPages;
    // clear
    output.innerHTML = "";

    // for each item within the range of the current page
    for(let i = (currentPage-1)*itemsPerPage; i<currentPage*itemsPerPage && i<articles.length; i++){
        output.innerHTML += `<article class="cont_col"> <h3>${articles[i].title}</h3> <p>${articles[i].content}</p> <span>${articles[i].date}</span> </article>`;
    }
}

function prevPage(){
    if(currentPage > 1) paintArticle(--currentPage);
}
function nextPage(){
    if(currentPage < totalPages) paintArticle(++currentPage);
}

function paintNumPage(){
    const ul = document.querySelector("#main .content #pages");
    
    for(let i=1; i<totalPages+1; i++){
        ul.innerHTML += `<li><a href="#" onclick="javascript:gotoPage(${i})">${i}</a></li>`;
    }
}

function gotoPage(page){
    currentPage = page;
    paintArticle(page);
}

paintArticle(currentPage); // set default
paintNumPage();


//여기서 배운 점 : a태그 href에 javascript 함수를 쓸 수 있다는 거
// filter가 아니라 for 구문을 사용해서 직접 index로 들어가서 설정하는거







// // 어떤 기능이 필요할까?
// // pagination을 클릭했을 때 반응이 일어나야함.
// // 버튼을 클릭했을 때 이동한 숫자에 맞게 페이지가 달라져야함.

// // 지금 코드에서의 문제점 
// // 1. 버튼을 클릭 했을 때 숫자의 이동이 있어야 되는데 그 숫자가 a태그여야 하는지? 
// // a. a태그 써야되는거 맞고 href에 경로명도 있어야하네,,?
// // 2. 클릭한 숫자에 맞게끔 인자를 받아 예를들어 4면 16~20까지만 출력을 해야됨.
