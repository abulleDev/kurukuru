window.document.oncontextmenu = new Function("return false"); // 우클릭 방지
window.document.onselectstart = new Function("return false"); // 드래그 방지
window.document.ondragstart = new Function("return false"); // 이미지 드래그 방지


let clickCount = 0
let herta // img 요소를 담을 변수 생성

function kurukuru() {
    clickCount = clickCount + 1
    document.getElementById("clickCount").innerText = clickCount

    herta = document.createElement("img") // herta에 img 요소 생성
    herta.setAttribute("class", "herta") // img 요소의 class 설정
    herta.setAttribute("id", `herta${clickCount}`) // img 요소의 구분용 id 설정
    herta.setAttribute("src", "kurukuru-kururing.gif") // img 요소의 이미지 설정
    document.body.appendChild(herta); // body에 img 요소 추가


    setTimeout(() => {
        // img 요소의 right 스타일 값을 화면 너비로 설정
        document.getElementById(`herta${clickCount}`).style.right = `${window.innerWidth}px`;
    }, 1)
    // CSS 애니메이션 작동이 안 되는 오류 때문에 1ms 지연을 줌
}

document.body.addEventListener("click", kurukuru) // body 클릭하면 kurukuru 함수 실행