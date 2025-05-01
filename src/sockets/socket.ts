import {Server as SocketIOServer} from 'socket.io'

export function setupSocketIO(io: SocketIOServer) {
    io.on('connection', (socket) => {
      console.log('User connected:', socket.id);
  
      socket.on('message', (data) => {
        console.log('Message received:', data);
        // handle the message
      });
  
      socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
      });
    });
  }