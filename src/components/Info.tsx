import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

const Info = () => {
  return (
    <div className="info">
      <div className="info__item">
        <span className="info__title">Revanue</span>
        <div className="info__moneyContainer">
          <span className="info__money">2,500PLN</span>
          <span className="info__moneyRate">
            -12
            <ArrowDownward className="info__icon negative" />
          </span>
        </div>
        <span className="info__subtitle">Comapre to last month</span>
      </div>
      <div className="info__item">
        <span className="info__title">Sales</span>
        <div className="info__moneyContainer">
          <span className="info__money">5,500PLN</span>
          <span className="info__moneyRate">
            -1
            <ArrowDownward className="info__icon negative" />
          </span>
        </div>
        <span className="info__subtitle">Comapre to last month</span>
      </div>
      <div className="info__item">
        <span className="info__title">Cost</span>
        <div className="info__moneyContainer">
          <span className="info__money">2,300PLN</span>
          <span className="info__moneyRate">
            +2
            <ArrowUpward className="info__icon" />
          </span>
        </div>
        <span className="info__subtitle">Comapre to last month</span>
      </div>
    </div>
  );
};

export default Info;
