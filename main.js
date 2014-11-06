

  function init() {


    if (localStorage.lastrow == null || localStorage.lastrow == 'undefined') {

      localStorage.lastrow = 1;
    } else {
      localStorage.lastrow++;
    }

    console.log(localStorage.lastrow);


    var llat = $('table.list tr:nth-child(' + localStorage.lastrow + ') .lat').text();
    var llng = $('table.list tr:nth-child(' + localStorage.lastrow + ') .lng').text();
    $('table.list tr:nth-child(' + localStorage.lastrow + ')').addClass('now');
    var insta_container = $(".instagram");
    insta_container.instagram({
      search: {
        lat: llat,
        lng: llng
      },
      clientId: 'clientId',
      distance: '2000',
      show: '1000',
      onComplete: function() {

      }
    });
  }

  function writeMsg() {
    $('table.list tr:nth-child(' + localStorage.lastrow + ')').addClass('now');
    function nextComposeRequestURL() {
      var llat = $('table.list tr:nth-child(' + localStorage.lastrow + ') .lat').text();
      var llng = $('table.list tr:nth-child(' + localStorage.lastrow + ') .lng').text();
      var last_time = localStorage.last_time;
      var url = "https://api.instagram.com/v1",
        params = {};
      url += "/media/search";
      params.max_timestamp = last_time;
      params.lat = llat;
      params.lng = llng;
      params.distance = '2000';
      params.count = '1000';
      params.client_id = 'clientId';
      params.max_timestamp = last_time;
      url += "?" + $.param(params);
      return url;

    }

    $.ajax({
      type: "GET",
      dataType: "jsonp",
      cache: false,
      timeout: 30000,
      url: nextComposeRequestURL(),
      error: function() {
        
        $('.status').removeClass('ok');
        setTimeout(function() {
            writeMsg2();
          },
          5000);
        
        console.log(localStorage.lastrow);
        console.log(localStorage.last_time);
      },
      success: function(res) {
        $('.status').addClass('ok');
        var t1;
        t1 = setTimeout(function() {
            $('button#next').click();
          },
          1500);
        $.each(res.data,
          function(i, item) {
            $created_time = item.created_time;
            localStorage.last_time = $created_time;

            $id = item.id;
            if (!item.location.name) {
              $locationname = "no name location"
            } else {
              $locationname = item.location.name;
            }

            if (!item.caption) {
              $caption = "no caption"
            } else {
              $caption = item.caption.text;
            }

            if (!item.tags) {
              $tags = "no tags"
            } else {
              $tags = item.tags.toString();
            }
            $time = item.created_time;
            $lat = item.location.latitude;
            $lng = item.location.longitude;
            $link = item.images.standard_resolution.url;
            $username = item.user.username;
            $filter = item.filter;
            $likes = item.likes.count;
            $profile_picture = item.user.profile_picture;
            $comments_count = item.comments.count;
            $insta_link = item.link;

            $('#out').empty().load('b.php', {
              id: $id,
              locationname: $locationname,
              caption: $caption,
              tags: $tags,
              time: $time,
              lat: $lat,
              lng: $lng,
              link: $link,
              filter: $filter,
              likes: $likes,
              username: $username,
              profile_picture: $profile_picture,
              comments_count: $comments_count,
              insta_link: $insta_link
            });
          });
        var dataLength = res.data.length;
        if (dataLength <= 5) {
          $('button#cancel').click();
          clearTimeout(t1);
          localStorage.last_time = undefined;
          setTimeout(function() {
              $('button#more').click()
            },
            1500)
        }
      }
    })

  }
  function writeMsg2() {
    $('table.list tr:nth-child(' + localStorage.lastrow + ')').addClass('now');
    function nextComposeRequestURL() {
      var llat = $('table.list tr:nth-child(' + localStorage.lastrow + ') .lat').text();
      var llng = $('table.list tr:nth-child(' + localStorage.lastrow + ') .lng').text();
      var last_time = localStorage.last_time;
      var url = "https://api.instagram.com/v1",
        params = {};
      url += "/media/search";
      params.max_timestamp = last_time;
      params.lat = llat;
      params.lng = llng;
      params.distance = '2000';
      params.count = '1000';
      params.client_id = 'clientId';
      params.max_timestamp = last_time;
      url += "?" + $.param(params);
      return url;

    }

    $.ajax({
      type: "GET",
      dataType: "jsonp",
      cache: false,
      timeout: 30000,
      url: nextComposeRequestURL(),
      error: function() {
        
        $('.status').removeClass('ok');
        setTimeout(function() {
            writeMsg();
          },
          5000);
        console.log(localStorage.lastrow);
        console.log(localStorage.last_time);

      },
      success: function(res) {
        $('.status').addClass('ok');
        var t1;
        t1 = setTimeout(function() {
            $('button#next').click();
          },
          1500);
        $.each(res.data,
          function(i, item) {
            $created_time = item.created_time;
            localStorage.last_time = $created_time;

            $id = item.id;
            if (!item.location.name) {
              $locationname = "no name location"
            } else {
              $locationname = item.location.name;
            }

            if (!item.caption) {
              $caption = "no caption"
            } else {
              $caption = item.caption.text;
            }

            if (!item.tags) {
              $tags = "no tags"
            } else {
              $tags = item.tags.toString();
            }
            $time = item.created_time;
            $lat = item.location.latitude;
            $lng = item.location.longitude;
            $link = item.images.standard_resolution.url;
            $username = item.user.username;
            $filter = item.filter;
            $likes = item.likes.count;
            $profile_picture = item.user.profile_picture;
            $comments_count = item.comments.count;
            $insta_link = item.link;

            $('#out').empty().load('b.php', {
              id: $id,
              locationname: $locationname,
              caption: $caption,
              tags: $tags,
              time: $time,
              lat: $lat,
              lng: $lng,
              link: $link,
              filter: $filter,
              likes: $likes,
              username: $username,
              profile_picture: $profile_picture,
              comments_count: $comments_count,
              insta_link: $insta_link
            });
          });
        var dataLength = res.data.length;
        if (dataLength <= 5) {
          $('button#cancel').click();
          clearTimeout(t1);
          localStorage.last_time = undefined;
          setTimeout(function() {
              $('button#more').click()
            },
            1500)
        }
      }
    })

  }
