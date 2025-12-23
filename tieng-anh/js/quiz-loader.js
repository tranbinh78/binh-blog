// quiz-loader.js
const params = new URLSearchParams(window.location.search);
const topic = params.get("topic");

const QUIZ_BASE = "/binh-blog/tieng-anh/vocab-quiz/";

const container = document.getElementById("quiz-container");

if (!topic) {
  container.innerHTML = "Không có chủ đề quiz.";
  throw new Error("Missing topic");
}

fetch(`${QUIZ_BASE}${topic}.json`)
  .then(res => {
    if (!res.ok) throw new Error("Quiz not found");
    return res.json();
  })
  .then(data => {
    renderQuiz(data);
  })
  .catch(err => {
    console.error(err);
    container.innerHTML = "Không thể tải bài kiểm tra. Vui lòng thử lại.";
  });

function renderQuiz(data) {
  let html = `<h2>${data.title}</h2>`;
  html += `<p>${data.description}</p>`;

  data.questions.forEach((q, i) => {
    html += `
      <div class="quiz-question">
        <p><strong>${i + 1}. ${q.question}</strong></p>
        ${q.options.map((opt, idx) => `
          <label>
            <input type="radio" name="q${i}" value="${idx}">
            ${opt}
          </label><br>
        `).join("")}
      </div>
    `;
  });

  html += `<button onclick="submitQuiz()">Nộp bài</button>`;
  container.innerHTML = html;

  window.__quizData = data;
}

function submitQuiz() {
  let score = 0;

  __quizData.questions.forEach((q, i) => {
    const checked = document.querySelector(`input[name="q${i}"]:checked`);
    if (checked && Number(checked.value) === q.answer) {
      score += q.points;
    }
  });

  const pass = score >= __quizData.passScore;

  alert(
    `Điểm: ${score}/${__quizData.totalPoints}\n` +
    (pass ? "✅ ĐẠT" : "❌ CHƯA ĐẠT")
  );
}
