

export default function QuickActionCard({ActionData}){
    return(
            <div>  
              <h2 className="font-semibold text-[16px]">{ActionData.title}</h2>
              <span className="text-[14px] text-[#647488]">{ActionData.subtitle}</span>
            </div>
    )
}