class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
}
let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
let algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["blue", "yellow", "red"])


function SwitchCountry() {
    let input = document.getElementById("CountryList").value;
    let country;

    if (input === "USA") {
        //set country to usa 
        country = usa;
        DisplayUSAColors()
    }
    else if (input === "Mexico") {
        country = mexico;
        DisplayMexicoColors()
    }
    else if (input === "Algeria") {
        country = algeria;
        DisplayAlgeriaColors()
    }

}
function DisplayUSAColors(){
    document.getElementById("Color1").style.backgroundColor=usa.colors[0];
    document.getElementById("Color2").style.backgroundColor=usa.colors[1];
    document.getElementById("Color3").style.backgroundColor=usa.colors[2];

    document.getElementById("CountryName").innerHTML=usa.name;
    document.getElementById("OfficialLanguage").innerHTML=usa.lang;
    document.getElementById("HelloWorld").innerHTML=usa.greeting;
}
function DisplayMexicoColors(){
    document.getElementById("Color1").style.backgroundColor=mexico.colors[0];
    document.getElementById("Color2").style.backgroundColor=mexico.colors[1];
    document.getElementById("Color3").style.backgroundColor=mexico.colors[2];

    document.getElementById("CountryName").innerHTML=mexico.name;
    document.getElementById("OfficialLanguage").innerHTML=mexico.lang;
    document.getElementById("HelloWorld").innerHTML=mexico.greeting;
}
function DisplayAlgeriaColors(){
    document.getElementById("Color1").style.backgroundColor=algeria.colors[0];
    document.getElementById("Color2").style.backgroundColor=algeria.colors[1];
    document.getElementById("Color3").style.backgroundColor=algeria.colors[2];

    document.getElementById("CountryName").innerHTML=algeria.name;
    document.getElementById("OfficialLanguage").innerHTML=algeria.lang;
    document.getElementById("HelloWorld").innerHTML=algeria.greeting;
}