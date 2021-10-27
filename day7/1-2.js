var a = 5
let b = "kampus merdeka"
const nama = "Budi"
let terdaftar = true
let lengkap_arr = [a,b,nama,terdaftar]
let asal = "indonesia"

function perkenalan(){
    return console.log(
        "perkenalkan nama saya "+ 
        nama + 
        " nomor urut "+
        a + 
        " sekarang sedang mengikuti "+
        b +
        "berasal dari " + 
        asal
    );
}

if (terdaftar === true){
    console.log(nama+" terdaftar sebagai kegiatan kampus merdeka");
}

a = b;
// nama = b;

console.log("array = "+ lengkap_arr[2])
// console.log("asal diakses = "+ asal);
console.log("a adalah "+a);
console.log("b adalah "+b)
perkenalan();

// No.2 
// a.Jelaskan kenapa baris 21,22,23 tidak dapat tampil?
// Jawab : Karena pada line 4 variabel pendaftaran awalnya bernilai false, 
// jika variabel pendaftaran dirubah menjadi true maka hasil akan tampil sesuai output yang diinginkan. 

// b.Jelaskan kenapa deklarasi pada baris 26 menyebabkan error?
// Jawab : Karena pada line 3 telah dideklarasikan const nama, 
// sedangkan const ketentuannya ialah nilainya tidak dapat diganti.

// c.Dengan melakukan komen pada baris ke 26, apakah baris 29 dapat di eksekusi? jelaskan.
// Jawab : Bisa dieksekusi, alasannya ialah karena pendeklarasian pada variabel a ialah 
// var yaitu bisa di reassignment dengan nilai dari variabel b. 