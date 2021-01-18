import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

class App {
  public app: express.Application;
  public port: number | string;
  public env: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.env = process.env.NODE_ENV || 'development';

    this.initMiddlewares();
  }

  private initMiddlewares() {
    this.app.use(morgan('dev'));
    this.app.use(cors({ origin: true, credentials: true }));
  }

  public listen() {
    this.app.listen(this.port, () => {
      //TODO: implement logger
      console.log(`🚀 App listening on the port ${this.port}`);
    });
  }
}

export default App;
