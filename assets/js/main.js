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
        var RandomJson2 = data[RandomNumber]
        var RandomJson3 = data[RandomNumber]
        var RandomJson4 = data[RandomNumber]
                $(".test").html(`
                <img src="${RandomJson.flags.png}" alt="">
                <form id="form"; style= "text-align:center">
                <input type="radio" name="scores" id="" value="1"> ${RandomJson2.name.common}
                <input type="radio" name="scores" id="4" value="4"> ${TruAnswer}
                <input type="radio" name="scores" id="2" value="2">${RandomJson3.name.common}
                <input type="radio" name="scores" id="3" value="3"> ${RandomJson4.name.common}
                <input type="submit" name="mysubmit" value="Submit"/>
            </form>
                `);
                var SeletcedAnswer = document.querySelector('input[name="scores"]:checked').value;
                console.log(SeletcedAnswer);
        });
    });