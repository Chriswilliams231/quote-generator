const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');


// let apiQuotes = [];

// Show loading 
const loading = () => {
    loader.hidden = false;
    quoteContainer.hidden = true;
};

// Hide Loading
const complete = () => {
    loader.hidden = true;
    quoteContainer.hidden = false;
}

// show new quote 
const newQuote = () => {
    loading();
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
    // Set and hide the loader
    quoteText.textContent = quote.text;
    complete();

}

// Tweet Quote
const tweetQuote = () => {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(tweetUrl, '_blank');
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

// Event Listener
newQuoteBtn.addEventListener('click', newQuote)
twitterBtn.addEventListener('click', tweetQuote)
// On Load
// getQuotes();
newQuote()
