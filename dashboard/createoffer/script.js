
const gigTitleInput = document.getElementById('gig-title-input')
const gigSubTitleInput = document.getElementById('gig-sub-title-input')
const gigTagInput = document.getElementById('gig-tag-input')
const addGigTagBtn = document.getElementById('add-gig-tag-btn')
const allTags = document.getElementById('all-tags')
const customGigCategory = document.getElementById('custom-gig-category')
const addCategoryBtn = document.getElementById('add-category-btn')
const serviceType = document.getElementById('service-type')

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