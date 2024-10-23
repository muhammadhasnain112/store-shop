let userinput = prompt("Enter your item")

let A = ["apple", "cake", "banana", "chocolate", "biscuit"]

let flag = 0;

for (var i = 0; i < A.length; i++) {
    if (A[i] == userinput) {
        flag = 1;
        break;
    }
}

if (flag == 1) {
    alert("Found")
}

else {
    alert("Not Found");

}
