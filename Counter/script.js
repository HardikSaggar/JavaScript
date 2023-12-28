let box = document.getElementById("box");
/* box.style.borderTop = "4px solid green"; */
let totalCount = document.getElementById("total-count");
let minCount = document.getElementById("total-count");
var resetbtn = document.getElementById('reset');
count = 0;
box.onclick = function () {
    count++;
    totalCount.innerText = count;
    /*   console.log(count); */
};
box2.onclick = function () {
    --count;
    if (count < 0) {
        return;
    }
    minCount.innerText = count;
    /*  console.log(count); */
};

resetbtn.onclick = function () {
    count = 0;
    totalCount.innerText = count;
    console.log(count);
};