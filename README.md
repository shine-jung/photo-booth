# Photo Booth

![스크린샷](https://github.com/shine-jung/photo-booth/assets/79754613/7674b874-2093-48d0-b31c-4f0aeca31a11)

Photo Booth는 이용자가 스크린샷을 찍으면 사진에 대한 QR 코드를 생성해주는 서비스 입니다. 스마트폰으로 QR 코드를 스캔해서 사진을 저장할 수 있습니다.

행사나 모임에서 활용하여 쉽게 사진을 공유해보세요!

## 주요 기능

- **스크린샷 캡처**: 이용자가 스크린샷을 찍으면, 해당 사진에 대한 QR 코드가 생성됩니다.
- **사진 저장**: QR 코드를 스캔하여 사진을 쉽게 저장할 수 있습니다.
- **전체 화면 모드**: 웹 서비스를 전체 화면으로 사용할 수 있습니다.
- **개인화 설정**: 로그인한 사용자는 타이틀과 기본 메시지를 설정할 수 있습니다.

## 시작하기

로컬에서 이 프로젝트를 실행할 수 있습니다.

### 필요 조건

- Node.js가 설치되어 있어야 합니다.
- Firebase 프로젝트가 필요합니다. Firebase에서 Auth, Firestore와 Storage를 활성화해야 합니다.

### 설치 방법

1. 이 레포지토리를 클론합니다:

   ```
   git clone https://github.com/shine-jung/photo-booth
   cd photo-booth
   ```

2. 필요한 패키지를 설치합니다:

   ```
   npm install
   ```

3. `.env.example` 파일의 환경 변수를 채워 `.env` 파일을 생성합니다. Firebase 프로젝트 설정에서 다음 설정 변수들을 찾을 수 있습니다. 이메일은 서비스 문의를 받을 때 사용됩니다:

   - `VITE_FIREBASE_API_KEY`
   - `VITE_FIREBASE_AUTH_DOMAIN`
   - `VITE_FIREBASE_PROJECT_ID`
   - `VITE_FIREBASE_STORAGE_BUCKET`
   - `VITE_FIREBASE_MESSAGING_SENDER_ID`
   - `VITE_FIREBASE_APP_ID`
   - `VITE_FIREBASE_MEASUREMENT_ID`
   - `VITE_EMAIL`

4. 로컬 서버를 실행합니다:
   ```
   npm run dev
   ```

이제 브라우저에서 `http://localhost:5173`에 접속하면 Photo Booth 서비스를 사용할 수 있습니다.

## 기여하기

이 프로젝트에 기여하고 싶으신가요? 이슈를 작성하거나 풀 리퀘스트를 보내주세요!

## 라이선스

이 프로젝트는 [MIT 라이선스](LICENSE) 하에 배포됩니다.

## 저자 및 기여자

- [shine-jung](https://github.com/shine-jung)
