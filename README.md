# hogwarts-students
노마드 코더의 netflix clone 강의에서 배운 내용을 점검하고자 시작하였습니다. <br />
이 프로젝트는 호그와트 출석부를 만들기 위해 시작하였습니다. <br />
또한 이 프로젝트에서는 UI에 자주 사용되는 요소들을 구현하고자 했습니다. <br />
간단한 Pagnation, Carousel, Modal을 다뤘습니다. <br />

### 스텍
- react js
- react-router-dom
- react-query
- styled-components
- react-helmet-async
- gh-pages

### 기간
2022.08.22 ~ 2022.08.31 <br />
(모달 기능 진행중)

### 주요 기능
- Header : 빛이 나는 듯한 로고와 해리포터의 Ost를 들을 수 있는 버튼이 있습니다.
- Main : Tab을 사용하여 전체 학생 리스트와 기숙사별 학생 리스트를 볼 수 있습니다. 또한 Carousel를 구현하여 호그와트와 관련된 사진을 보여줍니다.
- All : 전체 학생의 리스트를 보여줍니다. pagination를 구현하여 한 페이지 당 10명의 학생을 보여줍니다.
- Dormitory : 기숙사별 이동 카드를 보여줍니다. 기숙사 카드를 선택하면 해당 기숙사 학생 리스트를 보여줍니다.
- StudentCard : 전면에는 학생의 사진과 이름이, 후면에는 간단한 정보를 나타냈습니다.

### 에러 정리
- 애니메이션 버벅거림
<a href="https://fuzzy-energy-8aa.notion.site/Hogwarts-students-dd0c052388e945ca893b2c2c30658e0d">노션 정리</a>

<hr />

### 1. 메인화면
- 이미지 슬라이드를 구현하여 호그와트 풍경 사진이 자동으로 넘어가게 구현했습니다.
- 오디오 기능을 추가하여 해리포터 ost를 삽입했습니다.
<img src="https://user-images.githubusercontent.com/87607036/188444291-46aa4f8d-0c1a-4fc9-b083-5aacb1aef60d.gif" />
**2.**
<img src="https://user-images.githubusercontent.com/87607036/188446072-1b220ffc-7321-4ccd-a900-640fe678954c.gif" />
**3.**
<img src="https://user-images.githubusercontent.com/87607036/188446162-0e8a1f91-5d0d-43d1-95d1-23ecc385428b.gif" />
**4.**
<img src="https://user-images.githubusercontent.com/87607036/188446262-bccdcccb-5191-4bd1-8cf9-a27ee75d5d60.gif" />
