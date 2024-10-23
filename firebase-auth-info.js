firebase.auth().onAuthStateChanged(function(user) {
  if(user) {
    // 使用者已登入，可以取得資料
    var email = user.email;
    var uid = user.uid;
    console.log(email, uid);
  } else {
    // 使用者未登入
  }
});
