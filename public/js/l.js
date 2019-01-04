//======================================================
var token = localStorage.getItem('id_token');
console.log("token", token);
if (token) {
    window.location.href = "http://localhost:3000/espere"
}

//======================================================


var url = 'http://localhost:8080/login';
$("form").on("submit", function validar(e) {

    var data = {
        email: $("#email").val(),
        password: $("#password").val()
    };
    console.log('Hola :D ', data);

    fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(function(response) {
            var idToken = response.token;
            localStorage.setItem('id_token', idToken);
            console.log('Success:', response)
            var token = localStorage.getItem('id_token');
            console.log("token", token);

            //var url = 'http://192.168.43.220:3000/ingresar';
            var data = {
                token: token
            };
            //window.location.href = "http://192.168.43.220:3000/ingresar?token=" + token;

            // async function request() {
            //     let url = new URL("http://192.168.43.220:3000/ingresar");

            //     const params = {
            //         token: token
            //     };
            //     Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
            //     const dataRequest = {
            //         method: 'GET'
            //     };
            //     let response = await fetch(url, dataRequest);
            //     console.log(response)
            // }

            // request();



            // fetch(url, {
            //         method: 'POST', // or 'PUT'
            //         body: JSON.stringify(data), // data can be `string` or {object}!
            //         headers: {
            //             'Content-Type': 'application/json'
            //         }
            //     })
            //     .then(function(response) {
            //         console.log('Success:');
            //     }).catch(error => console.error('Error:', error));

        });

    // fetch('http://192.168.0.101:8080/login', {
    //         method: 'post',
    //         headers: new Headers({
    //             'Access-Control-Allow-Origin': ' ',
    //             'Content-Type': 'application/json'
    //         }),
    //         body: JSON.stringify({
    //             "email": "",
    //             "password": ""
    //         })
    //     }).then((res) => console.log(res.json()))
    //     .catch((err) => console.log(err))
    e.preventDefault();
})