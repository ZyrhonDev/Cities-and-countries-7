export async function wikiApi(infoObject) {      
    
    //.extract och .originalimage.source är texten resp bilden från "wiki api json"
    // function cityInfo(infoObject) {
        let siteMain = document.getElementById("siteMain");
        // let cityInfoContainer = document.getElementById("infoContainer"); 
            // cityInfoContainer.innerHTML=""; 
        let cityText = document.createElement("article")
            cityText.innerText = infoObject.extract;
            cityText.className = "city-info";
        

        //Hämtar original bildens bredd och höjd, för att behålla aspect ratio                
        // let width = infoObject.originalimage.width;
        // let height = infoObject.originalimage.height; 
        
        let cityPic = new Image();
            cityPic.src = infoObject.originalimage.source;
            
            cityPic.className = "city-pic";
            siteMain.append(cityText, cityPic);
            
    // console.log(infoObject.extract)
    // console.log(infoObject.originalimage)
    // };
};