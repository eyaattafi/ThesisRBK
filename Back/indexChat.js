const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const Chat = require("./Models/chat"); 
const httpServer = http.createServer();

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3001",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  socket.on("join_room", (idchat) => {
    socket.join(idchat);
    console.log(`User with id-${socket.id} joined room - ${idchat}`);
  });

  socket.on("send_msg", async (data) => {
    console.log(data, "DATA");

    try {
      const newChatMessage = await Chat.create({
        content: data.content,
        user_iduser: data.user_iduser,
        admin_idadmin: data.admin_idadmin,
      });

      socket.to(data.idchat).emit("receive_msg", newChatMessage);
    } catch (error) {
      console.error("Error occurred while saving chat message:", error);
    }
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected:", socket.id);
  });
});

const PORT = 7000;
httpServer.listen(PORT, () => {
  console.log(`Socket.io server is running on port ${PORT}`);
});