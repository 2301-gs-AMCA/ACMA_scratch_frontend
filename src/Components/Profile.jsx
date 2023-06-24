export default function Profile() {
  return (
    <div className="profile">
      <h1 className="userHeader">Welcome, User!</h1>
      <div className="userInfo">
        <ul className="userInfo">
          <li>username</li>
          <li>recently purchased items</li>
          <li>security info</li>
          <li>settings</li>
        </ul>
      </div>
      <div className="itemsULike">
        <h2>Items You May Like</h2>
        <ul className="likedItems">
          <li>List of items based on your search history</li>
        </ul>
      </div>
      <div className="orderHistory">
        <ul className="history">
          <h2>Order History</h2>
          <li className="historyItems">Your Recently Ordered Items</li>
        </ul>
      </div>
    </div>
  );
}
