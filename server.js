const express = require('express');
const cors = require('cors');
const internRoutes = require('./routes/internRoutes');

const app = express();
app.use(cors());
app.use('/api', internRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
