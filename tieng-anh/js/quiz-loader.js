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
  let answered = 0;

  __quizData.questions.forEach((q, i) => {
    const checked = document.querySelector(`input[name="q${i}"]:checked`);
    if (checked) {
      answered++;
      if (Number(checked.value) === q.answer) {
        score += q.points;
      }
    }
  });

  if (answered < __quizData.questions.length) {
    alert("Vui lòng trả lời tất cả câu hỏi trước khi nộp bài.");
    return;
  }

  const pass = score >= __quizData.passScore;

  const resultHTML = `
    <div class="quiz-result" style="
      margin-top:24px;
      padding:20px;
      border-radius:12px;
      background:#f8f7ff;
      border:1px solid #e5e7eb;
    ">
      <h3>Kết quả</h3>
      <p><strong>Điểm:</strong> ${score} / ${__quizData.totalPoints}</p>
      <p style="font-size:18px">
        ${pass ? "✅ <strong>ĐẠT</strong>" : "❌ <strong>CHƯA ĐẠT</strong>"}
      </p>
    </div>
  `;

  container.insertAdjacentHTML("beforeend", resultHTML);
}
