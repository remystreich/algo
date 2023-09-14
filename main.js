const Prompt = require("prompt-sync")()
let choice = parseInt(Prompt("entrez une nombre entre 1 et 2"))

if (choice == 1 || 2) {
    console.log("bravo")
} else {
    console.log("error")
}