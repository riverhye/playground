// 아래 「최종 프로젝트」의 시작 코드를 사용하세요.
// 1. markUploaded 구현
// 2. getMissing 구현
// 3. 기존 배열이 바뀌지 않았는지 확인

type Receipt2=
  | { status: "missing" }
  | { status: "uploaded"; fileName: string };

type Doc = { id: string; title: string } & Receipt2;

const documents: Doc[] = [
  { id: "finance", title: "재무제표", status: "missing" },
  { id: "holders", title: "주주명부", status: "missing" },
  { id: "registry", title: "법인등기부등본", status: "missing" }
];

function markUploaded(docs: Doc[], id: string, fileName: string): Doc[] {
  // 없는 ID와 공백 파일 이름은 Error를 던지세요.
  if(!docs.some(doc => doc.id === id)) {
    throw Error ("존재하지 않는 ID입니다.")
  }
  if(fileName.trim() === "") {
    throw Error ("존재하지 않는 파일명입니다.")
  }
  
  // 해당 문서만 uploaded 상태로 바꾼 새 배열을 반환하세요.
  return docs.map(doc => doc.id === id ? {...doc, status: 'uploaded', fileName} : doc)
}
function getMissing(docs: Doc[]): Doc[] {
  // status가 missing인 문서를 반환하세요
  return docs.filter(doc => doc.status === 'missing');
}

const next = markUploaded(documents, "finance", "finance.pdf");
console.log(getMissing(next).length); // 기대: 2
console.log(getMissing(documents).length); // 기대: 3 (원본 유지)
// markUploaded(documents, "unknown", "a.pdf"); // 기대: 오류
// markUploaded(documents, "finance", "  "); // 기대: 오류

