//////////////// CREATING AN API ROUTE //////////////

// export default (req, res) => {
//     res.status(200).json({
//         quote: 'Zeit is DOPE',
//         author: 'Zakk Fleischmann'
//     });
// };

/////////////FETCHING API ROUTES /////////////

import quotes from '../../quotes.json';

export default (req, res) => {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    res.status(200).json(quote);
};