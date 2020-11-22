const express = require('express');
const grapqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const {MONGOURI} = require('./keys');
const cors = require('cors');


const app = express();

app.use(cors());

mongoose.connect(MONGOURI, {
    useNewUrlParser:true,
    useUnifiedTopology: true

});

mongoose.connection.on('connected',()=>{
    console.log("Successfully conneted to mongodb")
})
mongoose.connection.on('error',(err)=>{
    console.log("Connection Error to Mongodb",err)
})

app.use('/graphql', grapqlHTTP.graphqlHTTP({
    schema,
    graphiql: true
}));

app.get('/', (req, res) => {
    res.send("Hello Mailo! How you doin?");
    
});

app.listen(5000, () => {
    console.log("Listening for requests on port 5000");
});



