let finall;  


function getOS() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
       if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "0";
      }
      
      if (/android/i.test(userAgent)) {
        return "1";
      }  
      return "2";
      
  }


function getLocation(callback) {
    if (navigator.geolocation) {
        var latlong = navigator.geolocation.getCurrentPosition(function (position){
           
            var pos = {};
            pos.lat=position.coords.latitude;
            pos.long=position.coords.longitude;
            
            callback(pos);
        });
        
    } else {
      alert ("Geolocation is not supported by this browser.");
    }
}
getLocation(function (latlong){
     finall = latlong;
     
    
});

function login() {

    let user = {
                'phone' : document.getElementById("nohp_l").value,
                'password' : document.getElementById("pass_l").value,
                'latlong' : JSON.stringify(finall),
                'device_token' : "-",
                'device_type' : getOS(),
    };
    console.log(user);
    // fetch('http://pretest-qa.dcidev.id/api/v1/oauth/sign_in',{
    //     method : 'POST',
    //     mode: "no-cors",
    //     headers: { 'Content-Type': 'application/x-www-form-urlencode',
    //                 'Accept': 'application/json'
    //     },
    //     body : JSON.stringify(user)		
    //    }
    // )
    // .then(responseJson => {
    //     if(responseJson.data) {
    //         return Promise.resolve(responseJson.data);
    //         console.log(responseJson.data);
    //     } else {
    //         return Promise.reject("Gagal Registrasi");
    //         console.log("gagal");
    //     }
    // })
}

 function logout() {

}