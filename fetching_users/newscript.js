"use strict";
const recordInput = document.querySelector(".record");
const recordsLists = document.querySelector(".recordsList");
const addBtn = document.querySelector(".add");
const deleteBtn = document.querySelector(".delete");
function appendReport() {
    let editBtn = document.querySelectorAll(".edit");
    let editInput = document.querySelector(".editText");
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
    `;
    };
    deleteBtn.onclick = () => {
        const checkboxes = document.querySelectorAll('.checkbox:checked');
        Array.prototype.forEach.call(checkboxes, function (checkbox) {
            checkbox.closest('div').remove();
        });
    };
    editBtn.forEach((item, index) => {
        item.onclick = () => {
            console.log("record");
        };
    });
}
appendReport();
