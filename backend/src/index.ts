import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

console.clear();
console.log('🔃 Backend iniciando....')

import routes from './routes';
const app = express();

app.use(cors());
app.use(bodyParser.json())


app.use(routes);
app.listen(3333);

console.log('🔃 Backend iniciado')