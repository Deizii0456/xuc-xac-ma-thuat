const btnSubmit = document.querySelector(".right");
const imgs = document.querySelectorAll(".img-1 img");
const ip = document.querySelector(".line_3 input");


let total = 0;
let count = 0;
const POINT = 10;
let score = 0;

function getRandom() { 
    return Math.floor(Math.random() * 6) + 1;
}

function getRandoms() {
    const arrRandom = [];
    for (let i = 0; i < 3; i++) {
        arrRandom.push(getRandom());
    }
    return arrRandom
}

function getSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++)
        sum += arr[i];
    return sum;
}


btnSubmit.onclick = function (e) { 
    // lấy dữ liệu của input
    const value = ip.value
    
    // random xúc xắc
    const randomList = getRandoms()
    console.log(randomList);
    
    // dieu kien thuc thi
    if (ip.value < 3 || ip.value > 18 || (!ip.value)) {
        alert ("Doan khong hop le");
        ip.focus();
        return;
    }

    // xử lí hình
    imgs.forEach((item, index) => { 
        item.src = `./assets/img/${randomList[index]}.png`;
    })
    
    // xu ly diem
    total++;
    if(getSum(randomList) == ip.value) {
        count++;
        score += POINT;
        document.querySelector("#diem").innerHTML=sc;
    }

    // gan gia tri vao UI
   let rt = `${count} / ${total}`;
   let sc = `${score}`;

    document.querySelector(".ratio").innerHTML = rt;
    document.querySelector("#diem").innerHTML = sc;

    console.log(sc);
    console.log(getSum(randomList));
}