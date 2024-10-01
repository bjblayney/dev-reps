export const questions = [
  {
    question: 'What is the Virtual DOM in React?',
    options: [
      'A lightweight copy of the actual DOM used for efficient updates.',
      'A debugging tool for inspecting DOM elements.',
      'A server-side representation of the DOM.',
      'A browser extension for managing DOM elements.',
    ],
    correctAnswer: 0,
    explanation:
      'The Virtual DOM is a lightweight copy of the actual Document Object Model (DOM) used by React to optimize and minimize direct manipulations of the real DOM. By computing the differences (diffing) between the current and previous Virtual DOM, React can efficiently update only the parts of the DOM that have changed, enhancing performance.',
  },
  {
    question: 'Which CSS feature allows you to create responsive layouts that adapt to different screen sizes?',
    options: ['Flexbox', 'CSS Grid', 'Media Queries', 'Animations'],
    correctAnswer: 2,
    explanation:
      'Media Queries in CSS enable developers to apply different styles based on the characteristics of the device, such as screen width, height, orientation, and resolution. This allows for the creation of responsive designs that adapt seamlessly to various screen sizes and devices.',
  },
  {
    question: 'What is a Higher-Order Component (HOC) in React?',
    options: [
      'A component that manages the state of other components.',
      'A function that takes a component and returns a new component.',
      'A component that renders multiple child components.',
      'A component with higher priority in the rendering process.',
    ],
    correctAnswer: 1,
    explanation:
      'A Higher-Order Component (HOC) in React is a function that takes a component as an argument and returns a new enhanced component. HOCs are used for reusing component logic, such as handling subscriptions, manipulating props, or managing state, without modifying the original component.',
  },
  {
    question: 'Which of the following is NOT a JavaScript data type?',
    options: ['Undefined', 'Number', 'Boolean', 'Character'],
    correctAnswer: 3,
    explanation:
      'JavaScript data types include Undefined, Null, Boolean, Number, BigInt, String, Symbol, and Object. There is no separate "Character" data type in JavaScript; individual characters are represented as strings of length one.',
  },
  {
    question: 'What does the CSS property "z-index" control?',
    options: [
      'The stacking order of positioned elements.',
      'The transparency of an element.',
      'The size of an element.',
      'The spacing between elements.',
    ],
    correctAnswer: 0,
    explanation:
      'The "z-index" property in CSS controls the stacking order of positioned elements (elements with position absolute, relative, fixed, or sticky). A higher z-index value places the element in front of those with lower values, allowing for layered layouts.',
  },
  {
    question: 'In web development, what is "debouncing"?',
    options: [
      'A technique to delay the execution of a function until after a certain period has elapsed.',
      'A method to remove duplicate elements from an array.',
      'A process to minify JavaScript code.',
      'A strategy to handle errors in asynchronous operations.',
    ],
    correctAnswer: 0,
    explanation:
      'Debouncing is a technique used to limit the rate at which a function is executed. It ensures that the function is only called after a specified period of inactivity, which is particularly useful for optimizing performance in events like window resizing or keypresses.',
  },
  {
    question: 'What is the purpose of Webpack in a front-end project?',
    options: [
      'To manage state in a React application.',
      'To bundle and process assets like JavaScript, CSS, and images.',
      'To provide routing capabilities in single-page applications.',
      'To handle HTTP requests and responses.',
    ],
    correctAnswer: 1,
    explanation:
      'Webpack is a module bundler for JavaScript applications. It processes and bundles various assets such as JavaScript modules, CSS stylesheets, images, and more into optimized bundles that can be efficiently loaded by the browser, facilitating better performance and manageability.',
  },
  {
    question: 'Which HTTP method is typically used to update a resource?',
    options: ['GET', 'POST', 'PUT', 'DELETE'],
    correctAnswer: 2,
    explanation:
      'The PUT HTTP method is generally used to update an existing resource on the server. It replaces the entire resource with the payload provided. PATCH is another method used for partial updates, but among the options given, PUT is the standard for updates.',
  },
  {
    question: 'What is the main advantage of using TypeScript over JavaScript?',
    options: [
      'Better performance in the browser.',

      'Simpler syntax and easier learning curve.',
      'Built-in support for server-side rendering.',
      'Static type checking and improved developer tooling.',
    ],
    correctAnswer: 3,
    explanation:
      'TypeScript is a superset of JavaScript that introduces static type checking, which helps catch errors during development rather than at runtime. It also offers enhanced developer tooling, such as improved autocompletion, navigation, and refactoring capabilities, leading to more robust and maintainable code.',
  },
  {
    question: 'Which of the following best describes RESTful APIs?',
    options: [
      'APIs that use WebSockets for real-time communication.',
      'APIs that adhere to REST architectural principles, using standard HTTP methods.',
      'APIs that are only used for mobile applications.',
      'APIs that require OAuth for authentication.',
    ],
    correctAnswer: 1,
    explanation:
      'RESTful APIs are designed based on REST (Representational State Transfer) architectural principles. They use standard HTTP methods (GET, POST, PUT, DELETE) for operations, are stateless, and typically use JSON or XML for data exchange, enabling interoperability and scalability.',
  },
  {
    question: 'What is the purpose of the "useEffect" hook in React?',
    options: [
      'To manage component state.',
      'To handle side effects like data fetching or subscriptions.',
      'To optimize component rendering.',
      'To create context for passing data.',
    ],
    correctAnswer: 1,
    explanation:
      'The "useEffect" hook in React is used to handle side effects in functional components. This includes tasks like data fetching, setting up subscriptions, and manually changing the DOM. It runs after the component renders and can optionally clean up effects to prevent memory leaks.',
  },
  {
    question: 'Which accessibility standard is commonly used to ensure web content is accessible to people with disabilities?',
    options: ['ISO 9001', 'GDPR', 'WCAG', 'HTTP/2'],
    correctAnswer: 2,
    explanation:
      'WCAG (Web Content Accessibility Guidelines) is a set of guidelines developed to make web content more accessible to people with disabilities. It covers recommendations for making content perceivable, operable, understandable, and robust.',
  },
  {
    question: 'What is the primary purpose of using a Content Delivery Network (CDN)?',
    options: [
      'To secure web applications against attacks.',
      'To distribute content to users from servers closest to them geographically.',
      'To store large amounts of data for backup purposes.',
      'To manage user authentication and authorization.',
    ],
    correctAnswer: 1,
    explanation:
      'A Content Delivery Network (CDN) consists of distributed servers that deliver web content to users based on their geographic location. This reduces latency, speeds up content delivery, and improves the overall performance and reliability of websites and applications.',
  },
  {
    question: 'In JavaScript, what is a "closure"?',
    options: [
      'A function that is executed immediately after it is defined.',

      'A block of code that handles errors.',
      'A method for asynchronous programming.',
      'A function bundled with its lexical environment.',
    ],
    correctAnswer: 3,
    explanation:
      'A closure in JavaScript is a function that retains access to its lexical scope, even when the function is executed outside that scope. This allows the function to access variables from its containing (enclosing) function, enabling powerful patterns like data encapsulation and function factories.',
  },
  {
    question: 'Which React lifecycle method is invoked immediately after a component is mounted?',
    options: ['componentDidMount', 'componentWillUnmount', 'shouldComponentUpdate', 'render'],
    correctAnswer: 0,
    explanation:
      'The `componentDidMount` lifecycle method is called immediately after a React component is mounted (inserted into the tree). It is commonly used to perform initialization that requires DOM nodes, such as fetching data, setting up subscriptions, or integrating with third-party libraries.',
  },
  {
    question: 'What is the purpose of the "debounce" function in JavaScript?',
    options: [
      'To prevent a function from being called multiple times in quick succession.',
      'To execute a function repeatedly at fixed intervals.',
      'To delay the execution of a function by a specified time.',
      'To remove unused variables from memory.',
    ],
    correctAnswer: 0,
    explanation:
      'Debouncing is a technique used to limit the rate at which a function can fire. The debounce function ensures that the target function is only executed after a specified delay has passed without it being called again, effectively preventing multiple rapid invocations.',
  },
  {
    question: 'What is Server-Side Rendering (SSR) in the context of web applications?',
    options: [
      'Rendering web pages on the client-side using JavaScript frameworks.',
      'Rendering web pages on the server and sending the HTML to the client.',
      'Storing rendered pages on the server for faster access.',
      'Using server resources to compile client-side code.',
    ],
    correctAnswer: 1,
    explanation:
      'Server-Side Rendering (SSR) involves generating the full HTML for a web page on the server for each request and sending it to the client. This can improve initial load times, enhance SEO, and provide a better user experience, especially for content-heavy or dynamic applications.',
  },
  {
    question: 'Which of the following is a CSS preprocessor?',
    options: ['SASS', 'Bootstrap', 'React', 'Tailwind'],
    correctAnswer: 0,
    explanation:
      'SASS (Syntactically Awesome Style Sheets) is a CSS preprocessor that extends CSS with features like variables, nesting, mixins, and functions. It allows for more maintainable and scalable stylesheets by enabling modular and reusable code.',
  },
  {
    question: 'What does CORS stand for and why is it important?',
    options: [
      'Content-Origin Rendering Service; it manages content delivery.',
      'Client-Origin Request System; it handles client-side requests.',
      'Cross-Origin Resource Sharing; it controls resource access across different domains.',
      'Code Optimization and Refactoring Strategy; it improves code quality.',
    ],
    correctAnswer: 2,
    explanation:
      'CORS stands for Cross-Origin Resource Sharing. It is a security feature implemented by browsers that restricts web pages from making requests to a different domain than the one that served the web page, unless the target domain explicitly allows it. CORS headers determine whether cross-origin requests are permitted, enhancing web security.',
  },
  {
    question: 'In React, what is the purpose of the "key" prop in lists?',
    options: [
      'To uniquely identify elements for efficient re-rendering.',
      'To pass additional data to child components.',
      'To style list items differently.',
      'To handle user interactions within list items.',
    ],
    correctAnswer: 0,
    explanation:
      'The "key" prop in React is used to uniquely identify elements in a list. This helps React efficiently update and manage the list by determining which items have changed, been added, or removed, thereby optimizing the rendering process and preventing unnecessary re-renders.',
  },
  {
    question: 'What is the main difference between "==” and "===" operators in JavaScript?',
    options: [
      '“==” checks for both value and type, while “===” checks only for value.',
      '“==” checks only for value, while “===” checks for both value and type.',
      '“==” is used for assignment, while “===” is used for comparison.',
      'There is no difference; they are interchangeable.',
    ],
    correctAnswer: 1,
    explanation:
      'In JavaScript, the "==" operator performs type coercion and checks for equality of value, meaning it converts the operands to the same type before comparison. The "===" operator, known as the strict equality operator, checks for equality of both value and type without performing type coercion, making it more predictable and less error-prone.',
  },
  {
    question: 'What is Progressive Web App (PWA)?',
    options: [
      'A web application that uses server-side rendering.',
      'A type of mobile app built using native languages.',
      'A web application that uses modern web capabilities to deliver an app-like experience.',
      'A framework for building single-page applications.',
    ],
    correctAnswer: 2,
    explanation:
      'A Progressive Web App (PWA) leverages modern web technologies to provide an app-like experience to users. PWAs are reliable, fast, and engaging, offering features such as offline access, push notifications, and the ability to be installed on the user’s device, bridging the gap between web and native applications.',
  },
  {
    question: 'What is the purpose of the "useState" hook in React?',
    options: [
      'To manage side effects in functional components.',
      'To create and manage state within functional components.',
      'To handle routing in React applications.',
      'To optimize performance by memoizing values.',
    ],
    correctAnswer: 1,
    explanation:
      'The "useState" hook allows functional components in React to have state variables. It returns a stateful value and a function to update it, enabling components to manage and respond to dynamic data changes over time.',
  },
  {
    question: 'Which HTTP status code indicates that a resource was not found?',
    options: ['200', '301', '404', '500'],
    correctAnswer: 2,
    explanation:
      'The HTTP status code 404 signifies that the requested resource could not be found on the server. It is commonly returned when a user tries to access a non-existent page or endpoint.',
  },
  {
    question: 'What is the main benefit of using CSS Flexbox?',
    options: [
      'Creating complex grid layouts with multiple rows and columns.',
      'Aligning and distributing space among items in a container efficiently.',
      'Applying animations and transitions to elements.',
      'Styling text and fonts consistently across the application.',
    ],
    correctAnswer: 1,
    explanation:
      'CSS Flexbox (Flexible Box Layout) is designed to provide a more efficient way to lay out, align, and distribute space among items within a container, even when their size is unknown or dynamic. It simplifies the process of creating responsive and flexible layouts.',
  },
  {
    question: 'In JavaScript, what does the "async" keyword do when used before a function?',
    options: [
      'It makes the function execute in parallel threads.',

      'It automatically caches the function’s return value.',
      'It allows the use of "await" inside the function to handle asynchronous operations.',
      'It converts the function into a generator function.',
    ],
    correctAnswer: 2,
    explanation:
      'The "async" keyword before a function declaration enables the use of the "await" keyword within that function, allowing for more readable and manageable asynchronous code by handling Promises in a synchronous-like manner.',
  },
  {
    question: 'What is the purpose of the "alt" attribute in an HTML <img> tag?',
    options: [
      'To specify the alternative text for the image if it cannot be displayed.',
      'To define the image’s alignment on the page.',
      'To link the image to an alternate source.',
      'To set the image’s alternative style properties.',
    ],
    correctAnswer: 0,
    explanation:
      'The "alt" attribute provides alternative text for an image, which is displayed if the image cannot be loaded. It also enhances accessibility by allowing screen readers to describe the image to users with visual impairments.',
  },
  {
    question: 'What is the difference between "localStorage" and "sessionStorage" in web browsers?',
    options: [
      'localStorage can store larger amounts of data than sessionStorage.',
      'sessionStorage data is encrypted, while localStorage data is not.',
      'There is no difference; they are interchangeable.',
      'localStorage data persists across browser sessions, while sessionStorage data is cleared when the page session ends.',
    ],
    correctAnswer: 3,
    explanation:
      'Both localStorage and sessionStorage are part of the Web Storage API, allowing storage of key-value pairs in the browser. The key difference is that data in localStorage persists even after the browser is closed and reopened, whereas data in sessionStorage is cleared when the page session ends (e.g., when the browser tab is closed).',
  },
  {
    question: 'Which JavaScript feature allows for importing and exporting modules?',
    options: ['CommonJS', 'ES6 Modules', 'AMD', 'UMD'],
    correctAnswer: 1,
    explanation:
      'ES6 Modules, introduced in ECMAScript 2015, provide a standardized syntax for importing and exporting modules using the "import" and "export" keywords. This facilitates better modularity and code organization in JavaScript applications.',
  },
  {
    question: 'What is the purpose of the "aria-label" attribute in HTML?',
    options: [
      'To provide a label for screen readers, enhancing accessibility.',
      'To style elements using CSS.',
      'To define the language of the element’s content.',
      'To link the element to an external stylesheet.',
    ],
    correctAnswer: 0,
    explanation:
      'The "aria-label" attribute provides an accessible name for an element, which is especially useful for screen readers. It helps users with disabilities understand the purpose or function of elements that might not have visible text labels.',
  },
  {
    question: 'What does the term "immutable" mean in the context of state management?',
    options: [
      'State can only be updated using specific methods.',
      'State is shared across all components.',
      'State is stored on the server.',
      'State cannot be changed once it is set.',
    ],
    correctAnswer: 3,
    explanation:
      'In state management, "immutable" means that once the state is set, it cannot be changed directly. Instead, any updates to the state result in the creation of a new state object. This approach helps prevent unintended side effects and makes state changes more predictable and easier to track.',
  },
  {
    question: 'What is the primary purpose of using Docker in a development workflow?',
    options: [
      'To manage database migrations.',
      'To containerize applications for consistent environments across development and production.',
      'To automate front-end testing.',
      'To monitor application performance in real-time.',
    ],
    correctAnswer: 1,
    explanation:
      'Docker is used to containerize applications, allowing developers to create consistent environments across different stages of development and production. Containers encapsulate all the dependencies and configurations needed to run the application, ensuring that it behaves the same regardless of where it is deployed.',
  },
  {
    question: 'In a RESTful API, which HTTP method is typically used to partially update a resource?',
    options: ['GET', 'POST', 'PUT', 'PATCH'],
    correctAnswer: 3,
    explanation:
      'The PATCH HTTP method is used to apply partial modifications to a resource. Unlike PUT, which replaces the entire resource, PATCH allows for updating only specific fields, making it more efficient for partial updates.',
  },
  {
    question: 'Which SQL statement is used to retrieve data from a database?',
    options: ['INSERT', 'UPDATE', 'SELECT', 'DELETE'],
    correctAnswer: 2,
    explanation:
      'The SELECT statement is used in SQL to retrieve data from one or more tables in a database. It allows specifying the exact columns and rows to fetch based on certain conditions.',
  },
  {
    question: 'What is JWT commonly used for in web applications?',
    options: [
      'Styling components dynamically.',
      'Managing database transactions.',
      'Handling user authentication and authorization.',
      'Optimizing image loading.',
    ],
    correctAnswer: 2,
    explanation:
      'JWT (JSON Web Token) is commonly used for securely transmitting information between parties as a JSON object. It is widely used for authentication and authorization, allowing servers to verify the identity of clients and grant access to protected resources.',
  },
  {
    question: 'Which of the following is a NoSQL database?',
    options: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite'],
    correctAnswer: 2,
    explanation:
      'MongoDB is a popular NoSQL database that stores data in flexible, JSON-like documents. Unlike traditional SQL databases, NoSQL databases like MongoDB are designed to handle large volumes of unstructured or semi-structured data.',
  },
  {
    question: 'What does CI/CD stand for in the context of DevOps?',
    options: [
      'Continuous Integration/Continuous Deployment',
      'Code Inspection/Code Development',
      'Continuous Improvement/Continuous Delivery',
      'Code Integration/Code Deployment',
    ],
    correctAnswer: 0,
    explanation:
      'CI/CD stands for Continuous Integration and Continuous Deployment. It refers to the practices of frequently integrating code changes into a shared repository (CI) and automatically deploying those changes to production or staging environments (CD), enabling faster and more reliable software releases.',
  },
  {
    question: 'In Git, what is the purpose of a "branch"?',
    options: [
      'To store binary files separately from the main codebase.',
      'To allow multiple developers to work on different features or fixes simultaneously without affecting the main codebase.',
      'To merge code from different repositories.',
      'To deploy code to production servers.',
    ],
    correctAnswer: 1,
    explanation:
      'A branch in Git allows developers to diverge from the main codebase to work on features, bug fixes, or experiments independently. This isolation ensures that changes can be developed and tested without impacting the stable main branch, facilitating collaborative workflows and version control.',
  },
  {
    question: 'What is the role of an ORM (Object-Relational Mapping) tool in backend development?',
    options: [
      'To map frontend components to backend services.',
      'To translate data between incompatible type systems in object-oriented programming languages and relational databases.',
      'To manage API routes and endpoints.',
      'To optimize server performance through caching.',
    ],
    correctAnswer: 1,
    explanation:
      'An ORM (Object-Relational Mapping) tool allows developers to interact with a relational database using the programming language’s native objects and methods. It abstracts the database interactions, enabling CRUD operations without writing raw SQL queries, thereby simplifying data manipulation and reducing boilerplate code.',
  },
  {
    question: 'Which AWS service is primarily used for object storage?',
    options: ['Amazon EC2', 'Amazon RDS', 'Amazon S3', 'Amazon Lambda'],
    correctAnswer: 2,
    explanation:
      'Amazon S3 (Simple Storage Service) is AWS’s primary service for object storage. It provides scalable, secure, and durable storage for a wide range of data types, including backups, media files, and static website assets.',
  },
  {
    question: 'What is the main advantage of using GraphQL over REST for API development?',
    options: [
      'GraphQL automatically handles authentication.',
      'GraphQL allows clients to request exactly the data they need, reducing over-fetching or under-fetching of data.',
      'GraphQL is easier to implement than REST.',
      'GraphQL does not require a server to operate.',
    ],
    correctAnswer: 1,
    explanation:
      'GraphQL provides clients with the ability to specify exactly what data they need in a single request. This flexibility minimizes the issues of over-fetching (receiving more data than needed) and under-fetching (not receiving enough data), which are common challenges in RESTful APIs that rely on fixed endpoints and responses.',
  },
  {
    question: 'In the context of web security, what is CSRF?',
    options: [
      'Cross-Site Request Forgery, a type of attack that tricks a user into performing actions they did not intend.',
      'Cross-Site Rendering Framework, a tool for building secure web pages.',
      'Client-Side Resource Failure, an issue where client resources fail to load.',
      'Centralized Security Reference Framework, a standard for web security.',
    ],
    correctAnswer: 0,
    explanation:
      'CSRF (Cross-Site Request Forgery) is a security vulnerability that allows an attacker to trick a user into performing actions on a web application in which they are authenticated, without their consent. Implementing CSRF tokens and verifying them on the server side are common mitigation strategies.',
  },
  {
    question: 'What is the purpose of Kubernetes in a microservices architecture?',
    options: [
      'To serve as a programming language for microservices.',
      'To provide a container orchestration platform for deploying, scaling, and managing containerized applications.',
      'To store microservices configurations.',
      'To handle API gateway functionalities.',
    ],
    correctAnswer: 1,
    explanation:
      'Kubernetes is a powerful container orchestration system that automates the deployment, scaling, and management of containerized applications. In a microservices architecture, Kubernetes helps manage the complexity of running multiple services by handling tasks like service discovery, load balancing, and rolling updates.',
  },
  {
    question: 'Which HTTP status code indicates a successful request that resulted in the creation of a resource?',
    options: ['200 OK', '201 Created', '204 No Content', '400 Bad Request'],
    correctAnswer: 1,
    explanation:
      'The HTTP status code 201 Created indicates that the request has been successfully fulfilled and has led to the creation of a new resource. It is typically used in response to POST requests that result in the creation of a new resource on the server.',
  },
  {
    question: 'What is the primary function of Redis in a web application stack?',
    options: [
      'To serve as a primary relational database.',
      'To act as an in-memory data structure store used for caching, session management, and real-time analytics.',
      'To handle HTTP request routing.',
      'To provide user authentication services.',
    ],
    correctAnswer: 1,
    explanation:
      'Redis is an in-memory data store that is often used for caching to improve application performance, managing user sessions, and handling real-time data analytics. Its speed and versatility make it a valuable component in many web application architectures.',
  },
  {
    question: 'What is the purpose of using environment variables in a full-stack application?',
    options: [
      'To style components dynamically based on the environment.',

      'To manage user sessions securely.',
      'To optimize application performance.',
      'To store configuration settings and sensitive information outside of the codebase.',
    ],
    correctAnswer: 3,
    explanation:
      'Environment variables are used to store configuration settings, API keys, database credentials, and other sensitive information outside of the codebase. This practice enhances security, allows for different configurations across environments (development, staging, production), and simplifies deployment processes.',
  },
  {
    question: 'In the context of RESTful APIs, what does “stateless” mean?',
    options: [
      'The server does not store any client context between requests.',
      'The API does not use any form of authentication.',
      'The client maintains all session data on the server.',
      'The API can only handle one request at a time.',
    ],
    correctAnswer: 0,
    explanation:
      'A stateless API means that each client request contains all the information needed to process the request, and the server does not store any session or context between requests. This design simplifies scalability and reliability, as each request can be handled independently.',
  },
  {
    question: 'What is the purpose of using a reverse proxy in a web application architecture?',
    options: [
      'To serve static files directly to clients.',

      'To handle database queries efficiently.',
      'To distribute incoming client requests to multiple backend servers, providing load balancing and enhanced security.',
      'To manage user authentication and authorization.',
    ],
    correctAnswer: 2,
    explanation:
      'A reverse proxy acts as an intermediary for client requests, distributing them across multiple backend servers. This setup provides load balancing, improves performance, enhances security by hiding the backend infrastructure, and can handle tasks like SSL termination and caching.',
  },
  {
    question: 'Which of the following best describes a monolithic architecture?',
    options: [
      'An architecture where the application is divided into small, independent services.',
      'An architecture where the entire application is built as a single, unified unit.',
      'An architecture that relies solely on serverless functions.',
      'An architecture that uses peer-to-peer communication between components.',
    ],
    correctAnswer: 1,
    explanation:
      'A monolithic architecture builds the entire application as a single, cohesive unit where all components are interconnected and interdependent. While simpler to develop initially, it can become complex to maintain and scale as the application grows, compared to microservices architectures that promote modularity and scalability.',
  },
];
