var koa = require('koa');
var router = require('koa-router');
var app = koa();

app.use(router(app));

app.get('/', function* (next) {
    this.body = '<p>this is a koa page.</p>'
});

app.param('id', function* (id, next) {
    this.id = Number(id);
    if (typeof this.id !== 'number') {
        return this.status = 404;
    }
    yield next;
}).get('/detail/:id', function* (next) {
    var id = this.id;
    this.body = id;
});

app.listen(3000);