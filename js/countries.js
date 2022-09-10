//get api
const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
};
// 
const displayCountries = (countries) => {
    const countriesContainer = document.getElementById('countries-container');
    countries.forEach(country => {
        const { name, capital, flags, cioc } = country;
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country')
        countryDiv.innerHTML = `
            <h3>Name: ${name}</h3>
            <h4>Capital: ${capital}</h4>
            <img src=${flags.png}>
            <button onclick="loadCOuntryDetail('${cioc}')">Details</button>
        `
        countriesContainer.appendChild(countryDiv)
    })
};
const loadCOuntryDetail = (code) => {
    // dynamic api code
    const url = `https://restcountries.com/v2/alpha/${code}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data))
};
//
const displayCountryDetail = country => {
    console.log(country)
    const { name, capital, flags } = country;
    const countryDetail = document.getElementById('country-detail');
    countryDetail.innerHTML = `
        <h3>Name: ${name}</h3>
        <h4>Capital: ${capital}</h4>
        <img src=${flags.png}>
    `
};

loadCountries()








