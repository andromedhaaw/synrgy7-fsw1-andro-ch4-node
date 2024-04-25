const { printData, printDataCustom } = require("./dummy");

printData();
printDataCustom("custom");

// Menghitung luas permukaan dan volume kubus
function hitungKubus(sisi) {
  const luasPermukaan = 6 * sisi ** 2;
  const volume = sisi ** 3;
  return { luasPermukaan, volume };
}

// Menghitung luas permukaan dan volume balok
function hitungBalok(panjang, lebar, tinggi) {
  const luasPermukaan =
    2 * (panjang * lebar + panjang * tinggi + lebar * tinggi);
  const volume = panjang * lebar * tinggi;
  return { luasPermukaan, volume };
}

// Menghitung luas permukaan dan volume prisma segitiga
function hitungPrismaSegitiga(alas, tinggiAlas, tinggiPrisma) {
  const luasPermukaan = alas * tinggiPrisma + 3 * (0.5 * alas * tinggiAlas);
  const volume = 0.5 * alas * tinggiAlas * tinggiPrisma;
  return { luasPermukaan, volume };
}

// Contoh penggunaan fungsi-fungsi di atas
const sisiKubus = 5;
const panjangBalok = 4;
const lebarBalok = 3;
const tinggiBalok = 6;
const alasPrisma = 5;
const tinggiAlasPrisma = 3;
const tinggiPrisma = 8;

const hasilKubus = hitungKubus(sisiKubus);
const hasilBalok = hitungBalok(panjangBalok, lebarBalok, tinggiBalok);
const hasilPrismaSegitiga = hitungPrismaSegitiga(
  alasPrisma,
  tinggiAlasPrisma,
  tinggiPrisma
);

console.log("\nHasil perhitungan kubus:");
console.log("Luas permukaan:", hasilKubus.luasPermukaan);
console.log("Volume:", hasilKubus.volume);

console.log("\nHasil perhitungan balok:");
console.log("Luas permukaan:", hasilBalok.luasPermukaan);
console.log("Volume:", hasilBalok.volume);

console.log("\nHasil perhitungan prisma segitiga:");
console.log("Luas permukaan:", hasilPrismaSegitiga.luasPermukaan);
console.log("Volume:", hasilPrismaSegitiga.volume);
