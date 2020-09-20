const graphql = require('graphql');
const _ = require('lodash');
const Book = require('../models/book');
const Author = require('../models/author');

const {
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList
} = graphql;

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        genre: {type: GraphQLString},
        author: {
            type: AuthorType,
            resolve(parent, arguments){

            }
        }
    })
});

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: {type: GraphQLID},
        age: {type: GraphQLInt},
        name: {type: GraphQLString},
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, arguments){

            }
        }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: {id: {type: GraphQLID}},
            resolve(parent, arguments){

            }
        },
        author: {
            type: AuthorType,
            args: {id: {type: GraphQLID}},
            resolve(parent, arguments){

            }
        },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, arguments){
                
            }
        },
        authors: {
            type: new GraphQLList(AuthorType),
            resolve(parent, arguments){
                
            }
        }
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields:{
        addAuthor:{
            type: AuthorType,
            args:{
                name: {type: GraphQLString},
                age: {type: GraphQLInt}
            },
            resolve(parent, arguments){
                let author = new Author({
                    name: arguments.name,
                    age: arguments.age
                });
                return author.save()
            }
        },
        addBook:{
            type: BookType,
            args:{
                name: {type: GraphQLString},
                genre: {type: GraphQLString},
                authorId: {type: GraphQLID}
            },
            resolve(parent, arguments){
                let book = new Book({
                    name: arguments.name,
                    genre: arguments.genre,
                    authorId: arguments.authorId 
                });
                return book.save()
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});