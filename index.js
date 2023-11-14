const API_KEY = 'solaris-1Cqgm3S6nlMechWO';
const base_URL = 'https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/';

const Sun = document.getElementById('Sun');
const Mercury = document.getElementById('Mercury');
const Venus = document.getElementById('Venus');
const Earth = document.getElementById('Earth');
const Mars = document.getElementById('Mars');
const Jupiter = document.getElementById('Jupiter');
const Saturn = document.getElementById('Saturn');
const Uranus = document.getElementById('Uranus');
const Neptunus = document.getElementById('Neptunus');

const solarSystem = document.getElementById('solarSystem');


//let earthPlanet;
//let sunStar;


async function getPlanets() {
    try {
        let response = await fetch("https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies",
            {
                method: "GET",
                headers: { "x-zocom": API_KEY },
            });

        let data = await response.json();
        let planets = data.bodies;
        //console.log(planets);
        showPlanets(planets);

        sunStar = planets[0]; //Without let/const so it's declared globally
        mercuryPlanet = planets[1];
        venusPlanet = planets[2];
        earthPlanet = planets[3];
        marsPlanet = planets[4];
        jupiterPlanet = planets[5];
        saturnPlanet = planets[6];
        uranusPlanet = planets[7];
        neptunusPlanet = planets[8];

    } catch (error) {
        console.log('unfortunately,there has been ann error');
    }
}
getPlanets();




function showPlanets(planets) {
    for (let i = 0; i < planets.length; i++) {
        let planet = planets[i];
        //console.log(planet); 
    }
}




function showSunInfo(sunStar) {

    solarSystem.classList.toggle('hide');
    Sun.classList.add('show');

    let planetInfo = '';

    planetInfo = `
    <article class="hidden_content">    
        <h1 class="hidden_title">${sunStar.name}</h1>
        <h2 class="hidden_latin">${sunStar.latinName}</h2>
        <p class="hidden_text">${sunStar.desc}</p>
        <div>
        <p class="hidden_text">Circumference: ${sunStar.circumference}km</p>
        <p class="hidden_text">Distance from Sun: ${sunStar.distance}km</p>
        <p class="hidden_text">Temperature daytime: ${sunStar.temp.day}C</p>
        <p class="hidden_text">Temperature night time: ${sunStar.temp.night}C</p>
        </div>
        <p class="hidden_text">Moons: ${sunStar.moons} - </p>
    </article>
         `;
    solarSystem.innerHTML = planetInfo;
}

Sun.addEventListener('click', function () {
    showSunInfo(sunStar);
});




function showEarthInfo(earthPlanet) {

    solarSystem.classList.toggle('hide');
    Earth.classList.add('show');

    let planetInfo = '';

    planetInfo = `
    <article class="hidden_content">    
        <h1 class="hidden_title">${earthPlanet.name}</h1>
        <h2 class="hidden_latin">${earthPlanet.latinName}</h2>
        <p class="hidden_text">${earthPlanet.desc}</p>
        <div>
        <p class="hidden_text">Circumference: ${earthPlanet.circumference}km</p>
        <p class="hidden_text">Distance from Sun: ${earthPlanet.distance}km</p>
        <p class="hidden_text">Temperature daytime: ${earthPlanet.temp.day}C</p>
        <p class="hidden_text">Temperature night time: ${earthPlanet.temp.night}C</p>
        </div>
        <p class="hidden_text">Moons: ${earthPlanet.moons}</p>
    </article>
         `;
    solarSystem.innerHTML = planetInfo;
}

Earth.addEventListener('click', function () {
    showEarthInfo(earthPlanet);
});




function showMercuryInfo(mercuryPlanet) {

    solarSystem.classList.toggle('hide');
    Mercury.classList.add('show');

    let planetInfo = '';

    planetInfo = `
    <article class="hidden_content">    
        <h1 class="hidden_title">${mercuryPlanet.name}</h1>
        <h2 class="hidden_latin">${mercuryPlanet.latinName}</h2>
        <p class="hidden_text">${mercuryPlanet.desc}</p>
        <div>
        <p class="hidden_text">Circumference: ${mercuryPlanet.circumference}km</p>
        <p class="hidden_text">Distance from Sun: ${mercuryPlanet.distance}km</p>
        <p class="hidden_text">Temperature daytime: ${mercuryPlanet.temp.day}C</p>
        <p class="hidden_text">Temperature night time: ${mercuryPlanet.temp.night}C</p>
        </div>
        <p class="hidden_text">Moons: ${mercuryPlanet.moons} -</p>
    </article>
         `;
    solarSystem.innerHTML = planetInfo;
}

Mercury.addEventListener('click', function () {
    showMercuryInfo(mercuryPlanet);
});





function showVenusInfo(venusPlanet) {

    solarSystem.classList.toggle('hide');
    Venus.classList.add('show');

    let planetInfo = '';

    planetInfo = `
    <article class="hidden_content">    
        <h1 class="hidden_title">${venusPlanet.name}</h1>
        <h2 class="hidden_latin">${venusPlanet.latinName}</h2>
        <p class="hidden_text">${venusPlanet.desc}</p>
        <div>
        <p class="hidden_text">Circumference: ${venusPlanet.circumference}km</p>
        <p class="hidden_text">Distance from Sun: ${venusPlanet.distance}km</p>
        <p class="hidden_text">Temperature daytime: ${venusPlanet.temp.day}C</p>
        <p class="hidden_text">Temperature night time: ${venusPlanet.temp.night}C</p>
        </div>
        <p class="hidden_text">Moons: ${venusPlanet.moons} -</p>
    </article>
         `;
    solarSystem.innerHTML = planetInfo;
}

