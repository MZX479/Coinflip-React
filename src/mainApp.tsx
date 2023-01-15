import "./mainApp.css";
import { useState } from "react";
import coinImage from "./images/coin.svg";
import actions from "./components/balanceActions";

const App = () => {
  const [value, setValue] = useState(0);

  const dataActions = actions();
  return (
    <div>
      <section className="mainWrapper">
        <section className="gameTableWrapper">
          <section className="winnerSection">
            <span className="winnerString">There is!</span>
            <img src="" alt="" className="coinPic" />
          </section>
          <section className="UX">
            <span className="textBet">Make your bet</span>
            <input
              type="number"
              onInput={() => {
                setValue(value);
              }}
              value={value}
              className="userBet"
              placeholder="here!"
              autoComplete="off"
              min={0}
              max={5}
            />
            <button className="flipButton">Flip!</button>
          </section>
        </section>
        <section className="userBalanceSection">
          <span className="userCurrency">Your coins:</span>
          <div className="ballanceSection">
            <span className="balance">{dataActions.coins} </span>
            <img src={coinImage} className="coinImg" />
          </div>
          <div className="buttonSection">
            <button
              className="increaseBalanceButton"
              onClick={() => {
                dataActions.addBalance(100);
              }}
            >
              Add 100 coins
            </button>
            <button
              className="resetButton"
              onClick={() => {
                dataActions.resetCoins();
              }}
            >
              Reset
            </button>
          </div>
        </section>
      </section>
    </div>
  );
};

export default App;
