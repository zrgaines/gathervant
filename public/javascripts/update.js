// getting the id from the url
var urlPathName = window.location.pathname.split('/');
urlPathName = urlPathName[urlPathName.length-1]




$(function() {


  $('button').click(function(evt){
    evt.preventDefault();
    console.log(urlPathName)
    console.log($('#rooms').val())
    $.ajax({
        url: urlPathName,
        type: 'PUT',
        data: {
          'startDate' : $('#inputStartDate').val(),
          'endDate' : $('#inputEndDate').val(),
          'rooms' : $('#rooms').val(),
          'adults' : $('#adults').val(),
          'children' : $('#children').val(),
          'concepts' : $('#inputConcepts').val(),
          'tripProfile' : 'none'
        }
      })
      .done(function(update) {
        console.log('ajax request done')
        window.location.reload();
      })
      .fail(function(jqXHR, textStatus) {
        console.log('Request failed: ' + textStatus);
      });
  })
})
