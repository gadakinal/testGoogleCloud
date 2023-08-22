const {ApolloServer, gql} = require('apollo-server-cloud-functions');
const {ApolloServerPluginLandingPageLocalDefault} = require('apollo-server-core');

const typeDefs = gql`
    type Query {
        hello: String
    }
`;
const resolvers = {
    Query: {
        hello: () => 'Hello world!',
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
    plugins: [
        ApolloServerPluginLandingPageLocalDefault({embed: true}),
    ],
});
exports.handler = server.createHandler();


// rune below command for deploying handler function to google cloud
//gcloud functions deploy apollo-graphql-example --entry-point handler --runtime nodejs18 --trigger-http
//https://us-central1-pragmatic-byway-396605.cloudfunctions.net/apollo-graphql-example/graphql
//
// query TestQuery {
//     hello
//   }
