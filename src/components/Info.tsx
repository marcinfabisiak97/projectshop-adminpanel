import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

const Info = () => {
  const infoList = [
    { title: "Revanue", money: 2500, moenyRate: -12, negative: true },
    { title: "Sales", money: 5500, moenyRate: -1, negative: true },
    { title: "Cost", money: 2300, moenyRate: +2, negative: false },
  ];
  return (
    <div className="info">
      {infoList.map((info, index) => (
        <div className="info__item" key={index}>
          <span className="info__title">{info.title}</span>
          <div className="info__moneyContainer">
            <span className="info__money">{info.money}PLN</span>
            <span className="info__moneyRate">
              {info.moenyRate}
              {info.negative ? (
                <ArrowDownward
                  className={`info__icon  ${info.negative ? "negative" : ""}`}
                />
              ) : (
                <ArrowUpward
                  className={`info__icon  ${info.negative ? "negative" : ""}`}
                />
              )}
            </span>
          </div>
          <span className="info__subtitle">Comapre to last month</span>
        </div>
      ))}
    </div>
  );
};

export default Info;
