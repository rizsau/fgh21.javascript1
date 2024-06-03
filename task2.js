const mtk = 65
const bahasaIndonesia = 65
const bahasaInggris = 65
const ipa = 65
const rataRata = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4
let Grade;
if (rataRata >= 90){
    Grade = "A";
}else if (rataRata >=80){
    Grade = "B"
}else if (rataRata >=70){
    Grade = "C"
}else if (rataRata >= 60){
    Grade = "D"
}else if (rataRata >= 0){
    Grade = "E"
}else {
    Grade = "Invalid"
}

console.log("Rata-rata = " + rataRata)
console.log("Grade = " + Grade)