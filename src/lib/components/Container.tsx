import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

function Container({ children }: { children: any }) {
  const TopElement = styled.div({
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
    padding: "0.4rem 0rem 0.25rem 0rem",
    width: "100%",
  });

  const ContentElement = styled.div({
    width: "100%",
    padding: "4rem 1rem",
    "@media (min-width: 1200px)": {
      maxWidth: "1200px",
    },
  });

  return (
    <TopElement>
      <ContentElement>{children}</ContentElement>
    </TopElement>
  );
}

export { Container };
