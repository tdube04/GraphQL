const express = require('express');
const {buildSchema} = require('graphql');
const {graphqlHTTP} = require('express-graphql')

const app = express();

const schema = buildSchema(`
    type Query {
        hello:String,
    }`
)

const root = {
    hello: () => {
        return 'Hello World';
    },
};

//create a graphql endpoint for all the requests that will be coming to our graphql server
 app.use('/graphql',graphqlHTTP({
    graphiql: true,   // loading the graphiql playground correctly,  just replace graphql: true, by graphiql: true
     schema:schema,
     rootValue: root,
 }));

//use port 4000 with graphql endpoints
app.listen(4000,() => console.log('*********listening on port 4000**********'));