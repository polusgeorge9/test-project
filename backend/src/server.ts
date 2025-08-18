import app from './app';
import dbConnect from './config/db';
import 'dotenv/config';

const port = process.env.PORT || 3000;

dbConnect()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((err: any) => {
    console.error('SERVER ERROR', err);
    process.exit(1);
  });
