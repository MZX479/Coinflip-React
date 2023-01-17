import "./mainApp.css";
import { useState } from "react";
import coinImage from "./images/coin.svg";
import tailsPng from "./images/tails.png";
import headsPng from "./images/heads.png";
import { Actions } from "./components";
import { game } from "./components";
import { GiCoinflip } from "react-icons/gi";

type UserChoice = "heads" | "tails";

type CoinSide = {
  name: string;
  picture: string;
};

const App = () => {
  const [choice, setChoice] = useState<UserChoice>();

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
  const [notify, setNotify] = useState("");
  const [winnerPic, setWinnerPic] = useState("");
  const dataActions = Actions();

  const limit: 1000 = 1000;

  if (dataActions.coins > limit) {
    window.alert(`You cannot have much than ${limit} coins`);
    dataActions.setBalance(limit);
  }

  if (value && value < 0) {
    window.alert("Please provide a correct amount!");
  }

  let winner: CoinSide;

  const result = () => {
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

    if (winner.name === choice) {
      dataActions.addBalance(value! * 2);
      setNotify("Congratulations: ");
      setWinnerPic(winner.picture);
    } else {
      dataActions.removeBalance(value!);
      setNotify("We are sorry: ");
      setWinnerPic(winner.picture);
    }
  };

  return (
    <div>
      <section className="mainWrapper">
        <section className="gameTableWrapper">
          <section className="winnerSection">
            <span className="logo">Coinflip</span>
            <section className="notifySection">
              <span className="notify">{notify}</span>
              <img src={winnerPic} alt="" className="coinPic" />
            </section>
          </section>
          <section className="UX">
            <section className="buttonUserChoicesSection">
              <button
                className="tailsButton"
                onClick={() => {
                  setChoice("tails");
                }}
              >
                Tails
              </button>
              <button
                className="headsButton"
                onClick={() => {
                  setChoice("heads");
                }}
              >
                Heads
              </button>
            </section>
            <section className="uxSection">
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
              <input
                type="submit"
                className="finalChoice"
                value={choice || ""}
                autoComplete="off"
              />
              <button
                className="flipButton"
                onClick={() => {
                  if (dataActions.coins < value!) {
                    window.alert(`You do not have this amount of coins!`);
                    return;
                  }
                  result();
                }}
              >
                Flip! {<GiCoinflip className="flipIcon" />}
              </button>
            </section>
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
