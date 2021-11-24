const changeEditMode= document.getElementById('change-edit-mode');
const editModeEnable= document.getElementById('edit-mode-enable');
const editModeDisable= document.getElementById('edit-mode-disable');
const documentationDiv= document.getElementById('documentation-div');
const documentationInput= document.getElementById('documentation-input');
const textAreaInput= document.getElementById('text-area-input');
let idEditModeActivated = false;

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