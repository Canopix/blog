import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Burger from "./Burger";
import AccordeonOptions from './Accordeon';
import { SocialList } from "../components/SocialList";

export default function Navigation() {
  const router = useRouter();
  const [active, setActive] = useState(false);
  return (
    <div className="sidebar">
      <div className="header">
        <div className="dots">
          <div className="red"></div>
          <div className="yellow"></div>
          <div className="green"></div>
        </div>
        <SocialList size="15" fill="white" separation="10px" />
      </div>
      <div className="logo-container">
        <img src="/images/logo.png" width="280" height="280" />
      </div>
      <AccordeonOptions title="Posts by Tags"/>

      <style jsx>{`
        .sidebar {
          border: 1px solid #2b2b2f;
          border-radius: 10px;
          background: #1d1d1d;
          display: flex;
          flex-direction: column;
          padding: 15px;
          height: 100%;
        }

        .header {
          display: flex;
          flex-direction: row;
          width: 100%;
          justify-content: space-between;
        }
        .dots {
          display: flex;
        }

        .dots div {
          border-radius: 99px;
          height: 13px;
          width: 13px;
        }
        .dots div:not(:first-child) {
          margin-left: 5px;
        }

        .red {
          background: #ea6963;
        }
        .yellow {
          background: #f3bc59;
        }
        .green {
          background: #64c15a;
        }
        .logo-container {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </div>
  );
}
