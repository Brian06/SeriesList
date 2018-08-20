import express from 'express';
import bodyParser from 'body-parser';
import {routes} from './server/routes';

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
} else {
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
}

routes(app);

const port = process.env.PORT || 3002;

app.listen(port);
console.log('server started '+ port);
