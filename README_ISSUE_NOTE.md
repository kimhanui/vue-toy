# Buefy , Bulma 적용하며 구현 못한 부분

## 1.Navbar에서 search input창을 완전히 가운데 정렬하지 못함.

이슈)
- 왼쪽,가운데(search용), 오른쪽 영역에 공통으로 `.navbar-item .is-expanded`을 써서 나누려 했으나.. 왼쪽 또는 오른쪽에서 텍스트만 길어져도 균형이 깨짐.
- `<level>`을 사용해도 텍스트가 길어지면 균형이 깨진다.
- `<columns>, <column>`을 사용하면 목적 도달가능하지만, 별도로 navbar를 꾸미기위한 작업이 많이 들어감.
```
왜 `.navbar-start`, `.navbar-end` 는 있는데 `.navbar-center` 는 제공해주지 않을까??
```

최종으로 내 목적을 달성한 방법)
1. `<columns>, <column>`을 사용해 grid 레이아웃으로 균등하게 3분할 한다. -> 컬럼 내 텍스트 길이에 무관하게 일정한 width를 유지함.
2. 각 `<column>` 안에서 `<nav>` 컴포넌트와 `.navbar-start , .navbar-item , .navbar-end`를 사용해준다.
    > 굳이 사용하는 이유는 navbar 특성인 "수직 가운데 정렬, navbar에 모든 요소에 같은 수직 높이 적용, 오른쪽에 배치할 column에 대해 쉽게 오른쪽 정렬" 적용하기 위함임.