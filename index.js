var adviceIdText = document.getElementById("adviceIdText")
var adviceContentText = document.getElementById("adviceContentText")

const apiUrl = "https://api.adviceslip.com/advice"

async function getAdvice() {
    const results = await fetch(apiUrl);
    const data = await results.json()
    adviceContentText.innerHTML = '"'+data.slip.advice+'"';
    adviceIdText.innerHTML = "ADVICE #"+data.slip.id;
    console.log(adviceContentText);
}

getAdvice()




