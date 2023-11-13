import React, { useState } from "react";
import "./style.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { convertNumbers } from "../../../functions/converNumbers.js";
import { motion } from "framer-motion";
import { Tooltip } from "@mui/material";
import { IconButton } from "@mui/material";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import { addToWatchlist } from "../../../functions/addToWatchlist";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { hasBeenAdded } from "../../../functions/hasBeenAdded";
import { removeFromWatchlist } from "../../../functions/removeFromWatchlist";

function List({ coin, delay, isWatchlistPage }) {
  const [added, setAdded] = useState(hasBeenAdded(coin.id));
  return (
    <a href={`/coin/${coin.id}`}>
      <motion.tr
        style={{ display: isWatchlistPage && !added && "none" }}
        className="list-row"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: delay }}
      >
        <Tooltip placement="bottom-start" title="Image">
          <td className="td-img">
            <img src={coin.image} className="coin-image" />
          </td>
        </Tooltip>
        <Tooltip placement="bottom-start" title="Info">
          <td className="td-info-flex">
            <div className="coin-name-flex">
              <h3 className="coin-symbol coin-symbol-list">{coin.symbol}</h3>
              <p className="coin-name coin-name-list">{coin.name}</p>
            </div>
          </td>
        </Tooltip>
        <Tooltip placement="bottom-start" title="Price">
          <td className="td-price-chip-list">
            {coin.price_change_percentage_24h > 0 ? (
              <div className="info-flex" style={{ marginBottom: 0 }}>
                <div className="price-chip price-chip-list">
                  {coin.price_change_percentage_24h.toFixed(2)} %
                </div>
                <TrendingUpRoundedIcon className="trending-icon trending-icon-list" />
              </div>
            ) : (
              <div className="info-flex" style={{ marginBottom: 0 }}>
                <div className="price-chip price-chip-list red">
                  {coin.price_change_percentage_24h.toFixed(2)} %
                </div>
                <TrendingDownRoundedIcon className="trending-icon red trending-icon-list" />
              </div>
            )}
          </td>
        </Tooltip>
        <Tooltip placement="bottom-start" title="Curent Price">
          <td>
            <p
              className={`coin-price coin-price-list desktop-price ${
                coin.price_change_percentage_24h < 0 && "coin-price-red"
              }`}
            >
              ${coin.current_price.toLocaleString()}
            </p>
            <p
              className={`coin-price coin-price-list mobile-price ${
                coin.price_change_percentage_24h < 0 && "coin-price-red"
              }`}
            >
              $
              {convertNumbers(
                coin.current_price < 1
                  ? parseFloat(coin.current_price).toFixed(3)
                  : parseInt(coin.current_price)
              )}
            </p>
          </td>
        </Tooltip>
        <Tooltip placement="bottom-start" title="Total Volume">
          <td className="td-mkt-cap">
            <span className="coin-total_volume">
              {coin.total_volume.toLocaleString()}
            </span>
          </td>
        </Tooltip>
        <Tooltip placement="bottom-start" title="Market Cap">
          <td className="td-mkt-cap">
            <span className="coin-total_volume">
              ${coin.market_cap.toLocaleString()}
            </span>
          </td>
        </Tooltip>
        <Tooltip placement="bottom-start" title="Market Cap">
          <td className="mobile-td-cap">
            <span className="coin-total_volume coin-total_volume-list">
              ${convertNumbers(parseFloat(coin.market_cap))}
            </span>
          </td>
        </Tooltip>
        <td style={{ width: "fit-content" }}>
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
              />
            ) : (
              <StarBorderRoundedIcon
                className={`watchlist-icon ${
                  coin.price_change_percentage_24h < 0 && "watchlist-icon-red"
                } `}
              />
            )}
          </IconButton>
        </td>
      </motion.tr>
    </a>
  );
}

export default List;




























// import React from "react";
// import "./style.css";
// import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
// import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
// import { Tooltip } from "@mui/material";
// import convertToNumber from "../../../functions/converToNumber";
// import { Link } from "react-router-dom";
// function List({ coin }) {
//   return (
//     <Link to ={`/coin/${coin.id}`}>
//     <tr className="list-row">
//         <Tooltip title="Coin Logo">
//          <td className="td-image">
//             <img src={coin.image}   className="coin-logo"/>
//             </td>
//             </Tooltip>
//             <Tooltip title="Coin Symbol & Name">
//             <td>
         
//           <div className="name-col">
//             <p className="coin-symbol">{coin.symbol}</p>
//             <p className="coin-name">{coin.name}</p>
//           </div> 

//           </td>
//           </Tooltip>
//          {coin.price_change_percentage_24h>=0? (
//             <Tooltip title="Price Change in 24 Hours">
//          <td className="chip-flex">
//         {/* <div className="price-chip">{coin.price_change_percentage_24h.toFixed(2)}%</div> */}
//         <div className="icon-chip td-icon"><TrendingUpRoundedIcon /></div>
        
        
//         </td></Tooltip>):(
//           <Tooltip title="Price Change in 24 Hours">  
//         <td className="chip-flex">
//         {/* <div className="price-chip chip-red">{coin.price_change_percentage_24h.toFixed(2)}%</div> */}
//         <div className="icon-chip-red td-icon">< TrendingDownRoundedIcon /></div>
//         </td>
//         </Tooltip>
//         )
//  }

//  <Tooltip title="current Price"><td><h3 className="coin-price td-center-align" style={{color:coin.price_change_percentage_24h>=0 ? "var(--green)" :"var(--red)"}}>${coin.current_price.toLocaleString()}</h3></td></Tooltip>
//  <Tooltip title="Total Volume "><td><p className="total-volume td-right-align td-total-volume">{coin.total_volume.toLocaleString()} </p></td></Tooltip>
//  <Tooltip title="Market Cap"><td className="desktop-td-mkt"><p className="total-volume td-right-align">${coin.market_cap.toLocaleString()} </p></td></Tooltip>
//  <Tooltip title="Market Cap"><td className="mobile-td-mkt"><p className="total-volume td-right-align">${convertToNumber(coin.market_cap)} </p></td></Tooltip>
 

//      </tr>
//      </Link>
//   );
// }
// export default List;
