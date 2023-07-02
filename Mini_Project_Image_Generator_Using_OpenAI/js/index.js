
let url = "https://api.openai.com/v1/images/generations";
let apiKey = "OPEN_AI_API_KEY";

let imgGen = document.getElementById("imgGen");
let loading = document.getElementById("loadingCircle");
let footerpos = document.getElementById("footerPosition");

//To trigger the generate button if "Enter" key is pressed
let input = document.getElementById("inputText");
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        document.getElementById("genBtn").click();
    }
});

function generateImg(text) {
    imgGen.innerHTML = "";
    if (text == null || text == "") {
        alert("Enter a value")
        return;
    }
    else if (!(text == null) || !(text == "")) {
        loading.classList.remove("loadingSection");
        let resp = callAPI(text);
        resp.then((respo) => {
            let b = "";
            for (let i = 0; i < respo.length; i++) {
                b += "<div class='container2_2' > <img class='imgCont' src = '" + respo[i].url + "'> </div>"
            }
        console.log(b);
            loading.classList.add("loadingSection");
            imgGen.innerHTML = b;
            footerpos.classList.remove("footerPosition")
        });
    }
}

function clearImg() {
    imgGen.innerHTML = "";
    footerpos.classList.add("footerPosition")
    document.getElementById('inputText').value = "";
}

async function callAPI(text) {
    let ask = {
        "prompt": text,
        "n": 5,
        size : "256x256"
    }

    const res = await fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + apiKey,
        },
        body: JSON.stringify(ask)
    });

    const result = await res.json();
    return result.data;
}