/* ============================================
   Retro Record Player - script.js
   인터랙션 및 트랙 전환 전담 스크립트
   ============================================ */

/* ----------------------------
   DOM 요소 선택
---------------------------- */
const trackElements = document.querySelectorAll(".track");
const titleEl = document.getElementById("now-title");
const descEl = document.getElementById("now-desc");
const coverEl = document.getElementById("cover-main");
const iframeEl = document.getElementById("yt-iframe");

const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const submitBtn = document.querySelector(".btn-submit");
const msgInput = document.getElementById("msg");

/* 현재 트랙 인덱스 */
let currentTrackIndex = Array.from(trackElements).findIndex(t =>
  t.classList.contains("active")
);

/* ----------------------------
   트랙 정보 변경 함수
---------------------------- */
function changeTrack(index) {
  const track = trackElements[index];

  // 모든 active 제거 → 선택된 것만 active
  trackElements.forEach(t => t.classList.remove("active"));
  track.classList.add("active");

  // 데이터 불러오기
  const title = track.dat
