import express from 'express'
import graphqlHTTP from 'express-graphql';
import schema from './schema'

const app = express()

app.get('/', (req, res) => {
    res.send('GraphQL is amazing!');
});

class Friend {

    constructor(id, {firstName, lastName, gender, language, email}) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.language = language;
        this.email = email;
    }

}

// Temporary in-memory database
const friendDatabase = {}

const root = { 
    friend: () => {
        return {
            "id": 1223,
            "firstName": "Naman",
            "lastName": "Maheshwari",
            "gender": "Male",
            "language": "English",
            "email": "placeholder1@emailplaceholder.com",
        }
    },
    createFriend: ({input}) => {
        let id = require('crypto').randomBytes(10).toString('hex');
        friendDatabase[id] = input;
        return new Friend(id, input);
    }
};

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(8080, () => console.log('Running server on localhost:8080/graphql'));