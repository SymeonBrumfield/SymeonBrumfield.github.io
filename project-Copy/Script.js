$(document).ready(function(){
    // Initialize jQuery UI Datepicker
    $("#reservation-date").datepicker({
        dateFormat: "mm/dd/yy", // Change format if needed
        minDate: 0, // Prevent past dates
        showAnim: "fadeIn", // Animation for showing the calendar
    });

    // Handle form submission
    $("#reservation-form").on("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Gather the form data
        var formData = {
            name: $("#name").val(),
            email: $("#email").val(),
            phone: $("#phone").val(),
            reservationDate: $("#reservation-date").val()
        };

        // Store the data in localStorage (or sessionStorage if you want data to expire)
        localStorage.setItem("reservationData", JSON.stringify(formData));

        // Optionally, display a success message to the user
        $("#reservation-result").html("<p>Reservation received! Thank you for booking with us.</p>");

        // Optionally, clear the form after submission
        $("#reservation-form")[0].reset();
    });
});



$(document).ready(function(){
    // Initialize the Slick Slider for all photo carousels
    $('.slick-slider').slick({
        slidesToShow: 3,         // Show 3 slides at a time
        slidesToScroll: 1,       // Scroll 1 slide at a time
        infinite: true,          // Infinite loop
        dots: true,              // Show dots for navigation
        autoplay: true,          // Enable auto play
        autoplaySpeed: 2000,     // Set autoplay speed to 2 seconds
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,   // Show 2 slides on medium screens
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,   // Show 1 slide on small screens
                    slidesToScroll: 1
                }
            }
        ]
    });
});



$(document).ready(function() {
    // Your OpenWeatherMap API Key
    const apiKey = 'a5e541594f96ceec9cb2be49201419d4'; // Your actual API key

    // Brownsville, TX coordinates (latitude and longitude)
    const latitude = 25.9153462;
    const longitude = -97.4484714;

    // OpenWeatherMap API endpoint for current weather data
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

    // AJAX request to fetch weather data
    $.ajax({
        url: apiUrl,
        method: 'GET',
        success: function(data) {
            console.log('Weather data:', data);  // Log the API response to check the data

            // Get the necessary weather information
            const temperature = data.main.temp;
            const weatherDescription = data.weather[0].description;
            const iconCode = data.weather[0].icon;

            // Update the weather section with the fetched data
            $('#weather-info').html(`
                <p>Temperature: ${temperature}°F</p>
                <p>Description: ${weatherDescription}</p>
                <img src="https://openweathermap.org/img/wn/${iconCode}.png" alt="weather icon">
            `);
        },
        error: function(error) {
            console.log('Error fetching weather:', error);  // Log the error if the request fails
            $('#weather-info').html('<p>Sorry, we couldn\'t fetch the weather information at this time.</p>');
        }
    });
});
$(document).ready(function () {
    const apiKey = 'azxNqCjiiAi5kluv9xPaZQ==yzQSqcBSKDg5XHwP';

    const apiUrl = "https://api.api-ninjas.com/v1/quotes?category=food";

    // Function to fetch and display a random quote
    function fetchQuote() {
    $.ajax({
        url: apiUrl,
        headers: { 'X-Api-Key': apiKey},
        method: 'GET',
        success: function(data) {
        const quoteText = data[0].content;
        const quoteAuthor = data[0].author;

        $('#quote-text').text(`"${quoteText}"`);
        $('#quote-author').text(`- ${quoteAuthor}`);
    },
    error: function(jqXHR, textStatus, errorThrown) {
        console.error('Error fetching quote:', textStatus, errorThrown);
        $('#quote-text').text('Unable to fetch quote at this time.');
        $('#quote-author').text('');
    }
});

    }

    // Fetch a quote when the page loads
    fetchQuote();

    // Optionally, fetch a new quote every 30 seconds
    setInterval(fetchQuote, 86400000); // once a day
});
