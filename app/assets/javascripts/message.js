function buildHTML(message){
    var image = message.image? ${message.image} : ""
  
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
$('.js-form').on('submit', function(){
e.preventDefault();
var formData = new FormData(this);
var url = $(this).attr('action')
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
   $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');   
   $('form')[0].reset();
 })
  .fail(function(){
    alert('error');
  });
  return false;
});



(function() {

  function buildHTML(message){
    var html = `<div class="message">
                           <div class="upper-message">
                               <div class="upper-message__user-name">
                                   ${ message.user_name }
                               </div>
                               <div class="upper-message__date">
                                   ${ message.time }
                               </div>
                           </div>
                           <div class="lower-message">
                               <p class="lower-message__content">
                                   ${ message.content }
                               </p>
                               <img src="${image}">
                           </div>
                       </div>`;
        return html;
    
    }
    function scroll() {

      $('.messages').animate({scrollTop: $('.message')[0].scrollHeight});
  
  }

  $('#new_message').on('submit', function(e) {
      e.preventDefault();
      var formData = new FormData(this);
      var url = $(this).attr('action');
  })

})
$("#new_message").on('submit', function(e) {
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
    $('.form__message').input[type=“reset”];
    $('.form__submit').prop('disabled', false);
    scroll()

})
.fail(function(){
  alert('error')
  $('.form__submit').prop('disabled', false);
})
    return false;
})

