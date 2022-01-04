export async function wikiApi() {

    //Selektar alla ellement med classen cityClass (så alla städer)
    let listItems = document.querySelectorAll(".city");
    console.log(listItems)
    //Skapar en click event listener till varje selected element
    listItems.forEach(element => {
        element.addEventListener("click", (e) => {        
            // console.log(e.target.textContent);

            //Hämtar text innehållet från det man clickar på
            let userChoice = e.target.textContent

            //Fetchar wiki api och ersätter sista delen i adressen med stadsnamnet man har clickat på
             fetch("https://en.wikipedia.org/api/rest_v1/page/summary/" + userChoice)
            .then((response) => response.json())
            .then((data) => cityInfo(data));


            //.extract och .originalimage.source är texten resp bilden från "wiki api json"
            function cityInfo(infoObject) {
                let cityInfoContainer = document.getElementById("siteMain");   
                    cityInfoContainer.innerHTML ="";
                let cityText = document.createElement("article") 
                    cityText.innerText = infoObject.extract;
                    cityText.className = "city-info";

                //Hämtar original bildens bredd och höjd, för att behålla aspect ratio
                //Delar på 5 för att få en mindre bild 
                // let width = infoObject.originalimage.width;
                // let height = infoObject.originalimage.height; 
                let conatinerOfPic = document.createElement("div");  
                let cityPic = new Image();
                    cityPic.src = infoObject.originalimage.source;
                    conatinerOfPic.style.cssText = "position: absolute; top: 26rem; left: 40rem; width: 50rem;"; 
                    cityPic.className = "city-pic";
                    conatinerOfPic.append(cityPic)
                    cityInfoContainer.append(cityText, conatinerOfPic);
                
                
                
            // console.log(infoObject.extract)
            // console.log(infoObject.originalimage)
            }
        })
    })

};