
// https://www.w3schools.com/js/js_variables.asp

// Mari deklarasi variable
// let merupakan variable yang dapat dirubah ubuh secara dynamic dan tidak harus di inisialisasi
let ini_variable=200;
let ini_juga_variable;


// const merupakan variable yang akan bersifat tetap (static) dan harus di inisialisasi
const suatu_variable = 'sesuatu';


// var merupakan deklarasi variable untuk browser lama, gunakan let & const untuk masa depan
var sebuah_variable;
var isi_var = 10;

console.log(isi_var);
console.log(ini_variable);
console.log(suatu_variable);


// Hoisting adalah alur pemrograman dimulai dari line 1 - seterusnya

// Deklarasi suatau variable

let suatu_var;
suatu_var = 10;
console.log(suatu_var);