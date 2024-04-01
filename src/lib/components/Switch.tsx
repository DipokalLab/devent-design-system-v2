/** @jsxImportSource @emotion/react */

import React, { createContext, useContext, useEffect, useState } from "react";

import { css } from "@emotion/react";
import { Button } from "./Button";

const SwitchContext = createContext(undefined);

function Switch({ children }: { children?: any }) {
  const [name, setName] = useState<string | any>(
    "switch_" + String(Math.random())
  );
  const [selectedValue, setSelectedValue] = useState("");

  const updateValue = (value: string) => {
    setSelectedValue(value);
  };
  const values: any = { name, selectedValue, updateValue };
  return (
    <SwitchContext.Provider value={values}>
      <div
        css={css({
          display: "flex",
          flexDirection: "row",
          padding: "0.3rem",
          gap: "0.3rem",
          borderRadius: "0.8rem",
          border: "0.1rem solid #F0F0F4",
        })}
      >
        {children}
      </div>
    </SwitchContext.Provider>
  );
}

function SwitchItem({
  children,
  value = "",
  selected = false,
}: {
  children?: any;
  value?: string;
  selected?: boolean;
}) {
  const { name, selectedValue, updateValue }: any = useContext(SwitchContext);
  const [id, setId] = useState<string | any>(
    "switchitem_" + String(Math.random())
  );

  const handleClick = () => {
    updateValue(value);
  };

  useEffect(() => {
    if (selected) {
      updateValue(value);
    }
  }, []);

  return (
    <Button
      onClick={handleClick}
      color={selectedValue == value ? "light" : "text"}
    >
      {children}
    </Button>
  );
}

export { Switch, SwitchItem };
