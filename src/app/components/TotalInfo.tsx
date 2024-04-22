import style from "../../styles/totalInfo.module.css"
import React from "react"
interface Props{
    number:string,
    description:string,
    url:string
}

export default function TotalInfo({number,description,url}:Props){
    return(
        
             <div className={style.TotalInfoElement}>
                    <div className={style.TotalInfoElementDescription}>
                     <p style={{fontWeight:'bold',fontSize:32}}>{number}</p>
                     <p style={{fontSize:24}}>{description}</p>
                    </div>
                    <div className={style.TotalInfoElementImgContainer}>
                        <img className={style.TotalInfoElementImg} src={url} alt=""/>
                    </div>
                </div>
    )
}