
const http = require("http")
const fs = require("fs")

function serveStaticFile(messageType, path, contentType, responseCode) {
    if (!responseCode) responseCode = 200;
    fs.readFile(__dirname + path, function(err, data) {
        if (err) {
            messageType.writeHead(500, {"Content-Type":"text/plain"})
            messageType.end("500 - Internal error")
        }
        else {
            messageType.writeHead(responseCode, {"Content-Type":contentType});
            messageType.end(data)
        }
    })
}


http.createServer(function(req, res) {
    var path = req.url.replace(/\/?(?:\?.*)?$/, "").toLowerCase()
        //index
    switch(path) {
        case "":
            serveStaticFile(res, "/index.html", "text/html")
            break;
        case "/img/welcome.jpg":
            serveStaticFile(res, "/img/welcome.jpg", "image/jpeg")
            break;
        //css
        case "/style.css":
            serveStaticFile(res, "/style.css", "text/css")
            break;
        //about
        case "/about":
            serveStaticFile(res, "/about.html", "text/html")
            break;
        case "/img/about.jpg":
            serveStaticFile(res, "/img/about.jpg", "image/jpeg")
            break;
        //gallery
        case "/img/gallery/graduation":
            serveStaticFile(res, "/img/gallery/graduation.jpg", "image/jpeg")
            break;
        case "/img/gallery/study":
            serveStaticFile(res, "/img/gallery/study.jpg", "image/jpeg")
            break;
        //video
        case "/video/memes":
            serveStaticFile(res, "/video/students/memes.mp4", "video/mp4")
            break;
        default:
            serveStaticFile(res, "/error.html", "text/html")
            break;
        case "/img/cry.jpg":
            serveStaticFile(res, "/img/cry.jpg", "image/jpeg")
            break;
    }   
}).listen(3000)

console.log("the server is running. Press CTRL+C to terminate")
