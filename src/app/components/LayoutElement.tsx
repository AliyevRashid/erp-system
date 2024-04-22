import Style from "../../styles/layoutElementStyle.module.css"

interface Props{
    url:string,
    text:string,
}


export default function LayoutElement({url,text}:Props){

  return(
          <div className={Style.Container}>
            
              <div className={Style.ImageContainer}>
                  <img src ={url} alt="ElementIcon" className={Style.image}/>
              </div>
              <div className ={Style.DescriptionContainer}>{text}</div>
          </div>
        )
}

