import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { Button } from "./Styles";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 500) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    // <button className='btn btn-outline-danger'><i class="bi bi-arrow-up-circle-fill" onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}} ></i></button>
    <Button>
      {/* <i class="bi bi-arrow-up-circle-fill" onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}} ></i> */}
      <FaArrowCircleUp
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none", color: "red" }}
      />
    </Button>
  );
};

export default ScrollButton;
