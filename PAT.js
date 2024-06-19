// SOAL NOMOR 1.
class hewan {
    constructor(name, age, ismammal) {
        this.name = name;
        this.age = age;
        this.ismammal = ismammal;
    }
}
// SOAL NOMOR 2.
class badak extends hewan {
    constructor(name, age) {
        super(name, age, true);
    }
    eat() {
        return $(this.name)
        'sedang makan';
    }
}
// SOAL NOMOR 3.
class elang extends hewan {
    constructor(name, age) {
        super(name, age, false);
    }
    fly() {
        return $(this.name)
        'sedang terbang';
    }
}
// SOAL MOMOR 4.
const mybadak = new badak("rhino", 7);
// SOAL MOMOR 5.
const myelang = new elang("eagle", 7);

console.log(mybadak.eat());
console.log(myelang.fly());
console.log(mybadak);
console.log(myelang);
