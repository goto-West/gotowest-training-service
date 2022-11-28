# gotowest-training-service
<h3> 스마트미러를 활용한 노인 건강 증진 서비스 개발 프로젝트 </h3>
2022년도 컴퓨터공학종합설계 <br>
팀 goto:West <br>

## Installation
git clone https://github.com/goto-West/gotowest-training-service.git

## Backend Configuration
npm i<br>

## Frontend Configuration
cd gotowest-train-web<br>
npm i <br>

## 🤚 HOW TO START
cd .. <br>
npm start<br><br> 


## 구조 및 기능 정리
### server.js
서버 구동 및 React html 로드 <br>
### classification.js
머신러닝 모델 로드 및 테스트 python 코드 fork<br>
분류 결과 반환 <br>

##  🛠 STACKS
React <br>
Node.js <br>
Express <br>
python 3.9 <br>
joblib 1.2.0 <br>
scikit-learn 1.1.0 <br>
matplotlib 3.6.2 <br>


## 수정 사항
11.28 React와 Express 연동 (React Done.js fetch 추가)<br>
React port : 3000   Express port :3001 <br>
11.26 server.js 내 classification 모델 추가 <br>
11.23 백엔드 부분 분리, node.js로 구동 가능 <br>
11.10 자세 분류 API 구성 <br>
10.30 자세 분류 모델 연동 <br>
10.18 머신러닝 모델 구현 완료 <br>


## 개선 사항
- classification 부분 res, req 통해 React 연동 진행 및 테스트 <br>
- 영상 이미지 데이터 import <br>

## 관련 repository

1. MoveNet for NodeJS & TFJS<br>
https://github.com/vladmandic/movenet <br><br>

2. 자세 분류 머신러닝 모델 <br>
https://github.com/goto-West/pose_classification_API<br><br>

3. 데이터셋 구성 <br>
https://github.com/KangYoungSeo/movenet <br><br>


## 팀원
컴퓨터공학과 강영서<br>
컴퓨터공학과 최경서<br>
컴퓨터공학과 이가영<br>


