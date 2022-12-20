let allInfoPages = document.querySelectorAll(".content .mainbox .info-Page")
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let infoPage1 = document.querySelector(".info1");
let infoPage2 = document.querySelector(".info2");
let infoPage3 = document.querySelector(".info3");

btn1.addEventListener("click", (e) => {
    delTheInfo()
    infoPage1.classList.add("show");
})
btn2.addEventListener("click", (e) => {
    delTheInfo()
    infoPage2.classList.add("show");
})
btn3.addEventListener("click", (e) => {
    delTheInfo()
    infoPage3.classList.add("show");
})


//  info-[1] code
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

// cheack if all input are valid
let inputs1 = document.querySelectorAll(".info1 .main-box .content .box input")
let resultBtn1 = document.querySelector(".info-Page .result-btn1")
resultBtn1.addEventListener("click", (e) => {
    checkInput(inputs1)
    errorMsgCheck()
    if(empty == false){
        errorCheck()
        let resultDiv = document.createElement("div")
        resultDiv.className = "result-box";
        document.querySelector(".info1 .main-box").appendChild(resultDiv);
    
        let res1 = document.createElement("p")
        let res2 = document.createElement("p")
        let res3 = document.createElement("p")
        let res4 = document.createElement("p")
    
        res1.textContent = `راس المال البشري = ${in1.value - in2.value} `;
        res2.textContent = `النسبة الجارية = ${in3.value / in4.value}`;
        res3.textContent = `نسبة السداد = ${(in5.value - (+in6.value + +in7.value)) / in8.value}`;
        res4.textContent = `نسبة النقدية = ${in9.value / in10.value}`;
    
        resultDiv.appendChild(res1)
        resultDiv.appendChild(res2)
        resultDiv.appendChild(res3)
        resultDiv.appendChild(res4)
    }
})


// info-[2] Code
let in11 = document.getElementById("in11")
let in12 = document.getElementById("in12")
let in14 = document.getElementById("in14")
let in15 = document.getElementById("in15")
let in16 = document.getElementById("in16")
let in17 = document.getElementById("in17")
let in18 = document.getElementById("in18")
let in19 = document.getElementById("in19")
let in20 = document.getElementById("in20")
let in21 = document.getElementById("in21")
let in22 = document.getElementById("in22")
let in23 = document.getElementById("in23")
let in24 = document.getElementById("in24")
let in25 = document.getElementById("in25")
let in26 = document.getElementById("in26")
let in27 = document.getElementById("in27")
let in28 = document.getElementById("in28")
let in29 = document.getElementById("in29")
let in30 = document.getElementById("in30")
let in31 = document.getElementById("in31")
let in32 = document.getElementById("in32")

let inputs2 = document.querySelectorAll(".info2 .main-box .content .box input")



let resultBtn2 = document.querySelector(".info-Page .result-btn2")
resultBtn2.addEventListener("click", (e) => {
    checkInput(inputs2)
    errorMsgCheck()
    if(empty == false){
        errorCheck()
        let resultDiv = document.createElement("div")
        resultDiv.className = "result-box";
        document.querySelector(".info2 .main-box").appendChild(resultDiv);
    
        let res1 = document.createElement("p")
        let res2 = document.createElement("p")
        let res3 = document.createElement("p")
        let res4 = document.createElement("p")
        let res5 = document.createElement("p")
        let res6 = document.createElement("p")
        let res7 = document.createElement("p")
        let res8 = document.createElement("p")
        let res9 = document.createElement("p")
        let res10 = document.createElement("p")
        let res11 = document.createElement("p")
        
        res1.textContent = `متوسط المدينين = ${(+in11.value + +in12.value) / 2}` 
        res2.textContent =`معدل دوران المدينين = ${in13.value / ((+in11.value + +in12.value) / 2)}`
        res3.textContent = `متوسط فترة التحصيل = ${in15.value / (in13.value / ((+in11.value + +in12.value) / 2))}`
        res4.textContent = `متوسط المخزون السلعي = ${(+in17.value + +in18.value) / 2}`
        res5.textContent = `معدل دوران البضاعة = ${in19.value / ((+in17.value + +in18.value) / 2)}`
        res6.textContent = `متوسط فترة التحصيل = ${(in29.value / in30.value) * 360}`
        res7.textContent = `طول دورة النشاط = ${+in21.value + +in22.value}`
        res8.textContent = `معدل دوران الأصول الثابتة =${(in23.value / ((+in31.value + +in32.value)) / 2)}`
        res9.textContent = `متوسط الأصول الثابتة = ${(+in31.value + +in32.value) / 2}`
        res10.textContent = `معدل دوران الأصول = ${in25.value / in26.value}`
        res11.textContent = `متوسط الأصول =  ${(+in27.value + +in28.value) / 2}`

        resultDiv.appendChild(res1)
        resultDiv.appendChild(res2)
        resultDiv.appendChild(res3)
        resultDiv.appendChild(res4)
        resultDiv.appendChild(res5)
        resultDiv.appendChild(res6)
        resultDiv.appendChild(res7)
        resultDiv.appendChild(res8)
        resultDiv.appendChild(res9)
        resultDiv.appendChild(res10)
        resultDiv.appendChild(res11)
    }
})


