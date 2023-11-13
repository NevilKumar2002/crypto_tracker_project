import React, { useState } from "react";
import "./style.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { motion } from "framer-motion";
import { IconButton } from "@mui/material";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import { addToWatchlist } from "../../../functions/addToWatchlist";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { hasBeenAdded } from "../../../functions/hasBeenAdded";
import { removeFromWatchlist } from "../../../functions/removeFromWatchlist";

function Grid({ coin, delay, isWatchlistPage }) {
  const [added, setAdded] = useState(hasBeenAdded(coin.id));

  return (
    <a href={`/coin/${coin.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: delay }}
        className={`grid-container ${
          coin.price_change_percentage_24h < 0 && "grid-container-red"
        }`}
        style={{ display: isWatchlistPage && !added && "none" }}
      >
        <div className="info-flex">
          <div className="coin-info-flex">
            <img src={coin.image} className="coin-image" />
            <div className="coin-name-flex">
              <h3 className="coin-symbol">{coin.symbol}</h3>
              <p className="coin-name">{coin.name}</p>
            </div>
          </div>

          <IconButton
            onClick={(e) => {
              e.preventDefault();
              if (added) {
                removeFromWatchlist(coin.id);
                setAdded(false);
              } else {
                addToWatchlist(coin.id);
                setAdded(true);
              }
            }}
          >
            {added ? (
              <StarRoundedIcon
                className={`watchlist-icon ${
                  coin.price_change_percentage_24h < 0 && "watchlist-icon-red"
                } `}
                sx={{ fontSize: "2rem !important" }}
              />
            ) : (
              <StarBorderRoundedIcon
                className={`watchlist-icon ${
                  coin.price_change_percentage_24h < 0 && "watchlist-icon-red"
                } `}
                sx={{ fontSize: "2rem !important" }}
              />
            )}
          </IconButton>
        </div>

        {coin.price_change_percentage_24h > 0 ? (
          <div className="coin-info-flex">
            <div className="price-chip">
              {coin.price_change_percentage_24h.toFixed(2)} %
            </div>
            <TrendingUpRoundedIcon className="trending-icon" />
          </div>
        ) : (
          <div className="coin-info-flex">
            <div className="price-chip red">
              {coin.price_change_percentage_24h.toFixed(2)} %
            </div>
            <TrendingDownRoundedIcon className="trending-icon red" />
          </div>
        )}
        <p
          className={`coin-price ${
            coin.price_change_percentage_24h < 0 && "coin-price-red"
          }`}
        >
          ${coin.current_price.toLocaleString()}
        </p>
        <p className="coin-name-2">
          Total Volume:
          <span className="coin-total_volume">
            {" "}
            {coin.total_volume.toLocaleString()}
          </span>
        </p>
        <p className="coin-name-2">
          Market Cap:
          <span className="coin-total_volume">
            {" "}
            ${coin.market_cap.toLocaleString()}
          </span>
        </p>
      </motion.div>
    </a>
  );
}

export default Grid;














// import React from "react";
// import "./style.css";
// import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
// import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
// import { Link } from "react-router-dom";
//  function Grid({coin}){
//     // console.log(coin);
//     return(
//         <Link to ={`/coin/${coin.id}`}>
//         <div className={`grid-container ${coin.price_change_percentage_24h < 0 && "grid-container-red"}`}>
//           <div className="info-flex">
//             <img src={coin.image}  alt="image" className="coin-logo"/>
         
//           <div className="name-col">
//             <p className="coin-symbol">{coin.symbol}</p>
//             <p className="coin-name">{coin.name}</p>
//           </div> 

//           </div>
//          {coin.price_change_percentage_24h>=0? (<div className="chip-flex">
//         <div className="price-chip">{coin.price_change_percentage_24h.toFixed(2)}%</div>
//         <div className="icon-chip"><TrendingUpRoundedIcon /></div>
        
        
//         </div>):(
//         <div className="chip-flex">
//         <div className="price-chip chip-red">{coin.price_change_percentage_24h.toFixed(2)}%</div>
//         <div className="icon-chip-red">< TrendingDownRoundedIcon /></div>
//         </div>
//         )
//  }
//  <div className="info-container">
//  <h3 className="coin-price" style={{color:coin.price_change_percentage_24h>=0 ? "var(--green)" :"var(--red)"}}>${coin.current_price.toLocaleString()}</h3>
//  <p className="total-volume">Total Volume:{coin.total_volume.toLocaleString()} </p>
//  <p className="total-volume">Market Cap:${coin.market_cap.toLocaleString()} </p>
 
//  </div>
//         </div>
//         </Link>
//     )
// }
// export default Grid;