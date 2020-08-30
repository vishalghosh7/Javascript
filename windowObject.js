let url = prompt("Enter a url to see the pathname: ")
// url1="https://www.w3schools.com/html/"
document.write(url.split("//")[1].split('/').slice(1).join('/'))

// url="https://www.w3schools.com/html/"
// console.log(window.location.pathname(url))