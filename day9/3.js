class Orang {
    constructor(nama, umur, pekerjaan) {
        this.nama = nama;
        this.umur = umur;
        this.pekerjaan = pekerjaan;
    }

    perkenalanDiri() {
        return `Halo, saya ${this.nama}. ${this.umur > 17 ? 'Saya sudah dewasa' : 'Saya masih di bawah umur'}`
    }
    perkenalanProfesi() {
        return `Hi, Saya seorang ${this.pekerjaan}`;
    }
}

class Pelajar extends Orang {
    constructor(nama, umur) {
        super(nama, umur);
    }
}

class Pekerja extends Orang {
    constructor(nama, umur) {
        super(nama, umur);
    }
}

const ana = new Orang('Ana', 10);
const ini = new Orang('Ini', 10, 'Siswa/Mahasiswa');
const budi = new Orang('Budi', 28, 'Koki');

console.log(ana.perkenalanDiri()); //Halo, saya Ana. Saya masih di bawah umur
console.log(ini.perkenalanDiri()); //Halo, saya Ini. Saya masih di bawah umur
console.log(ini.pekerjaan); //Siswa/Mahasiswa
console.log(budi.perkenalanDiri()); //Halo, Saya Budi. Saya sudah dewasa
console.log(budi.perkenalanProfesi()); //Hi, Saya seorang Koki
console.log(budi.pekerjaan); //Koki