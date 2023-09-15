
async function getCards(){
    const res = await fetch("https://heartfelt-new.vercel.app/fetch-cards")
    const data = await res.json()
    data.data.map(imgCover => {
        const div = document.createElement("div")
        div.innerHTML += `
        <div>
            <p>${imgCover.name}</p>
            <img src=${imgCover.coverUrl} width="100px"/>
        </div>
        `
        document.querySelector("body").appendChild(div)
    })
    console.log(data)
}

getCards()