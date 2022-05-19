jQuery(document).ready(function($) {
    $.getJSON("https://restcountries.com/v3.1/all", function(data) {
        function GetRandomNumber(params) {
            
            return RandomNumber = Math.floor((Math.random() * 250) + 1);
        }

        // console.log(data);   
        GetRandomNumber()
        var RandomJson = data[RandomNumber]
        console.log(RandomJson);
        var TruAnswer = RandomJson.name.common
        GetRandomNumber()
        var RandomJson2 = data[RandomNumber].name.common
        var RandomJson3 = data[RandomNumber].name.common
        var RandomJson4 = data[RandomNumber].name.common
                $(".test").html(`
                <img src="${RandomJson.flags.png}" alt="">
                <form id="FormSend" style= "text-align:center"'>
                <input type="radio" name="scores" checked id="1" value="1"> ${TruAnswer}
                <input type="radio" name="scores" id="2" value="2"> ${RandomJson2}
                <input type="radio" name="scores" id="3" value="3"> ${RandomJson3}
                <input type="radio" name="scores" id="4" value="4"> ${RandomJson4}
                <input type="submit" name="mysubmit" value="Submit"/>
            </form>
                `);
                $("#FormSend").submit(function( event ) {
                        var score = document.querySelector('input[name="scores"]:checked').value;
                        if(!score){
                          alert('No score was selected. Try again.');
                          return false;
                        }
                        else{                            
                          if (score==1) {
                              alert("True Answer")
                          }else{
                              alert("Wrong answer")
                          }
                        }
                  });
     } );
    });