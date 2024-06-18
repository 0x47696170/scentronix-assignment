import express from 'express';
const app = express();

import routes from './routes';

const PORT = process.env.PORT || 5001;

app.use('/', routes);

app.listen(PORT, () => console.log(`Application running on port ${PORT}`));