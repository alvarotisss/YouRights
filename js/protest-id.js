$(document).ready(function () {


// -----------  GET <- ----------------  //

    function Token(Authorization) {
        this.Authorization = Authorization;
    }

    var getToken = sessionStorage.getItem("token")
    console.log(getToken);

    dataToken = new Token(
        `Bearer ` + getToken,
    );
    console.log(dataToken);


    $('#linkClose').click(function () {
        $('#divError').hide('fade');
    });

    $('#errorModal').on('hidden.bs.modal', function () {
        window.location.href = "protest-id.html";
    });


    document.getElementById('getPosts').addEventListener('click', getPosts);

    function getPosts(){
        fetch('http://prueba-env.us-east-2.elasticbeanstalk.com/protests/91')
        .then((res) => res.json())
        .then((data) => { 
            let output = '<h2 class="mb-4">Users</h2>';
            output += `
                <ul class="list-group mb-3">
                <li class="list-group-item">ID: ${data.countryProtest}</li>
                <li class="list-group-item">Name: ${data.cityProtest}</li>
                <li class="list-group-item">Email: ${data.protestType}</li>
                <li class="list-group-item">ID: ${data.defenseSectorProtest}</li>
                <li class="list-group-item">Name: ${data.nameProtest}</li>
                <li class="list-group-item">Email: ${data.userType}</li>
                <li class="list-group-item">ID: ${data.promotedByProtest}</li>
                </ul>
            `;
            document.getElementById('output').innerHTML = output;
        })
    }

/*
    $.ajax({
        url: 'http://prueba-env.us-east-2.elasticbeanstalk.com/protests/91',
        method: 'GET',
        headers: dataToken,
        success: function (data) {
            $('#data-country-protestId').innerHTML(data.countryProtest);
            $('#data-city-protestId').innerHTML(data.cityProtest);
            $('#data-type-protestId').innerHTML(data.type);
            $('#data-city-protestId').innerHTML(data.city);
            $('#data-strike-protestId').innerHTML(data.strike);
            $('#data-defenceSector-protestId').innerHTML(data.defenseSectorProtest);
            $('#data-name-defenceSector-protestId').innerHTML(data.nameDefenceSector);
            $('#data-initiated-protestId').innerHTML(data.initiated);
            $('#data-name-initiated-protestId').innerHTML(data.nameInitiated);
            $('#data-date-protestId').innerHTML(data.dateProtest);
            $('#data-time-protestId').innerHTML(data.time);
            $('#title-letter-protestId').innerHTML(data.titleLetter);
            $('#text-letter-protestId').innerHTML(data.textLetter);
            $('#attached-protestId').innerHTML(data.attached);


        },
        error: function (jQXHR) {
            // If status code is 401, access token expired, so
            // redirect the user to the login page
            if (jQXHR.status == "401") {
                $('#errorModal').modal('show');
            }
            else {
                $('#divErrorText').text(jqXHR.responseText);
                $('#divError').show('fade');
            }
        }
    });

*/

// -----------  GET -> ----------------  //

});