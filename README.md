# 하루 한줄

## 서비스 소개

- 하루에 읽은 책 중 마음에 드는 문장을 이미지로 아카이빙하여 리츄얼을 형성해보세요.
- [서비스 링크](https://one-line-a-day-kappa.vercel.app)

## 작업 기간

- 2023/3/24 ~ 2023/4/2

## 기술 스택

- TypeScript
- Next.js
- React Query / Zustand
- Tailwind CSS / Headless UI
- ESLint / Prettier
- Vercel
- 그 외 주요 라이브러리
  - msw: 서버 구현 전에 목데이터를 사용할 수 있는 라이브러리
  - cookies-next: next에서 CSR, SSR환경 모두 쿠키를 용이하게 관리하는 라이브러리
  - color-thief-react: 이미지에서 컬러를 추출하여 색상 코드를 전달해주는 라이브러리
  - html-to-image: 지정한 컴포넌트를 이미지 파일로 변환해주는 라이브러리
  - file-saver: 파일로 저장하여 다운로드를 할 수 있는 라이브러리

## 개발 업무

- 프론트엔드 작업 100% 진행했습니다.
- 피그마를 기반으로 재사용 가능한 컴포넌트를 만들어 사용했습니다.
- [폰트 최적화](https://youth-dev-log.vercel.app/blog/font-optimization-in-nextjs) 및 [이미지 최적화](https://youth-dev-log.vercel.app/blog/font-optimization-in-nextjs)를 사용했습니다.
- [책 커버에서 컬러를 추출하는 UI를 구현했습니다.](https://youth-dev-log.vercel.app/blog/how-to-use-color-thief-react)
- [문장 카드를 이미지로 받을 수 있는 기능을 구현했습니다.](https://youth-dev-log.vercel.app/blog/how-to-make-a-component-into-an-image)
- getServerSideProps를 사용하여 토큰 유무에 따라 라우트 접근 제한을 적용했습니다.

## 얻은 경험

### 빠른 기간 내에 MVP 개발

- 10일이라는 총 기간과 4일 남짓 했던 개발 기간 동안 빠르게 서비스를 구현하는 경험을 했습니다. 한정된 시간을 가지고 있는 만큼 중요한 순위를 두는 연습을 했습니다.
- 오류를 빠르게 검색하고 구현이 어려운 부분은 대체할 수 있게 틈틈이 팀원들과 소통했습니다.

### 다양한 직군과의 협업

- 프론트엔드 간의 협업은 없이 혼자 프론트엔드 개발을 하였지만, 그 외에는 기획자, 디자이너, 백엔드 개발자분들과 협업을 진행할 수 있었습니다.
- 피그마를 통해 직관적으로 소통하는 경험을 했습니다.
- 각자가 신경써야 하는 부분이 조금씩 달랐기 때문에 이를 적절히 협의하여 좋은 서비스를 만들어야 한다는걸 느꼈습니다.

## 사이트 화면

### 랜딩 페이지 및 로그인 페이지

- 카카오 소셜 로그인을 통해 메인화면으로 이동할 수 있습니다.

<p float="left">
  <img width="32%" alt="스크린샷 2023-06-01 오후 5 41 05" src="https://github.com/potenday-project/303TEN011-frontend/assets/97172050/e81fa668-8ff6-476a-9609-2f81d2189b02">
  <img width="32%" alt="스크린샷 2023-06-01 오후 5 41 46" src="https://github.com/potenday-project/303TEN011-frontend/assets/97172050/75ddb8b1-6ef4-4108-9be4-aa0fee5a4fbe">
</p>

### 메인 페이지

- 사용자 개인의 데이터를 수치화하여 보여줍니다. (기록한 문장의 갯수, 문장을 연속으로 등록한 날 등...)
- 등록했던 카드 중 하나를 랜덤으로 보여줍니다.
- 햄버거 메뉴를 통해 로그아웃 및 회원탈퇴를 할 수 있습니다.

<p float="left">
  <img width="32%" alt="스크린샷 2023-06-01 오후 5 49 46" src="https://github.com/potenday-project/303TEN011-frontend/assets/97172050/a33be650-3ad2-47d0-88d0-c1149f92b281">
  <img width="32%" alt="스크린샷 2023-06-01 오후 5 49 53" src="https://github.com/potenday-project/303TEN011-frontend/assets/97172050/0d000a6f-a070-4fa1-8fd9-c6a6e93e492a">
  <img width="32%" alt="스크린샷 2023-06-01 오후 5 50 06" src="https://github.com/potenday-project/303TEN011-frontend/assets/97172050/736895a6-aefb-4501-8aa0-0e64475732c8">
</p>

### 문장 작성 페이지

- 책 검색을 통해 문장을 작성할 책을 등록할 수 있습니다.
- 최근 검색 기록으로도 검색이 가능하고 최대 10개까지 저장됩니다.
  - zustand persist를 사용하여 로컬 스토리지에 검색 기록을 저장했습니다.
- 책을 등록하고 문장을 작성합니다. 카드는 각종 커스텀을 사용할 수 있습니다. (시연 영상을 확인해주세요.)
  - 기본 제공 색상
  - 책 커버 이미지에서 추출한 색상
  - 기본 템플릿 배경 이미지
  - 문장 폰트
  - 카드 비율
- 이미지와 폰트는 각각 next/image와 next/font를 적극 사용하여 최적화 하였습니다.

<p float="left">
  <img width="24%" alt="스크린샷 2023-06-01 오후 5 54 15" src="https://github.com/potenday-project/303TEN011-frontend/assets/97172050/f8873308-7e38-40ef-9992-543ea116435e">
  <img width="24%" alt="스크린샷 2023-06-01 오후 5 54 44" src="https://github.com/potenday-project/303TEN011-frontend/assets/97172050/219b0450-f14e-4336-83ff-60fda20a2646">
  <img width="24%" alt="스크린샷 2023-06-01 오후 5 55 01" src="https://github.com/potenday-project/303TEN011-frontend/assets/97172050/1f60a6c0-99c1-4a99-a189-006c6c48334c">
  <img width="24%" alt="스크린샷 2023-06-01 오후 5 55 50" src="https://github.com/potenday-project/303TEN011-frontend/assets/97172050/cee896bd-e525-4536-852d-8d2aa072fa37">
</p>

### 상세 페이지

- 등록한 카드 이미지를 확인할 수 있습니다.
- 수정 및 삭제가 가능합니다.
- 카드 이미지 다운로드가 가능합니다. 가로 2160픽셀의 고화질 PNG 파일로 저장됩니다.

<img width="32%" alt="스크린샷 2023-06-01 오후 5 57 32" src="https://github.com/potenday-project/303TEN011-frontend/assets/97172050/aaa6197e-5daa-4df7-bf1b-20a373fe062e">

### 아카이빙 페이지

- 그동안 저장한 카드 이미지를 모아볼 수 있습니다. 클릭하면 상세페이지로 이동합니다.
- 책 제목으로 검색이 가능합니다.

<p float="left">
  <img width="32%" alt="스크린샷 2023-06-01 오후 6 05 58" src="https://github.com/potenday-project/303TEN011-frontend/assets/97172050/a26c6f2a-beae-43ce-a822-a52915b85fdf">
  <img width="32%" alt="스크린샷 2023-06-01 오후 6 06 13" src="https://github.com/potenday-project/303TEN011-frontend/assets/97172050/c9cfb47d-25ea-42d8-a704-883258d5a04a">
  <img width="32%" alt="스크린샷 2023-06-01 오후 6 06 28" src="https://github.com/potenday-project/303TEN011-frontend/assets/97172050/93e6af45-ab0c-46dd-8e50-62f7ca711f8f">
</p>

## 컨트리뷰터

<table border="1">
    <th>
        <a href="https://github.com/devyouth94">김영진(FE)</a>
    </th>
        <th>
        <a href="https://github.com/tajon1030">남다정(BE)</a>
    </th>
        <th>
        <a href="https://bside.best/careercard/bsider3025">류지은(기획)</a>
    </th>
        <th>
        <a href="https://drive.google.com/file/d/1O5wdL9Jee_QGpk2YVX_j1v4TuBL8FjgF/view">권세희(디자인)</a>
    </th>
    <tr>
        <td>
            <img src="https://github.com/devyouth94.png" width='120' />
        </td>
        <td>
            <img src="https://github.com/tajon1030.png" width='120' />
        </td>
        <td>
            <img src="https://user-images.githubusercontent.com/97172050/230305424-3090620d-d723-4c8d-85fd-dc35b2f3618d.jpg" width='120' />
        </td>
        <td>
            <img src="https://user-images.githubusercontent.com/97172050/230305424-3090620d-d723-4c8d-85fd-dc35b2f3618d.jpg" width='120' />
        </td>
    </tr>
    
</table>
