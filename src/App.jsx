import { useState } from "react";
import reactLogo from "./assets/react.svg";
import cardLogo from "/card-logo.svg";
import BgImage from "/bg-main-desktop.png";
import cardFront from "/bg-card-front.png";
import cardBack from "/bg-card-back.png";

import Form from "./Form";
import ConfirmationPage from "./ConfirmationPage";

import "./App.css";

const defaultName = "Jane Appleseed";
const defaultNumber = "1234 5678 9123 0000";

function App() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardExpMonth, setCardExpMonth] = useState("");
  const [cardExpYear, setCardExpYear] = useState("");
  const [cardCVV, setCardCVV] = useState("");
  const [errorMessageIndex, setErrorMessageIndex] = useState([
    false,
    false,
    false,
  ]);

  const [areDetailsCorrect, setAreDetailsCorrect] = useState(false);

  function OnClickConfirm() {
    // e.preventDefault();
    const errorMassageBools = [false, false, false];
    setAreDetailsCorrect(false);
    // Check card number
    let newCardNumber = cardNumber.replace(/\s/g, "");
    if (newCardNumber.length !== 16 || isNaN(newCardNumber)) {
      errorMassageBools[0] = true;
    }
    for (let i = 0; i < newCardNumber.length; i++) {
      if ("9" < newCardNumber[i] || newCardNumber[i] < "0") {
        errorMassageBools[0] = true;
        break;
      }
    }

    // Check exp date
    let expMonth = parseInt(cardExpMonth);
    if (12 < expMonth || expMonth < 1) {
      errorMassageBools[1] = true;
    }
    let expYear = parseInt(cardExpYear);
    if (expYear < 23) {
      errorMassageBools[1] = true;
    }
    // check cvv
    if (cardCVV.length < 3) {
      errorMassageBools[2] = true;
    }
    setErrorMessageIndex(errorMassageBools);
    if (
      !errorMassageBools[0] &&
      !errorMassageBools[1] &&
      !errorMassageBools[2]
    ) {
      setAreDetailsCorrect(true);
    }
  }

  return (
    <>
      <div className="bg-container">
        <img className="bg-image" src={BgImage} />
        <div className="main-container">
          <div className="card-img-container">
            <div className="card-front-container">
              <div className="card-logo"></div>
              <div className="card-number">
                {cardNumber.length === 0 ? defaultNumber : cardNumber}
              </div>
              <div className="card-name-and-exp-date-container">
                <div className="card-name">
                  {cardName.length === 0 ? defaultName : cardName}
                </div>
                <div className="card-exp-date">
                  {(cardExpMonth.length === 0 ? "00" : cardExpMonth) +
                    "/" +
                    (cardExpYear.length === 0 ? "00" : cardExpYear)}
                </div>
              </div>
            </div>
            <div className="card-back-container">
              <div className="card-cvv">
                {cardCVV.length === 0 ? "000" : cardCVV}
              </div>
            </div>
          </div>
          <div className="card-information-form">
            {!areDetailsCorrect ? (
              <Form
                setCardName={setCardName}
                setCardNumber={setCardNumber}
                setCardExpMonth={setCardExpMonth}
                setCardExpYear={setCardExpYear}
                setCardCVV={setCardCVV}
                OnClickConfirm={OnClickConfirm}
                errorMessageIndex={errorMessageIndex}
              />
            ) : (
              <ConfirmationPage />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
