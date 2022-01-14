 /*
function palindrome(str) {                          //палиндром
    let rev = str.split("").reverse().join("");
    if (str==rev) {
        console.log("palindrome")
    } else {
        console.log("Хрень")
    }
}
palindrome('ABBA')

function random(){                                  //рандом
    console.log(Math.floor(Math.random()*10))
}
random()

function randMod2(){                                //четный рандом
    let r = Math.floor(Math.random()*10);
    console.log(r)
    if (r % 2 === 0) {
        console.log("Четное");
    } else {
        console.log("Нечетное");
    }
}
randMod2()

function sum() {                                    //сумма массива
    let arr = [];
    for (let c=0;c<10;c++){
        arr[c] = Math.floor(Math.random()*10)
    }
    console.log(arr)
    let s = 0;
    for (let i in arr) {
        s += arr[i]
    }
    console.log(s)
}
sum()

function obj() {                                    //проход по объекту
    let obj = {
        name: "Eugene",
        age: "18",
        city: "Yar"
    }
    for (let i in obj) {
        console.log(obj[i])
    }
}
obj()

function filter() {                                 //четный массив
    let arr = [];
    for (c=0;c<10;c++){
        arr[c] = Math.floor(Math.random()*10)
    }
    console.log(arr);
    let arr1 = arr.filter(arr => {
        return arr % 2 ===0
    });
    console.log(arr1)
}
filter()

function newYear() {                                        //до нг
    let now = new Date;
    let newYear = new Date(2022, 0, 0, 0, 0, 0)
    console.log(Math.floor((newYear-now)/1000/3600/24));
}
newYear()

function reverse(str) {                                     //обратная строка
    console.log(str.split("").reverse().join(""))
}
reverse("To be continued...")

function smile() {                                          //смайлики
     let now = new Date();
     let sec = now.getSeconds();
     let res = ":";
     for (let i=0; i<=sec;i++) {
         res += ")";
     }
     console.log(sec, res);
 }
 smile()

 async function Prom(){                                     //асинки хуинки
     let oldTime = new Date;
     let promise = new Promise((resolve,reject) =>
     {
         setTimeout(()=>resolve("Done"),1000);
     });
     let wait = await promise;
     console.log(wait + " in " + (new Date - oldTime) + " ms")
 }
 Prom();

 function secs() {
     let now = new Date;
     console.log(now.getHours()+":"+now.getMinutes()+":"+now.getSeconds());
 }
 setInterval(secs, 1000); */

let name = new function X() {
    console.log(this)
}
