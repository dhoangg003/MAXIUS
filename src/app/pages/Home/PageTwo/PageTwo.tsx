"use client";
import "./pageTwo.scss";
import { useEffect, useRef, useState } from "react";

function PageTwo() {
  const container = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (container.current) {
      setWidth(container.current.clientWidth);
    }
  }, [container.current?.clientWidth]);

  return (
    <div className="page-two" ref={container}>
      <div className="page-two-content">
        <div className="page-two-container">
          <div className={width <= 600 ? "mo1 en text_wr" : "text_wr en"}>
            <div className="text-inline">
              <span className="number">1.</span>
              <span className="note">Self-produced</span> semiconductors
            </div>
            <div className="text-inline">
              <span className="number">2.</span>
              Production and Sales of <span className="note">High-Performance Servers </span>with self-manufactured semiconductors
            </div>
            <div className="text-inline">
              <span className="number">3.</span>
              Construction of operative <span className="note">Blockchain IDC</span>
            </div>
            <div className="text-inline">
              <span className="number">4.</span>
              Establish solutions relating to <span className="note">Blockchain (IPFS)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageTwo;
