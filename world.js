window.addEventListener('load', function(){
    let lookupButton = document.querySelector('#lookup-country');
    let country = this.document.getElementById('country');
    let fetchName = "world.php?country=" 
    

    lookupButton.addEventListener('click', function(e){
        e.preventDefault();
        console.log(country.value);


        fetch(fetchName + country.value)
        .then(response => {
            if(response.ok) {
                return response.text()
            } else {
                return Promise.reject('Something went wrong!')
            }
        })
        .then(data =>{
            

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