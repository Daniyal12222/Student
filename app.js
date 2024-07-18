let st_add = document.getElementById('add');
let inp_box = document.getElementById('st_box');
let st_name = document.getElementById('name');
let st_age = document.getElementById('age');
let st_course = document.getElementById('course');

let submint = document.getElementById('submint');

let st_box = document.getElementById('st_box');
let list_box = document.getElementById('list');
let del = document.getElementById('delet')

// Add student Button
st_add.addEventListener('click', () => {
    st_name.value= ''
    st_age.value= ''
    st_course.value= ''
    inp_box.style.display = 'flex'
    
})

// arr of obj

let list = []
console.log(list);
let roll = 0;
let un = 0;




// input valu  //



submint.addEventListener('click', () => {
    let randum = Math.floor(1 + Math.random() * 1000000)
    roll++
    un++
   
    if (roll < 10) {
       roll = '000' + roll
    } else if (roll >= 10) {
        roll = '00' + roll
    }
    let stud = {
        id: un,
        name: st_name.value,
        age: st_age.value,
        course: st_course.value,
        rollNnumber: roll,
        uneek: randum,
    }
    
    list.push(stud)
    list_box.innerHTML = `  <div class="add w-full bg-blue-400 flex mb-1">
                    <!-- Number  -->
                    <p class="p-2 flex justify-center">No</p>
                    <!-- Name -->
                    <p class="p-2 w-1/5 flex justify-center">Name</p>
                    <!-- Age -->
                    <p class="p-2 w-1/5 flex justify-center ">age</p>
                    <!-- uneek number -->
                    <p class="p-2 w-1/5 flex justify-center">Consumer id</p>
                    <!-- roll Number -->
                    <p class="p-2 w-1/5 flex justify-center ">Roll Number</p>
                    <!-- Delete Button -->
            
                </div>`
    
    for (let i = 0; i < list.length; i++) {
       
        list_box.innerHTML += `<div class="add w-full bg-blue-400 flex mb-1 p-1">
                    <!-- Number  -->
                    <p class="p-2 flex justify-center">${list[i].id}</p>
                    <!-- Name -->
                    <p class="p-2 w-1/5 flex justify-center">${list[i].name}</p>
                    <!-- Age -->
                    <p class="p-2 w-1/5 flex justify-center ">${list[i].age}</p>
                    <!-- uneek number -->
                    <p class="p-2 w-1/5 flex justify-center">${list[i].uneek}</p>
                    <!-- roll Number -->
                    <p class="p-2 w-1/5 flex justify-center ">${list[i].rollNnumber}</p>
                    <!-- Delete Button -->
                    <div class="c w-1/5 flex justify-end pe-2">
                        <button id="delet" onclick="dele(${list[i].id})" class=" p-2 w-[30%] flex justify-center bg-blue-100 rounded-lg ">
                            <img src="icon/trash-regular-24.png" alt="">
                        </button>
                    </div>
                </div>`
    }

    inp_box.style.display = 'none'

})

//  delet button

function dele(a) {
   list = list.filter(list => list.rollNnumber !== rollNnumber);
   

}