import { io, Socket } from 'socket.io-client';
import { Logs } from '../typings/logs';

type T = keyof Logs

type ServerToClient = {
  [key in T]: (data: Logs[key]) => void;
};

const socket: Socket<ServerToClient, any> = io('http://localhost:8000')

export default socket