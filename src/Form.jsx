import "./App.css";

const defaultName = "Jane Appleseed";
const defaultNumber = "1234 5678 9123 0000";

function Form(obj) {
  return (
    <div>
      <div className="input-label">CARDHOLDER NAME</div>
      <input
        type="text"
        placeholder="e.g. Jane Appleseed"
        maxLength={25}
        onChange={(e) => {
          obj.setCardName(e.target.value);
        }}
      />
      <div className="input-label">CARD NUMBER</div>
      <input
        className={!obj.errorMessageIndex[0] ? "" : "error"}
        type="text"
        // value={cardNumber}
        maxLength={19}
        placeholder="e.g. 1234 5678 9123 0000"
        onChange={(e) => {
          obj.setCardNumber(e.target.value);
          //   styleCardNumber();
        }}
      />
      <div
        className={
          !obj.errorMessageIndex[0] ? "error-message" : "error-message active"
        }
      >
        Wrong format, number only
      </div>
      <div className="card-exp-date-and-cvv-input">
        <div className="exp-date-container">
          <div className="input-label">EXP. DATE(MM/YY)</div>
          <div className="inputs">
            <input
              className={!obj.errorMessageIndex[1] ? "" : "error"}
              type="text"
              placeholder="MM"
              maxLength={2}
              onChange={(e) => {
                obj.setCardExpMonth(e.target.value);
              }}
            />
            <input
              className={!obj.errorMessageIndex[1] ? "" : "error"}
              type="text"
              placeholder="YY"
              maxLength={2}
              onChange={(e) => {
                obj.setCardExpYear(e.target.value);
              }}
            />
          </div>
          <div
            className={
              !obj.errorMessageIndex[1]
                ? "error-message"
                : "error-message active"
            }
          >
            Can't be blank
          </div>
        </div>
        <div className="cvv-container">
          <div className="input-label">CVC</div>
          <input
            className={!obj.errorMessageIndex[2] ? "" : "error"}
            type="text"
            placeholder="e.g. 123"
            maxLength={3}
            onChange={(e) => {
              obj.setCardCVV(e.target.value);
            }}
          />
          <div
            className={
              !obj.errorMessageIndex[2]
                ? "error-message"
                : "error-message active"
            }
          >
            Can't be blank
          </div>
        </div>
      </div>
      <button onClick={(e) => obj.OnClickConfirm(e)}>Confirm</button>
    </div>
  );
}

export default Form;
