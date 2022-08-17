let heroImg1 = document.querySelector("#heroImg1");
let heroName1 = document.querySelector("#heroName1");
let description1 = document.querySelector("#heroDescription1");

let heroImg2 = document.querySelector("#heroImg2");
let heroName2 = document.querySelector("#heroName2");
let description2 = document.querySelector("#heroDescription2");

let heroImg3 = document.querySelector("#heroImg3");
let heroName3 = document.querySelector("#heroName3");
let description3 = document.querySelector("#heroDescription3");


const getInfo = async ()=>{
    let url = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=b4de584239b5d1502a9124c17e40831e&hash=fbff328d756c516a6618b225b416ee42`;
    const response = await fetch(url);
    const data = await response.json();
    const arrdata = [data];

    let rand = Math.floor(Math.random() * 15) + 1;


    heroImg1.setAttribute('src', `${arrdata[0].data.results[rand-1].thumbnail.path  + '.' + arrdata[0].data.results[rand-1].thumbnail.extension}`);
    heroName1.innerHTML = arrdata[0].data.results[rand-1].name;
    if(arrdata[0].data.results[rand-1].description == ""){
        description1.innerHTML = `<a href="${arrdata[0].data.results[rand-1].urls[0].url}" class="btn" target="_blank">learn more</a>`;
    }
    else{
        description1.innerHTML = arrdata[0].data.results[rand-1].description + `<p><a href="${arrdata[0].data.results[rand-1].urls[0].url}" class="btn" target="_blank">learn more</a></p>`;
    }



    heroImg2.setAttribute('src', `${arrdata[0].data.results[rand-1+1].thumbnail.path  + '.' + arrdata[0].data.results[rand-1+1].thumbnail.extension}`);
    heroName2.innerHTML = arrdata[0].data.results[rand-1+1].name;
    if(arrdata[0].data.results[rand-1+1].description == ""){
        description2.innerHTML = `<a href="${arrdata[0].data.results[rand-1+1].urls[0].url}" class="btn" target="_blank">learn more</a>`;
    }
    else{
        description2.innerHTML = arrdata[0].data.results[rand-1+1].description + `<p><a href="${arrdata[0].data.results[rand-1+1].urls[0].url}" class="btn" target="_blank">learn more</a></p>`;
    }



    heroImg3.setAttribute('src', `${arrdata[0].data.results[rand-1+2].thumbnail.path  + '/detail.' + arrdata[0].data.results[rand-1+2].thumbnail.extension}`);
    heroName3.innerHTML = arrdata[0].data.results[rand-1+2].name;
    if(arrdata[0].data.results[rand-1+2].description == ""){
        description3.innerHTML = `<a href="${arrdata[0].data.results[rand-1+2].urls[0].url}" class="btn" target="_blank">learn more</a>`;
    }
    else{
        description3.innerHTML = arrdata[0].data.results[rand-1+2].description + `<p><a href="${arrdata[0].data.results[rand-1+2].urls[0].url}" class="btn" target="_blank">learn more</a></p>`;
    }

}
getInfo();

