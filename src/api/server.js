const cors = require('cors');
const app = require('./app');

const PORT = process.env.PORT || 3000;

app.use(cors());
app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
