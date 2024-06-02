const mtk = 80
const bahasaIndonesia = 90
const bahasaInggris = 89
const ipa = 69
const rataRata = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4
let Grade;
if (rataRata >= 90 && rataRata <= 100){
    Grade = "A";
}else if (rataRata >=80 && rataRata <= 89){
    Grade = "B"
}else if (rataRata <=70 && rataRata <= 79){
    Grade = "C"
}else if (rataRata <= 60 && rataRata <= 69){
    Grade = "D"
}else if (rataRata <= 0 && rataRata <= 59){
    Grade = "E"
}else {
    Grade = "Invalid"
}

console.log("Rata-rata = " + rataRata)
console.log("Grade = " + Grade)