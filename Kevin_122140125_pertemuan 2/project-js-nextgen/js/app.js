// ----------------------------
// Variables (let, const, var)
// ----------------------------
export function demoVariables() {
  var oldVar = "This is var";
  let newLet = "This is let";
  const PI = 3.14;

  const user = {
    name: "John",
    age: 30
  };

  if (true) {
    var oldVar = "Reassigned var inside block";  // var is function-scoped
    let newLet = "Different variable inside block";  // let is block-scoped
    console.log("newLet inside block:", newLet);
  }

  console.log("oldVar after block:", oldVar);

  return {
    oldVar,
    newLet,
    PI,
    user
  };
}

// ----------------------------
// Arrow Functions
// ----------------------------
export function demoArrowFunctions() {
  function regularSum(a, b) {
    return a + b;
  }

  const arrowSum = (a, b) => a + b;
  const shortArrowSum = (a, b) => a + b;
  const sayHello = () => "Hello!";
  const square = n => n * n;

  return {
    regularSum: regularSum(2, 3),
    arrowSum: arrowSum(2, 3),
    shortArrowSum: shortArrowSum(4, 5),
    sayHello: sayHello(),
    square: square(6)
  };
}

// ----------------------------
// Template Literals
// ----------------------------
export function demoTemplateLiterals() {
  const name = "John";
  const age = 30;

  const oldWay = "Hello, my name is " + name + " and I am " + age + " years old.";
  const newWay = `Hello, my name is ${name} and I am ${age} years old.`;
  const expression = `Next year, I will be ${age + 1} years old.`;
  const multiLine = `This is line 1
This is line 2`;

  return {
    oldWay,
    newWay,
    expression,
    multiLine
  };
}

// ----------------------------
// Destructuring
// ----------------------------
export function demoDestructuring() {
  const person = { name: "John", age: 30, address: { city: "Jakarta" } };
  const [a, b, ...rest] = [1, 2, 3, 4, 5];

  const { name, age } = person;
  const { city } = person.address;

  const swapped = (() => {
    let x = 1, y = 2;
    [x, y] = [y, x];
    return { x, y };
  })();

  return {
    objectBasic: { name, age },
    objectRenamed: { n: name, a: age },
    objectDefault: person.gender || "Not specified",
    objectNested: { city },
    arrayBasic: [a, b],
    arraySkipped: rest[0],
    arrayRest: rest,
    swapped
  };
}

// ----------------------------
// Spread & Rest Operators
// ----------------------------
export function demoSpreadRest() {
  const arr = [1, 2, 3];
  const spreadArray = [...arr, 4, 5];
  const copyArray = [...arr];
  const mergedArrays = [...arr, ...[4, 5, 6]];

  const obj = { a: 1, b: 2 };
  const spreadObject = { ...obj, c: 3 };

  const sum = (...numbers) => numbers.reduce((acc, cur) => acc + cur, 0);
  const restSum = sum(1, 2, 3, 4, 5);
  const restProcess = ((a, b, ...others) => ({ a, b, others }))(10, 20, 30, 40, 50);

  return {
    spreadArray,
    copyArray,
    mergedArrays,
    spreadObject,
    restSum,
    restProcess
  };
}

// ----------------------------
// Default Parameters
// ----------------------------
export function demoDefaultParams() {
  function greetOld(name, greeting) {
    name = name || "Guest";
    greeting = greeting || "Hello";
    return `${greeting}, ${name}!`;
  }

  function greet(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
  }

  function createUser(name, role = "user", createdAt = new Date().toISOString()) {
    return { name, role, createdAt };
  }

  function createOrder(product, quantity = 1, price, total = price * quantity) {
    return { product, quantity, price, total };
  }

  return {
    oldWay: greetOld(),
    oldWayParams: greetOld("John", "Hi"),
    newWay: greet(),
    newWayParams: greet("John", "Hi"),
    withExpression: createUser("Alice"),
    usingPrevious: createOrder("Laptop", 2, 1000000)
  };
}

