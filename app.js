import dotenv from 'dotenv';
import { Server } from './model/server.js';
dotenv.config();

const server = new Server();

server.listen();