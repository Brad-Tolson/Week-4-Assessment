const express = require('express');
const cors = require('cors');
const { getCompliment, getFortune, getPersonalizedMessage, updateFortune } = require('./controller');
const app = express();
const {deleteFortune} = require('./controller');
app.use(express.json());
app.use(cors());

app.get('/compliment', getCompliment);
app.get('/fortune', getFortune);
app.put('/fortune', updateFortune);
app.delete('/fortune', deleteFortune);
app.post('/personalized-message', getPersonalizedMessage);

app.listen(4000, () => console.log('Server running on port 4000!'));


