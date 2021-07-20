import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const AccordeonOptions = ({ title, options = ["a", "b"], isOpen = false }) => {
  const [open, setOpen] = useState(isOpen);
  return (
    <div className="container">
      <div className="title">
        {<p>{title}</p>}
        <div onClick={() => setOpen(!open)}>
          <FontAwesomeIcon
            size="sm"
            icon={open ? faChevronUp : faChevronDown}
            color="#8B8B8B"
          />
        </div>
      </div>

      {open &&
        options.map((item) => (
          <div className="button-with-gradient-border">{item}</div>
        ))}
      <style jsx>
        {`
          .container {
            color: #8b8b8b;
            width: 100%;
            display: flex;
            flex-direction: column;
            padding: 3px;
          }
          .title {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .section {
            padding: 5px;
            margin-bottom: 5px;
            min-height: 25px;
            display: flex;
            align-items: center;
          }
          .button-with-gradient-border {
            background-image: radial-gradient(circle at 100% 100%, transparent 19px, #f40101 19px, #f40101 20px, transparent 20px), linear-gradient(to right, #f40101, #f99090), radial-gradient(circle at 0% 100%, transparent 19px, #f99090 19px, #f99090 20px, transparent 20px), linear-gradient(to bottom, #f99090, #4435bb), radial-gradient(circle at 0% 0%, transparent 19px, #4435bb 19px, #4435bb 20px, transparent 20px), linear-gradient(to left, #4435bb, #bbbb25), radial-gradient(circle at 100% 0%, transparent 19px, #bbbb25 19px, #bbbb25 20px, transparent 20px), linear-gradient(to top, #bbbb25, #f40101);
            background-size: 10px 10px, calc(100% - 40px) 1px, 20px 20px, 1px calc(100% - 40px);
            background-position: top left,top center,top right,center right, bottom right,bottom center,bottom left,center left;
            background-repeat: no-repeat;
            }
        `}
      </style>
    </div>
  );
};

export default AccordeonOptions;
