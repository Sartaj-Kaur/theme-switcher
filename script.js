const themes = {
    light: {
        background: "#e8f0ff",
        text: "#003366",
        nav: "#cfe0ff",
        hero: "#dce8ff",
        card: "#f0f6ff",
        palette: ["#4d79ff", "#80aaff", "#b3ccff"]
    },

    dark: {
        background: "#181818",
        text: "#ffffff",
        nav: "#222222",
        hero: "#333333",
        card: "#2a2a2a",
        palette: ["#555555"," #777777"," #999999"]
    },

    tropical: {
        background: "#fff4e0",
        text: "#b35400",
        nav: "#ffd8a8",
        hero: "#ffe5c2",
        card: "#fff0db",
        palette: ["#ff8c42"," #ffa75e"," #ffc799"]
    },

    pink: {
    background: "#ffe6f2",  
    text: "#b30059",        
    nav: "#ffb3d9",          
    hero: "#ffccdf",         
    card: "#ffd9ec",         
    palette: ["#ff4d94", "#ff80b3", "#ff99cc"] 
},

};

function setTheme(themeName){
    const theme = themes[themeName];

    // Main background + text
    document.body.style.backgroundColor = theme.background;
    document.body.style.color = theme.text;

    // Navbar
    const nav = document.querySelector("nav");
    nav.style.backgroundColor = theme.nav;
    nav.style.color = theme.text;

    // Hero section
    const hero = document.querySelector(".hero");
    hero.style.backgroundColor = theme.hero;
    hero.style.color = theme.text;

    // Feature cards
    const cards = document.querySelectorAll(".feature-card");
    cards.forEach(card => {
        card.style.backgroundColor = theme.card;
        card.style.color = theme.text;});

    // Palette update
    document.querySelector(".box1").style.background = theme.palette[0];
    document.querySelector(".box2").style.background = theme.palette[1];
    document.querySelector(".box3").style.background = theme.palette[2];


}