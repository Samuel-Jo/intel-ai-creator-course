# 🚀 Intel AI Creator Course 배포 가이드

대표님! 프로젝트 빌드가 성공적으로 완료되었습니다. (`dist/` 폴더 생성 완료)
이제 전 세계 사람들이 접속할 수 있도록 **웹사이트를 배포(Deployment)** 해보겠습니다.

가장 쉽고 빠르며, 무료인 두 가지 방법을 추천해 드립니다.

---

## 방법 1: Vercel 배포 (가장 추천! 👍)
React/Vite 프로젝트에 최적화되어 있으며, GitHub와 연동하면 코드 수정 시 자동 배포됩니다.

1.  **[Vercel.com](https://vercel.com) 접속 및 회원가입**
2.  **"Add New..." -> "Project" 클릭**
3.  **GitHub 리포지토리 연결**
    *   현재 프로젝트가 GitHub에 올라가 있다면 해당 리포지토리를 선택하고 `Import`를 누르세요.
    *   *Framework Preset*은 자동으로 `Vite`로 잡힐 겁니다.
    *   `Deploy` 버튼 클릭!
4.  **끝!** 1분 뒤에 나만의 URL이 생성됩니다.

---

## 방법 2: Netlify Drop (가장 쉬움! ⚡)
회원가입만 하면 파일 드래그 & 드롭으로 10초 만에 끝납니다.

1.  탐색기에서 프로젝트 폴더 내의 **`dist`** 폴더를 찾습니다.
    *   경로: `c:\Users\aiautou\ssmi\intel-ai-creator-course\dist`
2.  **[Netlify Drop](https://app.netlify.com/drop)** 사이트 접속
3.  **`dist` 폴더를 통째로 브라우저 화면에 드래그**해서 놓습니다.
4.  **끝!** 즉시 랜덤한 주소로 사이트가 열립니다. (나중에 주소 변경 가능)

---

## 💡 참고: 로컬에서 미리보기
배포하기 전에 내 컴퓨터에서 최종 결과물을 확인하고 싶다면 터미널에 다음을 입력하세요:

```bash
npm run preview
```

문제가 있거나 도움이 필요하시면 언제든 말씀해 주세요! 화이팅입니다! 🚀
