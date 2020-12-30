const faker = require('faker');

const initDataCount = 5;
const posts = [];
for (let i = 0; i < initDataCount; i += 1) {
  posts.push({
    id: faker.random.uuid(),
    title: faker.commerce.product(),
    body: faker.commerce.productDescription(),
  });
}

console.log(posts);

exports.seed = (knex) => {
  return knex('posts')
    .del()
    .then(() => {
      return knex('posts').insert(posts);
    });
};
