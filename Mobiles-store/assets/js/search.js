let gs = document.getElementById("googleSearch");

const googlesearch = () => {
    let searchValue = gs.value;
    if (searchValue === "") {

    } else {
        const screenWidth = window.screen.width;
        const screenHeight = window.screen.height;
        const windowWidth = 900; 
        const windowHeight = 500; 
        
        const left = (screenWidth - windowWidth) / 2;
        const top = (screenHeight - windowHeight) / 2;

        window.open(`https://www.google.com/search?q=${searchValue}`, 'ExampleWindow', `width=${windowWidth},height=${windowHeight},left=${left},top=${top}`);
    }
}
