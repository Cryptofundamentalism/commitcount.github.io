<div id="myData"></div>

<script>
        
        fetch('https://api.github.com/repos/bitcoin/bitcoin/stats/commit_activity')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
        
        function appendData(data) {
           var mainContainer = document.getElementById("myData"); 
            for (var i = 0; i < 1; i++) { 
              var div = document.createElement("div"); 
              document.getElementById("myData").innerHTML = parseInt(data[i].total, 10)+parseInt(data[i+1].total, 10)+parseInt(data[i+2].total, 10)+parseInt(data[i+3].total, 10)+parseInt(data[i+4].total, 10)+parseInt(data[i+5].total, 10)+parseInt(data[i+6].total, 10)+parseInt(data[i+7].total, 10)+parseInt(data[i+8].total, 10)+parseInt(data[i+9].total, 10)+parseInt(data[i+10].total, 10)+parseInt(data[i+11].total, 10)+parseInt(data[i+12].total, 10);
           
                
            }
        }
    </script>
