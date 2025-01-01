const inputSlider = document.getElementById("inputSlider");
const sliderValue = document.getElementById("sliderValue");
const passBox = document.getElementById("passBox");
const lowercase = document.getElementById("lowercase");
const uppercase = document.getElementById("uppercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const btn = document.getElementById("btn");
const copyIcon = document.getElementById("copyIcon");
const copyAlert = document.getElementById("copyAlert");

const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const allNumbers = "0123456789";
const allSymbols = "~!@#$%^&*";

sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', () => {
    sliderValue.textContent = inputSlider.value;
});

function generatePassword() {
    let genPassword = "";
    let allChars = "";

    allChars += lowercase.checked ? lowerChars : "";
    allChars += uppercase.checked ? upperChars : "";
    allChars += numbers.checked ? allNumbers : "";
    allChars += symbols.checked ? allSymbols : "";

    if (allChars.length === 0) {
        alert("Please select at least one character type!");
        return "";
    }

    for (let i = 0; i < inputSlider.value; i++) {
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }

    return genPassword;
}

btn.addEventListener('click', () => {
    passBox.value = generatePassword();
});

function copyPassword() {
    if (passBox.value.length >= 1) {
        passBox.select();
        passBox.setSelectionRange(0, 99999);

        try {
            document.execCommand('copy');
            copyIcon.className = "fa-solid fa-check";
            copyAlert.style.display = "block";

            setTimeout(() => {
                copyIcon.className = "fa-solid fa-copy";
                copyAlert.style.display = "none";
            }, 1500);
        } catch (err) {
            alert("Failed to copy password. Please try selecting and copying manually.");
        }
    }
}

copyIcon.addEventListener('click', copyPassword);