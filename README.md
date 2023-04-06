# 하루 한줄

## 서비스 소개

- 하루에 읽은 책 중 마음에 드는 문장을 이미지로 아카이빙하여 리츄얼을 형성해보세요.
- [서비스 시연 영상](https://youtu.be/qJZVtKnNYyw)
  - 서버 에러로 인해 시연 영상으로 대체합니다.

## 작업 기간

- 2023/3/24 ~ 2023/4/2

## 기술 스택

- Language
  - TypeScript
- Framework
  - create-next-app
  - Next.js
- State Management
  - Tanstack Query
  - Zustand
- CSS
  - Tailwind CSS
- Linter
  - ESLint
  - Prettier
- Deploy
  - Vercel

## 사이트 화면

### 로그인 페이지

- 카카오 소셜 로그인을 통해 메인화면으로 이동할 수 있습니다.
- cookies-next를 사용하여 서버로부터 받은 토큰을 쿠키에 저장하여 csr, ssr시에 모두 사용 가능하도록 했습니다.
- getServerSideProps를 사용하여 토큰 유무에 따라 라우트 접근 제한을 적용했습니다.

<img width="200" alt="스크린샷 2023-04-06 오후 3 18 33" src="https://user-images.githubusercontent.com/97172050/230292815-9e8164b2-74ff-432e-a1ad-89b6b8b65f3d.png">

### 메인 페이지

- 사용자 개인의 데이터를 수치화하여 보여줍니다. (기록한 문장의 갯수, 문장을 연속으로 등록한 날 등...)
- 등록했던 문장 중 하나를 랜덤으로 보여주는 카드가 있습니다.
- 햄버거 메뉴를 통해 로그아웃을 할 수 있습니다.

<img width="200" alt="스크린샷 2023-04-06 오후 3 19 20" src="https://user-images.githubusercontent.com/97172050/230293024-8a9fbfd4-5261-4fe7-8a6e-acc862d65c7b.png">
<img width="200" alt="스크린샷 2023-04-06 오후 3 19 30" src="https://user-images.githubusercontent.com/97172050/230293034-e2e163c9-ce1e-49be-88d4-8da538d0c423.png">
<img width="200" alt="스크린샷 2023-04-06 오후 3 22 55" src="https://user-images.githubusercontent.com/97172050/230295857-7f7e3065-5765-4800-a6bf-6d7cd9e6c3bd.png">

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

<img width="200" alt="스크린샷 2023-04-06 오후 3 19 43" src="https://user-images.githubusercontent.com/97172050/230294678-8fc21e2c-4395-4f29-a973-e074e363eed6.png">
<img width="200" alt="스크린샷 2023-04-06 오후 3 19 53" src="https://user-images.githubusercontent.com/97172050/230294686-772c3b2d-95e7-4fad-abfc-33493b3c994e.png">
<img width="200" alt="스크린샷 2023-04-06 오후 3 20 30" src="https://user-images.githubusercontent.com/97172050/230294687-80da99ae-4b0a-44fa-8d82-e3e5fef02bd6.png">
<img width="200" alt="스크린샷 2023-04-06 오후 3 21 09" src="https://user-images.githubusercontent.com/97172050/230294694-7d5c1608-a591-4db2-9bf9-2351346bf03e.png">

### 상세 페이지

- 등록한 카드 이미지를 확인할 수 있습니다.
- 수정 및 삭제가 가능합니다.
- 카드 이미지 다운로드가 가능합니다. 가로 2160픽셀의 고화질 PNG 파일로 저장됩니다.

<img width="200" alt="스크린샷 2023-04-06 오후 3 21 37" src="https://user-images.githubusercontent.com/97172050/230296068-6108c2a6-e6b8-4201-b5bf-2e69335999f5.png">

### 아카이빙 페이지

- 그동안 저장한 카드 이미지를 모아볼 수 있습니다. 클릭하면 상세페이지로 이동합니다.
- 책 제목으로 검색이 가능합니다.

<img width="200" alt="스크린샷 2023-04-06 오후 3 21 58" src="https://user-images.githubusercontent.com/97172050/230296148-5d75162f-068b-4dd4-bae9-1652f9ced829.png">
<img width="200" alt="스크린샷 2023-04-06 오후 3 22 07" src="https://user-images.githubusercontent.com/97172050/230296152-09c7e29c-7be2-4035-87eb-4b8d42ee452a.png">

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
