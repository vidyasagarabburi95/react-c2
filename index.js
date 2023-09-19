const element = (
  // Write your code here.
  <div className="bgimage">
    <h1>Congratulations</h1>
    <div className="bluebg">
      <div>
        <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png" />
        <p>Kiran V</p>
      </div>
      <p className="margin p2">
        Vishnu institute of computer education and technology,hyderabad
      </p>
      <div>
        <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
