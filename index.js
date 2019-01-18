import express from 'express'
import graphqlHTTP from 'express-graphql';
import schema from './schema'

const app = express()

app.get('/', (req, res) => {
    res.send('GraphQL is amazing!');
});

const root = { friend: () => {
    return {
        "id": 1223,
        "firstName": "Naman",
        "lastName": "Maheshwari",
        "gender": "Male",
        "language": "English",
        "email": "placeholder@emailplaceholder.com",
    }
} };

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(8080, () => console.log('Running server on localhost:8080/graphql'));