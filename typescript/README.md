# TypeScript 모듈과 검사 환경

타입 정의를 별도 파일로 나누고 `import type`으로 가져오는 최소 실습입니다.

## 실행

```bash
cd typescript
npm install
npm run check
```

`noEmit`이 켜져 있으므로 `npm run check`는 JavaScript 파일을 만들지 않고 타입만 검사합니다.

오류를 확인하려면 `main.ts`의 값을 다음처럼 바꿔 다시 검사해 보세요.

```ts
const status: Status = "done";
```
