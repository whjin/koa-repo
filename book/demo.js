var koa = require('koa');
var app = koa();

app.use(function* () {
    var path = this.path;
    this.body = path;
});

app.listen(3000);