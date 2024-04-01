/** @jsxImportSource @emotion/react */

import React, { createContext, useContext, useEffect, useState } from "react";

import { css } from "@emotion/react";

const RadioContext = createContext(undefined);

function Radio({ children, onChange }: { children?: any; onChange?: any }) {
  const [name, setName] = useState<string | any>(
    "radio_" + String(Math.random())
  );
  const [value, setValue] = useState<any>("");

  const updateValue = (e: any) => {
    setValue(e.target.value);
  };

  const handleOnChange = () => {
    try {
      onChange({
        target: {
          value: value,
        },
      });
    } catch (error) {}
  };

  useEffect(() => {
    handleOnChange();
  }, [value]);

  const values: any = { name, updateValue };
  return (
    <RadioContext.Provider value={values}>
      <div
        css={css({
          display: "flex",
          flexDirection: "column",
          gap: "0.4rem",
        })}
      >
        {children}
      </div>
    </RadioContext.Provider>
  );
}

function RadioItem({ children, value }: { children?: any; value?: any }) {
  const { name, updateValue }: any = useContext(RadioContext);
  const [id, setId] = useState<string | any>(
    "radioitem_" + String(Math.random())
  );
  return (
    <div
      css={css({
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: "0.2rem",
      })}
    >
      <input
        css={css({
          position: "relative",
          border: "0.1rem solid #6e7073",
          backgroundColor: "#ffffff",
          transition: "0.3s",
          outline: "none",
          appearance: "none",
          width: "1rem",
          height: "1rem",
          borderRadius: "50%",
          top: "-3px",
          ":checked::after": {
            top: "2px",
            left: "2px",
            width: "9px",
            height: "9px",
            borderRadius: "5rem",
            transition: "all 150ms ease 0s",
          },
          ":checked": {
            border: "0.1rem solid #000000",
          },
          ":hover": {
            backgroundColor: "#ebedf0",
          },
          ":after": {
            content: '""',
            position: "absolute",
            backgroundColor: "#000000",
            top: "6px",
            left: "6px",
            width: "0px",
            height: "0px",
            transition: "all 0.1s ease 0s",
          },
        })}
        type="radio"
        id={id}
        name={name}
        value={value}
        onClick={updateValue}
      ></input>
      <label
        css={css({
          fontFamily: "'Noto Sans KR', sans-serif",
          fontSize: "0.9rem",
        })}
        htmlFor={id}
      >
        {children}
      </label>
    </div>
  );
}

export { Radio, RadioItem };
