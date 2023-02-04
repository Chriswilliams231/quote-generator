const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');


// let apiQuotes = [];

// show new quote 
const newQuote = () => {
    // Picks a random quote from the local array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)]

    // This will check is the quotes have a author or not
    if (!quote.author) {
        authorText.textContent = 'Unknown'
    } else {
        authorText.textContent = quote.author;

    }

    // This will check the quote length to determine the style
    if (quote.text.length > 50) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote.text;

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
