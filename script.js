let apiQuotes = [];

// show new quote 
const newQuote = () => {

}
// Getting quotes from a github api
const getQuotes = async () => {
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';

    try {
        const response = await fetch(apiUrl);
        apiQuotes = response.json();
        newQuote()
    } catch (err) {
        console.log(err)
    }
}

// On Load
getQuotes();