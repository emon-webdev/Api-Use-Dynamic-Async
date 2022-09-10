const loadUsers = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayUsers(data.results))
};
const displayUsers = (users) => {
    const userContainer = document.getElementById('user-container');
    for(const user of users){
        const useDiv = document.createElement('div');
        useDiv.classList.add('user')
        useDiv.innerHTML = `
            <h3>User Name: ${user} </h3>
            <p>Email: ${user.email}</p>
            <p>User location: ${user.location.city} , ${user.location.country}</p>
        `
        userContainer.appendChild(useDiv)
    }
    
};
loadUsers()