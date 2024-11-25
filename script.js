console.log("teszt")
function addDiv(text) {   
    const elem = document.createElement('div');
    elem.textContent = text;
    document.body.appendChild(elem);
}
addDiv("asd")
addDiv("asdasd")


async function letolt(){
    const url = 'https://pokeapi.co/api/v2/pokemon/'
    const response = await fetch(url)
    console.log(response)

    const data = await response.json()
    
    for (let i = 0; i < data.results.length; i++) {
        addDiv(data.results[i].name)
        
    }
}
letolt()