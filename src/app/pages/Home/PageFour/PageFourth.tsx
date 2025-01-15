"use client";

import "./pageFourth.scss";

function PageFourth() {
  // Dữ liệu giả định cho các phần
  const data = {
    history: [
      { year: 2021, details: "Rebrand the Company name to Maxius, 1st Pan-Governmental Information Resource Integration HW3" },
      { year: 2020, details: "2nd construction of AI-based adaptive security system, SPC Certification: TOP 5 Rank record in the world of storage" },
      { year: 2019, details: "Development of Genome Analysis" },
    ],
    partners: [
      "Cheongwadae, KHNP, Ministry of National Defense, Gunpo city, Korea Agro-Fisheries&Food Trade Corporation, JeollaNamdo, KMRB, JDC, Korea Housing Finance Corporation.",
      "Korea Workers Compensation & Welfare Service, Supreme Court of Korea, IPET, LH, National Gugak Center, Gyeonggi Provincial Police Agency.",
      "NCIS, KPIC, and more than 1,000 corporate and government partners globally.",
    ],
    patents: [
      "High-speed data I/O semiconductor Chip: FPGA/CPLD/ASIC design and manufacturing technology, possess TPU development capability.",
      "Intelligent Pattern Analysis Algorithm: Hybrid Cache algorithm that follows data pattern analysis.",
      "OS and SSD optimization: Device Driver optimization technology differing for each OS, storage resource.",
    ],
    awards: [
      "Awarded the Sejong Award at the KR Patent Awards: Received the highest domestic patent award for outstanding performance and energy-saving technology.",
      "Certified by Korea Excellent Product Designation: Certification of the only excellent procurement registered product in Korea in the server field that has been recognized for its high-performance system quality.",
    ],
  };

  return (
    <div className="page-fourth">
      <div className="fourth-container">
        <h1 className="fourth-title">STORY</h1>

        <div className="column-container">
          {/* History Section */}
          <div className="column">
            <h2 className="section-title">History</h2>
            {data.history.map((item, index) => (
              <div key={index} className="item">
                <h3 className="year">{item.year}</h3>
                <p className="details">{item.details}</p>
              </div>
            ))}
          </div>

          {/* Partners Section */}
          <div className="column">
            <h2 className="section-title">Partners</h2>
            {data.partners.map((partner, index) => (
              <p key={index} className="details">{partner}</p>
            ))}
          </div>

          {/* Patents Section */}
          <div className="column">
            <h2 className="section-title">Patents</h2>
            {data.patents.map((patent, index) => (
              <p key={index} className="details">{patent}</p>
            ))}
          </div>

          {/* Awards Section */}
          <div className="column">
            <h2 className="section-title">Awards</h2>
            {data.awards.map((award, index) => (
              <p key={index} className="details">{award}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageFourth;
