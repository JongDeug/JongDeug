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


//????????? ?????? ??? : a?????? href??? javascript ????????? ??? ??? ????????? ???
// filter??? ????????? for ????????? ???????????? ?????? index??? ???????????? ???????????????







// // ?????? ????????? ?????????????
// // pagination??? ???????????? ??? ????????? ???????????????.
// // ????????? ???????????? ??? ????????? ????????? ?????? ???????????? ???????????????.

// // ?????? ??????????????? ????????? 
// // 1. ????????? ?????? ?????? ??? ????????? ????????? ????????? ????????? ??? ????????? a???????????? ?????????? 
// // a. a?????? ??????????????? ?????? href??? ???????????? ???????????????,,?
// // 2. ????????? ????????? ????????? ????????? ?????? ???????????? 4??? 16~20????????? ????????? ?????????.
