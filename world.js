window.addEventListener('load', function(){
    let lookupButton = document.querySelector('#lookup-country');
    let city = this.document.querySelector('#lookup');
    let country = this.document.getElementById('country');
    let fetchName = "world.php?country=";
    let lookup = "&lookup=";
    let fetchCity = "&lookup=cities";
    

    lookupButton.addEventListener('click', function(e){
        e.preventDefault();
        console.log(country.value);


        fetch(fetchName + country.value + lookup)
        .then(response => {
            if(response.ok) {
                return response.text()
            } else {
                return Promise.reject('Something went wrong!')
            }
        })
        .then(data =>{
            
            console.log(data);
            let result = document.querySelector('#result');
            result.innerHTML = data;

                
        })
        .catch(error => console.log('There was an error: ' + error));
    });


    city.addEventListener('click', function(e){
        e.preventDefault();
        console.log(country.value);


        fetch(fetchName + country.value + fetchCity)
        .then(response => {
            if(response.ok) {
                return response.text()
            } else {
                return Promise.reject('Something went wrong!')
            }
        })
        .then(data =>{
            
            console.log(data);
            let result = document.querySelector('#result');
            result.innerHTML = data;

                
        })
        .catch(error => console.log('There was an error: ' + error));
    });
    

    function isEmpty(elementValue) {
        if (elementValue.length == 0) {
          // Or you could check if the value == ""
          console.log('field is empty');
          return true;
        }
      
        return false;
    }


});