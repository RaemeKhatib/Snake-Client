const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  }); 
  conn.on("connect", () => {
    console.log("Hey you are now connected to the game")
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;

};

console.log("Connecting ...");
connect();

module.exports = {
  connect
}