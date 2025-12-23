// quiz-loader.js
(function () {
  const params = new URLSearchParams(window.location.search);
  const topic = params.get("topic");

  const container = document.getElementById("quiz-container");

  if (!topic) {
    container.innerHTML = "Không xác định được chủ đề bài kiểm tra.";
    return;
  }

  const quizPath = `./vocab-quiz/${topic}.json`;

  fetch(quizPath)
    .then(res => {
      if (!res.ok) throw new Error("Quiz JSON not found");
      return res.json();
    })
    .then(quiz => {
      renderQuiz(quiz);
    })
    .catch(err => {
      console.error(err);
      container.innerHTML =
        "Không thể tải bài kiểm tra. Vui lòng thử lại.";
    });

  function renderQuiz(quiz) {
    let html = `
      <h2>${quiz.title}</h2>
      <p>Thời gian: ${quiz.timeLimit} phút</p>
      <form id="quiz-form">
    `;

    quiz.parts.forEach((q, i) => {
      html += `<div class="quiz-question"><p><strong>${i + 1}. ${q.question}</strong></p>`;

      if (q.type === "multiple-choice") {
        q.options.forEach((opt, idx) => {
          html += `
            <label>
              <input type="radio" name="q${i}" value="${idx}">
              ${opt}
            </label><br>
          `;
        });
      }

      if (q.type === "fill-blank") {
        html += `<input type="text" name="q${i}" />`;
      }

      if (q.type === "translate" || q.type === "sentence") {
        html += `<textarea name="q${i}" rows="2"></textarea>`;
      }

      html += `</div>`;
    });

    html += `
      <button type="submit">Nộp bài</button>
      </form>
    `;

    container.innerHTML = html;
  }
})();
