const MyApp = () => {
  const buttonText = { text: "click me!" };

  return (
    <div>
      <label className="label" htmlFor="name">
        Enter name:
      </label>
      <input type="text" id="name" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText.text}
      </button>
    </div>
  );
};

export default MyApp;
