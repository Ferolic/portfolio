import express from 'express';
import dotenv from 'dotenv';
const app = express();

dotenv.config();

app.get('/', (req, res) => {
  res.send('server running');
});

const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on ${process.env.NODE_ENV} mode in port ${PORT}`);
});
