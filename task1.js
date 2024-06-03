const biodata = { //tipe data object
    name: "Rizka",
    age: 21,
    hobbies: ["sleep", "eat", "listen to music"],
    isMarried: false,
    schoolList: [{
        name: "Brawijaya University",
        yearIn: 2020,
        yearOut: 2024,
        major: "Communication",
    },
    {
        name: "Brawijaya University",
        yearIn: 2020,
        yearOut: 2024,
        major: "Sociology",
    }
    ],
    skills: [{
        skillName: "Teaching",
        level: "Intermediate"
    },
    {
        skillName: "Communication",
        level: "Intermediate"
    }],
    interestInCoding: true
}

// console.log(biodata)
// console.log(biodata.schoolList[1].name)
// console.log(biodata.skills[1].level)

if (biodata.skills[1].level === "Intermediate") {
    console.log("Yuk Belajar Lagi")
}