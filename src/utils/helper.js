
const messagesList = [
    "How to excell in DSA ?",
    "I want to do MS in US",
    "How to become a good team player ?",
    "Is React good or angular ?",
    "Is Competative programming mandatory to crack FAANG ?",
    "Is Java good or C++ for DSA ?",
    "I want to learn dancing",
    "I want to learn swimming",
    "Will AI replace SDE's ?",
    "I am going to get married",
    "I want to go to Goa"
];

const namesList = [
    "arjun",
    "Hari",
    "Venky",
    "Vardhan",
    "Ram",
    "Sai",
    "Suswanth",
    "Pavan",
    "Ravi",
    "Teja"
]

export const generateRandomMessage = () => {
    let index = Math.floor(Math.random() * messagesList.length);
    return messagesList[index];
}

export const generateRandomName = () => {
    let index = Math.floor(Math.random() * namesList.length);
    return namesList[index];
}