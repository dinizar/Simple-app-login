
let final;  

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
        navigator.geolocation.getCurrentPosition(function (position){
          
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
  var coba=JSON.parse(JSON.stringify(latlong));
            
  var la=coba.lat.toString();
  var lo=coba.long.toString();
  var ll=la+','+lo;
  console.log(ll);
  final = ll;
     
    
});
// function showPosition(position) {
//     //   LatLong.innerHTML = "Latitude: " + position.coords.latitude +
//     //   "<br>Longitude: " + position.coords.longitude;
//     var latlong = [];
//     latlong[0]=position.coords.latitude;
//     latlong[1]=position.coords.longitude;
//     console.log(latlong);
//     return latlong;
    
// }
function registrasi() {
    
    let user = {
                'phone' : document.getElementById("nohp_r").value,
                'password' : document.getElementById("pass_r").value,
                'country' : document.getElementById("country_r").value,
                'latlong' : final,
                'device_token' : "dfhqejhr309932hedjbfjke93",
                'device_type' : getOS(),
    };
    console.log(user);
    
    fetch('http://pretest-qa.dcidev.id/api/v1/register',{
        method : 'POST',
        mode: "no-cors",
        headers: { 'Content-Type': 'application/javascript',
                   
        },
        body : user		
       }
    )
    .then(responseJson => {
        if(responseJson.data) {
            console.log(responseJson.data);
            $("#verivikasi").modal({backdrop: 'static', keyboard: true, show: true});
            return Promise.resolve(responseJson.data);
        } else {
            return Promise.reject("Gagal Registrasi");
        }
    })
      
}