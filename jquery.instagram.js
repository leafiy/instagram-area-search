/*
 * Instagram jQuery plugin
 * v0.2.1
*/

(function($) {
    $.fn.instagram = function(options) {
        var that = this,
        apiEndpoint = "https://api.instagram.com/v1",
        settings = {
            hash: null,
            userId: null,
            locationId: null,
            distance: 1500,
            search: null,
            searchId: null,
            accessToken: null,
            clientId: null,
            show: null,
            onLoad: null,
            onComplete: null,
            maxId: null,
            minId: null,
            next_url: null,
            image_size: null,
            photoLink: true
        };

        options && $.extend(settings, options);

        function createPhotoElement(photo) {
            if (!photo.caption) {
                photo.caption = "No caption"
            }
            html = "<td class='locationname'>" + photo.location.name + "</td><td class='caption'>" + photo.caption.text + "</td><td class='tags'>" + photo.tags + "</td><td class='time'>" + photo.created_time + "</td><td class='lat'>" + photo.location.latitude + "</td><td class='lng'>" + photo.location.longitude + "</td><td class='link'>" + photo.images.standard_resolution.url + "</td>"

            return $('<tr data-created_time=' + photo.created_time + '>').addClass('instagram-placeholder').attr('id', photo.id).append(html);

        }

        function createEmptyElement() {
            return $('<tr>').addClass('instagram-placeholder').attr('id', 'empty').append($('<td colspan="7">').html('No photos for this query'));
        }

        function composeRequestURL() {

            var url = apiEndpoint,
            params = {};

            if (settings.next_url != null) {
                return settings.next_url;
            }

            if (settings.hash != null) {
                url += "/tags/" + settings.hash + "/media/recent";
            } else if (settings.searchId != null) {
                url += "/locations/search";
                params.lat = settings.searchId.lat;
                params.lng = settings.searchId.lng;
                settings.searchId.distance != null && (params.distance = settings.searchId.distance);
            } else if (settings.search != null) {
                url += "/media/search";
                params.lat = settings.search.lat;
                params.lng = settings.search.lng;
                params.distance = '1500';
                settings.search.max_timestamp != null && (params.max_timestamp = settings.search.max_timestamp);
                settings.search.min_timestamp != null && (params.min_timestamp = settings.search.min_timestamp);
            } else if (settings.userId != null) {
                url += "/users/" + settings.userId + "/media/recent";
            } else if (settings.locationId != null) {
                url += "/locations/" + settings.locationId + "/media/recent";
            } else {
                url += "/media/popular";
            }

            settings.accessToken != null && (params.access_token = settings.accessToken);
            settings.clientId != null && (params.client_id = settings.clientId);
            settings.minId != null && (params.min_id = settings.minId);
            settings.maxId != null && (params.max_id = settings.maxId);
            settings.show != null && (params.count = settings.show);

            url += "?" + $.param(params)

            return url;
        }

        settings.onLoad != null && typeof settings.onLoad == 'function' && settings.onLoad();

        $.ajax({
            type: "GET",
            dataType: "jsonp",
            cache: false,
            url: composeRequestURL(),
            error: function() {
                $('button#cancel').click();
                setTimeout(function() {
                    $('button#more').click();
                },
                1000)
            },
            statusCode: {
                502: function() {
                  alert('502');
                }
              },
            success: function(res) {
                $.each(res.data,
                function(i, item) {
                    if (!item.caption) {
                        item.caption = "No caption"
                    }

                    $('div#out').attr('data-created_time', item.created_time).text(item.created_time);
                    $id = item.id;

                    if (!item.location.name) {
                        $locationname = "no name location"
                    } else {
                        $locationname = item.location.name;
                    }

                    if (!item.caption.text) {
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
                    $('#out').empty().load('b.php', {
                        id: $id,
                        locationname: $locationname,
                        caption: $caption,
                        tags: $tags,
                        time: $time,
                        lat: $lat,
                        lng: $lng,
                        link: $link
                    });
                })
                var dataLength = res.data.length
                  if (dataLength <= 3) {
                      $('button#cancel').click();
                      setTimeout(function() {
                          $('button#more').click()
                      },
                      1000)
                  }else{
                    setTimeout(function() {
                          $('button#next').click()
                      },
                      1000)
                  }
            }
        });

        return this;
    };
})(jQuery);