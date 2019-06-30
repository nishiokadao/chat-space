$(function() {

  function buildHTML(message){
      var image = message.image? `${message.image}` : ""
    
      var html =
      `<div class="message" data-message-id=${message.id}>
          <div class="upper-message">
            <div class="upper-message__user-name">
              ${message.user_name}
            </div>
            <div class="upper-message__date">
              ${message.date}
            </div>
          </div>
          <div class="lower-message">
            <p class="lower-message__content">
              ${message.content}
            </p>
            ${image}
          </div>
        </div>`
      return html;
  }



  function scroll() {
    $('.messages').animate({scrollTop: $('.message')[0].scrollHeight});
  }


  $(".new_message").on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
     url: url,
     type: "POST",
     data: formData,
     dataType: 'json',
     processData: false,
     contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);

      $('.messages').append(html);
      $('.form__submit').prop('disabled', false);
      scroll()

  })
  .fail(function(){
    alert('error')
    $('.form__submit').prop('disabled', false);
  })
      return false;
  })

  var reloadMessages = function () {
    if (window.location.href.match(/\/groups\/\d+\/messages/)){
      var last_message_id = $('.message:last').data("message-id"); 
      // var group_id = $(".group").data("group-id");

      $.ajax({ 
        url: "api/messages", 
        type: 'get', 
        dataType: 'json', 
        data: {last_id: last_message_id} 
      })
      .done(function (messages) { 
        var insertHTML = '';
        messages.forEach(function (message) {
          insertHTML = buildHTML(message); 
          $('.messages').append(insertHTML);
        })
        $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
      })
      .fail(function () {
        alert('自動更新に失敗しました');
      });
    }
  };
  setInterval(reloadMessages, 5000);
});