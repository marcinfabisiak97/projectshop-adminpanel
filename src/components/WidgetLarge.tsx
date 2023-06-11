import Images from "../assets/exportAssets";
const WidgetLarge = () => {
  const ButtonComp = ({ type }: { type: string }) => {
    return <button className={"widgetLarge__button " + type}>{type}</button>;
  };
  return (
    <div className="widgetLarge">
      <h3 className="widgetLarge__title">Latest transactions</h3>
      <table className="widgetLarge__table">
        <tr className="widgetLarge__tr">
          <th className="widgetLarge__th">Customer</th>
          <th className="widgetLarge__th">Date</th>
          <th className="widgetLarge__th">Amount</th>
          <th className="widgetLarge__th">Status</th>
        </tr>
        <tr className="widgetLarge__tr">
          <td className="widgetLarge__user">
            <img
              src={Images.adminPhoto}
              alt="user0"
              className="widgetLarge__image"
            />
            <span className="widgetLarge__name">Martin Fabi</span>
          </td>
          <td className="widgetLarge__date">2 Jun 2023</td>
          <td className="widgetLarge__amount">120pln</td>
          <td className="widgetLarge__status">
            <ButtonComp type="Decline" />
          </td>
        </tr>
        <tr className="widgetLarge__tr">
          <td className="widgetLarge__user">
            <img
              src={Images.adminPhoto}
              alt="user0"
              className="widgetLarge__image"
            />
            <span className="widgetLarge__name">Martin Fabi</span>
          </td>
          <td className="widgetLarge__date">2 Jun 2023</td>
          <td className="widgetLarge__amount">120pln</td>
          <td className="widgetLarge__status">
            <ButtonComp type="Pending" />
          </td>
        </tr>
        <tr className="widgetLarge__tr">
          <td className="widgetLarge__user">
            <img
              src={Images.adminPhoto}
              alt="user0"
              className="widgetLarge__image"
            />
            <span className="widgetLarge__name">Martin Fabi</span>
          </td>
          <td className="widgetLarge__date">2 Jun 2023</td>
          <td className="widgetLarge__amount">120pln</td>
          <td className="widgetLarge__status">
            <ButtonComp type="Approved" />
          </td>
        </tr>
        <tr className="widgetLarge__tr">
          <td className="widgetLarge__user">
            <img
              src={Images.adminPhoto}
              alt="user0"
              className="widgetLarge__image"
            />
            <span className="widgetLarge__name">Martin Fabi</span>
          </td>
          <td className="widgetLarge__date">2 Jun 2023</td>
          <td className="widgetLarge__amount">120pln</td>
          <td className="widgetLarge__status">
            <ButtonComp type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLarge;
