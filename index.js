let box1 = document.getElementById("name");
let box2 = document.getElementById("email");
let res = document.getElementById("cu-action");
let tab = document.getElementById("todo-body");
let array = [];
let ob = {};
let cnum = null;
let id = 1;
let rows = '';
function temp() {
    rows = "";
    array.forEach(ob => {
        const tr = `<tr>
        <td>${ob.id}</td>
        <td>${ob.box1}</td>
        <td>${ob.box2}</td>
        <td><button id="edit" onclick="ed(${ob.id})">Edit</button>
        <button id="delete" onclick="del(${ob.id})">Delete</button></td>
        </tr>`;
        rows += tr;

    });
    document.getElementById("todo-body").innerHTML = rows;
    reset();
}
function add() {
    if (cnum) {
        array = array.map(ind => {
            if (cnum == ind.id) {
                ind.box1 = box1.value;
                ind.box2 = box2.value;
            }
            return ind;
        });
        up(null, 'Add');
    }
    else {
        ob = {};
        ob.id = id++;
        ob.box1 = box1.value;
        ob.box2 = box2.value;
        array.push(ob);
    }
    temp();
}
res.addEventListener("click", add);

function del(ob) {
    rows = "";
    array = array.filter(array => array.id != ob)
    temp();
}

function reset() {
    box1.value = "";
    box2.value = "";
}

function up(id, text) {
    cnum = id;
    res.innerHTML = text;
}
function ed(ob) {
    cnum = ob;
    const arr = array.find(index => index.id == ob);
    box1.value = arr.box1;
    box2.value = arr.box2;
    up(arr.id, 'update');
    return arr;
}


