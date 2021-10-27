console.log("================Node.1===================")
let nilai1=[1,2,3,4,5]
let nilai2=(a,b)=>a+b

console.log(nilai1.reduce(nilai2))

console.log("================Node.2===================")
var filterValue = [-4,3,2,-21,1]
console.log(filterValue.filter(num=>num>-1))

console.log("================Node.3===================")
var data = [
    {name:'daniel',age:45},
    {name:'jhon',age:30},
    {name:'robert',age:null},
    {name:'jen',age:undefined},
    {name:null,age:undefined}
]

let filterArray = data.filter((x)=>x.name != null & x.age !=undefined)

console.log(filterArray)

console.log("================Node.4===================")
const konfersiMenit = number => {
    let jam = Math.floor(number/60)
    let menit = number%60

    if (menit<10){
        menit='0'+menit
    }

    return jam+":"+menit
}

console.log(konfersiMenit(88))
console.log(konfersiMenit(53))
console.log(konfersiMenit(120))
console.log(konfersiMenit(124))

console.log("================Node.5===================")
function inputHarusGenap(angka) {
    if (angka % 2 == 0) {
        return "Valid";
    }
    return "Invalid";
}

try {
    console.log(inputHarusGenap(7))
} catch (e) {
    console.log(e)
}

try {
    console.log(inputHarusGenap(4))
} catch (e) {
    console.log(e)
}

console.log("================Node.6===================")
function perkalianUnik(arr) {
    let newArr = arr.map((x, y) =>
        arr.reduce((accumulator, currentValue, idxValue) => {
            if (idxValue != y) {
                return accumulator * currentValue;
            }
            return accumulator;
        }, 1)
    );
    return newArr;
}

console.log(perkalianUnik([2,4,6]))
console.log(perkalianUnik([1,2,3,4,5]))
console.log(perkalianUnik([1,4,3,2,5]))
console.log(perkalianUnik([1,3,3,1]))
console.log(perkalianUnik([2,1,8,10,2]))