/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import { Button } from "./components/Button";
import { css } from "@emotion/react";
import { Modal } from "./components/Modal";
import { Input } from "./components/Input";
import { Toggle } from "./components/Toggle";
import { Navbar, NavbarItem } from "./components/Navbar";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [toggleClicked, setToggleClicked] = useState(false);

  return (
    <div>
      <div css={css({ height: "1000px" })}></div>

      <div
        css={css({
          display: "flex",
          justifyContent: "space-around",
        })}
      >
        <div>
          <Button size="sm">버튼</Button>
        </div>
        <div>
          <Button size="md">버튼</Button>
        </div>
        <div>
          <Button size="lg">버튼</Button>
        </div>
      </div>

      <div
        css={css({
          display: "flex",
          justifyContent: "space-around",
        })}
      >
        <Button color="blue">버튼</Button>
        <Button color="green">버튼</Button>
        <Button color="red">버튼</Button>
        <Button color="white">버튼</Button>
        <Button color="light">버튼</Button>
        <Button color="black">버튼</Button>
        <Button color="text">버튼</Button>
      </div>

      <div
        css={css({
          display: "flex",
          justifyContent: "space-around",
        })}
      >
        <Button color="blue" type="outline">
          버튼
        </Button>
        <Button color="green" type="outline">
          버튼
        </Button>
        <Button color="red" type="outline">
          버튼
        </Button>

        <Button color="black" type="outline">
          버튼
        </Button>
      </div>

      <div
        css={css({
          display: "flex",
          justifyContent: "space-around",
        })}
      >
        <Button color="blue" shape="box">
          버튼
        </Button>

        <Button color="blue" shape="default">
          버튼
        </Button>

        <Button color="blue" shape="rounded">
          버튼
        </Button>
      </div>

      <div
        css={css({
          display: "flex",
          justifyContent: "space-around",
        })}
      >
        <div>
          {" "}
          <Button disabled={true} size="sm">
            버튼
          </Button>
        </div>

        <div>
          <Button disabled={true} size="md">
            버튼
          </Button>
        </div>
        <div>
          <Button disabled={true} size="lg">
            버튼
          </Button>
        </div>
      </div>

      <Button onClick={() => setIsOpen(true)}>모달 열기</Button>

      <Input placeholder="입력..."></Input>

      <Navbar>
        <NavbarItem>rr</NavbarItem>
      </Navbar>

      <Toggle
        checked={toggleClicked}
        onClick={() => setToggleClicked(!toggleClicked)}
      ></Toggle>

      <div css={css({ height: "1000px" })}></div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 css={css({ marginTop: 0 })}>환영합니다</h2>
        <p>이건 모달 테스트 입니다. 만나서 반갑습니다.</p>
        <div css={css({ width: "100%", paddingTop: "1rem" })}>
          <Button
            color="black"
            width="100%"
            type="outline"
            display="flex"
            onClick={() => setIsOpen(false)}
          >
            모달 닫기
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default App;
