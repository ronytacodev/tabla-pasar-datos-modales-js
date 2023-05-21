const table = document.getElementById('table');
const modalEdit = document.getElementById('modalEdit');
const inputsEdit = document.querySelectorAll('#modalEdit input');
const modalNewRegister = document.getElementById('modalNewRegister');

// console.log(inputs)

let count = 0;

window.addEventListener('click',(e)=>{
    // dándole funcionalidad al botón para EDITAR
    if(e.target.matches(".btn-info")){
        e.stopPropagation();
        // console.log(e.target.parentElement.parentElement.children[1].textContent);
        let data = e.target.parentElement.parentElement.children;
        fillData(data);
        modalEdit.classList.toggle('translate');
    }

    // dándole funcionalidad al botón para CERRAR MODAL EDIT
    if(e.target.matches(".btn-closeEdit")){
        e.stopPropagation();
        modalEdit.classList.toggle('translate');
        count = 0;
    }

    // dándole funcionalidad al botón NEW REGISTER
    if(e.target.matches(".btn-register")){
        e.stopPropagation();
        modalNewRegister.classList.toggle('translate');
    }

    // dándole funcionalidad al botón para CERRAR MODAL NEW REGISTER
    if(e.target.matches(".btn-closeNew")){
        e.stopPropagation();
        modalNewRegister.classList.toggle('translate');
    }

})

const fillData = (data) => {
    // console.log(data);
    for (let index of inputsEdit) {
        count+=1;
        index.value = data[count].textContent;
        // console.log(index);
        
    }
}

