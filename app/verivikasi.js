function verivikasi() {
    let data = {
        'user_id' :"",
        'otp_cofde' : document.getElementById("otp").value
    }
    
    fetch('http://pretest-qa.dcidev.id/api/v1/otp/match',{
        method : 'POST',
        mode: "no-cors",
        headers: { 'Content-Type': 'application/x-www-form-urlencode',
                    'Accept': 'application/json'
        },
        body : JSON.stringify(data)		
       }
    )
    .then(responseJson => {
        if(responseJson.data) {
            console.log(responseJson.data);
            $(location).attr('href','beranda.html')
            return Promise.resolve(responseJson.data);
        } else {
            return Promise.reject("Gagal memasukan otp");
        }
    }) 
}

function kirim_ulang () {
    
}