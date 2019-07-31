const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: '172.46.0.110',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on("connect", ()=> {
    console.log("you are connected!");
    conn.write("Name: AZZ");
  //   setInterval(() => {
  //     conn.write("Move: up")
  //   }, 50);
  });
  conn.on("data", ()=> {
    console.log("you ded cuz you idled");
 
  });
  return conn;
};

module.exports = {connect};