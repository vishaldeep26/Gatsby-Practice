const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const productResolvers = {
  Query: {
    getAllProducts: async () => {
      try {
        return await prisma.Product.findMany();
      } catch (error) {
        console.log(error);
      }
    },
    getProduct: async (parent, args) => {
      try {
        return await prisma.Product.findUnique({ where: { id: Number(args.id) } });
      } catch (error) {
        console.log(error);
      }
    },
  },
  Mutation: {
    addProduct: async (parent, args) => {
      try {
        return await prisma.Product.create({
          data: {
            name: args.name,
            description: args.description,
            price: args.price,
            imageurl: args.imageUrl,
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
    editProduct: async (parent, args) => {
      try {
        return await prisma.Product.update({
          where: {
            id: parseInt(args.id),
          },
          data: {
            name: args.name,
            description: args.description,
            price: args.price,
            imageurl: args.imageUrl,
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
    deleteProduct: async (parent, args) => {
      try {
        await prisma.Product.delete({
          where: {
            id: parseInt(args.id),
          },
        });
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
};

module.exports = productResolvers;
