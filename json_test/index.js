// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// .then(res => console.log(res))
// .catch(err => console.log(err))

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// .then(res => res.json())
// .then(data => console.log(data.name))
// .catch(err => console.log(err))


// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// .then(res => {
//     if(!res.ok){
//         throw new Error("Could not fetch resouce")
//     }
//     return res.json()
// })
// .then(data => console.log(data.name))
// .catch(err => console.log(err))

async function fetchData(){
    const pname = document.getElementById("name").value
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pname}`)
        if(!res.ok) {
            throw new Error("Error could not fetch resource")
        }
        const data = await res.json()
        // console.log(data);
        const pimg = data.sprites.front_default;
        const img = document.getElementById('pimg')
        img.src = pimg
        
    }
    catch(err) {
        console.log(err);
        
    }
}

// fetchData()
