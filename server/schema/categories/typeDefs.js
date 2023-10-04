const categoriesTypeDefs = `#graphql
    type Category {
        id: ID!
        name: String!
        description: String
        imageURL: String
    }

    type Query {
        getAllProducts: [Product]
        getProduct(id: ID!): Product
    }

    type Mutation {
        addProduct(name: String!, description: String, price: Float!, imageUrl: String): Product
        editProduct(id: ID!, name: String, description: String, price: Float, imageUrl: String): Product
        deleteProduct(id: ID!): Boolean!
    }
`;

module.exports = categoriesTypeDefs;
