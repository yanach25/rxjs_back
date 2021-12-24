const faker = require('faker');

function getComments() {
    return {
        status: 'ok',
        data: Array(3).fill(0).map(getComment),
    }
}

function getComment() {
    return {
        id: faker.datatype.uuid(),
        post_id: faker.datatype.uuid(),
        author_id: faker.datatype.uuid(),
        author: faker.name.findName(),
        avatar: faker.image.imageUrl(),
        content: faker.random.words(),
        created: faker.time.recent(),
    }
}

module.exports = getComments;
