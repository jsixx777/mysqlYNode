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
app.get("*", (req,res)=> {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})
//console.log(process.env);
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});
