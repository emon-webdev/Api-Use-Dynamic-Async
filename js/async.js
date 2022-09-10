const LoadUserFatch = () => {
    const url = 'https://randomuser.me/api/?gender=female';
    fetch(url)
        .then(res => res.json())
        .then(data => displayUser(data.results[0]))
        .catch(error => console.log(error))
};


// async way ta api call
const loadUserAsync = async () => {
    const url = 'https://randomuser.me/api/?gender=female';
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayUser(data.results[0])
    } catch (error) {
        console.log(error)
    }
};

const displayUser = user => {
    console.log(user)
};













