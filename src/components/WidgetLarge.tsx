import Images from "../assets/exportAssets";
const WidgetLarge = () => {
  const widgetLargeList = [
    {
      image: Images.user1,
      altName: "user1",
      userName: "Zosia Nowak",
      date: "2 Jun 2023",
      amount: 120,
      type: "Decline",
    },
    {
      image: Images.user2,
      altName: "user2",
      userName: "Adam Bebek",
      date: "2 Jun 2023",
      amount: 120,
      type: "Pending",
    },
    {
      image: Images.user3,
      altName: "user3",
      userName: "Karolina Wik",
      date: "2 Jun 2023",
      amount: 120,
      type: "Decline",
    },
    {
      image: Images.user4,
      altName: "user4",
      userName: "Angela Rej",
      date: "2 Jun 2023",
      amount: 120,
      type: "Approved",
    },
  ];
  const ButtonComp = ({ type }: { type: string }) => {
    return <button className={"widgetLarge__button " + type}>{type}</button>;
  };
  return (
    <div className="widgetLarge">
      <h3 className="widgetLarge__title">Latest transactions</h3>
      <table className="widgetLarge__table">
        <thead>
          <tr className="widgetLarge__tr">
            <th className="widgetLarge__th">Customer</th>
            <th className="widgetLarge__th">Date</th>
            <th className="widgetLarge__th">Amount</th>
            <th className="widgetLarge__th">Status</th>
          </tr>
        </thead>
        <tbody>
          {widgetLargeList.map((user) => (
            <tr className="widgetLarge__tr">
              <td className="widgetLarge__user">
                <img
                  src={user.image}
                  alt={user.altName}
                  className="widgetLarge__image"
                />
                <span className="widgetLarge__name">{user.userName}</span>
              </td>
              <td className="widgetLarge__date">{user.date}</td>
              <td className="widgetLarge__amount">{user.amount}pln</td>
              <td className="widgetLarge__status">
                <ButtonComp type={user.type} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WidgetLarge;
