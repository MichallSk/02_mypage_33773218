var http = require("http"); 
const port = 8000; 

http.createServer(function(req, res) { 
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(res.end(`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>My Personal Page</title>
      </head>
      <body>
        <h1>Welcome to My Page</h1>
        
        <h2>About Me</h2>
        <p>My name is Michal, and I’m a Computer Science student interested in security and AI.</p>

        <h2>My Hobbies</h2>
        <p>I enjoy programming, gaming, and exploring new technologies. In my free time, I like to learn about AI tools and cyber security.</p>

        <h2>Future Goals</h2>
        <p>I want to become an ceyber security and AI exper.</p>
      </body>
    </html>`));
    }).listen(port, function() { 
        console.log(`Node server is running on port ${port}...`); 
}); 
