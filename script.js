    document.getElementById("name_button").addEventListener('click',function (){

    
    const url="https://restcountries.com/"
    try{
        const response = await fetch(url)
        if (!response.ok){
            throw new Error("Error")
        }
        const json = await response.json();
        return response.json();
    }catch (error){
        console.error(error.message);
    }
    .then((data)=>{
        if(data &&data[0]){
            const country =data[0];
            document.getElementById("countryName").textContent =`Country: ${country.name.common}`;
            document.getElementById("countryPop").textContent =`Population: ${country.population.toLocaleString()}`;
            document.getElementById("countryRegion").textContent =`Region: ${country.region}`;
            document.getElementById("countryFlag").textContent =`Flag: ${country.flags.svg}`;

            const neighbours =country.neighbours ? country.neighbours.join(', ') : 'None';
            document.getElementById('neighbour').textContent =`Neighbours: ${neighbours}`;
        }
    }
    });
    
    // var country_name =document.getElementById("name")
    // console.log(country_name)

    
    // const input = document.getElementById("name")
    // const button = document.getElementById("name_button")
    // var country_name
    // country_name = input
    // console.log(country_name)
    // button.addEventListener('click',updateCountryName)
    // function updateCountryName(){
    //     country_name = input
    // }
 

