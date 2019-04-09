const Nuxeo = require('nuxeo');

var nuxeo = new Nuxeo({
  baseURL: 'https://NUXEO_SERVER/nuxeo',
  auth: {
    method: 'basic',
    username: 'Administrator',
    password: 'Administrator'
  },
});

// TODO: add your code here



// assertResult(document)


/************
DO NOT EDIT BELOW THIS LINE
************/

function assertResult(document) {
  if (document.type !== 'Picture') {
    console.log('The Document retrieved is not a Picture document.');
    return false;
  }

  if (!document.get('picture:caption')) {
    console.log('Not all the schemas were retrieved. Add the correct header to complete the exercise.');
    return false;
  }

  console.log('Congratulations, you\'ve successfully completed this exercise.');
}
