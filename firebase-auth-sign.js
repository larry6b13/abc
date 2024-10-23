var email = 'xxxxx@xxx.xxx';
var password = 'xxxxxxxxxx';
firebase.auth()
  .signInWithEmailAndPassword(email, password)
  .then(result => {
    console.log(result);
  })
  .catch(error => {
  	console.log(error.message);
  });
