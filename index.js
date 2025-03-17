// creating JSON Server
// 1) import json server library
const jsonServer = require('json-server')
// 2) create json server using create() method
const mediaplayerServer = jsonServer.create();
// 3) connect jsonServer with db.json file using router method
const router = jsonServer.router('db.json')
// 4) create a middleware that process request and response
const middleware=jsonServer.defaults();
//5) use middleware
mediaplayerServer.use(middleware);
//6) use router
mediaplayerServer.use(router)


const PORT = 5000;


//running mediaplayer server
mediaplayerServer.listen(PORT,()=>{
    console.log("media-player server is running", PORT);
    
})
