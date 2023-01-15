import "./mainApp.css";
import { useState } from "react";
import coinImage from "./images/coin.svg";
import tailsPng from "./images/tails.png";
import headsPng from "./images/heads.png";
import { Actions } from "./components";
import { game } from "./components";
import { GiCoinflip } from "react-icons/gi";

type CoinSide = {
  name: string;
  picture: string;
};

const App = () => {
  const tails: CoinSide = {
    name: "tails",
    picture: tailsPng,
  };

  const heads: CoinSide = {
    name: "heads",
    picture: headsPng,
  };

  const actualGame = game();
  const [value, setValue] = useState<number>();
  const dataActions = Actions();

  if (value && value < 0) {
    window.alert("Please provide a correct amount!");
  }

  let winner;

  switch (true) {
    case actualGame > 0 && actualGame < 50:
      winner = heads;
      break;

    case actualGame > 50 && actualGame < 101:
      winner = tails;
      break;

    default:
      break;
  }

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
              onInput={(e) => {
                setValue(Number(e.currentTarget.value));
              }}
              className="userBet"
              placeholder="here!"
              autoComplete="off"
              min={0}
              max={5}
            />
            <button className="flipButton">
              Flip! {<GiCoinflip className="flipIcon" />}
            </button>
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
