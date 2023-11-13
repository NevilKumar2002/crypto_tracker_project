
import { convertDate } from "./convertDate";
export const settingChartData2=({setchartData, Prices})=>{
setchartData({
    labels:Prices.map((price)=> convertDate(price[0])),
    datasets: [
      {
        label: 'Dataset 1',
        data: Prices.map((price)=>(price[1])),
        borderColor: "#3a80e9",
        borderWidth:2,
        fill:true,
        backgroundColor: "rgba(58, 128, 233,0.1)",
        yAxisID: 'y',
        PointerRadius:1,
        tension:0.35
      },
      
    ],
  } )
}