$(document).ready(function () {
    $('#buscar').click(function () {
        let ciudad = $('#ciudad').val();
        let apiKey = '3cff0e4bd2b376868f409a3e75af2bbd'; // Reemplaza esto con tu propia API key

        // Llamada AJAX utilizando jQuery
        $.ajax({
            url: `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`,
            success: function (data) {
                console.log(data);
                $('#resultado').html(`
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperatura: ${data.main.temp}°C</p>
                <p>Humedad: ${data.main.humidity}%</p>
                <p>Descripción: ${data.weather[0].description}</p>
                `);
            },
            error: function () {
                $('#resultado').html('<p>No se pudo obtener la información del clima.</p>');
            },
        });
    });
});