// ----------------------------
// Classes & Inheritance
// ----------------------------
export function demoClasses() {
  class User {
    constructor(name, email) {
      this.name = name;
      this.email = email;
      this.createdAt = new Date();
    }

    getInfo() {
      return `${this.name} (${this.email})`;
    }

    getCreatedDate() {
      return this.createdAt.toLocaleDateString();
    }
  }

  class Admin extends User {
    constructor(name, email, role = "admin") {
      super(name, email);
      this.role = role;
    }

    getInfo() {
      return `${this.name} (${this.email}) - ${this.role}`;
    }

    hasAccess() {
      return true;
    }
  }

  const user = new User("John Doe", "john@example.com");
  const admin = new Admin("Admin User", "admin@example.com");

  return {
    user: {
      info: user.getInfo(),
      createdDate: user.getCreatedDate()
    },
    admin: {
      info: admin.getInfo(),
      createdDate: admin.getCreatedDate(),
      hasAccess: admin.hasAccess()
    },
    isUserInstance: user instanceof User,
    isAdminInstance: admin instanceof User
  };
}

// ----------------------------
// Enhanced Object Literals
// ----------------------------
export function demoObjectLiterals() {
  const name = "John";
  const age = 30;

  const oldPerson = {
    name: name,
    age: age,
    sayHello: function () {
      return "Hello!";
    }
  };

  const newPerson = {
    name,
    age,
    sayHello() {
      return "Hello!";
    },
    ["skill_" + 1]: "JavaScript",
    ["skill_" + 2]: "React"
  };

  const prefix = "user";
  const userData = {
    [`${prefix}_id`]: 123,
    [`${prefix}_name`]: "john_doe",
    [Date.now()]: "timestamp"
  };

  return {
    oldWay: oldPerson,
    newWay: newPerson,
    methods: {
      old: oldPerson.sayHello(),
      new: newPerson.sayHello()
    },
    computedProps: {
      skill1: newPerson.skill_1,
      skill2: newPerson.skill_2
    },
    dynamicProps: userData
  };
}

// ----------------------------
// Modern Array Methods dan Higher-Order Functions
// ----------------------------
export function demoArrayMethods() {
  // Sample data
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const users = [
    { id: 1, name: "John", age: 25, active: true },
    { id: 2, name: "Jane", age: 30, active: false },
    { id: 3, name: "Bob", age: 22, active: true },
    { id: 4, name: "Alice", age: 28, active: true },
    { id: 5, name: "Charlie", age: 35, active: false }
  ];

  // map
  const doubled = numbers.map(num => num * 2);

  // filter
  const evenNumbers = numbers.filter(num => num % 2 === 0);
  const activeUsers = users.filter(user => user.active);

  // find
  const userJane = users.find(user => user.name === "Jane");

  // some dan every
  const hasAdult = users.some(user => user.age >= 18);
  const allAdults = users.every(user => user.age >= 18);

  // reduce
  const sum = numbers.reduce((total, num) => total + num, 0);
  const oldest = users.reduce((oldest, user) =>
    user.age > oldest.age ? user : oldest, users[0]);

  // Combining methods (chaining)
  const activeUsersNames = users
    .filter(user => user.active)
    .map(user => user.name);

  const totalActiveAge = users
    .filter(user => user.active)
    .reduce((sum, user) => sum + user.age, 0);

  return {
    map: doubled,
    filter: {
      evenNumbers,
      activeUsers: activeUsers.length
    },
    find: userJane,
    some: hasAdult,
    every: allAdults,
    reduce: {
      sum,
      oldest: oldest.name
    },
    chaining: {
      activeUsersNames,
      totalActiveAge
    }
  };
}

// ----------------------------
// Array Destructuring dan Spread in-depth
// ----------------------------
export function demoAdvancedArrays() {
  const numbers = [1, 2, 3, 4, 5];

  // Clone dan concat
  const numbersCopy = [...numbers];
  const moreNumbers = [...numbers, 6, 7, 8];
  const combinedArrays = [...numbers, ...[6, 7, 8, 9]];

  // Array.from
  const fromIterable = Array.from("hello");
  const withMapFn = Array.from(numbers, n => n * n);

  // Array.of
  const newArray = Array.of(1, "two", { three: 3 });

  // Flat dan FlatMap
  const nestedArrays = [1, [2, 3], [[4, 5], 6]];
  const flattened = nestedArrays.flat();
  const deepFlattened = nestedArrays.flat(2);

  const flatMapped = numbers.flatMap(n => [n, n * 2]);

  // Includes
  const hasThree = numbers.includes(3);

  return {
    clone: numbersCopy,
    concat: {
      moreNumbers,
      combinedArrays
    },
    arrayFrom: {
      fromIterable,
      withMapFn
    },
    arrayOf: newArray,
    flatAndFlatMap: {
      flattened,
      deepFlattened,
      flatMapped
    },
    includes: hasThree
  };
}
