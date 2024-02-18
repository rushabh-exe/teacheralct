const express = require('express');
const allocationRoutes = require('./routes/allocationRoutes');
const logger = require('./utils/logger');

const app = express();

app.use(express.json());

app.use('/api/allotment', allocationRoutes);

app.use((err, req, res, next) => {
    logger.error(`An error occurred: ${err.stack}`);
    res.status(500).json({ error: 'Internal Server Error' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
});
