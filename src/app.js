import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import noticeRoutes from './routes/notice.routes.js';

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/notice-wall", noticeRoutes);

export default app;