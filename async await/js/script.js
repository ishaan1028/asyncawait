

let countries = async () => {

    // combining coutries from asia and europe

    let Asia = await fetch('https://restcountries.eu/rest/v2/region/asia');

    let asianConts = await Asia.json();

    let europe = await fetch('https://restcountries.eu/rest/v2/region/europe');

    let europeConts = await europe.json();

    console.log(asianConts.concat(europeConts));

    // all countries in europe speaking spanish

    let ssC = [];

    for (let cont of europeConts) {

        cont.languages.forEach(c => {

            if (c.name == "Spanish") {

                ssC.push(cont);
            }

        });


    }

    console.log(ssC);

};

countries();