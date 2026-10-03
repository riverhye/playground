// unknown 값을 받아 비어 있지 않은 문자열인지 확인하세요. 프로젝트의 정상·실패 사례도 실행해 보세요.

function parseFileName(value: unknown): string {
  // 문자열인지 확인하고 공백 문자열은 거부
  if (typeof value !== 'string' || !value.trim()) {
    throw new Error ("NOT ACCEPTED!")
  }
    console.log(value.trim())
  return "GOOD";
}

try {
  parseFileName('blue')
  parseFileName('  ');
} catch (e) {
  console.log((e as Error).message);
}
