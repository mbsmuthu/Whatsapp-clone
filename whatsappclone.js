const message1 = document.querySelector("#message1");
const message2 = document.querySelector("#message2");

let senderArray = [];
let receiverArray = [];

let senderMsg = document.querySelector("#sendermsg");
let receiverMsg = document.querySelector("#receivermsg");

// message1.addEventListener("change", (event) => {
//     receiverArray.push(event.target.value);
//     console.log(receiverArray);
//     let msg1='';
//     receiverArray.map((msg,index)=>{
//         msg1+=`<div class="message1">${msg}<button onclick=remove(${index}, ${receiverArray})>delete</button></div></div>`;
        
//     })
//     event.target.value='';

//     document.getElementById('receivermsg').innerHTML = msg1;
// })

// message2.addEventListener("change", (event) => {
//     senderArray.push(event.target.value);
//     console.log(senderArray);
//     let msg1='';
//     senderArray.map((msg,index)=>{
//        msg1+=`<div class="message1">${msg}<button onclick=remove(${index}, ${senderArray})>delete</button><button onclick=change(${index})>Edit</button></div>`;
//     })
//     event.target.value='';

//     document.getElementById('sendermsg').innerHTML = msg1;
// })

// function remove(index, array) {
//     const newArray = array.filter((msg, ind) => ind !== index);
//     senderArray = newArray;
//     let msg1='';
//     newArray.map((msg,index)=>{
//         msg1+=`<div class="message2">${msg}<button onclick=remove(${index}, ${receiverArray})>delete</button></div>`;
//     })
//     document.getElementById('sendermsg').innerHTML = msg1;
//     console.log(newArray);     
// }

// function change(index){
//     let edit = senderArray.filter((msg, ind) => ind===index);
//     message2.value=edit[0];
//     message2.addEventListener("change", (event)=>{
//         senderArray[index]=message2.value;
//     })
// }

let date = new Date();


message1.addEventListener("change", event=>{
    receiverArray.push(event.target.value);

    receiverMsg.insertAdjacentHTML('beforeend', `<div class="message1">${event.target.value}
    <button id="deleteBtn">Delete</button><p class="time">${new Date().getHours()}:${new Date().getMinutes()}</p></div>`)
    senderMsg.insertAdjacentHTML('beforeend', `<div class="message2">${event.target.value}<button id="editBtn">Edit</button><button id="deleteBtn">Delete</button><p class="time">${new Date().getHours()}:${new Date().getMinutes()}</p></div>` )
    
    let editButton = document.querySelector("#editBtn");
    let deleteButton = document.querySelector("#deleteBtn");
    

editButton.addEventListener("click", (array, index)=>{
   array.filter(item=>item)
})

deleteButton.addEventListener("click", (event)=>{
    console.log(event.pointerId)
})

event.target.value='';
})

message2.addEventListener("change", event=>{
    senderArray.push(event.target.value);

    senderMsg.insertAdjacentHTML('beforeend', `<div class="message1">${event.target.value}<button id="deleteBtn">Delete</button><p class="time">${new Date().getHours()}:${new Date().getMinutes()}</p></div>`)
    receiverMsg.insertAdjacentHTML('beforeend', `<div class="message2">${event.target.value}<button id="editBtn">Edit</button><button id="deleteBtn">Delete</button><p class="time">${new Date().getHours()}:${new Date().getMinutes()}</p></div>`)
    event.target.value='';
})





function remove(event){
    
}

function change(){

}