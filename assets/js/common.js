$(function() {
  //delete localStorage.userid
  var userid = localStorage.userid;
  var count = 0;
  var history = [];

  function init() {
    $('.msg-form').on('submit', function(e) {
      io.socket.post('/send/', {user: userid, content: $('.msg-content').val()});
      $('.msg-content').val('');
      e.preventDefault();
      return;
    });
    
    $('.userid-form').on('submit', function(e) {
      
      if ($('.userid').val()) {
        userid = localStorage.userid = $('.userid').val();

        $('.userid-edit').text(localStorage.userid);
        $('.user-id-modal').modal('hide');
      }
      e.preventDefault();
      return;
    });

    $('.userid-edit').on('click', showUserIDModal);

    if (!userid) {
      showUserIDModal();
    }
    else {
      $('.userid-edit').text(localStorage.userid);
    }

    socketSetup();
  }

  function showUserIDModal(e) {
    $('.user-id-modal').modal({backdrop: 'static'});
    e.preventDefault();
  }

  function socketSetup() {
    
    io.socket.on('msg', function (msg) {
      $('.chat-text').append('<div class="msg-item">' + msg.user + ' 說：' + msg.content + '</div>');
    });
    
  }

  init();
    
});