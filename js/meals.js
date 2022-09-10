const loadMeals = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
};

const displayMeals = (meals) => {
    const mealContainer = document.getElementById('meal-container');
    mealContainer.innerHTML = '';
    meals.forEach(meal => {
        const { strMeal, strMealThumb, strCategory, strInstructions } = meal;

        console.log(meal)
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col')
        mealDiv.innerHTML = `
        <div onclick="loadMealDetail(${meal.idMeal})" class="card h-100">
            <img src=${strMealThumb} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${strMeal}</h5>
                <p class="card-text">${strCategory}</p>
                <p class="card-text">${strInstructions.slice(0, 100)}</p>
            </div>
        </div>
        `
        mealContainer.appendChild(mealDiv)
    })
};


const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadMeals(searchText)
    searchField.value = '';
};

const loadMealDetail = (idMeal) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]))
};

const displayMealDetails = meal => {
    console.log(meal)
    
    const detailContainer = document.getElementById('detail-container');
    detailContainer.innerHTML = '';
    const mealDiv = document.createElement('div');
    mealDiv.classList.add('col-lg-10')
    mealDiv.classList.add('mx-auto')
    mealDiv.innerHTML = `
    <div class="card mb-3">
        <div class="row g-0">
            <div class="col-md-4">
            <img src=${meal.strMealThumb}  class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
            <div class="card-body">
            <h5 class="card-title">Name: ${meal.strMeal} Category: <span>${meal.strCategory}</span></h5>
                <p class="card-text">Measure: ${meal.strMeasure3}</p>
                <p class="card-text">${meal.strInstructions.slice(0, 100)}</p>
            </div>
            </div>
        </div>
    </div>
    `
    detailContainer.appendChild(mealDiv)

};



loadMeals('')