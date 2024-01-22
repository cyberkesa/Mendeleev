import "../ElectronConfiguration.css";

const ElectronConfiguration = () => {
  return (
    <div className="e-conf-table">
      <div className="mini-table">
        <div className="div1">s</div>
        <div className="div2"></div>
        <div className="div3"></div>
        <div className="div4">
          <span className="letter-notes">d</span>
        </div>
        <div className="div5">
          <span className="letter-notes">p</span>
        </div>
        <div className="div6"></div>
        <div className="div7">
          <span className="letter-notes">f</span>
        </div>
      </div>
      <h4 className="notes">Notes</h4>
      <ul className="notes-li">
        <li>1 kj/mol 96.485 eV</li>
        <li>all elements are implied to have an oxidarion state zero</li>
      </ul>
    </div>
  );
};

export default ElectronConfiguration;
