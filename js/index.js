$(document).ready(function(){
  var flag = 0;
  var btnText = '°C';

  $.getJSON("//freegeoip.net/json/?callback=?", function(json) {
var qurl= "https://fcc-weather-api.glitch.me/api/current?lat=" + json.latitude + "&lon=" + json.longitude;
    var loc = json.region_name;
    var country = json.country_code;
      $("#location").html(loc+', '+country);
    $.getJSON(qurl, function(data){
      var weather_main = data.weather.main;
      var temp = data.main.temp;
      $("#btn_text").html(temp+btnText);
      $("#wheather-icon").attr("src", data.weather[0].icon);
     var temp_f = temp*1.8+32;
 
      $("#convertButton").on("click", function() {
        if(flag==0){
          flag = 1;
          btnText = '°F';
          $("#btn_text").html(temp_f+btnText);
        }
          else{
            flag = 0;
            btnText = '°C';
            $("#btn_text").html(temp+btnText);
          }
   

      });

      
        });
      });
    });