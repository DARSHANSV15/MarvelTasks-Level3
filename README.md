# Task 1 - OSI
___
### **1. Layered Structure**

The OSI model divides network communication into seven distinct layers, each with specific functions:

- **Physical Layer**: Manages the physical transmission of data over a medium.
- **Data Link Layer**: Handles node-to-node data transfer and error correction.
- **Network Layer**: Manages logical addressing and routing between different networks.
- **Transport Layer**: Ensures reliable end-to-end communication with error checking and flow control.
- **Session Layer**: Manages sessions between applications, including synchronization and recovery.
- **Presentation Layer**: Translates, encrypts, and compresses data for readability between systems.
- **Application Layer**: Interfaces directly with user applications and provides network services.

### **2. Network Protocols**

Network protocols define rules for data communication, ensuring effective device interaction:

- **Ethernet**: Facilitates LAN data transmission.
- **TCP/IP**: Backbone of internet communication, ensuring reliable data delivery.
- **HTTP/HTTPS**: For web page and secure data transmission.
- **SMTP**: Used for email transfer.
- **DNS**: Translates domain names into IP addresses.
- **FTP**: Enables file transfers.

### **3. Routing and Switching**

- **Routing**: Routers at the Network Layer determine the best path for data packets across multiple networks, utilizing routing tables to optimize data delivery.
- **Switching**: Switches at the Data Link Layer forward data frames within a LAN based on MAC addresses. Unlike routing, switching handles local network data forwarding.

### **4. Handshakes**

- **Two-Way Handshake**: Establishes a basic connection with synchronization and acknowledgment messages. Potential issues include delayed acknowledgments.
- **Three-Way Handshake**: Uses SYN, SYN-ACK, and ACK steps to ensure a reliable connection, addressing issues like SYN duplication errors.

### **5. IP Addressing**

- **IPv4**: Format of four decimal numbers (e.g., 192.155.12.1).
- **IPv6**: Format of eight hexadecimal numbers (e.g., 2001:0db8:85a3:0000:0000:8a2e:0370:7334).

### **6. Advantages of the OSI Model**

- **Simplification**: Breaks down network communication into manageable layers.
- **Standardization**: Ensures consistency and compatibility across systems.
- **Troubleshooting**: Simplifies problem diagnosis by isolating issues to specific layers.
- **Flexibility**: Allows independent updates and improvements to various layers.

# Task 2 - Serverless
___
### **1. Understanding Serverless Architecture**

- **Functions as a Service (FaaS)**: Abstracts server management from developers, focusing on code execution. Billing is based on function invocations and compute time, with automatic scaling based on demand.

### **2. AWS Lambda**

- **Overview**: AWS Lambda executes code in response to events, eliminating server management and scaling automatically based on requests.
- **Key Features**: Event-based execution, automatic scaling, and cost efficiency based on actual compute time.

### **3. AWS API Gateway**

- **Role**: Provides REST endpoints to trigger Lambda functions, simplifying API creation, management, and integration with Lambda.

### **4. Serverless Framework**

**Purpose**: A toolkit that simplifies the deployment and management of serverless applications, focusing on code rather than infrastructure.

**Installation and Setup**:
  - Install globally with `npm install -g serverless`.
  - Configure with AWS credentials and create a service using a Serverless template.
  - **Deployment**: Use `serverless deploy` to package and deploy the service.

### **5. Testing Locally with Serverless Offline**

- **Setup**: Initialize npm with `npm init`, install Serverless Offline using `npm install serverless-offline --save-dev`, and configure `serverless.yml` to include `serverless-offline`.
- **Running Locally**: Use `serverless offline start` to start local emulation and test the Lambda function.

### **Conclusion**

The coursework highlights serverless computing with Node.js, focusing on:
- **FaaS**: Server management abstraction and automatic scaling.
- **AWS Lambda**: Event-driven execution with cost-efficient billing.
- **AWS API Gateway**: Simplified API management.
- **Serverless Framework**: Deployment and management ease.
- **Serverless Offline**: Local testing and development streamlining.

# Task 3 - Sockets!
___
### **1. Understanding WebSockets**

**Definition**: WebSockets enable full-duplex communication channels over a single TCP connection, providing real-time data exchange.
**Benefits**: Real-time communication, persistent connection, and efficient data transmission with lower latency and reduced overhead.

**How It Works**:<br>
**Handshake Process**: Client initiates a connection with an `Upgrade` header, server responds with HTTP 101, and the connection is upgraded for bidirectional communication.

### **2. Socket.IO Overview**

**Definition**: Socket.IO is a library for real-time web applications, supporting bidirectional and event-based communication. It provides additional features beyond WebSockets, such as automatic reconnections and event handling.

### **3. Building a Real-Time Chat Application**

**Client-Side Implementation**:
  ```javascript
  var socket = io();
  $("form").submit(function (e) {
    e.preventDefault();
    socket.emit("chat message", name + ": " + $("#m").val());
    $("#messages").append($('<li id="list">').text("You: " + $("#m").val()));
    $("#m").val("");
    return false;
  });
  socket.on("chat message", function (msg) {
    $("#messages").append($("<li>").text(msg));
  });
  ```

**Server-Side Implementation**:
  ```javascript
  io.on("connection", (socket) => {
    console.log("new user connected");

    socket.on("joining msg", (username) => {
      name = username;
      io.emit("chat message", `___${name} joined the chat___`);
    });

    socket.on("disconnect", () => {
      console.log("user disconnected");
      io.emit("chat message", `___${name} left the chat___`);
    });

    socket.on("chat message", (msg) => {
      socket.broadcast.emit("chat message", msg);
    });
  });
  ```

### **Conclusion**

The course on Socket.io and real-time communication provided:
- **WebSocket Protocol**: Full-duplex communication with lower latency and overhead.
- **Socket.IO**: Enhanced features for real-time applications.
- **Practical Implementation**: Building and handling real-time chat applications with Socket.IO.

# Task 4 - Make a Web app
___
### **1. Overview**

The Resource Library Website project aims to manage and access library resources through an online platform. Key features include:

- **Library Dashboard**: Displays library statistics and resource details.
- **Cataloging and Classification**: Organizes materials with unique identifiers and categories.
- **User Account Management**: Manages user accounts and notifications for overdue items.
- **Search and Browse**: Enables searching by title, author, genre, ISBN, and publisher.

### **2. Technologies Used**

- **Node.js / Express.js**: Scalable network applications and server management.
- **Pug / Jade Templating Engine**: Dynamic HTML content rendering.
- **MongoDB Atlas**: Cloud-based NoSQL database service.
- **Mongoose ODM**: Schema validation and data management with MongoDB.
- **Git & GitHub**: Version control and collaboration.
- **Glitch**: Online IDE and hosting for JavaScript and Node.js.

### **3. Practical Implementation**

- **Development Environment**: Install Node.js, clone the repository, and install dependencies.
- **Running Locally**: Use specific commands based on your OS to start the server.
- **Accessing the Application**: Navigate to `http://localhost:3000/` to interact with the site.

### **4. Development Workflow**

- **Code Management**: Track changes and collaborate with Git and GitHub.
- **Dynamic Content**: Use Pug for server-side HTML rendering.
- **Database Management**: Manage data with MongoDB and Mongoose.
- **Deployment**: Use Glitch for instant hosting and deployment.

### **Conclusion**

The Resource Library Website project emphasized:
- **Technology Integration**: Effective use of Node.js, Express.js, Pug, MongoDB, and Mongoose.
- **Development Workflow**: Setting up environments, managing code, and deploying applications.
- **Practical Features**: Implementing cataloging, user management, and search functionalities.