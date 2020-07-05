const io = require('socket.io')();

port = 3000;

io.on('connection', function(socket){
    console.log('Socket connected');
  
    socket.on('disconnect', () => {
      console.log('Socket disconnected');
    });
});
io.listen(port, () => {
    console.log("Listening on port: " + port);
});