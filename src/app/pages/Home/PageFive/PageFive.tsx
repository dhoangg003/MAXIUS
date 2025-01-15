import "./pageFive.scss";

function PageFive() {
  return (
    <div className="page-five">
      {/* {t("navbar.address")} */}
      <div className="fifth-container">
        <div className="fifth-title">
          <h5></h5>
        </div>
        <div className="fifth-wrapper">
          <div className="block-item">
            <h3 className="fifth-name">Company.</h3>
            <div className="email">
              <a href="mailto: support@maxius.io">
                <p className="fifth-contact"> support@maxius.io</p>
                <div className="mail-icon">
                  <p>✉</p>
                </div>
              </a>
            </div>
          </div>
          <div className="block-item">
            <h3 className="fifth-name">Warranty.</h3>
            <div className="email">
              <a href="#">
                <p className="fifth-contact">Learn more {">"}</p>
              </a>
            </div>
          </div>
          <div className="block-item">
            <h3 className="fifth-name">Technical support.</h3>
            <div className="email">
              <a href="mailto: support@maxius.io">
                <p className="fifth-contact">support@maxius.io</p>
                <div className="mail-icon">
                  <p>✉</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageFive;
