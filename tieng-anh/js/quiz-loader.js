// quiz-loader.js

function getQuizTopic() {
  const params = new URLSearchParams(window.location.search);
  return params.get("topic");
}

function getBackLessonLink(topic) {
  return `./vocabulary-viewer.html?file=vocabulary/${topic}.md`;
}

async function loadQuiz() {
  const topic = getQuizTopic();
  const container = document.getElementById("quiz-container");
  const backLink = document.getElementById("back-to-lesson");

  if (!topic) {
    container.innerHTML = "<p>Không tìm thấy bài kiểm tra.</p>";
    return;
  }

  backLink.href = getBackLessonLink(topic);

  try {
    const res = await fetch(`./vocab-quiz/${topic}.json`);
    const quiz = await res.json();

    renderQuiz(quiz);
  } catch (err) {
    container.innerHTML =
      "<p>Không thể tải bài kiểm tra. Vui lòng thử lại.</p>";
  }
}

document.addEventListener("DOMContentLoaded", loadQuiz);
