import socketIOClient from "socket.io-client";
const socketURL = "http://localhost:4000/";
const notification = socketIOClient(socketURL);
export { notification }