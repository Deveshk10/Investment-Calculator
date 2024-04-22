const UserInput = ({ onChange, userInput }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p className="">
          <label for="">Initail Investment</label>
          <input
            type="number"
            required
            name=""
            value={userInput.initialInvestment}
            onChange={(e) => onChange("intialInvestment", e.target.value)}
          />
        </p>

        <p className="">
          <label for="">Annual Investment</label>
          <input
            type="number"
            required
            name=""
            value={userInput.annualInvestment}
            onChange={(e) => onChange("annualInvestment", e.target.value)}
          />
        </p>
      </div>

      <div className="input-group">
        <p className="">
          <label for="">Expected Return</label>
          <input
            type="number"
            required
            name=""
            value={userInput.expectedReturn}
            onChange={(e) => onChange("expectedReturn", e.target.value)}
          />
        </p>

        <p className="">
          <label for="">Duration</label>
          <input
            type="number"
            required
            name=""
            value={userInput.duration}
            onChange={(e) => onChange("duration", e.target.value)}
          />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
