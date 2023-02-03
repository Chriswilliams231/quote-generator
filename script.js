// Getting quotes from a github api
const getQuotes = async () => {
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';

    try {
        const response = await fetch(apiUrl);
    } catch (err) {
        console.log(err)
    }
}