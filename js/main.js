let btn = document.querySelector(".btn1");
let infoPage = document.querySelector(".info-Page");

btn.addEventListener("click", (e) => {
    infoPage.classList.add("show");

    let mainBox = document.querySelector(".info-Page .main-box");
    console.log(mainBox); 
})

let resultBtn = document.querySelector(".info-Page .result-btn")
let in1 = document.getElementById("in1")
let in2 = document.getElementById("in2")
let in3 = document.getElementById("in3")
let in4 = document.getElementById("in4")
let in5 = document.getElementById("in5")
let in6 = document.getElementById("in6")
let in7 = document.getElementById("in7")
let in8 = document.getElementById("in8")
let in9 = document.getElementById("in9")
let in10 = document.getElementById("in10")

resultBtn.addEventListener("click", (e) => {
    let resultDiv = document.createElement("div")
    resultDiv.className = "result-box";
    document.querySelector(".info-Page .main-box").appendChild(resultDiv);

    let res1 = document.createElement("p")
    let res2 = document.createElement("p")
    let res3 = document.createElement("p")
    let res4 = document.createElement("p")

    res1.textContent = `راس المال البشري = ${in1.value - in2.value} `;
    res2.textContent = `النسبة الجارية = ${in3.value / in4.value}`;
    res3.textContent = `نسبة السداد = ${in5.value - (in6.value + in7.value) / in8.value}`;
    res4.textContent = `نسبة النقدية = ${in9.value / in10.value}`;

    resultDiv.appendChild(res1)
    resultDiv.appendChild(res2)
    resultDiv.appendChild(res3)
    resultDiv.appendChild(res4)

})
