document.getElementById('add-border').addEventListener('click', function () {
    const container = document.getElementById('friend-container');
    container.style.border = '5px solid blue';
})

function addBackgroundColor() {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'cyan'
    }
}

document.getElementById('add-friend').addEventListener('click', function () {
    const container = document.getElementById('friend-container');
    const friendDiv = document.createElement('div')
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = `
    <h2 class="friend-name">new-friend</h2>
    <p>lorem-2</p>
`
    container.appendChild(friendDiv);

})