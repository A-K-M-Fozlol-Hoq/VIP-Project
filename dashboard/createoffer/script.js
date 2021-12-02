
const gigTitleInput = document.getElementById('gig-title-input')
const gigSubTitleInput = document.getElementById('gig-sub-title-input')
const gigTagInput = document.getElementById('gig-tag-input')
const addGigTagBtn = document.getElementById('add-gig-tag-btn')
const allTags = document.getElementById('all-tags')
const customGigCategory = document.getElementById('custom-gig-category')
const addCategoryBtn = document.getElementById('add-category-btn')
const serviceType = document.getElementById('service-type')
const gigImageInput = document.getElementById('gig-image-input')
const gigImagesDiv = document.getElementById('gig-images-div')
const changeEditMode= document.getElementById('change-edit-mode');
const editModeEnable= document.getElementById('edit-mode-enable');
const editModeDisable= document.getElementById('edit-mode-disable');
const documentationDiv= document.getElementById('documentation-div');
const documentationInput= document.getElementById('documentation-input');
const textAreaInput= document.getElementById('text-area-input');

let idEditModeActivated = false;
let totalTag=0;

function changeTitle() {
    console.log(gigTitleInput.name, gigTitleInput.value);
}

function changeSubTitle() {
    console.log(gigTitleInput.name, gigSubTitleInput.value);
}

addGigTagBtn.addEventListener("click", ()=>{
    if(gigTagInput.value.trim().length < 3){
        alert("You have to enter at least 2 characters");
    }
    else
    {
        if(gigTagInput.value.trim().length >40){
            alert("You cannot enter more than 40 characters");
        }
        else
        {
            if(totalTag>20){
                alert("you cannot proide more than 20 tags");
            }
            else
            {
                const tagTextDiv = document.createElement("div");
                tagTextDiv.classList.add('tag-text-div')
                const tagText = document.createElement("div");
                const crossBtnDiv = document.createElement("div");
                crossBtnDiv.classList.add('tag-text-cross-div')
                const crossBtn = document.createElement("p");
                crossBtn.innerText='x';
                tagText.innerText = gigTagInput.value;;
                crossBtnDiv.appendChild(crossBtn)
                tagTextDiv.appendChild(crossBtnDiv)
                tagTextDiv.appendChild(tagText)
                allTags.appendChild(tagTextDiv)
                crossBtnDiv.addEventListener('click',()=>{
                    tagTextDiv.style.display = 'none';
                    totalTag = totalTag-1;
                })
                totalTag = totalTag+1;
            }
        }
    }
    
})

addCategoryBtn.addEventListener('click',()=>{
    if(customGigCategory.value.trim().length >2 && customGigCategory.value.trim().length<31){
        const customCategoryOption = document.createElement("option");
        customCategoryOption.value = customGigCategory.value;
        customCategoryOption.innerHTML = customGigCategory.value;
        const customCatSpan = document.createElement("span");
        customCategoryOption.appendChild(customCatSpan)
        serviceType.appendChild(customCategoryOption);
        customGigCategory.value='';

    }
    else{
        alert("The length of your custom category must be between 3 to 20");
    }
})

gigImageInput.addEventListener ('change',(event) => {
    const imgDiv = document.createElement("div");
    imgDiv.classList.add('post-image-div')
    const img = document.createElement("img");
    const crossBtnDiv = document.createElement("div");
    crossBtnDiv.classList.add('img-cross-div')
    const crossBtn = document.createElement("p");
    crossBtn.innerText='x';
    let imgSrc= URL.createObjectURL(event.target.files[0]);
    img.src = imgSrc;
    imgDiv.appendChild(img)
    crossBtnDiv.appendChild(crossBtn)
    imgDiv.appendChild(crossBtnDiv)
    gigImagesDiv.appendChild(imgDiv)
    // const liveImg = await uploadImage(event.target.files[0])
    // img.src = liveImg;
    console.log(gigImagesDiv);
    crossBtnDiv.addEventListener('click',()=>{
        imgDiv.style.display = 'none';
    })
})


changeEditMode.addEventListener('click', ()=>{
    idEditModeActivated= !idEditModeActivated; 
    if(idEditModeActivated){
        editModeEnable.style.display = 'block';
        editModeDisable.style.display = 'none';
        documentationInput.style.display ='block';
        documentationDiv.style.display ='none';
        textAreaInput.value =documentationDiv.innerText;
    }
    else{
        editModeEnable.style.display = 'none';
        editModeDisable.style.display = 'block';
        documentationInput.style.display ='none';
        documentationDiv.style.display ='block';
        documentationDiv.innerText = textAreaInput.value;
    }
})