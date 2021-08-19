import { useState, useEffect } from "react";

import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

const useInputFieldStyles = makeStyles(theme => ({
  inputWrapper: {
    display: "flex",
    minWidth: 250,
    flexDirection: "column",
    padding: "10px 10px",
    backgroundColor: "#374954",
    borderRadius: 5
  },
  inputRoot: {
    marginBottom: 5,
    backgroundColor: "#4F6877"
  },
  buttonRoot: {
    textTransform: "capitalize",
    backgroundColor: "#6BBE92"
  }
}));

const InputField = () => {
  const classes = useInputFieldStyles();

  const [showInputPopup, setShowInputPopup] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const openPopup = () => {
    setShowInputPopup(true);
  };

  const closePopup = () => {
    setShowInputPopup(false);
  };

  const handleInputChange = event => {
    const value = event.target.value;
    console.log(value, "qqqq====");
    setInputValue(value);
  };

  const handleConfirm = () => {
    if (!inputValue) {
      return;
    }
    closePopup();
  };

  const handleKeyPress = event => {
    if (!inputValue) {
      return;
    }

    if (event.key === "Enter") {
      closePopup();
    }
  };

  useEffect(() => {
    const url = window.location.href;

    if (url.includes("youtube")) {
      openPopup();
    }
  }, []);

  if (!showInputPopup) {
    return <></>;
  }

  return (
    <Backdrop open={showInputPopup}>
      <div className={classes.inputWrapper}>
        <Input
          classes={{
            root: classes.inputRoot
          }}
          autoFocus={true}
          disableUnderline={true}
          placeholder="I want to watch..."
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <Button
          classes={{
            root: classes.buttonRoot
          }}
          variant="contained"
          onClick={handleConfirm}
        >
          Confirm
        </Button>
      </div>
    </Backdrop>
  );
};

export default InputField;
