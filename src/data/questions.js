export const questions = [
  {
    question: 'What is the output of `typeof null` in JavaScript?',
    options: ["'null'", "'object'", "'undefined'", "'boolean'"],
    correctAnswer: 1,
    explanation:
      "Due to a historical bug in JavaScript, the typeof null is 'object'. This is because in the early implementation of JavaScript, values were represented as a type tag and a value. The type tag for objects was 0. null was represented as the NULL pointer (0x00 in most platforms), which led to the typeof null returning 'object'. This behavior has been kept for backward compatibility.",
  },
  {
    question: "What does the 'useEffect' hook in React do?",
    options: [
      'It fetches data from the server.',
      'It lets you perform side effects in function components.',
      'It updates the state of the component.',
      'It renders the component.',
    ],
    correctAnswer: 3,
    explanation:
      "'useEffect' allows you to perform side effects in function components, like fetching data or updating the DOM. It runs after the render and can optionally clean up after itself by returning a function. This hook is essential for managing side effects such as subscriptions, timers, and logging.",
  },
  {
    question: "What is the purpose of the 'Virtual DOM' in React?",
    options: [
      'It stores the HTML structure of the webpage.',
      'It optimizes updates by batching DOM changes.',
      'It allows server-side rendering.',
      'It simplifies event handling.',
    ],
    correctAnswer: 1,
    explanation:
      'The virtual DOM optimizes updates by making minimal changes to the real DOM, leading to better performance. When the state of an object changes, React first updates the virtual DOM, then compares it with a snapshot of the virtual DOM taken right before the update. This process, called "reconciliation," allows React to determine the most efficient way to update the real DOM.',
  },
  {
    question: 'What are the differences between `var`, `let`, and `const` in JavaScript?',
    options: [
      'There are no differences, they are all used for declaring variables.',
      '`let` and `const` have block scope, while `var` has function scope.',
      '`var` and `let` can be reassigned, while `const` cannot.',
      '`let` and `var` are hoisted, but `const` is not.',
    ],
    correctAnswer: 2,
    explanation:
      '`let` and `const` have block scope, while `var` has function scope. This means that `let` and `const` are only accessible within the block they are defined in, whereas `var` is accessible within the entire function. Additionally, `const` cannot be reassigned after its initial declaration, making it useful for defining constants. `var` and `let` are hoisted to the top of their scope, but `let` and `const` are not initialized until their definition is evaluated.',
  },
  {
    question: 'What does `display: flex` do in CSS?',
    options: [
      'It hides an element.',
      'It creates a block-level container.',
      'It enables a flexible layout by aligning items within a container.',
      'It enables grid layout.',
    ],
    correctAnswer: 2,
    explanation:
      '`display: flex` makes an element a flex container and allows for flexible layout, aligning its child items within. Flexbox is a one-dimensional layout method for laying out items in rows or columns. It provides powerful alignment capabilities, such as centering items, distributing space evenly, and handling dynamic content sizes. Flexbox is particularly useful for creating responsive designs.',
  },
  {
    question: 'What is the purpose of memoization in JavaScript?',
    options: [
      'To improve performance by caching results of expensive function calls.',
      'To prevent errors in asynchronous code.',
      'To manage state in React components.',
      'To clean up resources in memory.',
    ],
    correctAnswer: 0,
    explanation:
      'Memoization is a technique that optimizes the performance of a program by storing the results of expensive function calls. When the same inputs are encountered again, the cached result is returned rather than recalculating, making it especially useful for functions with complex calculations or large data sets.',
  },
  {
    question: 'What are the key features of CSS Grid?',
    options: [
      'It allows for the creation of responsive designs using a grid layout.',
      'It automatically generates animations for elements.',
      'It enables image compression.',
      'It is used for adding event listeners.',
    ],
    correctAnswer: 0,
    explanation:
      'CSS Grid provides a flexible way to create grid-based layouts that can adjust to different screen sizes and orientations. It lets developers define both rows and columns, making it easier to design responsive, complex layouts without the need for additional libraries.',
  },
  {
    question: 'How does JavaScript handle asynchronous operations?',
    options: [
      'Using promises, async/await, or callbacks.',
      'By executing all functions in parallel.',
      'Through synchronous function calls.',
      "It doesn't support asynchronous operations.",
    ],
    correctAnswer: 0,
    explanation:
      'JavaScript uses promises, async/await syntax, and callbacks to manage asynchronous operations. These mechanisms allow certain operations (like data fetching) to occur in the background without blocking the main thread, enabling smoother performance in the browser.',
  },
  {
    question: 'What is a pure function?',
    options: [
      'A function that does not return anything.',
      'A function that modifies external state.',
      'A function that returns the same output given the same input and does not have side effects.',
      'A function that can only be called once.',
    ],
    correctAnswer: 2,
    explanation:
      'A pure function is a function that consistently returns the same result given the same inputs and does not produce any side effects, such as modifying external variables or interacting with the outside world. Pure functions are a cornerstone of functional programming and lead to more predictable and testable code.',
  },
  {
    question: 'Which HTML5 element is used to specify a section of the document that is tangentially related to the content around it?',
    options: ['<aside>', '<section>', '<div>', '<nav>'],
    correctAnswer: 0,
    explanation:
      'The `<aside>` element is used to define a portion of content that is related but not central to the main content of the webpage. Common use cases include sidebars, pull quotes, or advertising banners. It helps with semantic markup, improving the accessibility and readability of the HTML document.',
  },

  {
    question: 'What is the difference between margin and padding in CSS?',
    options: [
      'Margin is the space outside an element, and padding is the space inside.',
      'Padding creates invisible borders around an element.',
      'Padding is the space outside an element, and margin is the space inside.',
      'There is no difference, both are used to create space between elements.',
    ],
    correctAnswer: 0,
    explanation:
      'In CSS, margin is the space outside an element, while padding is the space between the content and the element’s border. They both control spacing but affect different parts of the box model.',
  },
  {
    question: 'What is the purpose of Webpack in modern JavaScript development?',
    options: [
      'It is a task runner for managing server-side operations.',
      'It bundles JavaScript modules and optimizes assets for production.',
      'It is used to build REST APIs.',
      'It minifies CSS files.',
    ],
    correctAnswer: 1,
    explanation:
      'Webpack is a module bundler used to bundle JavaScript files for usage in a browser, optimizing assets like CSS and images, and managing dependencies, making it essential for modern JavaScript development.',
  },
  {
    question: 'What does the `defer` attribute in a `<script>` tag do?',
    options: [
      'It causes the script to run before the DOM is parsed.',
      'It ensures the script is loaded after the DOM is fully parsed.',
      'It removes the script from the document.',
      'It stops the script from loading.',
    ],
    correctAnswer: 1,
    explanation:
      'The `defer` attribute ensures the script will only execute after the entire HTML document has been parsed. This is useful for improving load times by avoiding blocking the parsing of the page.',
  },
  {
    question: 'What is a closure in JavaScript?',
    options: [
      'A combination of a function and the lexical environment within which it was declared.',
      'An object that holds multiple functions.',
      'A variable that is only available within a function.',
      'A way to call multiple functions at once.',
    ],
    correctAnswer: 0,
    explanation:
      'A closure is a feature in JavaScript where an inner function has access to variables from its outer function even after the outer function has returned. This allows for data encapsulation and maintaining state between function calls.',
  },
  {
    question: 'How does CSS specificity work?',
    options: [
      'It changes the rendering of HTML.',
      'It randomizes the application of CSS rules.',
      'It determines the priority of a CSS rule by calculating weight based on selectors.',
      'It allows CSS to be loaded faster.',
    ],
    correctAnswer: 2,
    explanation:
      'CSS specificity is a set of rules that the browser uses to determine which CSS styles are applied to an element. It assigns weights to selectors, and rules with higher specificity are applied over those with lower specificity.',
  },
  {
    question: 'How can you improve the performance of a large array traversal in JavaScript?',
    options: [
      'Use `forEach` instead of `for`',
      'Use `map` instead of `for`',
      'Use `filter` instead of `forEach`',
      'Use `for` loop and avoid function calls within the loop',
    ],
    correctAnswer: 3,
    explanation:
      'For performance-critical applications, a `for` loop is generally faster than methods like `forEach` or `map` because it avoids the overhead of function calls, especially in tight loops.',
  },
  {
    question: 'What is a good way to detect performance bottlenecks in your JavaScript application?',
    options: [
      'Use `console.log` statements',
      'Rely on network performance',
      'Use the JavaScript Profiler in the browser’s developer tools',
      'Test on different browsers',
    ],
    correctAnswer: 2,
    explanation:
      'The JavaScript Profiler in browser dev tools is a powerful way to identify performance bottlenecks by showing detailed data about where time is spent in your application, allowing for optimization of slow code segments.',
  },
  {
    question: 'Which data structure is most efficient for counting the occurrences of elements in an array?',
    options: ['Array', 'Set', 'Object', 'Map'],
    correctAnswer: 3,
    explanation:
      'A `Map` (or an `Object`) allows for efficient counting of occurrences due to the average O(1) time complexity for inserts and lookups, making it better than using an `Array` for this purpose.',
  },
  {
    question: 'How does memoization help optimize a function?',
    options: [
      'It avoids using loops',
      'It caches the results of expensive function calls',
      'It uses recursion to reduce time complexity',
      'It breaks the function into smaller pieces',
    ],
    correctAnswer: 1,
    explanation:
      'Memoization is an optimization technique that caches the results of expensive function calls so that when the same inputs occur again, the previously cached result is returned, avoiding redundant calculations.',
  },
  {
    question: 'Which sorting algorithm is most efficient for large datasets in most cases?',
    options: ['Selection Sort', 'Insertion Sort', 'Merge Sort', 'Bubble Sort'],
    correctAnswer: 2,
    explanation:
      'Merge Sort is generally more efficient for large datasets because of its time complexity of O(n log n), compared to less efficient algorithms like Bubble Sort and Selection Sort, which have O(n^2) time complexity.',
  },
  {
    question: 'What is the benefit of using a HashMap (or JavaScript Object) over an array for storing key-value pairs?',
    options: ['Supports duplicate keys', 'Faster lookup times', 'Uses less memory', 'More intuitive syntax'],
    correctAnswer: 1,
    explanation:
      'A HashMap (or an Object in JavaScript) provides O(1) average time complexity for key lookups, which is significantly faster than the O(n) time complexity for searching through an array.',
  },
  {
    question: 'Which design pattern is best suited for creating a family of related objects without specifying their exact classes?',
    options: ['Observer Pattern', 'Singleton Pattern', 'Factory Pattern', 'Decorator Pattern'],
    correctAnswer: 2,
    explanation:
      'The Factory Pattern is useful when you want to create a family of related objects but don’t know the exact class of object to create until runtime. It provides flexibility in object creation.',
  },
  {
    question: 'When should you use the Singleton design pattern?',
    options: [
      'When you need a class to have multiple instances',
      'When you need to make multiple asynchronous calls',
      'When you want to encapsulate object creation',
      'When you need a class to have only one instance',
    ],
    correctAnswer: 3,
    explanation:
      'The Singleton Pattern ensures a class has only one instance and provides a global access point to that instance, which is useful in cases like logging, database connections, or configurations.',
  },
  {
    question: 'In RESTful API design, what HTTP method is used to update a resource?',
    options: ['DELETE', 'GET', 'POST', 'PUT'],
    correctAnswer: 3,
    explanation:
      'The `PUT` method in RESTful APIs is used for updating an existing resource, while the `POST` method is typically used for creating new resources.',
  },
  {
    question: 'How does throttling differ from debouncing in JavaScript?',
    options: [
      'Throttling ensures a function is called at most once in a specified time frame, while debouncing delays function calls until a period of inactivity.',
      'Throttling delays function calls until a period of inactivity, while debouncing ensures a function is called at most once in a specified time frame.',
      'Throttling ensures only one API request is made, while debouncing ensures multiple requests are batched.',
      'Throttling and debouncing are the same, but with different names.',
    ],
    correctAnswer: 0,
    explanation:
      'Throttling limits the rate at which a function can be executed over a period, while debouncing ensures a function is only called after a period of inactivity, both useful for optimizing event-driven functions.',
  },
  {
    question: 'How would you optimize the performance of a website with many large images?',
    options: ['Increase the image file sizes', 'Load all images on page load', 'Use Base64 encoding for all images', 'Use a CDN to serve the images'],
    correctAnswer: 3,
    explanation:
      'Using a Content Delivery Network (CDN) for images improves website performance by delivering images from servers geographically closer to the user, reducing latency and load times.',
  },
  {
    question: 'Which JavaScript method would you use to flatten an array of arrays?',
    options: ['filter', 'map', 'reduce', 'flat'],
    correctAnswer: 3,
    explanation:
      'The `flat()` method in JavaScript creates a new array with all sub-array elements concatenated into it recursively, up to a specified depth, making it the most efficient way to flatten an array.',
  },
  {
    question: 'What is the key difference between synchronous and asynchronous programming?',
    options: [
      'Synchronous code executes line by line, while asynchronous code allows tasks to run in the background without blocking the main thread.',
      'Asynchronous programming only works with APIs.',
      'Synchronous code runs faster than asynchronous code.',
      'Synchronous code can only handle one function at a time, while asynchronous code runs functions in parallel.',
    ],
    correctAnswer: 0,
    explanation:
      'Synchronous code executes one task at a time, blocking further execution until it finishes, whereas asynchronous programming allows for non-blocking operations, enabling tasks like fetching data without halting other code.',
  },
  {
    question: 'Which HTTP status code indicates that a resource was successfully deleted?',
    options: ['200 OK', '204 No Content', '404 Not Found', '400 Bad Request'],
    correctAnswer: 1,
    explanation:
      'The HTTP status code 204 No Content indicates that a resource was successfully deleted and that the server has fulfilled the request but does not need to return an entity-body.',
  },
  {
    question: 'Which HTTP status code indicates that the request could not be understood due to malformed syntax?',
    options: ['200 OK', '201 Created', '400 Bad Request', '404 Not Found'],
    correctAnswer: 2,
    explanation: 'The HTTP status code 400 Bad Request indicates that the server could not understand the request due to malformed syntax.',
  },
  {
    question: 'Which HTTP status code indicates that the server cannot find the requested resource?',
    options: ['200 OK', '201 Created', '404 Not Found', '400 Bad Request'],
    correctAnswer: 2,
    explanation: 'The HTTP status code 404 Not Found indicates that the server cannot find the requested resource.',
  },
  {
    question: 'Which HTTP status code indicates that the request was successful and the server created a new resource?',
    options: ['200 OK', '201 Created', '204 No Content', '400 Bad Request'],
    correctAnswer: 1,
    explanation: 'The HTTP status code 201 Created indicates that the request was successful and the server created a new resource.',
  },
  {
    question: 'Which HTTP status code indicates that the server successfully processed the request but is not returning any content?',
    options: ['200 OK', '201 Created', '204 No Content', '400 Bad Request'],
    correctAnswer: 2,
    explanation: 'The HTTP status code 204 No Content indicates that the server successfully processed the request but is not returning any content.',
  },
  {
    question: 'Which of the following is a query language for APIs that allows clients to request specific data?',
    options: ['GraphQL', 'gRPC', 'SOAP', 'WebSockets'],
    correctAnswer: 0,
    explanation:
      'GraphQL is a query language for APIs that allows clients to request specific data, reducing over-fetching and under-fetching of data.',
  },
  {
    question: 'Which framework uses HTTP/2 for transport and Protocol Buffers for serialization?',
    options: ['GraphQL', 'gRPC', 'SOAP', 'Firebase'],
    correctAnswer: 1,
    explanation: 'gRPC is a high-performance, open-source RPC framework that uses HTTP/2 for transport and Protocol Buffers for serialization.',
  },
  {
    question: 'Which protocol is often used in enterprise environments for exchanging structured information in web services using XML?',
    options: ['GraphQL', 'gRPC', 'SOAP', 'WebSockets'],
    correctAnswer: 2,
    explanation:
      'SOAP (Simple Object Access Protocol) is often used in enterprise environments for exchanging structured information in web services using XML.',
  },
  {
    question: 'Which technology provides full-duplex communication channels over a single TCP connection?',
    options: ['GraphQL', 'gRPC', 'SOAP', 'WebSockets'],
    correctAnswer: 3,
    explanation: 'WebSockets provide full-duplex communication channels over a single TCP connection, making them ideal for real-time applications.',
  },
  {
    question: 'Which Backend-as-a-Service (BaaS) provides real-time databases and various other services?',
    options: ['GraphQL', 'gRPC', 'SOAP', 'Firebase'],
    correctAnswer: 3,
    explanation: 'Firebase is a Backend-as-a-Service (BaaS) that provides real-time databases and various other services.',
  },
  {
    question: 'What is the main purpose of React in web development?',
    options: [
      'To manage database operations.',
      'To create interactive user interfaces.',
      'To handle HTTP requests.',
      'To perform server-side rendering.',
    ],
    correctAnswer: 1,
    explanation: 'React is a JavaScript library primarily used for building user interfaces, especially for single-page applications.',
  },
  {
    question: 'Which of the following is a key feature of CSS Grid?',
    options: ['Flexbox-based layout.', 'Two-dimensional layout control.', 'JavaScript integration.', 'Responsive design only with media queries.'],
    correctAnswer: 1,
    explanation: 'CSS Grid provides a two-dimensional layout system, which allows for more complex layouts than Flexbox, which is one-dimensional.',
  },
  {
    question: "What does the acronym 'REST' stand for in web development?",
    options: [
      'Remote Execution Standard Technology.',
      'Representational State Transfer.',
      'Rapid Engagement Service Technology.',
      'Resource Encoding Standard Transfer.',
    ],
    correctAnswer: 1,
    explanation: 'REST stands for Representational State Transfer, a set of principles for designing networked applications.',
  },
  {
    question: "In JavaScript, what is 'hoisting'?",
    options: [
      'The process of moving function declarations to the top of their scope.',
      'The technique of optimizing loops.',
      'The method of loading external scripts.',
      'The way JavaScript handles asynchronous operations.',
    ],
    correctAnswer: 0,
    explanation:
      "Hoisting is JavaScript's behavior of moving function and variable declarations to the top of their containing scope before execution.",
  },
  {
    question: 'What is the primary use of Node.js in web development?',
    options: [
      'To create interactive UI components.',
      'To serve as a client-side scripting language.',
      'To build server-side applications using JavaScript.',
      'To design responsive CSS layouts.',
    ],
    correctAnswer: 2,
    explanation:
      'Node.js is primarily used for building server-side applications using JavaScript, enabling developers to use JavaScript for both client-side and server-side code.',
  },
  {
    question: 'Which of the following is a benefit of using TypeScript over JavaScript?',
    options: [
      'Better performance in web browsers.',
      'Type safety and improved developer tooling.',
      'Built-in support for HTML templating.',
      'Easier to learn for beginners.',
    ],
    correctAnswer: 1,
    explanation: 'TypeScript provides type safety and improved developer tooling, which can help catch errors at compile-time rather than runtime.',
  },
  {
    question: "What is the purpose of the 'use strict' directive in JavaScript?",
    options: [
      'To enable ES6 features.',
      'To enforce stricter parsing and error handling.',
      'To allow the use of global variables.',
      'To optimize code for performance.',
    ],
    correctAnswer: 1,
    explanation:
      "The 'use strict' directive in JavaScript enforces stricter parsing and error handling, preventing the use of undeclared variables and other common mistakes.",
  },
  {
    question: "In the context of Git, what does 'rebasing' do?",
    options: [
      'Merges two branches by creating a new commit.',
      'Reapplies commits on top of another base commit.',
      'Deletes old branches.',
      'Creates a new branch from the current state of the repository.',
    ],
    correctAnswer: 1,
    explanation: 'Rebasing in Git reapplies commits from one branch onto another, effectively creating a linear history.',
  },
  {
    question: 'What is the purpose of using a Virtual DOM in frameworks like React?',
    options: [
      'To improve SEO performance.',
      'To manage data flow between server and client.',
      'To optimize UI rendering performance.',
      'To handle routing in single-page applications.',
    ],
    correctAnswer: 2,
    explanation:
      'The Virtual DOM optimizes UI rendering performance by reducing the number of direct manipulations to the actual DOM, which can be slow.',
  },
  {
    question: 'Which HTTP status code indicates a successful request?',
    options: ['404', '500', '200', '301'],
    correctAnswer: 2,
    explanation: 'HTTP status code 200 indicates that the request was successful and the server returned the requested resource.',
  },
  // HTML/CSS
  {
    question: 'Which HTML5 element is used to define navigation links?',
    options: ['<nav>', '<navigation>', '<navigate>', '<ul>'],
    correctAnswer: 0,
    explanation: 'The `<nav>` element is specifically designed to contain navigation links, making it semantically appropriate for this purpose.',
  },
  {
    question: 'What does the CSS `@media` rule do?',
    options: [
      "Applies styles based on the device's media type and features.",
      'Creates animations for media elements.',
      'Embeds media files like images and videos.',
      'Defines font styles for different media.',
    ],
    correctAnswer: 0,
    explanation:
      "The `@media` rule allows you to apply CSS styles conditionally based on the device's characteristics, such as screen size, enabling responsive design.",
  },
  {
    question: 'Which CSS property is used to create a flexible box layout?',
    options: ['display: grid;', 'display: block;', 'display: flex;', 'display: inline;'],
    correctAnswer: 2,
    explanation:
      '`display: flex;` activates the Flexbox layout, allowing for responsive and flexible alignment of child elements within a container.',
  },

  // JavaScript
  {
    question: 'Which of the following is a feature introduced in ES6?',
    options: ['`var` keyword', '`for` loop', 'Arrow functions', 'Function hoisting'],
    correctAnswer: 2,
    explanation:
      'Arrow functions were introduced in ES6, providing a shorter syntax and lexical `this` binding compared to traditional function expressions.',
  },
  {
    question: 'What is the purpose of the `async` keyword in JavaScript?',
    options: [
      'To declare a function that can only perform synchronous operations.',
      'To make a function return a promise and use `await` within it.',
      'To handle errors in synchronous code.',
      'To create a loop that runs asynchronously.',
    ],
    correctAnswer: 1,
    explanation:
      'The `async` keyword declares an asynchronous function that returns a promise, allowing the use of `await` to handle asynchronous operations more cleanly.',
  },
  {
    question: 'In React, what is the primary purpose of the `useMemo` hook?',
    options: [
      'To manage side effects in functional components.',
      'To memoize expensive calculations and avoid unnecessary re-renders.',
      'To create global state variables.',
      'To handle form inputs more efficiently.',
    ],
    correctAnswer: 1,
    explanation:
      '`useMemo` is used to memoize the result of expensive calculations, preventing unnecessary recalculations and improving performance by avoiding unnecessary re-renders.',
  },

  // Version Control
  {
    question: 'What does the Git command `git rebase` do?',
    options: [
      'Merges two branches together.',
      'Applies commits from one branch onto another base tip.',
      'Deletes a branch.',
      'Shows the commit history.',
    ],
    correctAnswer: 1,
    explanation:
      '`git rebase` takes commits from one branch and applies them onto another base tip, creating a linear history and simplifying the commit structure.',
  },
  {
    question: 'Which Git command is used to create a new branch?',
    options: ['`git checkout -b <branch-name>`', '`git branch <branch-name>`', '`git switch -c <branch-name>`', 'All of the above'],
    correctAnswer: 3,
    explanation: 'All listed commands (`git checkout -b`, `git branch`, and `git switch -c`) can be used to create a new branch in Git.',
  },

  // Backend Development
  {
    question: 'In RESTful API design, what is the purpose of the `PATCH` HTTP method?',
    options: [
      'To create a new resource.',
      'To completely replace an existing resource.',
      'To partially update an existing resource.',
      'To delete a resource.',
    ],
    correctAnswer: 2,
    explanation:
      '`PATCH` is used to apply partial modifications to an existing resource, allowing updates to specific fields without replacing the entire resource.',
  },
  {
    question: 'Which of the following is a NoSQL database?',
    options: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite'],
    correctAnswer: 2,
    explanation: 'MongoDB is a NoSQL database that stores data in flexible, JSON-like documents, allowing for dynamic schemas and scalability.',
  },

  // Best Practices
  {
    question: 'What is the primary purpose of using HTTPS over HTTP?',
    options: [
      'To increase the speed of data transmission.',
      'To secure data transmission through encryption.',
      'To allow for larger data payloads.',
      'To enable server-side rendering.',
    ],
    correctAnswer: 1,
    explanation:
      'HTTPS secures data transmission by encrypting the data between the client and server, protecting it from interception and tampering.',
  },
  {
    question:
      'Which of the following is a common web vulnerability that allows attackers to execute malicious scripts in the context of a trusted website?',
    options: ['SQL Injection', 'Cross-Site Scripting (XSS)', 'Cross-Site Request Forgery (CSRF)', 'Denial of Service (DoS)'],
    correctAnswer: 1,
    explanation:
      'Cross-Site Scripting (XSS) allows attackers to inject and execute malicious scripts in the context of a trusted website, potentially compromising user data and interactions.',
  },
  {
    question: 'What is the main advantage of writing unit tests?',
    options: [
      'They ensure the entire application works as expected.',
      'They help in catching bugs early by testing individual components or functions.',
      'They automate the deployment process.',
      "They improve the application's performance.",
    ],
    correctAnswer: 1,
    explanation:
      'Unit tests focus on individual components or functions, helping developers catch and fix bugs early in the development process, ensuring each part works correctly.',
  },

  // Tools and Workflow
  {
    question: 'What is the primary role of Webpack in a modern JavaScript development workflow?',
    options: [
      'To run unit tests.',
      'To manage version control.',
      'To bundle and optimize JavaScript modules and assets.',
      'To deploy applications to production servers.',
    ],
    correctAnswer: 2,
    explanation:
      'Webpack is a module bundler that compiles JavaScript modules and other assets into optimized bundles for efficient loading in production environments.',
  },
  {
    question: 'Which tool is commonly used for transpiling modern JavaScript (ES6+) to be compatible with older browsers?',
    options: ['Webpack', 'Babel', 'ESLint', 'Prettier'],
    correctAnswer: 1,
    explanation:
      'Babel is a JavaScript compiler that transpiles modern ES6+ code into backward-compatible versions, ensuring compatibility with older browsers.',
  },
  {
    question: 'What does CI/CD stand for in software development?',
    options: [
      'Continuous Integration/Continuous Deployment',
      'Code Integration/Code Deployment',
      'Continuous Implementation/Continuous Delivery',
      'Code Implementation/Code Delivery',
    ],
    correctAnswer: 0,
    explanation:
      'CI/CD stands for Continuous Integration and Continuous Deployment, which are practices that automate the integration and deployment of code changes to improve development efficiency and reliability.',
  },

  // Soft Skills
  {
    question: 'Why are effective communication skills important for a senior front-end developer?',
    options: [
      'They help in writing cleaner code.',
      'They facilitate better collaboration with team members and stakeholders.',
      'They are necessary for debugging complex issues.',
      'They improve the performance of web applications.',
    ],
    correctAnswer: 1,
    explanation:
      'Effective communication skills enable senior developers to collaborate efficiently with team members, understand project requirements, and convey technical concepts to non-technical stakeholders.',
  },
  {
    question: 'Which of the following is a key aspect of problem-solving for senior developers?',
    options: [
      'Copying solutions from online resources.',
      'Identifying root causes and developing efficient solutions.',
      'Focusing solely on coding without planning.',
      'Avoiding collaboration with others.',
    ],
    correctAnswer: 1,
    explanation:
      'Senior developers excel at identifying the root causes of issues and devising efficient, scalable solutions, often involving critical thinking and collaboration.',
  },

  // Additional Topics
  // Design Patterns
  {
    question: 'Which design pattern is used to provide a simplified interface to a complex subsystem?',
    options: ['Observer Pattern', 'Facade Pattern', 'Decorator Pattern', 'Strategy Pattern'],
    correctAnswer: 1,
    explanation:
      'The Facade Pattern provides a simplified interface to a complex subsystem, making it easier to use by hiding the complexities of the underlying system.',
  },
  {
    question: 'What is the main purpose of the Observer design pattern?',
    options: [
      'To encapsulate a group of individual factories.',
      'To allow an object to notify other objects about changes in its state.',
      'To provide a way to access the elements of an aggregate object sequentially.',
      'To ensure a class has only one instance.',
    ],
    correctAnswer: 1,
    explanation:
      'The Observer Pattern allows an object (the subject) to notify a list of dependents (observers) automatically of any state changes, promoting a decoupled architecture.',
  },

  // Profiling and Performance
  {
    question: 'Which browser tool can you use to analyze and optimize web application performance?',
    options: ['React DevTools', 'Redux DevTools', 'Chrome DevTools Performance Panel', 'GitHub Actions'],
    correctAnswer: 2,
    explanation:
      'Chrome DevTools Performance Panel provides tools to analyze and optimize the performance of web applications by profiling rendering, scripting, and layout operations.',
  },
  {
    question: "What is 'lazy loading' in the context of web performance optimization?",
    options: [
      'Loading all resources upfront to speed up initial load time.',
      'Deferring the loading of non-critical resources until they are needed.',
      'Minifying JavaScript and CSS files.',
      'Caching resources in the browser.',
    ],
    correctAnswer: 1,
    explanation:
      'Lazy loading defers the loading of non-critical resources (like images or scripts) until they are actually needed, reducing initial load time and improving performance.',
  },
  {
    question: 'Which JavaScript API allows you to measure the performance of your web application?',
    options: ['fetch API', 'Performance API', 'Storage API', 'Canvas API'],
    correctAnswer: 1,
    explanation:
      'The Performance API provides methods to measure various performance aspects of a web application, such as load times, rendering performance, and resource loading.',
  },

  // API Construction
  {
    question: 'What is the purpose of versioning in API design?',
    options: [
      'To track the number of API requests.',
      'To manage changes and updates without breaking existing clients.',
      'To increase the security of the API.',
      'To improve the performance of the API.',
    ],
    correctAnswer: 1,
    explanation:
      'Versioning allows API developers to introduce changes and new features without disrupting existing clients, ensuring backward compatibility and smoother transitions.',
  },
  {
    question: 'Which HTTP status code indicates that the request was successful and a new resource was created?',
    options: ['200 OK', '201 Created', '204 No Content', '400 Bad Request'],
    correctAnswer: 1,
    explanation: 'HTTP status code `201 Created` indicates that the request was successful and a new resource was created as a result.',
  },
  {
    question: 'In RESTful APIs, what is the purpose of HATEOAS (Hypermedia as the Engine of Application State)?',
    options: [
      'To secure API endpoints using tokens.',
      'To provide navigable links within API responses for discoverability.',
      'To format API responses in JSON.',
      'To handle versioning of APIs.',
    ],
    correctAnswer: 1,
    explanation:
      'HATEOAS allows API responses to include hypermedia links that guide clients on available actions and how to navigate the API, enhancing discoverability and usability.',
  },

  // Additional Best Practices
  {
    question: 'What is the purpose of using a Content Delivery Network (CDN) in web development?',
    options: [
      'To store user data securely.',
      'To deliver content from servers geographically closer to users, reducing latency.',
      'To manage version control of assets.',
      'To handle server-side rendering.',
    ],
    correctAnswer: 1,
    explanation:
      'A CDN distributes content across multiple geographically dispersed servers, allowing users to download resources from the nearest server, which reduces latency and improves load times.',
  },
  {
    question: 'Why is it important to minify JavaScript and CSS files in production?',
    options: [
      'To enhance code readability.',
      'To reduce file sizes and improve load times.',
      'To add comments and documentation.',
      'To enable debugging in production.',
    ],
    correctAnswer: 1,
    explanation:
      'Minifying JavaScript and CSS removes unnecessary characters like whitespace and comments, reducing file sizes and improving load times without affecting functionality.',
  },

  // Soft Skills
  {
    question: 'How can a senior developer contribute to improving team collaboration?',
    options: [
      'By working in isolation to avoid conflicts.',
      'By mentoring junior developers and facilitating effective communication.',
      'By focusing solely on individual tasks.',
      'By avoiding code reviews.',
    ],
    correctAnswer: 1,
    explanation:
      'Senior developers can enhance team collaboration by mentoring junior members, facilitating clear and open communication, and promoting best practices within the team.',
  },
  {
    question: 'Which of the following is an effective strategy for debugging complex issues in a web application?',
    options: [
      'Making random changes until the issue is resolved.',
      'Using a systematic approach, such as isolating components and using debugging tools.',
      'Ignoring the issue and hoping it resolves itself.',
      'Only relying on user reports without investigating.',
    ],
    correctAnswer: 1,
    explanation:
      'A systematic debugging approach involves isolating components, using debugging tools (like browser dev tools), and methodically testing to identify and resolve complex issues efficiently.',
  },

  // Resources (No specific questions, but could add resource-related questions if needed)

  // Additional Systems Design Questions
  {
    question: 'What is horizontal scaling in the context of system architecture?',
    options: [
      'Increasing the resources of a single server.',
      'Adding more servers to handle increased load.',
      'Optimizing code to run faster on existing hardware.',
      'Reducing the number of services in a microservices architecture.',
    ],
    correctAnswer: 1,
    explanation:
      "Horizontal scaling involves adding more servers to distribute the load, improving the system's ability to handle increased traffic and ensuring better availability.",
  },
  {
    question: 'What is an API gateway responsible for in a microservices architecture?',
    options: [
      'Directly managing database connections.',
      'Routing client requests to the appropriate microservices.',
      'Handling only authentication tasks.',
      'Serving static content to clients.',
    ],
    correctAnswer: 1,
    explanation:
      'An API gateway acts as a single entry point for client requests, routing them to the appropriate microservices, handling cross-cutting concerns like authentication, and aggregating responses when necessary.',
  },
  {
    question: 'Which design pattern is most appropriate for managing state in a large-scale React application?',
    options: ['Singleton Pattern', 'Factory Pattern', 'Observer Pattern', 'Redux Pattern'],
    correctAnswer: 3,
    explanation:
      'Redux is a predictable state container commonly used in large-scale React applications to manage and centralize state, making it easier to debug and maintain.',
  },
  {
    question: 'What is the primary benefit of using server-side rendering (SSR) in a web application?',
    options: [
      'Improved client-side performance.',
      'Enhanced SEO and faster initial page load.',
      'Simpler deployment processes.',
      'Reduced server load.',
    ],
    correctAnswer: 1,
    explanation:
      'Server-side rendering generates the HTML on the server, which improves SEO by allowing search engines to crawl the content more effectively and provides a faster initial page load for users.',
  },
  {
    question: "In the context of web performance, what does 'critical rendering path' refer to?",
    options: [
      'The sequence of steps a browser takes to convert HTML, CSS, and JavaScript into a rendered web page.',
      'The API calls made during the initial page load.',
      'The sequence of user interactions that lead to a page update.',
      'The server-side processes that handle incoming requests.',
    ],
    correctAnswer: 0,
    explanation:
      "The critical rendering path encompasses all the steps the browser follows to parse HTML, CSS, and JavaScript and render the final web page, impacting the page's load performance and user experience.",
  },
];
