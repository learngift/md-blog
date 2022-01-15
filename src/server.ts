import path from 'path';
import express, { NextFunction, Request, Response } from 'express';
// import logger from '@shared/Logger';

const app = express();

const staticDir = path.join(__dirname, 'public');
app.use(express.static(staticDir));

// Export express instance
export default app;