Venus.addEventListener('click', function () {
    showVenusInfo(venusPlanet);
});





function showMarsInfo(marsPlanet) {

    solarSystem.classList.toggle('hide');
    Mars.classList.add('show');

    let planetInfo = '';

    planetInfo = `
    <article class="hidden_content">    
        <h1 class="hidden_title">${marsPlanet.name}</h1>
        <h2 class="hidden_latin">${marsPlanet.latinName}</h2>
        <p class="hidden_text">${marsPlanet.desc}</p>
        <div>
        <p class="hidden_text">Circumference: ${marsPlanet.circumference}km</p>
        <p class="hidden_text">Distance from Sun: ${marsPlanet.distance}km</p>
        <p class="hidden_text">Temperature daytime: ${marsPlanet.temp.day}C</p>
        <p class="hidden_text">Temperature night time: ${marsPlanet.temp.night}C</p>
        </div>
        <p class="hidden_text">Moons: ${marsPlanet.moons}</p>
    </article>
         `;
    solarSystem.innerHTML = planetInfo;
}

Mars.addEventListener('click', function () {
    showMarsInfo(marsPlanet);
});




function showJupiterInfo(jupiterPlanet) {
    solarSystem.classList.toggle('hide');
    Jupiter.classList.add('show');

    let planetInfo = '';

    planetInfo = `
    <article class="hidden_content">    
        <h1 class="hidden_title">${jupiterPlanet.name}</h1>
        <h2 class="hidden_latin">${jupiterPlanet.latinName}</h2>
        <p class="hidden_text">${jupiterPlanet.desc}</p>
        <div>
        <p class="hidden_text">Circumference: ${jupiterPlanet.circumference}km</p>
        <p class="hidden_text">Distance from Sun: ${jupiterPlanet.distance}km</p>
        <p class="hidden_text">Temperature daytime: ${jupiterPlanet.temp.day}C</p>
        <p class="hidden_text">Temperature night time: ${jupiterPlanet.temp.night}C</p>
        </div>
        <p class="hidden_text">Moons: ${jupiterPlanet.moons}</p>
    </article>
         `;
    solarSystem.innerHTML = planetInfo;
}
Jupiter.addEventListener('click', function () {
    showJupiterInfo(jupiterPlanet);
});




function showSaturnInfo(saturnPlanet) {
    
    solarSystem.classList.toggle('hide');
    Saturn.classList.add('show');


    let planetInfo = '';

    planetInfo = `
    <article class="hidden_content">    
        <h1 class="hidden_title">${saturnPlanet.name}</h1>
        <h2 class="hidden_latin">${saturnPlanet.latinName}</h2>
        <p class="hidden_text">${saturnPlanet.desc}</p>
        <div>
        <p class="hidden_text">Circumference: ${saturnPlanet.circumference}km</p>
        <p class="hidden_text">Distance from Sun: ${saturnPlanet.distance}km</p>
        <p class="hidden_text">Temperature daytime: ${saturnPlanet.temp.day}C</p>
        <p class="hidden_text">Temperature night time: ${saturnPlanet.temp.night}C</p>
        </div>
        <article class="moon">
        <p class="hidden_text">Moons: ${saturnPlanet.moons} </p>
        <article class="moon">
    </article>
         `;
    solarSystem.innerHTML = planetInfo;
}

Saturn.addEventListener('click', function () {
    showSaturnInfo(saturnPlanet);
});





function showUranusInfo(uranusPlanet){
    solarSystem.classList.toggle('hide');
    Uranus.classList.add('show');


    let planetInfo = '';

    planetInfo = `
    <article class="hidden_content">    
        <h1 class="hidden_title">${uranusPlanet.name}</h1>
        <h2 class="hidden_latin">${uranusPlanet.latinName}</h2>
        <p class="hidden_text">${uranusPlanet.desc}</p>
        <div>
        <p class="hidden_text">Circumference: ${uranusPlanet.circumference}km</p>
        <p class="hidden_text">Distance from Sun: ${uranusPlanet.distance}km</p>
        <p class="hidden_text">Temperature daytime: ${uranusPlanet.temp.day}C</p>
        <p class="hidden_text">Temperature night time: ${uranusPlanet.temp.night}C</p>
        </div>
        <div>
        <p class="hidden_text">Moons: ${uranusPlanet.moons}</p>
        </div>
    </article>
         `;
    solarSystem.innerHTML = planetInfo;
}

Uranus.addEventListener('click', function () {
    showUranusInfo(uranusPlanet);
});






function showNeptunusInfo(neptunusPlanet){
    solarSystem.classList.toggle('hide');
    Neptunus.classList.add('show');


    let planetInfo = '';

    planetInfo = `
    <article class="hidden_content">    
        <h1 class="hidden_title">${neptunusPlanet.name}</h1>
        <h2 class="hidden_latin">${neptunusPlanet.latinName}</h2>
        <p class="hidden_text">${neptunusPlanet.desc}</p>
        <div>
        <p class="hidden_text">Circumference: ${neptunusPlanet.circumference}km</p>
        <p class="hidden_text">Distance from Sun: ${neptunusPlanet.distance}km</p>
        <p class="hidden_text">Temperature daytime: ${neptunusPlanet.temp.day}C</p>
        <p class="hidden_text">Temperature night time: ${neptunusPlanet.temp.night}C</p>
        </div>
        <article class="moon">
        <p class="hidden_text">Moons: 
        ${neptunusPlanet.moons}</p>
        </article>
    </article>
         `;
    solarSystem.innerHTML = planetInfo;
}
Neptunus.addEventListener('click', function () {
    showNeptunusInfo(neptunusPlanet);
});