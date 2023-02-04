// let apiQuotes = [];

// show new quote 
const newQuote = () => {
    // Picks a random quote from the apiQuotes array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)]
    console.log(quote)
}
// Getting quotes from a github api
// const getQuotes = async () => {
//     const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';

//     try {
//         const response = await fetch(apiUrl);
//         apiQuotes = response.json();
//         console.log(apiQuotes)
//         newQuote()
//     } catch (err) {
//         console.log(err)
//     }
// }

// On Load
// getQuotes();
newQuote()
