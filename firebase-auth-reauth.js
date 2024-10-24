function reAuth(checkPassword) {
  return new Promise(function(resolve, reject) {
    var user = firebase.auth().currentUser;
    var password = document.getElementById(checkPassword).value;
    var credential = firebase.auth.EmailAuthProvider.credential(user.email, password);
    user.reauthenticateWithCredential(credential).then(function() {
    	resolve(user)
    }).catch(function(error) {
    	reject(error.message);
    });
  })
}
// html 要有一個 <input id="old-password" type="password"> 讓使用者輸入舊密碼
// html 要有一個 <input id="new-password" type="password"> 讓使用者輸入新密碼

// 取得新密碼
var newPassword = document.getElementById('new-password').value;

// 更新密碼
reAuth('old-password')
  .then(function(user) {
    user.updatePassword(newPassword).then(function() {
      window.alert('密碼更新完成，請重新登入');
      
      // 修改密碼完成後，強制登出並重整一次頁面
      firebase.auth().signOut().then(function() {
        window.location.reload();
      });
      
    }).catch(function(error) {
       console.log(error.message)
    });
  }).catch(function(error) {
    console.log(error.message)
  });
// html 要有一個 <input id="check-password" type="password"> 讓使用者輸入密碼
// 刪除帳號
reAuth('check-password')
  .then(function(user) {
    user.delete().then(function() {
      window.alert('您的帳號已成功刪除');
      
      // 刪除帳號後，強制重整一次頁面
      window.location.reload();
      
    }).catch(function(error) {
      console.log(error.message)
   	});
 	}).catch(function(error) {
    console.log(error.message)
  })
