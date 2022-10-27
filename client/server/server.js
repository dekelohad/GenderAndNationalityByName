const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();
const logger = require('./pino-logging/logger');
const pinoHTTP = require('pino-http');

const { errorHandler } = require('./middleware/errorMiddleware');
const urlRoutes = require('./routes/urlRoutes');


app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(express.json());

app.use(
    pinoHTTP({
        logger,
    })
);

app.use('/api', urlRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    logger.info(`server running in on port ${PORT}`);
});