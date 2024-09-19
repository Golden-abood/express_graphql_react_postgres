const books = [
  {
    title: "title-1",
    author: "author-1",
  },
  {
    title: "title-2",
    author: "author-2",
  },
  {
    title: "title-3",
    author: "author-3",
  },
  {
    title: "title-4",
    author: "author-4",
  },
];

const resolvers = {
  Query: {
    books: () => {
      return books;
    },
  },
};

module.exports = resolvers;
