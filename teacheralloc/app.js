const express = require('express');
const allocationRoutes = require('./routes/allocationRoutes');
const emailRoutes = require('./routes/emailRoutes'); // Add this line
const logger = require('./utils/logger');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/allotment', allocationRoutes);
app.use('/api/email', emailRoutes); // Add this line

app.use((err, req, res, next) => {
    logger.error(`An error occurred: ${err.stack}`);
    res.status(500).json({ error: 'Internal Server Error' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
});
