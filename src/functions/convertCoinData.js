export const coinObject = ({setState, data})=>{
    console.log("data", data)
    setState({
        id: data.id,
        name: data.name,
        symbol: data.symbol,
        image: data.image.large,
        desc: data.description.en,
        price_change_percentage_24h:data.market.data.price_change_percentage_24h,
        total_volume:data.market.data.total_volume.usd,
        current_price:data.market.data.current_price.usd,
        market_cap:data.market.data.market_cap.usd,
    }) 
}