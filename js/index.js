/// <reference types="../@types/jquery" />
const myKey = "5198ce0568fdcd50f6637304";
const currentDate = new Date($.now());
$("#btnConvert").on("click", function () {
  const from = $("#from").val();
  const to = $("#to").val();
  const amount = $("#amount").val();
  $.get(
    `https://v6.exchangerate-api.com/v6/5198ce0568fdcd50f6637304/latest/${from}`,
    function (response, statusCode, xhr) {
      let rate = response.conversion_rates[to].toFixed(2);
      let result = rate * amount;
      console.log(result);
    }
  );
});
$('#currentDateContainer').html(`${currentDate.toLocaleDateString()}`)
$('#currentTimeContainer').html(`${currentDate.getHours() + ":" + currentDate.getMinutes()}`)


