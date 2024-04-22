import Style from "../../styles/layoutStyle.module.css"
import {LayoutData} from "../../lib/data"
import LayoutElement from "./LayoutElement"
import Link from "next/link"


interface Props{
    id : number,
    url : string,
    description : string
}
interface LayoutProps {
  children: React.ReactNode,
  userId: number // Предполагается, что userId является строкой
}

export default function Layout({children,userId} : LayoutProps){
    
    return(
       <div className={Style.Container}>
        <div className = {Style.Layout}> 
        {LayoutData.map((data:Props)=>(
          <div key={data.id} >
            <Link style={{color:"black"}} href={`${getLinkPath(data.description,userId)}`}><LayoutElement url={data.url} text={data.description} /></Link>
          </div>
        ))}
        </div>
        <div>{children}</div>
       </div>
    )
}



const getLinkPath=(description:string,userId:number)=>{
  let path:string;
  switch(description)
  {  case 'Dashboard':
          return path = `/${userId}/dashboard`;
     case 'Office Budget':
          return path =`/${userId}/officeBudget`;
     case 'Payroll':
          return path = `/${userId}/payroll`

  }
}