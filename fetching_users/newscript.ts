const recordInput = document.querySelector(".record") as HTMLInputElement;
const recordsLists = document.querySelector(".recordsList") as HTMLDivElement;
const addBtn = document.querySelector(".add") as HTMLButtonElement;
const deleteBtn = document.querySelector(".delete") as HTMLButtonElement;

function appendReport() {
    let editBtn = document.querySelectorAll(".edit") as NodeListOf<HTMLButtonElement>;
    let editInput = document.querySelector(".editText") as HTMLInputElement;

    addBtn.onclick = () => {
        recordsLists.innerHTML += `
    <div class="card record p-2 flex-column gap-3 flex-wrap">
        <input class="checkbox" type="checkbox">
        <p>${recordInput.value}</p>
        <div class="d-flex flex-column gap-2">
                <input class="editText w-50" type="text" placeholder="Edit Text">
                <button class="edit btn btn-primary w-50">Edit Text</button>
        </div>
    </div>
    `
    }

    deleteBtn.onclick = () => {
        const checkboxes = document.querySelectorAll('.checkbox:checked') as NodeListOf<HTMLInputElement>;
        Array.prototype.forEach.call(checkboxes, function(checkbox) {
            checkbox.closest('div').remove();
        });
    }


    editBtn.forEach((item,index) => {
        item.onclick = () => {
            console.log("record")
        }
    })

}

appendReport()




