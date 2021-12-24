const faker = require('faker');

function getCards() {
    const cards = Array(10).fill(0).map(() => getCard());
    return {
        status: 'ok',
        data: cards,
    }
}

function getCard() {
    return {
        id: faker.datatype.uuid(),
        author: faker.name.findName(),
        avatar: faker.image.imageUrl(),
        author_id: faker.datatype.uuid(),
        title: faker.random.words(),
        image: faker.image.imageUrl(),
        created: faker.time.recent(),
    }
}

module.exports = getCards;
