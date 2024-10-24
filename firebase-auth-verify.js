var user = firebase.auth().currentUser;

user
  .sendEmailVerification()
  .then(function() {
    // 驗證信發送完成
    window.alert('驗證信已發送到您的信箱，請查收。')
  }).catch(error => {
    // 驗證信發送失敗
    console.log(error.message);
  });
