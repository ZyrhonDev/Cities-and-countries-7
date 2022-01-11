export async function wikiApi(infoObject) {      
    
    //.extract och .originalimage.source är texten resp bilden från "wiki api json"
        let siteMain = document.getElementById("siteMain");
        let cityText = document.createElement("article")
            cityText.innerText = infoObject.extract;
            cityText.className = "city-info";        

        //Hämtar original bildens bredd och höjd                
        // let width = infoObject.originalimage.width;
        // let height = infoObject.originalimage.height; 
        
        let cityPic = new Image();
            cityPic.src = infoObject.originalimage.source;            
            cityPic.className = "city-pic";
            siteMain.append(cityText, cityPic);
};