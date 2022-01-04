export async function wikiApi(infoObject) {      
    
    //.extract och .originalimage.source är texten resp bilden från "wiki api json"
    // function cityInfo(infoObject) {
        
        let cityInfoContainer = document.getElementById("infoContainer"); 
            // cityInfoContainer.innerHTML=""; 
        let cityText = document.createElement("article")
            cityText.style.cssText = "position: absolute; top: 3rem; right: 15rem; width: 50rem;"; 
            cityText.innerText = infoObject.extract;
            cityText.className = "city-info";
        cityInfoContainer.append(cityText);

        //Hämtar original bildens bredd och höjd, för att behålla aspect ratio                
        // let width = infoObject.originalimage.width;
        // let height = infoObject.originalimage.height; 
        let conatinerOfPic = document.getElementById("picContainer");
            conatinerOfPic.innerHTML=""; 
        let cityPic = new Image();
            cityPic.src = infoObject.originalimage.source;
            conatinerOfPic.style.cssText = "position: absolute; top: 26rem; left: 40rem; width: 50rem;"; 
            cityPic.className = "city-pic";
        conatinerOfPic.append(cityPic)
            
    // console.log(infoObject.extract)
    // console.log(infoObject.originalimage)
    // };
};