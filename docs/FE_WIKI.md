# FE 구현

FE 구현시 알게된 내용/해결한 문제를 작성한다.

## 1. 왜 무한스크롤에 Lazy-Loading을 적용해야하는가?

### 원인
웹 페이지를 열면 전체 페이지의 내용이 다운로드된다. 한번 다운로드되면 브라우저에선 웹페이지를 캐시할 수 있지만 해당 컨텐츠를 실제로 사용자가 모두 보리란 보장이 없다.
사용자가 꼭 보려고하는 컨텐츠 양에 비해 다운로드되는 전체 페이지 양이 큰 상황엔 메모리 낭비가 크다는 의미다.
따라서 페이지를 읽어들이는 시점에 중요하지 않은 리소스 로딩을 추후에 하기위해 Lazy-Loading을 사용한다.

> 여기서 `무한스크롤에 IntersectionObserver를 사용하는 이유`를 이해할 수 있었음.  
> "메인 페이지에서 api로 카드 컨텐츠 리스트를 받아오는 동안 카드 컴포넌트는 모두 스켈레톤 처리하는데, 로드된 이후엔 굳이 Observer를 사용할 이유가 있나?" 라는 생각이 들었는데, 카드 컨텐츠에 포함된 **이미지 데이터**가 대용량일 수 있으므로 Lazy-Loading처리하는게 좋겠다고 생각함.

### 구현 방향
-> 두 개의 Observer 사용
1. **무한스크롤 구현**. 리스트 레이아웃 하단에 Observer 적용
2. **lazy loading**. skeleton 적용한다는건 즉, UI 먼저 그리고 data나중에 가져온다는 뜻. 근데 vue에선 data가 업데이트돼야 UI를 그리는데? 
    -> 그래도 사용자 입장에선 어떤 형태로든 로딩액션을 보는게 좋으니까 가짜 UI를 먼저 그려놓는 것 같음.
    - 구상: 10개씩 가져와 기존data 뒤에 이어붙임. 로딩 액션은 작게 추가하거나 안 할 것임. skeleton은 이미지 데이터에만 사용.


## 1-1. Lazy-loading 구현시 v-if로 미리 img 엘리먼트에 src 값을 넣어두면 이미지를 미리 다운로드 하는가?

### 원인
vue의 가상 돔이 미리 엘리먼트들을 로드하기 때문에 src값을 넣어두면 이미지를 미리 다운로드하는게 아닌가? 싶었음. 그러나 개발자도구 Network에서 확인해보니 미리 엘리먼트에 src에 값을 넣어놨어도 v-if 조건을 만족해야 이미지를 실제로 다운로드 했다.
![image](./resources/observer-lazy-loading.gif)
### 해결
그대로 v-if 디렉티브를 사용해 img 엘리먼트에 미리 값을 넣도록 작성.


## 2. 이미지 업로드 구현 방법

Js로 파일 업로드 하는 방법엔

```html
<input type="file" ref="fileInput" >
```
- 엘리먼트 생성 후 해당 태그에 id(여기선 vue의 ref 사용)를 붙여줘서 input에 파일이 업로드 되는 시점을 핸들링하는 것이다.
- 엘리먼트에 'multiple' 속성 붙여주면 파일 여러개 올릴 수 있음.

기본) onChange 이벤트 핸들링
```
const fileInput = this.$refs.fileInput

fileInput.onchange = () => {
  const selectedFile = fileInput.files[0] // 파일 하나인 경우
  /* const selectedFile = [...fileInput.files]; // 멀티 파일일 경우 */
  console.log(selectedFile);
};
```
- 업로드 된 파일은 File 타입으로 여러 속성을 가진다. (name, type- 파일의 MIME유형, size)


옵션) 업로드한 파일 미리보기 구현할 경우
```
const fileInput = this.$refs.fileInput

const handleFiles = (e) => {
  const selectedFile = [...fileInput.files];
  const fileReader = new FileReader();

  fileReader.readAsDataURL(selectedFile[0]);

  fileReader.onload = function (e1) {
    this.previewImg = fileReader.result;
  };
};

fileInput.addEventListener("change", handleFiles);
```
- FileReader를 사용하면 읽을 파일을 가리키는 File 또는 Blob 객체를 이용해 파일의 내용을 읽고 사용자의 컴퓨터에 저장할 수 있도록 함.
    - 참고: [Mozillar](https://developer.mozilla.org/ko/docs/Web/API/FileReader)
- 위에서 정의한 fileReader 는 onload시 e1.target과 같다.