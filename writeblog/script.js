const addTextBtn = document.getElementById('add-text-btn')
const postImageInput = document.getElementById('post-image-input')
const postTextInput = document.getElementById('post-text-input')
const postContentDiv = document.getElementById('post-content-div')
const postTitleInput = document.getElementById('post-title-input')
const postTitleDiv = document.getElementById('post-title-div-span')
const postSubTitleInput = document.getElementById('post-sub-title-input')
const postSubTitleDiv = document.getElementById('post-sub-title-div-span')


 postImageInput.addEventListener ('change',async(event) => {
    const imgDiv = document.createElement("div");
    imgDiv.classList.add('post-image-div')
    const img = document.createElement("img");
    const crossBtnDiv = document.createElement("div");
    crossBtnDiv.classList.add('img-cross-div')
    const crossBtn = document.createElement("p");
    crossBtn.innerText='x';
    let imgSrc= URL.createObjectURL(event.target.files[0]);
    img.src = imgSrc;
    crossBtnDiv.appendChild(crossBtn)
    imgDiv.appendChild(crossBtnDiv)
    imgDiv.appendChild(img)
    postContentDiv.appendChild(imgDiv)
    crossBtnDiv.addEventListener('click',()=>{
        imgDiv.style.display = 'none';
    })
})


addTextBtn.addEventListener('click', (event) => {
    const postTextDiv = document.createElement("div");
    postTextDiv.classList.add('post-text-div')
    const postText = document.createElement("div");
    const crossBtnDiv = document.createElement("div");
    crossBtnDiv.classList.add('post-text-cross-div')
    const crossBtn = document.createElement("p");
    crossBtn.innerText='x';
    postText.innerText = postTextInput.value;;
    crossBtnDiv.appendChild(crossBtn)
    postTextDiv.appendChild(crossBtnDiv)
    postTextDiv.appendChild(postText)
    postContentDiv.appendChild(postTextDiv)
    crossBtnDiv.addEventListener('click',()=>{
        postTextDiv.style.display = 'none';
    })
});


function changeTitle() {
    postTitleDiv.innerHTML = postTitleInput.value;
}


function changeSubTitle() {
    postSubTitleDiv.innerHTML = postSubTitleInput.value;
}