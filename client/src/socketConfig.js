import io from 'socket.io-client';
import { ENDPOINT } from './Constants';

const socket = io(ENDPOINT);

export default socket;