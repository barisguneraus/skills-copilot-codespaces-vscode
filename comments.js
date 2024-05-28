// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file.
// The comments.html file should be in the same directory as the comments.js file.
// The comments.html file should have the following content:
// <!DOCTYPE html>
// <html>
// <head>
//     <title>Comments</title>
// </head>
// <body>
//     <h1>Comments</h1>
//     <ul>
//         <li>Comment 1</li>
//         <li>Comment 2</li>
//         <li>Comment 3</li>
//         <li>Comment 4</li>
//         <li>Comment 5</li>
//     </ul>
// </body>
// </html>
// The server should respond with the contents of the comments.html file in response to all requests.
// The server should respond with a status code of 404 and the message "Not found" for all other requests.
// Use the createServer method of the http module to create the server.
// Use the listen method of the server object to listen on port 3000.
// Use the readFile method of the fs module to read the contents of the comments.html file.
// Use the writeHead method of the response object to set the content type to "text/html".
// Use the end method of the response object to send the contents of the comments.html file.
// Use the writeHead method of the response object to set the status code to 404.
// Use the end method of the response object to send the message "Not found".

// Load the http module
const http = require('http');
const fs = require('fs');
const path = require('path');

// Create a web server
const server = http.createServer((req, res) => {
    // Get the path of the comments.html file
    const filePath = path.join(__dirname, 'comments.html');
    // Read the contents of the comments.html file
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            // Send a 404 status code and the message "Not found"
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Not found');
        } else {
            // Send the contents of the comments.html file
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
});

// Listen on port 3000
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});