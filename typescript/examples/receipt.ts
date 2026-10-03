// missing 상태에는 파일 이름이 없고 uploaded 상태에는 fileName이 필수인 Receipt를 정의하세요.

interface Missing {
    status: 'missing';
}
interface Uploaded {
    status: 'uploaded';
    fileName: string;
}
type Receipt = Missing | Uploaded;

function getFileName (receipt: Receipt) {
    if(receipt.status === 'missing') {
        return "missing"
    } else {
        return receipt.fileName;
    }
}

console.log(getFileName({status: 'missing'}));
// console.log(getFileName({status: 'missing', fileName: 'hello'}));
// console.log(getFileName({status: 'uploaded'}));