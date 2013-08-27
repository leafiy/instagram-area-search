<!doctype html>
<html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <title>
            test
        </title>
        <script src="jquery.js">
        </script>
        <script src="jquery.instagram.js">
        </script>
        <style type="text/css">
            *{margin:0;padding:0;font-size: 12px;} table{ float: left; width:200px;
            height:200px; overflow: auto; margin-top:30px; } tr.now{background: #ccc}
        </style>
    </head>
    
    <body>
        </head>
        
        <body>
            <div id="out">
            </div>
            <div id="out2">
            </div>
            <button id="more" style="left:0;position:fixed;z-index: 10000;width:200px;height:26px;background:#fff;border:1px solid #666">
                GET
            </button>
            <button id="next" style="left:300px;position:fixed;z-index: 10000;width:200px;height:26px;background:#fff;border:1px solid #666">
                NEXT PAGE
            </button>
            <button id="cancel" style="left:600px;position:fixed;z-index: 10000;width:200px;height:26px;background:#fff;border:1px solid #666">
                cancel
            </button>
            <table class="list">
                <thead>
                    <tr>
                        <td>
                            lat
                        </td>
                        <td>
                            lng
                        </td>
                    </tr>
                </thead>
            </table>
            <table class="instagram">
            </table>
            <table id="next">
            </table>
            <script type="text/javascript">
                $(function() {

                    $.getJSON("all.json",
                    function(data) {
                        $.each(data.latlng,
                        function(i, item) {
                            content = "<tr><td class=lat>" + item.lat + "</td><td class=lng>" + item.lng + "</td></tr>";
                            $(content).appendTo("table.list");

                        });
                    });

                    var i = 0;

                    $('button#more').on('click',
                    function() {
                        i++

                        var llat = $('table.list tr:nth-child(' + i + ') .lat').text();
                        var llng = $('table.list tr:nth-child(' + i + ') .lng').text();
                        $('table.list tr:nth-child(' + i + ')').addClass('now');
                        var insta_container = $(".instagram");
                        insta_container.instagram({
                            search: {
                                lat: llat,
                                lng: llng
                            },
                            clientId: 'b55044d88e204c25ad4e0c16efb873c1',
                            distance: '1500',
                            show: '1000',
                            onComplete: function() {
                            }
                        })

                    });
                    function writeMsg() {

                        function nextComposeRequestURL() {
                            var llat = $('table.list tr:nth-child(' + i + ') .lat').text();
                            var llng = $('table.list tr:nth-child(' + i + ') .lng').text();
                            var last_time = $('#out').attr('data-created_time');
                            var url = "https://api.instagram.com/v1",
                            params = {};
                            url += "/media/search";
                            params.lat = llat;
                            params.lng = llng;
                            params.distance = '1500';
                            params.count = '1000';
                            params.client_id = 'b55044d88e204c25ad4e0c16efb873c1';
                            params.max_timestamp = last_time;
                            url += "?" + $.param(params);
                            return url;

                        }

                        $.ajax({
                            type: "GET",
                            dataType: "jsonp",
                            cache: false,
                            url: nextComposeRequestURL(),
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
                            	var t1;
                                t1 = setTimeout(function() {
                                    $('button#next').click();
                                },
                                500);
                                $.each(res.data,
                                function(i, item) {
                                    $('div#out').attr('data-created_time', item.created_time).text(item.created_time);
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
                                });
								var dataLength = res.data.length;
                                if (dataLength <= 3) {
                                    $('button#cancel').click();
                                    clearTimeout(t1);
                                    setTimeout(function() {
                                        $('button#more').click()
                                    },
                                    500)
                                }
                            }
                        })

                    }

                    var t;
                    $('button#next').on('click',
                    function() {
                        $('button#next').text('loading!');
                        writeMsg();
                    });
                    $('button#cancel').on('click',
                    function() {
                        $('button#next').text('NEXT PAGE');
                    })

                });
            </script>
        </body>

</html>