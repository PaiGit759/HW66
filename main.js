let student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
};

let resalt = "";
let arr = new Array();

function button_onclick1() {
        arr = Object.keys(student);
        document.getElementById("cat").innerHTML = "Names of object properties defined by method one = " + arr;
}

function button_onclick2() {
        for (i in student) {
                resalt += " " + i;
        }
        document.getElementById("cat").innerHTML = "Names of object properties defined by method two = " + resalt;
        resalt = "";
}
