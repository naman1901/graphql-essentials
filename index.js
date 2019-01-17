import express from 'express'

const app = express()

app.get('/graphql', (req, res) => {
    res.send('GraphQL is amazing!');
})

app.listen(8080, () => console.log('Running server on localhost:8080/graphql'));