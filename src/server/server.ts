import * as path from 'path';
import * as express from 'express';
import routes from './routes';
import * as passport from 'passport';
import './middleware/localstrategy';
import './middleware/bearerstrategy';

const app = express();

let p = path.join(__dirname, '../public');


app.use(express.static(p));
app.use(express.json());
app.use(passport.initialize());
app.use(routes);

const port = process.env.PORT || 8081;
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});
