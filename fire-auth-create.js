var email = 'xxxxx@xxx.xxx';
var password = 'xxxxxxxxxx';

firebase
  .auth()
  .createUserWithEmailAndPassword(email, password)
  .then(result => {
    console.log(result)
  }).catch(function(error) {
    console.log(error.message)
  });
