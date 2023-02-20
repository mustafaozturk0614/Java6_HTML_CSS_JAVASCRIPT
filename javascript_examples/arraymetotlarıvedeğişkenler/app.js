console.log("İçerdeyim");

let sayi1 = 5;
const sayi2 = 10;

// sayi2 = sayi1 + 5;

console.log(sayi2);
console.log(sayi1 + sayi2);

let sayilar = [1, 5, 9, 15, 24];

let sayilar2 = new Array();

sayilar2.push(10); // sona ekleme metodu
sayilar2.push(18);
sayilar2.push(78);

sayilar2.unshift(1); // başa ekleme metodu
sayilar2.pop(); //sondan veri silme
sayilar2.shift(); //baştan veri siler
let sayilar3 = [];
console.log(sayilar2);
console.log(sayilar3);
console.log(sayilar);
//sayilar.unshift("Mustafa");
for (let i = 0; i < sayilar.length; i++) {
  console.log(sayilar[i] + 5);
}
console.log("===========================");
sayilar2.forEach((x) => console.log(x + 5));
console.log("===========================");
sayilar3 = sayilar.map((y) => y + 5);

console.log(sayilar3);

console.log("===========================");

let sayilar4 = [1, 5, 9, 15, 24, 36];
console.log(sayilar4);

// Splice
//sayilar4.splice(1, 2);// 1.,ndexte itibaren 2 elaman siler ve arrayı değiştirir.
//  sayilar4.splice(2, 2, 185, 33, 97);
//console.log(sayilar4.splice(0, 2)); //aradan sildiği elemanları geri doner
console.log(sayilar4);
//Slice

console.log("======Slice====="); //Slice orjinal arrayi değiştirmez
console.log(sayilar4.slice(1, 3)); // substring gibi çalışır aradan veri çekmek için kullanılır ilk girilen index dahil son girilen index dahil değildir
sayilar3 = sayilar4.slice(2);
console.log(sayilar3);
