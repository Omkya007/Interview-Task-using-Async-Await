const cl = console.log;

const loader = document.getElementById("loader");
const postForm = document.getElementById("postform");
const titleCon = document.getElementById("title");
const contentCon = document.getElementById("content");
const userIdCon = document.getElementById("userId");
const cardCon = document.getElementById("cardCon");
const BASE_URL = "https://jsonplaceholder.typicode.com";

const POST_URL = `${BASE_URL}/posts`;//this url will be same for post and get
const submitBtn = document.getElementById('submitBtn');
const updateBtn = document.getElementById('updateBtn');
// const EDIT_URL =`${BASE_URL}/posts/:editId` >> here editId is params
const templating = (arr) => {
    let res = ``;

    arr.forEach(ele => {
        res += `
         <div class="col-md-4 mb-4">
                <div class="card  postCard h-100" id="${ele.id}">
                    <div class="card-header">
                        <h3 class="m-0">${ele.title}</h3>
                    </div>
                    <div class="card-body">
                        <p class="m-0">${ele.body}</p>
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                        <button class="btn btn-sm btn-primary" onclick="onEdit(this)">Edit</button>
                        <button class="btn btn-sm btn-danger" onclick="onRemove(this)">Delete</button>
                    </div>
                </div>
            </div>
        `
    })
    cardCon.innerHTML = res;

}

const makeApiCall = (methodName,apiUrl,msgBody=null)=>{
    let xhr= new XMLHttpRequest();

    xhr.open(methodName,apiUrl);
    xhr.onload = function(){
        if(xhr.status>=200 && xhr.status<300){

            let data =JSON.parse(xhr.response)
            if(methodName=="GET"){
                //if data is array >>temp
                if(Array.isArray(data)){
                    templating(data)
                }else{
                    cl(`Patch data in form`)
                }



                //else we are getting >> patch data in form
            }
        }
    }
    xhr.send(msgBody)

}

makeApiCall("GET",POST_URL)
