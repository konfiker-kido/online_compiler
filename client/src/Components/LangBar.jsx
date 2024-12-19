import java from '../icons/language/java.png'
import python from '../icons/language/python.png'
import cpp from '../icons/language/c-.png'
import c from '../icons/language/c.png'
import cSharp from '../icons/language/c-sharp.png'
import goLang from '../icons/language/go-lang.png'
import js from '../icons/language/js.png'    
import { langWithVersions } from '../constant/langWithVersion.ts'
import { useContext } from 'react'
import CodeContext from '../Context/CodeConext'
import defautCodeProvider from '../Context/DefaultCodeProvider'



export const LangBar = () => {

    const {  setLang, setDefaultCode, setCode,setVersion } = useContext(CodeContext)

    const iconCss = {
        height: "30px",
        width: "30px",
        cursor: "pointer",
        border: "1px solid white",
        padding: "2px",
        backgroundColor: "white",
        borderRadius: "50%"
    }
    const handleChange = (langWithVersion) => {
        
        setLang(langWithVersion.lang)
        setDefaultCode(defautCodeProvider[`${langWithVersion.lang}`])
        setCode(defautCodeProvider[`${langWithVersion.lang}`])
        setVersion(langWithVersion.version)
      }
    return (
        <div
            style={
                {
                    width: "100vw",
                    height: "8vh",
                    backgroundColor: "#212121",
                    display: "flex",
                    alignItems: "center",
                    justifyContent:"space-between",  
                    padding: "5px",
                    gap: "25px"
                }
            }

        >
            <div
            
              style={
                {
                    display: "flex",
                    alignItems: "center",
                    padding: "5px",
                    gap: "25px" ,
                    marginLeft:"2vw"
                }
              }>

                <img
                    style={iconCss}
                    src={python}
                    title='Python'
                    onClick={()=>handleChange(langWithVersions.python)}
                />
                <img
                    style={iconCss}
                    src={js}
                    title='Javascript'  
                    onClick={()=>handleChange(langWithVersions.nodejs)} 
                />
                <img
                    style={iconCss}
                    src={java}
                    title='Java'
                    onClick={()=>handleChange(langWithVersions.java)}
                />
                <img
                    style={iconCss}
                    src={cpp}
                    title='CPP'
                    onClick={()=>handleChange(langWithVersions.cpp)} 
                />
                <img
                    style={iconCss}
                    src={c}
                    title='C Language'
                    onClick={()=>handleChange(langWithVersions.c)}
                />
                <img
                    style={iconCss}
                    src={cSharp}
                    title='C#'
                    onClick={()=>handleChange(langWithVersions.csharp)}
                />
                <img
                    style={iconCss}
                    src={goLang}
                    title='Go Lang'
                    onClick={()=>handleChange(langWithVersions.go)}
                />


            </div>

            <div 
            style={
                {
                    display:'flex',
                    alignItems:"center", 
                    border:"2px solid white",
                    marginRight:"50px",
                    borderRadius:"10px",  
                    cursor:"pointer"
                } 
            }>
                    {/* <img src={run} 
                      style={{
                           height:"30px",       
                      }}
                     alt="" /> 
                <button type="submit" style={{ padding: "5px", width: "50px", borderRadius: "5px", color:"white" }}>
                    Run
                </button> */}
            </div>
        </div>

    )
}  