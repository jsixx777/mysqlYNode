import * as passport from 'passport';
import * as LocalStategy from 'passport-local';

import { ComparePassword } from '../utils/security/passwords';
import DB from '../db';

passport.serializeUser((user,done) => done(null,user));
passport.deserializeUser((user,done) => done(null,user));

passport.use(new LocalStategy.Strategy({
    usernameField: 'email',
    session: false
}, async (email,password,done) =>{
    try{
        let [user]: any = await DB.Users.findOneByEmail(email);
        
        if(user && ComparePassword(password,user.password)) {
            //console.log('stategy');
            done(null,user);
        }else{
            done(null,false);
        }
    }catch(e) {
        done(e);
    }

}))

