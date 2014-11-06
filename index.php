<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>2beijing</title>
    <script src="jquery.js"></script>
    <script src="jquery.instagram.js"></script>
    <script src="main.js"></script>
    <style type="text/css">
            *{margin:0;padding:0;font-size: 12px;}
            table{ float: left; width:200px;height:200px; overflow: auto; margin-top:30px; }
            tr.now{background: #ccc}
            .red{color:#BE3848}
            .status{
                position: fixed;
                width: 40px;
                height: 10px;
                top:20px;
                right: 20px;
                background: #BE3848;
                -webkit-transition:all .4s linear;
                
            }
            .status.ok{
                -webkit-animation: rotate 1s infinite;
            }
            @-webkit-keyframes rotate {
              from { -webkit-transform:rotate(0); }
              to { -webkit-transform:rotate(360deg); }
            }
            .button-group{
                left:20px;position:fixed;z-index: 10000;
            }
            button{
                width:160px;height:26px;background:#fff;border:1px solid #666
            }
        </style>
</head>

<body></head>

<body>
    <div id="out"></div>
    <div id="out2"></div>
    <div class="status"></div>
    <div class="button-group">

        <button id="more">GETTTTTT</button>
        <button id="next">NEXT PAGE</button>
        <button id="reset">计数器归零</button>
    </div>
    <table class="list">
        <thead>
            <tr>
                <td>lat</td>
                <td>lng</td>
            </tr>
        </thead>
    </table>
    <table class="instagram"></table>
    <table id="next"></table>
    <script type="text/javascript">
                $(function() {

                    $.getJSON("beijing.json",
                    function(data) {
                        $.each(data.latlng,
                        function(i, item) {
                            content = "<tr><td class=lat>" + item.lat + "</td><td class=lng>" + item.lng + "</td></tr>";
                            $(content).appendTo("table.list");
                        });
                    });
                    
                    $('button#reset').on('click',function(){
                        localStorage.clear();
                    })

                     $('button#more').on('click',function(){
                       
                    
            
                        if (localStorage.last_time == 'undefined') {

                           init();
                        } else {
                         
                            writeMsg();
                          
                        }
                    });

                    $('button#next').on('click',
                    function() {
                        $('button#next').text('loading!');
                        writeMsg();
                    });


                });
            </script>
</body>

</html>