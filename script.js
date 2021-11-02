

document.getElementById("Submit").addEventListener("click", function(event) {
  event.preventDefault();
  // const value = document.getElementById("PlayerId").value;
  // console.log(value);
  var key = "MCKYGEEN1xBi9IXx8uPKLK5pdKdDDfJIYTAF1euo";
  const url = "https://api.nasa.gov/planetary/apod?api_key=" + key;

  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
      document.getElementById("img-title").innerHTML = json.title;
      console.log(json.url);
      let img ='<img src="' + json.url + '" width="600px"/>';

      document.getElementById("imgOfDay").innerHTML = img;
      document.getElementById("description").innerHTML = json.explanation;
      document.getElementById("date").innerHTML = json.date;
      document.getElementById("form").innerHTML = "";

    });
    // var long = 100.75;
    // var lat = 1.5;
    //
    // const url2 = "https://api.nasa.gov/planetary/earth/imagery?lon=" + long + "&lat="+ lat + "&api_key=" + key;
    // const url3 = "https://api.nasa.gov/planetary/earth/imagery?lon=100.75&lat=1.5&date=2014-02-01&api_key=" + key;
    // fetch(url3)
    //   .then(function(response) {
    //     return response.json();
    //   }).then(function(json) {
    //     console.log(json);
    //     // let img ='<img src="' + json.url + '" width="600px"/>';
    //     //
    //     // document.getElementById("satphoto").innerHTML = img;
    //   });


});
