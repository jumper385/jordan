import sirv from 'sirv';
import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import * as sapper from '@sapper/server';
import cors from 'cors'

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const app = express();

app.use(compression({ threshold: 0 }));
app.use(cors())
app.use(bodyParser.json())
app.use(sirv('static', { dev }));
app.use(sapper.middleware());

app.listen(PORT, err => { 
	if (err) console.log('error', err);
});
