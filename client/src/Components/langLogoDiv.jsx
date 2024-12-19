import React from "react";  

 const langLogo=(props)=>{  
   const img_url=props.IMG_URL;

   console.log("working");
  return(  
       <img
         style={
            {
                height:"100px",
                width:"100px",
            } 
         }

         src={img_url}    
         onClick={console.log("Button is cliked!====")}
       />
       
    )
}
export default langLogo; 