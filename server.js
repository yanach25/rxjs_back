const http = require('http');
const Koa = require('koa');
const cors = require('koajs-cors');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const ws = require('ws');

const getCards = require('./get-cards-response')
const getComments = require('./get-comments')

const koaBody = require('koa-body');

const port = process.env.PORT || 7071;

const app = new Koa();

app.use(cors({
    origin: true
}));

app.use(koaBody({
    urlencoded: true,
}));

const Router = require('koa-router');

const router = new Router();

router.get('/posts/latest', async (ctx, next) => {
    ctx.response.body = getCards();
})

router.get('/posts/:id', async (ctx, next) => {
    ctx.response.body = getComments();
})

app.use(router.routes());
app.use(router.allowedMethods());

const server = http.createServer(app.callback());
server.listen(port);

