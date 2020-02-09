export default (req, res) => {
    res.status(200).json({
        quote: 'Zeit is DOPE',
        author: 'Zakk Fleischmann'
    });
};