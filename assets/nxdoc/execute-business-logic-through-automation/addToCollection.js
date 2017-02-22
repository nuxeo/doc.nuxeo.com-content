function run(input, params) {

// Check if the collectionName context variable is set, otherwise set it


// Retrieve the user's workspace and set as the userWorkspace variable
  var userWorkspace;


	var collection = getCollectionInUserWorkspace(input, ctx.collectionName);
// If the collection variable is null, create a collection with the context variable's collectionName value and place it in the collection variable. The collection should be created in the user workspace.


// Add the document to the collection


	return input;
}



/******
DO NOT EDIT BELOW THIS LINE
******/

// Return the collection (or null if it doesn't exist)
function getCollectionInUserWorkspace(input, collectionName) {
  var userWorkspace = User.GetUserWorkspace(
    input, {
    }
  );
  var userWorkspacePath = userWorkspace.path;
  var queryResults = Repository.Query(
    input, {
      'query': "SELECT * FROM Collection WHERE dc:title = '"+ collectionName  +"' AND ecm:path STARTSWITH '"+ userWorkspacePath +"'",
    }
  );
  if(queryResults.length === 0) {
    return;
  }
  return queryResults[0];
}
