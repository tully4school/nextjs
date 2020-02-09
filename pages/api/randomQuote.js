//////////////// CREATING AN API ROUTE //////////////

// export default (req, res) => {
//     res.status(200).json({
//         quote: 'Zeit is DOPE',
//         author: 'Zakk Fleischmann'
//     });
// };

/////////////FETCHING API ROUTES /////////////

// import quotes from '../../quotes.json';

// export default (req, res) => {
//     const quote = quotes[Math.floor(Math.random() * quotes.length)];
//     res.status(200).json(quote);
// };

/////////////FETCHING API ROUTES /////////////
// import quotes from '../../quotes.json';

// export default (req, res) => {
//     const quote = quotes[Math.floor(Math.random() * quotes.length)];
//     res.status(200).json(quote);
// };

//////////// MIDDLEWARES /////////////////////

import allQuotes from '../../quotes.json'

export default (req, res) => {
    const { author } = req.query;
    let quotes = allQuotes;

    if (author) {
        quotes = quotes.filter(quote => quote.author.toLowerCase().includes(author.toLowerCase()));
    }
    if (!quotes.length) {
        quotes = allQuotes.filter(quote => quote.author.toLowerCase() === 'unknown');
    }

    const quote = quotes[Math.floor(Math.random() * quotes.length)];

    res.status(200).json(quote);
};