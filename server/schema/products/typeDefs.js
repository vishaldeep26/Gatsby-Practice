const productTypeDefs = `#graphql
    type Product {
        id: ID!
        name: String!
        description: String
        price: Float!
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

module.exports = productTypeDefs;
