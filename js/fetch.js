
export function getFetch(){
    Promise.all([
        fetch("/json/land.JSON").then(response => response.json()),
        fetch("/json/stad.JSON").then(response => response.json())
    ])
        .then(data => {
    
            printCountriesAndCitys(data[0], data[1])
        })
    
    function printCountriesAndCitys(countries, citys) {
        console.log("lyckades jag", countries)
        console.log("eller?", citys)
    }
    }