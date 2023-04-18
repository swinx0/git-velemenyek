const reviews = [

    {
        name: "Szent Endre",
        job: "JS fejlesztő",
        img: "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus repellat doloremque nostrum corporis non ut labore vitae tenetur facere eligendi? Quidem repellat tenetur assumenda placeat magnam, nostrum voluptas omnis sapiente. Odit delectus animi eos natus a architecto totam dolorum assumenda non quibusdam perferendis, dicta, officiis hic. Deserunt nesciunt quo quam at natus sed expedita architecto, totam officiis facilis. Velit similique, tempore corporis aspernatur incidunt magnam ipsum obcaecati dolorem nihil voluptatibus maiores expedita, a aliquam dolore.vitae tenetur facere eligendi? Quidem repellat tenetur assumenda placeat magnam, nostrum voluptas omnis sapiente. Odit delectus animi eos natus a architecto totam dolorum assumenda non quibusdam perferendis, dicta, officiis hic. Deserunt nesciunt quo quam at natus sed expedita architecto, totam officiis facilis. Velit similique, tempore corporis aspernatur incidunt magnam ipsum obcaecati dolorem nihil voluptatibus maiore"
    },

    {
        name: "Török Bálint",
        job: "JAVA fejlesztő",
        img: "https://images.pexels.com/photos/10131170/pexels-photo-10131170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus repellat doloremque nostrum corporis non ut labore viis facilis. Velit similique, tempore corporis aspernatur incidunt magnam ipsum obcaecati dolorem nihil voluptatibus maiores expedita, a aliquam dolore."
    },

    {
        name: "Nagy Zsanett",
        job: "Automata tesztelő",
        img: "https://images.pexels.com/photos/4862429/pexels-photo-4862429.jpeg",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus repellat doloremque nostrum corporis non ut labore vitae tenetur facere eligendi? Quidem repellat tenetur assumenda placeat magnam, nostrum voluptas omnis sapiente. Odit delectus animi eos natus a architecto totam dolorum assumenda non quibusdam perferendis, dicta, officiis hic. Deserunt nesciunt quo quam at natus sed expedita architecto, totam officiis facilis. Velit similique, tempore corporis aspernatur incidunt magnam ipsum obcaecati dolorem nihil voluptatibus maiores expedita, a aliquam dolore."
    }
];

//A használni kivánt elemeket eltároljuk változókban
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const text = document.getElementById("text");
const prev = document.querySelector(".prev-btn");
const next = document.querySelector(".next-btn");

//kiinduló érték felvétele
let current = 0;

//oldalbetöltődésre töltsük be az első személyt az oldalra
window.addEventListener("load", () =>{

    const item = reviews[current];
    img.src = item.img;
    author.textContent = item.author;
    job.textContent = item.job;
    text.textContent = item.text;
   
})

//írok egy fügvényt amivel ki tudjuk választani a következő embert és adatait
function showPerson(person){

    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.author;
    job.textContent = item.job;
    text.textContent = item.text;
}

//a NEXT gomb megnyomására ugorjunk a következő emberre
next.addEventListener("click", () => {

    //léptetjük a kiinduló értékünjket 1-el -> lépünk a következő emberre
    current++

    //ha a kiinduló értékünk 1-el kisebb mint a revievs tömb hossza 
    if(current > reviews.length-1){

        //akkor álljon vissza a kiinduló érték 0-ra, vagyis a tömb elejére
        current = 0;
    }

    showPerson(current)
})

prev.addEventListener("click", () => {

    //léptetjük a kiinduló értékünjket 1-el -> lépünk a következő emberre
    current--

    //ha a kiinduló értékünk nagyobb mint 0
    if(current < 0){

        //akkor álljon vissza a kiinduló érték a tömb hossza -1-re a tömb végére
        current = reviews.length -1;
    }

    showPerson(current)
})
