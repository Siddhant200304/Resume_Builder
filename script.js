function newExp() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add("weField");
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here")

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}

function newAq() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here")

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);
}

function ceExp() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add("ceField");
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here")

    let ceOb = document.getElementById("ce");
    let ceAddButtonOb = document.getElementById("ceAddButton");

    ceOb.insertBefore(newNode, ceAddButtonOb);
}

function prExp() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add("prField");
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here")

    let prOb = document.getElementById("pr");
    let prAddButtonOb = document.getElementById("prAddButton");

    prOb.insertBefore(newNode, prAddButtonOb);
}

// Genrating cv

function genrateCV() {
    let nameField = document.getElementById("nameField").value;

    let nameT1 = document.getElementById("nameT1");

    nameT1.innerHTML = nameField;

    //nameT2

    document.getElementById("nameT2").innerHTML = nameField;

    //contact

    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;

    //adress

    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;


    //links 
    document.getElementById("emT").innerHTML = document.getElementById("emField").value;

    document.getElementById("gitT").innerHTML = document.getElementById("gitField").value;

    document.getElementById("linkedT").innerHTML = document.getElementById("LinkedField").value;

    //Objective

    document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;

    //Technical Skills

    let wes = document.getElementsByClassName("weField");

    let str = " "

    for (let e of wes) {
        str = str + `<li> ${e.value} </li>`;
    }

    document.getElementById("weT").innerHTML = str;

    //Accadmic qualification

    let aqs = document.getElementsByClassName("aqField");

    let str1 = " "

    for (let f of aqs) {
        str1 = str1 + `<li> ${f.value} </li>`;
    }

    document.getElementById("aqT").innerHTML = str1;

    document.getElementById("resume").style.display = "none";

    document.getElementById("template").style.display = "block";

    // Certificates

    let ces = document.getElementsByClassName("ceField");

    let str2 = " "

    for (let g of ces) {
        str2 = str2 + `<li> ${g.value} </li>`;
    }

    document.getElementById("ceT").innerHTML = str2;

    document.getElementById("resume").style.display = "none";

    document.getElementById("template").style.display = "block";

    //Projects

    let pres = document.getElementsByClassName("prField");

    let str3 = " "

    for (let h of pres) {
        str3 = str3 + `<li> ${h.value} </li>`;
    }

    document.getElementById("prT").innerHTML = str3;

    //For setting image

    let image = document.getElementById("imgField").files[0];



    let reader = new FileReader();

    //set image in template

    reader.onloadend = function () {
        document.getElementById("imgT").src = reader.result;
    };

    reader.readAsDataURL(image);

    document.getElementById("resume").style.display = "none";

    document.getElementById("template").style.display = "block";

}


//printing CV

function printCV() {
    window.print();
}