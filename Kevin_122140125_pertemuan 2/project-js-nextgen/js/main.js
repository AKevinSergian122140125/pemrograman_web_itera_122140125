import { 
  demoVariables, 
  demoArrowFunctions, 
  demoTemplateLiterals, 
  demoDestructuring, 
  demoSpreadRest,
  demoDefaultParams,
  demoClasses,
  demoObjectLiterals,
  demoArrayMethods,
  demoAdvancedArrays
} from './app.js';

// Function untuk menampilkan hasil di #output
function addOutput(title, description, result) {
  const outputArea = document.getElementById("output");
  
  // Pastikan outputArea ada
  if (!outputArea) return;
  
  const section = document.createElement("section");
  section.innerHTML = `
    <h2 class="text-xl font-semibold text-blue-600 mb-2">${title}</h2>
    <p class="text-gray-700 mb-2">${description}</p>
    <pre class="bg-gray-100 p-3 rounded">${result}</pre>
    <hr class="my-4">
  `;
  outputArea.appendChild(section);
}

// Function untuk menjalankan semua demo
function runAllDemos() {
  const varResults = demoVariables();
  addOutput(
    "1. Let dan Const",
    "var vs let/const dan block scope",
    `var (function scope): ${varResults.oldVar}
let (block scope): ${varResults.newLet}
const (immutable): ${varResults.PI}
const object (mutable content): ${JSON.stringify(varResults.user)}`
  );

  const arrowResults = demoArrowFunctions();
  addOutput(
    "2. Arrow Functions",
    "Perbandingan fungsi reguler dan arrow functions",
    `Regular function: ${arrowResults.regularSum}
Arrow function: ${arrowResults.arrowSum}
Short arrow: ${arrowResults.shortArrowSum}
No params: ${arrowResults.sayHello}
Single param: ${arrowResults.square}`
  );

  const templateResults = demoTemplateLiterals();
  addOutput(
    "3. Template Literals",
    "String concatenation vs template literals",
    `Old way: ${templateResults.oldWay}
New way: ${templateResults.newWay}
With expression: ${templateResults.expression}
Multi-line: ${templateResults.multiLine}`
  );

  const destructuringResults = demoDestructuring();
  addOutput(
    "4. Destructuring",
    "Ekstraksi nilai dari objek dan array",
    `Object basic: ${JSON.stringify(destructuringResults.objectBasic)}
Object renamed: ${JSON.stringify(destructuringResults.objectRenamed)}
Object default: ${destructuringResults.objectDefault}
Object nested: ${JSON.stringify(destructuringResults.objectNested)}
Array basic: ${JSON.stringify(destructuringResults.arrayBasic)}
Array skipped: ${destructuringResults.arraySkipped}
Array with rest: ${JSON.stringify(destructuringResults.arrayRest)}
Swapped variables: ${JSON.stringify(destructuringResults.swapped)}`
  );

  const spreadRestResults = demoSpreadRest();
  addOutput(
    "5. Spread dan Rest Operators",
    "Penggunaan ... untuk array dan objek",
    `Spread in array: ${JSON.stringify(spreadRestResults.spreadArray)}
Copy array: ${JSON.stringify(spreadRestResults.copyArray)}
Merged arrays: ${JSON.stringify(spreadRestResults.mergedArrays)}
Spread in object: ${JSON.stringify(spreadRestResults.spreadObject)}
Rest in function (sum): ${spreadRestResults.restSum}
Rest with regular params: ${JSON.stringify(spreadRestResults.restProcess)}`
  );

  const defaultParamsResults = demoDefaultParams();
  addOutput(
    "6. Default Parameters",
    "Nilai default untuk parameter fungsi",
    `Old way: ${defaultParamsResults.oldWay}
Old way with params: ${defaultParamsResults.oldWayParams}
New way: ${defaultParamsResults.newWay}
New way with params: ${defaultParamsResults.newWayParams}
With expression: ${JSON.stringify(defaultParamsResults.withExpression)}
Using previous params: ${JSON.stringify(defaultParamsResults.usingPrevious)}`
  );

  const classesResults = demoClasses();
  addOutput(
    "7. Classes",
    "Penggunaan class dan inheritance",
    `User: ${classesResults.user.info}
User created: ${classesResults.user.createdDate}
Admin: ${classesResults.admin.info}
Admin created: ${classesResults.admin.createdDate}
Admin has access: ${classesResults.admin.hasAccess}
user instanceof User: ${classesResults.isUserInstance}
admin instanceof User: ${classesResults.isAdminInstance}`
  );

  const objectLiteralsResults = demoObjectLiterals();
  addOutput(
    "8. Enhanced Object Literals",
    "Penulisan objek yang lebih ringkas",
    `Property shorthand: ${JSON.stringify(objectLiteralsResults.newWay)}
Method shorthand: ${objectLiteralsResults.methods.new}
Computed properties: ${JSON.stringify(objectLiteralsResults.computedProps)}
Dynamic properties: ${JSON.stringify(objectLiteralsResults.dynamicProps)}`
  );

  // Demo Array Methods
  const arrayMethodsResults = demoArrayMethods();
  addOutput(
    "9. Modern Array Methods",
    "Higher-Order Functions pada array",
    `map: ${JSON.stringify(arrayMethodsResults.map)}
filter (evenNumbers): ${JSON.stringify(arrayMethodsResults.filter.evenNumbers)}
filter (activeUsers): ${arrayMethodsResults.filter.activeUsers}
find: ${JSON.stringify(arrayMethodsResults.find)}
some (hasAdult): ${arrayMethodsResults.some}
every (allAdults): ${arrayMethodsResults.every}
reduce (sum): ${arrayMethodsResults.reduce.sum}
reduce (oldest): ${arrayMethodsResults.reduce.oldest}
chaining (activeUsersNames): ${JSON.stringify(arrayMethodsResults.chaining.activeUsersNames)}
chaining (totalActiveAge): ${arrayMethodsResults.chaining.totalActiveAge}`
  );

  // Demo Advanced Arrays
  const advArraysResults = demoAdvancedArrays();
  addOutput(
    "10. Advanced Arrays",
    "Fitur array lanjutan",
    `Clone: ${JSON.stringify(advArraysResults.clone)}
Concat: ${JSON.stringify(advArraysResults.concat.combinedArrays)}
Array.from: ${JSON.stringify(advArraysResults.arrayFrom.withMapFn)}
Array.of: ${JSON.stringify(advArraysResults.arrayOf)}
flat: ${JSON.stringify(advArraysResults.flatAndFlatMap.flattened)}
deepFlat: ${JSON.stringify(advArraysResults.flatAndFlatMap.deepFlattened)}
flatMap: ${JSON.stringify(advArraysResults.flatAndFlatMap.flatMapped)}
includes: ${advArraysResults.includes}`
  );
}

// Tombol event listener
document.getElementById("runBtn").addEventListener("click", runAllDemos);
document.getElementById("clearBtn").addEventListener("click", () => {
  document.getElementById("output").innerHTML = "";
});
