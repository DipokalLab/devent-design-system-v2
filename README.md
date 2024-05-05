<h1 align="center">🖨️ devent-design-system v2</h1>

다시 돌아온 디자인 시스템 v2 입니다. 2년전에 디자인 시스템 v1을 구축했었고 잘 사용했지만 기술 스택의 변화로 지금은 레거시가 되어버린지 오래되었습니다. 그동안 새로운 디자인 시스템을 구축하려 했으나 시간이 허락하지 않아 미뤄두었는데 이제야 구현하게 되었습니다. 또한 누구나 디자인 시스템을 자유롭게 사용할 수 있도록 MIT 라이선스로 배포해 두었습니다.

이 디자인 시스템의 목적은 다음과 같습니다.

- 시간 절약
- 디자인의 심미성과 통일성
- 개인적 목적이 아닌 범용적으로 사용 가능한 디자인 시스템

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/DipokalLab/devent-design-system-v2/blob/HEAD/LICENSE)
[![npm latest package](https://img.shields.io/npm/v/deventds2/latest.svg)](https://www.npmjs.com/package/deventds2)
[![npm downloads](https://img.shields.io/npm/dm/deventds2.svg)](https://www.npmjs.com/package/deventds2)

## Documentation

[https://design.devent.kr](https://design.devent.kr/) 에 데모코드와 컴포넌트 사용 방법이 명시되어 있습니다.

## Install

```
npm i deventds2
```

## Usage

React 상단에 ThemeProvider 컨텍스트를 추가해야 합니다. 다크모드와 색상의 동적 변환을 위한 필수 설정입니다.

```tsx
import { ThemeProvider } from "deventds2";

function Index() {
  return <ThemeProvider>...Component Router</ThemeProvider>;
}
```

npm install후 원하는 컴포넌트를 불러와서 붙여넣으면 됩니다. [공식 문서](https://design.devent.kr/)에 메서드와 사용 방법이 명시되어 있습니다.

```tsx
import { Button } from "deventds2";

function App() {
  return (
    <>
      <Button>버튼</Button>
    </>
  );
}
```

## Contact

문서에 대한 지적 혹은 개발자에게 연락하려면 아래 링크로 방문해주세요.

- 인스타 DM : https://www.instagram.com/huh.hyeongjun/
- 링크드인 : https://www.linkedin.com/in/huhhyeongjun/