// info-[3] Code
let in33 = document.getElementById("in33")
let in34 = document.getElementById("in34")
let in35 = document.getElementById("in35")
let in36 = document.getElementById("in36")
let in37 = document.getElementById("in37")
let in38 = document.getElementById("in38")
let in39 = document.getElementById("in39")
let in40 = document.getElementById("in40")
let in41 = document.getElementById("in41")
let in42 = document.getElementById("in42")
let in43 = document.getElementById("in43")
let in44 = document.getElementById("in44")
let in45 = document.getElementById("in45")
let in46 = document.getElementById("in46")
let in47 = document.getElementById("in47")
let in48 = document.getElementById("in48")
let in49 = document.getElementById("in49")

// cheack if all input are valid
let inputs3 = document.querySelectorAll(".info3 .main-box .content .box .inputs input")

let resultBtn3 = document.querySelector(".info-Page .result-btn3")
resultBtn3.addEventListener("click", (e) => {
    checkInput(inputs3)
    errorMsgCheck()
    if(empty == false){
        errorCheck()
        let resultDiv = document.createElement("div")
        resultDiv.className = "result-box";
        document.querySelector(".info3 .main-box").appendChild(resultDiv);
    
        let res1 = document.createElement("p")
        let res2 = document.createElement("p")
        let res3 = document.createElement("p")
        let res4 = document.createElement("p")
        let res5 = document.createElement("p")
        let res6 = document.createElement("p")

        


        res1.textContent = `نسبة مجموع أصول المتشأة إلى مجموع خصومها   =  ${(+in33.value + +in34.value) / (+in35.value + +in36.value)}`
        res2.textContent = `اجمالي الديون الى اجمالي الأصول              =  ${in37.value / in38.value}`;
        res3.textContent = `نسبة إجمال الأصول إلى حقوق الملكية           =  ${in39.value / in40.value}`;
        res4.textContent = `نسبة ديون طويلة الأجل إلى حقوق الملكية       =  ${in41.value / in42.value}`
        res5.textContent = `نسبة مجموع الملكية إلى مجموع خصومها         =  ${(in43.value / in44.value) * 100}`
        res6.textContent = `عدد مرات تغطية الفوائد                       =  ${(+in45.value + +in46.value) / in46.value}`


        resultDiv.appendChild(res1)
        resultDiv.appendChild(res2)
        resultDiv.appendChild(res3)
        resultDiv.appendChild(res4)
        resultDiv.appendChild(res5)
        resultDiv.appendChild(res6)

    }
})




// put class active in lis 
let lis = document.querySelectorAll(".content .mainbox .list li");
lis.forEach((li) =>{
    li.addEventListener("click", (e) =>{
        lis.forEach((e) => {
            e.classList.remove("active")
        })
        e.target.classList.add("active")
    })
})

// remove the other info
function delTheInfo(){
    allInfoPages.forEach((ele) => {
        ele.classList.remove("show")
    })
}

// check the error msg and put the msg
let btnRes = document.querySelector(".info-Page .result")
let chl = btnRes.children;
function errorMsgCheck(){
    if(empty == true){
        errorCheck()
        let errorMsg = document.createElement("p");
        errorMsg.className = "errorMsg"
        errorMsg.textContent = "لم يتم ادخال جميع القيم "
        btnRes.appendChild(errorMsg)
    }
}

// check the error
function errorCheck(){
    for(let i=0; i < chl.length; i++){
        if(chl[i].className == "errorMsg"){
            chl[i].remove()
        }
    }
}

// cheack if all input are valid
let empty;
function checkInput(e){
    empty = false
    e.forEach((e) =>{
        if(e.value == ""){
            return empty = true
        } else{
            return empty = false
        }
    })
}