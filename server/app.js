const express = require('express');
const grapqlHTTP = require('express-graphql');
const schema = require('./schema/schema');



const app = express();

app.use('/graphql', grapqlHTTP.graphqlHTTP({
    schema
}));

app.get('/', (req, res) => {
    res.send("Hello Mailo! How you doin?");
    
});

app.listen(5000, () => {
    console.log("Listening for requests on port 5000");
});



