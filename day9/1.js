let lodash=require("lodash")
const anggota_kelas=["budi","sita","ayu","rena","omen"];
let mengumpulkan_tugas=["rena","omen"];

let different=lodash.differenceBy(anggota_kelas,mengumpulkan_tugas)
let chunks = lodash.chunk(anggota_kelas, 2)
let join = lodash.join(anggota_kelas, '-')
let drop = lodash.drop(anggota_kelas)
let reverse = lodash.reverse(anggota_kelas)

console.log(different)
console.log(chunks)
console.log(join)
console.log(reverse)
console.log(drop)
