import React from "react";
import NorthRoundedIcon from "@mui/icons-material/NorthRounded";
import "./style.css";
function TopButton() {
  let mybutton = document.getElementById("myBtn");

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      mybutton.style.display = "flex";
    } else {
      mybutton.style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <div className="top-btn" id="myBtn" onClick={() => topFunction()}>
      <NorthRoundedIcon className="top-icon" sx={{ fontSize: "2rem" }} />
    </div>
  );
}

export default TopButton;






















// import React from "react";
// import "./style.css";
// import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
// function BackToTop(){
//     let mybutton = document.getElementById("myBtn");
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "flex";
//   } else {
//     mybutton.style.display = "none";
//   }
// }
// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }
//     return(
//         <div className="back-to-top-btn" id="myBtn" onClick={()=>topFunction()}> 
//         <ArrowUpwardRoundedIcon style={{color:"var(--blue"}} />
//             </div>
//     )
// }
// export default BackToTop;