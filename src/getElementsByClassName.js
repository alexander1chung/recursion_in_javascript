// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:


// var getElementsByClassName = function(className, node) {
//   var result = [];

//   // identify starting node
//   node = node || document.body;

//   // check for className of starting node and add to results array if exists
//   if( node.className.split(' ').indexOf(className) != -1 ){
//     result.push( node );
//   }

//   for(var i = 0, count = node.children.length; i < count; i++){
//     // recursively call on children and check for className
//     result = result.concat( getElementsByClassName(className, node.children[i]) );
//   }

//   return result;
// };

var getElementsByClassName = function (nameOfClass) {
  var results = [];
  var body = document.body;

  function check(node) { // recursive loop within the function
    // checking first if the className has nameOfClass, if it does push into results array
    if (node.className.split(" ").indexOf(nameOfClass) !== -1) results.push(node); 
    // then checking if the children of the node have classes with nameOfClass
    for (var i = 0; i < node.children.length; i++) {
      check(node.children[i]);
    }
  }
  //calling our recursive function with input as document.body
  check(body);
  // returning results
  return results;
}