import React, { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Input } from "../lib/components/Input";
import { Modal } from "../lib/components/Modal";
import { Button } from "../lib/components/Button";
import { Collapse, CollapseItem } from "../lib/components/Collapse";

export function Demo() {
  return (
    <div>
      <Collapse>
        <CollapseItem title={"Q. 이건 무슨 기능이져"}>
          컬렙슨데요. 발음이 이게 맞는진 ㅁ르겠는데 무튼 디자이너들이 부르는
          이름입니다. 참고로 이거 처음 개발해봐요. 다른 컴포넌트는 잘만
          만들었는데.ㅋㅋ
        </CollapseItem>
        <CollapseItem title={"Q. 이거 만든 사람이 누구인지 알 수 있을까요?"}>
          이 디자인 시스템을 만든 사람의 정체는 한국에 거주중인 허형준입니다.
          2020년에 1인 회사를 굉장히 실용적인 이유로 창업하고 현재까지 매출 없이
          계속 도전해보고 있는 사람이죠. 중간에 돈 받고 프리랜서 해봤다가 이건
          도저히 사람이 할게 아니라면서 떄려치고 이런거 만들고 있는 사람입니다.
          근데 지금 취업할지 학교 계속 다닐지, 군대 갈지, 창업할지, 해외
          유학갈지, 학회 논문 쓸지, 굉장히 많은 선택지 땜에 고심하고 있다고
          합니다.
        </CollapseItem>
      </Collapse>
    </div>
  );
}

const meta = {
  title: "Components/Collapse",
  component: Demo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Collapse>;

export default meta;
type Story = StoryObj<typeof meta>;
