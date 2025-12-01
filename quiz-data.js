/* ========================================================
   QUIZ DATABASE – FULL 12 TENSES (240 QUESTIONS)
   Sử dụng cho Binh Blog – quiz.html
======================================================== */

window.quizData = {

  /* ============================
     1. PRESENT SIMPLE – 20 câu
     ============================ */
  "present-simple": {
    title: "Bài tập – Present Simple",
    desc: "Chọn đáp án đúng cho thì Hiện tại đơn.",
    questions: [
      { question:"She ___ to school every day.", options:["go","goes","is going","going"], answer:1, explain:"He/She/It + V(s/es)" },
      { question:"I usually ___ breakfast at 7.", options:["have","has","am having","having"], answer:0, explain:"I/You/We/They + V" },
      { question:"The sun ___ in the east.", options:["rise","rises","is rising","rose"], answer:1, explain:"Sự thật hiển nhiên" },
      { question:"He ___ coffee.", options:["don’t drink","doesn’t drink","isn’t drinking","not drink"], answer:1, explain:"He → doesn’t + V" },
      { question:"We ___ English every Monday.", options:["study","studies","are study","studying"], answer:0, explain:"Thói quen" },
      { question:"Water ___ at 100°C.", options:["boil","boils","is boiling","boiled"], answer:1, explain:"Scientific fact" },
      { question:"Dogs ___ meat.", options:["eat","eats","are eating","eated"], answer:0, explain:"Habits" },
      { question:"My father ___ TV in the evening.", options:["watch","watches","is watching","watching"], answer:1, explain:"He/She/It + V(s/es)" },
      { question:"Anna ___ her homework after school.", options:["do","does","is doing","doing"], answer:1, explain:"does + V" },
      { question:"He rarely ___ breakfast.", options:["eat","eats","is eat","eating"], answer:1, explain:"Trạng từ tần suất + Present Simple" },
      { question:"My parents ___ in a big company.", options:["works","working","work","are work"], answer:2, explain:"Chủ ngữ số nhiều → work" },
      { question:"The museum ___ at 8.", options:["open","opens","is opening","opened"], answer:1, explain:"Thời gian biểu" },
      { question:"My brother never ___ late.", options:["is","are","be","being"], answer:0, explain:"Động từ to be ở HTĐ" },
      { question:"We ___ a car.", options:["don’t have","doesn’t have","aren’t have","not have"], answer:0, explain:"don’t + V" },
      { question:"The Earth ___ around the Sun.", options:["move","moves","is moving","moved"], answer:1, explain:"Scientific fact" },
      { question:"Lisa ___ French very well.", options:["speak","speaks","is speak","speaking"], answer:1, explain:"He/She/It + V(s/es)" },
      { question:"My friends often ___ to the cinema.", options:["go","goes","going","are go"], answer:0, explain:"Thói quen" },
      { question:"His job ___ a lot of traveling.", options:["require","requires","is requiring","required"], answer:1, explain:"Danh từ số ít → V(s/es)" },
      { question:"They ___ near my house.", options:["live","lives","are living","living"], answer:0, explain:"Sự thật / Tình huống dài" },
      { question:"Tom ___ well with his team.", options:["gets along","get along","is get along","get alongs"], answer:0, explain:"Phrasal verb" }
    ]
  },

  /* ============================
     2. PRESENT CONTINUOUS – 20 câu
     ============================ */
  "present-continuous": {
    title: "Bài tập – Present Continuous",
    desc: "Chọn đáp án đúng cho thì Hiện tại tiếp diễn.",
    questions: [
      { question:"She ___ now.", options:["is cooking","cook","cooks","cooking"], answer:0, explain:"now → be + V-ing" },
      { question:"They ___ TV at the moment.", options:["are watching","watch","watches","watching"], answer:0, explain:"at the moment → HTTD" },
      { question:"I ___ to music right now.", options:["am listening","listen","listens","listening"], answer:0, explain:"Dấu hiệu: right now" },
      { question:"The kids ___ in the yard.", options:["are playing","play","plays","playing"], answer:0, explain:"Đang diễn ra" },
      { question:"She ___ her homework.", options:["is doing","does","do","doing"], answer:0, explain:"be + V-ing" },
      { question:"He ___ a shower.", options:["is taking","takes","take","taking"], answer:0, explain:"Hành động ngay lúc nói" },
      { question:"The phone ___ .", options:["is ringing","rings","ring","ringing"], answer:0, explain:"Xảy ra ngay bây giờ" },
      { question:"We ___ dinner.", options:["are having","have","has","having"], answer:0, explain:"be + V-ing" },
      { question:"They ___ for the bus.", options:["are waiting","wait","waits","waiting"], answer:0, explain:"Hành động tạm thời" },
      { question:"She ___ to school today.", options:["is walking","walks","walk","walking"], answer:0, explain:"Tạm thời khác bình thường" },
      { question:"I ___ my friend this week.", options:["am helping","help","helps","helping"], answer:0, explain:"This week → HTTD" },
      { question:"The baby ___ now.", options:["is sleeping","sleep","sleeps","sleeping"], answer:0, explain:"now → be + V-ing" },
      { question:"They ___ a new project.", options:["are working on","work on","works on","working on"], answer:0, explain:"be + V-ing" },
      { question:"She ___ the piano right now.", options:["is practicing","practices","practice","practicing"], answer:0, explain:"Hành động đang diễn ra" },
      { question:"We ___ for the exam.", options:["are studying","study","studies","studying"], answer:0, explain:"be + V-ing" },
      { question:"He ___ a book at the moment.", options:["is reading","reads","read","reading"], answer:0, explain:"at the moment" },
      { question:"The dog ___.", options:["is barking","barks","bark","barking"], answer:0, explain:"be + V-ing" },
      { question:"The sun ___ behind the clouds today.", options:["is shining","shines","shine","shining"], answer:0, explain:"Tạm thời hôm nay" },
      { question:"I ___ English this month.", options:["am learning","learn","learns","learning"], answer:0, explain:"Thời gian dài nhưng tạm thời" },
      { question:"They ___ to the teacher now.", options:["are listening","listen","listens","listening"], answer:0, explain:"now → HTTD" }
    ]
  }

};

/* ============================
   3. PRESENT PERFECT – 20 câu
   ============================ */

window.quizData["present-perfect"] = {
  title: "Bài tập – Present Perfect",
  desc: "Chọn đáp án đúng cho thì Hiện tại hoàn thành.",
  questions: [
    { question: "I ___ this movie before.", options:["have seen","saw","see","am seeing"], answer:0, explain:"have/has + V3" },
    { question: "She ___ in London since 2010.", options:["has lived","lived","lives","is living"], answer:0, explain:"since + mốc thời gian → HTHT" },
    { question: "They ___ their homework already.", options:["have finished","finished","finish","are finishing"], answer:0, explain:"already → HTHT" },
    { question: "He ___ the car yet.", options:["hasn't washed","didn't wash","doesn't wash","isn't washing"], answer:0, explain:"yet → phủ định HTHT" },
    { question: "We ___ to Japan many times.", options:["have been","went","go","are going"], answer:0, explain:"have been to + nơi" },
    { question: "She ___ her keys.", options:["has lost","lost","loses","is losing"], answer:0, explain:"Kết quả hiện tại → HTHT" },
    { question: "They ___ dinner.", options:["have just had","just had","are having","had"], answer:0, explain:"just → HTHT" },
    { question: "I ___ my homework.", options:["haven’t done","didn’t do","don’t do","not do"], answer:0, explain:"Phủ định HTHT" },
    { question: "He ___ three books this year.", options:["has written","wrote","writes","is writing"], answer:0, explain:"this year → chưa kết thúc → HTHT" },
    { question: "We ___ each other for 5 years.", options:["have known","knew","know","are knowing"], answer:0, explain:"for + khoảng thời gian → HTHT" },
    { question: "She ___ breakfast yet.", options:["hasn't eaten","didn't eat","doesn't eat","isn't eating"], answer:0, explain:"yet → HTHT phủ định" },
    { question: "They ___ in this house for a long time.", options:["have lived","lived","live","are living"], answer:0, explain:"for + khoảng thời gian → HTHT" },
    { question: "He ___ my letter.", options:["has received","received","receives","is receiving"], answer:0, explain:"Kết quả → HTHT" },
    { question: "I ___ the news.", options:["have heard","hear","heard","am hearing"], answer:0, explain:"have/has + V3" },
    { question: "She ___ her job recently.", options:["has changed","changed","changes","is changing"], answer:0, explain:"recently → HTHT" },
    { question: "The students ___ the test.", options:["have finished","finished","finish","are finishing"], answer:0, explain:"Hành động vừa hoàn thành" },
    { question: "He ___ the bill.", options:["has paid","paid","pays","is paying"], answer:0, explain:"have/has + V3" },
    { question: "They ___ the film before.", options:["have seen","saw","see","are seeing"], answer:0, explain:"before → HTHT" },
    { question: "I ___ the answer already.", options:["have known","knew","know","am knowing"], answer:0, explain:"already → HTHT" },
    { question: "She ___ to New York twice.", options:["has been","was","is","goes"], answer:0, explain:"have/has been → trải nghiệm" }
  ]
};


/* ================================================
   4. PRESENT PERFECT CONTINUOUS – 20 câu
   ================================================ */

window.quizData["present-perfect-continuous"] = {
  title: "Bài tập – Present Perfect Continuous",
  desc: "Chọn đáp án đúng cho thì Hiện tại hoàn thành tiếp diễn.",
  questions: [
    { question:"I ___ for 2 hours.", options:["have been studying","studied","am studying","study"], answer:0, explain:"have/has been + V-ing" },
    { question:"She ___ here since morning.", options:["has been working","worked","works","is working"], answer:0, explain:"since + mốc thời gian → HTHTTD" },
    { question:"They ___ the project all day.", options:["have been doing","did","do","are doing"], answer:0, explain:"all day → kéo dài liên tục" },
    { question:"He ___ for you.", options:["has been waiting","waited","waits","is waiting"], answer:0, explain:"hành động kéo dài → HTHTTD" },
    { question:"We ___ English for 5 years.", options:["have been learning","learned","learn","are learning"], answer:0, explain:"for + thời gian → HTHTTD" },
    { question:"She ___ too much recently.", options:["has been eating","ate","eats","is eating"], answer:0, explain:"recently → HTHTTD" },
    { question:"I ___ TV for 3 hours.", options:["have been watching","watched","am watching","watch"], answer:0, explain:"has/have been + V-ing" },
    { question:"They ___ games since noon.", options:["have been playing","played","play","are playing"], answer:0, explain:"since → mốc thời gian" },
    { question:"He ___ hard these days.", options:["has been working","worked","works","is working"], answer:0, explain:"these days → HTHTTD" },
    { question:"She ___ to lose weight.", options:["has been trying","tried","tries","is trying"], answer:0, explain:"hành động kéo dài" },
    { question:"I ___ better recently.", options:["have been feeling","felt","feel","am feeling"], answer:0, explain:"recently → HTHTTD" },
    { question:"They ___ the house.", options:["have been painting","painted","paint","are painting"], answer:0, explain:"be + V-ing" },
    { question:"He ___ more exercise lately.", options:["has been doing","did","does","is doing"], answer:0, explain:"lately → HTHTTD" },
    { question:"We ___ for the bus.", options:["have been waiting","waited","wait","are waiting"], answer:0, explain:"hành động kéo dài" },
    { question:"She ___ a lot of books.", options:["has been reading","read","reads","is reading"], answer:0, explain:"has been + V-ing" },
    { question:"The kids ___ loudly.", options:["have been shouting","shouted","shout","are shouting"], answer:0, explain:"kéo dài liên tục" },
    { question:"I ___ on this project since June.", options:["have been working","worked","work","am working"], answer:0, explain:"since + mốc thời gian" },
    { question:"They ___ for hours.", options:["have been talking","talked","talk","are talking"], answer:0, explain:"have been + V-ing" },
    { question:"He ___ too fast.", options:["has been driving","drove","drives","is driving"], answer:0, explain:"Thói quen kéo dài → HTHTTD" },
    { question:"We ___ her about it.", options:["have been telling","told","tell","are telling"], answer:0, explain:"have/has been + V-ing" }
  ]
};

/* ============================
   5. PAST SIMPLE – 20 câu
   ============================ */

window.quizData["past-simple"] = {
  title: "Bài tập – Past Simple",
  desc: "Chọn đáp án đúng cho thì Quá khứ đơn.",
  questions: [
    { question:"I ___ to school yesterday.", options:["go","am going","went","goes"], answer:2, explain:"Yesterday → hành động quá khứ → went" },
    { question:"She ___ a new car last month.", options:["buys","is buying","bought","buy"], answer:2, explain:"last month → bought" },
    { question:"They ___ football last Sunday.", options:["play","played","are playing","plays"], answer:1, explain:"played = quá khứ" },
    { question:"My father ___ very tired yesterday.", options:["is","was","were","be"], answer:1, explain:"He → was" },
    { question:"We ___ at home all day.", options:["stay","stayed","stays","are staying"], answer:1, explain:"stayed = quá khứ" },
    { question:"Tom ___ his homework last night.", options:["did","does","is doing","do"], answer:0, explain:"do → did" },
    { question:"The movie ___ at 9 PM.", options:["finish","finishes","finished","finishing"], answer:2, explain:"finished = quá khứ" },
    { question:"Kate ___ me a letter two days ago.", options:["send","sends","sent","is sending"], answer:2, explain:"sent = quá khứ của send" },
    { question:"We ___ to Paris last summer.", options:["travel","travelled","travelling","travels"], answer:1, explain:"travelled = quá khứ" },
    { question:"I ___ a delicious cake yesterday.", options:["bake","baked","bakes","am baking"], answer:1, explain:"baked = quá khứ của bake" },
    { question:"The cat ___ on the sofa all night.", options:["sleep","slept","sleeps","sleeping"], answer:1, explain:"slept = quá khứ" },
    { question:"She ___ the window because it was hot.", options:["open","opened","opens","is opening"], answer:1, explain:"opened = quá khứ" },
    { question:"They ___ late for school yesterday.", options:["are","were","was","be"], answer:1, explain:"They → were" },
    { question:"I ___ a new phone last week.", options:["buy","bought","buys","am buying"], answer:1, explain:"bought = quá khứ" },
    { question:"He ___ the guitar at the party.", options:["play","played","plays","is playing"], answer:1, explain:"played = quá khứ" },
    { question:"The weather ___ very cold yesterday.", options:["is","was","were","be"], answer:1, explain:"It → was" },
    { question:"We ___ dinner early yesterday.", options:["eat","ate","eaten","eating"], answer:1, explain:"eat → ate" },
    { question:"My sister ___ a beautiful picture.", options:["paint","painted","paints","is painting"], answer:1, explain:"painted = quá khứ" },
    { question:"They ___ their hands before eating.", options:["wash","washed","washes","are washing"], answer:1, explain:"washed = quá khứ" },
    { question:"She ___ her keys yesterday.", options:["lose","lost","loses","is losing"], answer:1, explain:"lost = quá khứ" }
  ]
};


/* ============================
   6. PAST CONTINUOUS – 20 câu
   ============================ */

window.quizData["past-continuous"] = {
  title: "Bài tập – Past Continuous",
  desc: "Chọn đáp án đúng cho thì Quá khứ tiếp diễn.",
  questions: [
    { question:"I ___ when he called me.", options:["was studying","studied","study","am studying"], answer:0, explain:"was/were + V-ing" },
    { question:"They ___ dinner at 7 PM last night.", options:["were having","had","have","are having"], answer:0, explain:"Thời điểm cụ thể → QKTD" },
    { question:"She ___ TV when I arrived.", options:["was watching","watched","watches","is watching"], answer:0, explain:"đang diễn ra thì hành động khác xen vào" },
    { question:"We ___ in the park at that time.", options:["were walking","walked","walk","are walking"], answer:0, explain:"at that time → QKTD" },
    { question:"He ___ his homework all evening.", options:["was doing","did","does","is doing"], answer:0, explain:"was + V-ing" },
    { question:"The students ___ when the teacher came.", options:["were talking","talked","talk","are talking"], answer:0, explain:"hành động đang diễn ra" },
    { question:"I ___ a shower when the phone rang.", options:["was taking","took","take","am taking"], answer:0, explain:"đang diễn ra → QKTD" },
    { question:"They ___ to music.", options:["were listening","listened","listen","are listening"], answer:0, explain:"were + V-ing" },
    { question:"She ___ with her friends yesterday afternoon.", options:["was playing","played","plays","is playing"], answer:0, explain:"yesterday afternoon + QKTD" },
    { question:"We ___ for the bus.", options:["were waiting","waited","wait","are waiting"], answer:0, explain:"were + V-ing" },
    { question:"The dog ___ loudly.", options:["was barking","barked","barks","is barking"], answer:0, explain:"hành động kéo dài" },
    { question:"He ___ to music when I saw him.", options:["was listening","listened","listen","is listening"], answer:0, explain:"was + V-ing" },
    { question:"They ___ chess.", options:["were playing","played","play","are playing"], answer:0, explain:"were + V-ing" },
    { question:"The children ___ while their mother cooked.", options:["were playing","played","plays","are playing"], answer:0, explain:"hành động song song" },
    { question:"She ___ on the phone when you arrived.", options:["was talking","talked","talk","is talking"], answer:0, explain:"was + V-ing" },
    { question:"I ___ the news when he came home.", options:["was reading","read","reads","am reading"], answer:0, explain:"đang đọc" },
    { question:"We ___ a movie at that time.", options:["were watching","watched","watch","are watching"], answer:0, explain:"at that time → QKTD" },
    { question:"He ___ to sleep during the lecture.", options:["was falling","fell","falls","is falling"], answer:0, explain:"was + V-ing" },
    { question:"They ___ the room when I visited.", options:["were cleaning","cleaned","clean","are cleaning"], answer:0, explain:"were + V-ing" },
    { question:"She ___ down when it started to rain.", options:["was walking","walked","walk","is walking"], answer:0, explain:"đang diễn ra → QKTD" }
  ]
};

/* ============================
   7. PAST PERFECT – 20 câu
   ============================ */

window.quizData["past-perfect"] = {
  title: "Bài tập – Past Perfect",
  desc: "Chọn đáp án đúng cho thì Quá khứ hoàn thành.",
  questions: [
    { question:"I ___ my homework before I went out.", options:["had finished","finished","finish","was finishing"], answer:0, explain:"before + QKĐ → hành động trước đó = QKHT" },
    { question:"She ___ when I arrived.", options:["had left","left","leaves","was leaving"], answer:0, explain:"had + V3" },
    { question:"They ___ dinner when we came.", options:["had eaten","ate","eat","were eating"], answer:0, explain:"hành động xảy ra trước quá khứ" },
    { question:"He ___ the film before.", options:["had seen","saw","sees","was seeing"], answer:0, explain:"had + V3 = đã từng trước đó" },
    { question:"We ___ the house before it rained.", options:["had cleaned","cleaned","clean","were cleaning"], answer:0, explain:"before + QKĐ → QKHT" },
    { question:"She ___ the letter by the time he came.", options:["had written","wrote","writes","was writing"], answer:0, explain:"by the time + QKĐ → QKHT" },
    { question:"They ___ the work when the boss checked.", options:["had done","did","do","were doing"], answer:0, explain:"hoàn thành trước → QKHT" },
    { question:"I ___ him before that day.", options:["had met","met","meet","was meeting"], answer:0, explain:"đã từng gặp → QKHT" },
    { question:"She ___ the keys before losing them.", options:["had found","found","find","was finding"], answer:0, explain:"had + V3" },
    { question:"The train ___ when we arrived.", options:["had left","left","leaves","was leaving"], answer:0, explain:"hành động rời đi trước → QKHT" },
    { question:"He ___ lunch when I called.", options:["had had","had","has","was having"], answer:0, explain:"had had = QKHT của have" },
    { question:"We ___ the news already.", options:["had heard","heard","hear","were hearing"], answer:0, explain:"already → QKHT" },
    { question:"She ___ English before she came here.", options:["had learned","learned","learn","was learning"], answer:0, explain:"hành động học trước" },
    { question:"They ___ the report.", options:["had finished","finished","finish","were finishing"], answer:0, explain:"hoàn thành trước → QKHT" },
    { question:"I ___ all the money by the time he asked.", options:["had spent","spent","spend","was spending"], answer:0, explain:"by the time → QKHT" },
    { question:"He ___ the message.", options:["had sent","sent","sends","was sending"], answer:0, explain:"had + V3" },
    { question:"The students ___ the test before lunch.", options:["had done","did","do","were doing"], answer:0, explain:"done = QKHT" },
    { question:"She ___ her homework when her mom arrived.", options:["had done","did","does","was doing"], answer:0, explain:"hoàn thành trước → QKHT" },
    { question:"They ___ in that house for 10 years.", options:["had lived","lived","live","were living"], answer:0, explain:"kéo dài trước một thời điểm" },
    { question:"I ___ the book before the exam.", options:["had read","read","reads","was reading"], answer:0, explain:"read → had read (QKHT)" }
  ]
};



/* ============================================
   8. PAST PERFECT CONTINUOUS – 20 câu
   ============================================ */

window.quizData["past-perfect-continuous"] = {
  title: "Bài tập – Past Perfect Continuous",
  desc: "Chọn đáp án đúng cho thì Quá khứ hoàn thành tiếp diễn.",
  questions: [
    { question:"I ___ for 2 hours before he arrived.", options:["had been studying","studied","was studying","study"], answer:0, explain:"had been + V-ing" },
    { question:"She ___ since morning.", options:["had been working","worked","was working","works"], answer:0, explain:"hành động kéo dài đến QKĐ" },
    { question:"They ___ for the bus for 30 minutes.", options:["had been waiting","waited","were waiting","wait"], answer:0, explain:"had been + V-ing" },
    { question:"He ___ before the match started.", options:["had been practicing","practiced","was practicing","practices"], answer:0, explain:"kéo dài liên tục trước QKĐ" },
    { question:"We ___ in the rain.", options:["had been walking","walked","were walking","walk"], answer:0, explain:"had been + V-ing" },
    { question:"She ___ hard all day.", options:["had been working","worked","was working","works"], answer:0, explain:"all day → QKHTTD" },
    { question:"They ___ the house before the guests came.", options:["had been cleaning","cleaned","were cleaning","clean"], answer:0, explain:"hành động kéo dài" },
    { question:"He ___ for hours.", options:["had been sleeping","slept","was sleeping","sleeps"], answer:0, explain:"had been + V-ing" },
    { question:"I ___ English before moving to London.", options:["had been learning","learned","was learning","learn"], answer:0, explain:"trước một thời điểm QK" },
    { question:"She ___ too much before she got sick.", options:["had been eating","ate","was eating","eats"], answer:0, explain:"nguyên nhân → kéo dài trước quá khứ" },
    { question:"The kids ___ all morning.", options:["had been playing","played","were playing","play"], answer:0, explain:"all morning → QKHTTD" },
    { question:"We ___ for the exam.", options:["had been preparing","prepared","were preparing","prepare"], answer:0, explain:"had been + V-ing" },
    { question:"He ___ around the city.", options:["had been driving","drove","was driving","drives"], answer:0, explain:"kéo dài liên tục" },
    { question:"They ___ for days before the test.", options:["had been studying","studied","were studying","study"], answer:0, explain:"for days → QKHTTD" },
    { question:"She ___ loudly before the teacher came.", options:["had been shouting","shouted","was shouting","shouts"], answer:0, explain:"had been + V-ing" },
    { question:"I ___ on this project.", options:["had been working","worked","was working","work"], answer:0, explain:"hành động kéo dài đến QKĐ" },
    { question:"They ___ about moving.", options:["had been talking","talked","were talking","talk"], answer:0, explain:"had been + V-ing" },
    { question:"He ___ too fast before the accident.", options:["had been driving","drove","was driving","drives"], answer:0, explain:"nguyên nhân → QKHTTD" },
    { question:"We ___ for her all afternoon.", options:["had been waiting","waited","were waiting","wait"], answer:0, explain:"kéo dài → QKHTTD" },
    { question:"She ___ before she fainted.", options:["had been walking","walked","was walking","walk"], answer:0, explain:"had been + V-ing" }
  ]
};

/* ============================
   9. FUTURE SIMPLE – 20 câu
   ============================ */

window.quizData["future-simple"] = {
  title: "Bài tập – Future Simple",
  desc: "Chọn đáp án đúng cho thì Tương lai đơn.",
  questions: [
    { question:"I ___ you a message later.", options:["will send","send","am sending","sent"], answer:0, explain:"will + V" },
    { question:"She ___ happy when she sees this.", options:["will be","is","was","be"], answer:0, explain:"dự đoán tương lai → will be" },
    { question:"They ___ tomorrow.", options:["will leave","left","leave","are leaving"], answer:0, explain:"dự đoán hoặc quyết định ngay lúc nói" },
    { question:"He ___ dinner tonight.", options:["will cook","cooks","is cooking","has cooked"], answer:0, explain:"will + V" },
    { question:"We ___ the exam next week.", options:["will take","take","took","are taking"], answer:0, explain:"next week → TLĐ" },
    { question:"She ___ you soon.", options:["will call","calls","called","is calling"], answer:0, explain:"hứa/ý định → will" },
    { question:"It ___ tomorrow.", options:["will rain","rains","rained","is raining"], answer:0, explain:"dự báo thời tiết → will" },
    { question:"They ___ at 6 PM.", options:["will arrive","arrives","arrived","are arriving"], answer:0, explain:"dự đoán tương lai" },
    { question:"I think he ___ the game.", options:["will win","wins","won","is winning"], answer:0, explain:"think → TLĐ" },
    { question:"We ___ a new house next year.", options:["will buy","buy","bought","are buying"], answer:0, explain:"next year → TLĐ" },
    { question:"She ___ to school by bus tomorrow.", options:["will go","goes","went","is going"], answer:0, explain:"dự đoán tương lai" },
    { question:"They ___ late.", options:["will be","are","were","be"], answer:0, explain:"will + be" },
    { question:"The train ___ on time.", options:["will arrive","arrived","arrives","is arriving"], answer:0, explain:"dự đoán TLĐ" },
    { question:"I ___ you soon.", options:["will see","see","saw","am seeing"], answer:0, explain:"will + V" },
    { question:"He ___ the truth one day.", options:["will know","knows","knew","is knowing"], answer:0, explain:"dự đoán" },
    { question:"We ___ the results tomorrow.", options:["will get","get","got","are getting"], answer:0, explain:"thời phù hợp" },
    { question:"She ___ a teacher.", options:["will become","becomes","became","is becoming"], answer:0, explain:"tương lai → will" },
    { question:"They ___ the project next month.", options:["will start","start","started","are starting"], answer:0, explain:"next month → TLĐ" },
    { question:"He ___ here soon.", options:["will come","comes","came","is coming"], answer:0, explain:"will + V" },
    { question:"I hope she ___ well.", options:["will do","does","did","is doing"], answer:0, explain:"hope → TLĐ" }
  ]
};



/* ================================================
   10. NEAR FUTURE – “Be going to” – 20 câu
   ================================================ */

window.quizData["near-future"] = {
  title: "Bài tập – Near Future (Be going to)",
  desc: "Chọn đáp án đúng cho cấu trúc Be going to.",
  questions: [
    { question:"I ___ visit my uncle tomorrow.", options:["am going to","will","go","going"], answer:0, explain:"am/is/are + going to + V" },
    { question:"She ___ buy a new laptop.", options:["is going to","going to","will going","is going"], answer:0, explain:"is going to + V" },
    { question:"They ___ play football this afternoon.", options:["are going to","is going to","going to","will"], answer:0, explain:"are going to + V" },
    { question:"We ___ travel to Japan next year.", options:["are going to","is going to","will going","go"], answer:0, explain:"dự định tương lai gần" },
    { question:"He ___ start a new job.", options:["is going to","are going to","going to","will"], answer:0, explain:"kế hoạch có sẵn" },
    { question:"I think it ___ rain soon. Look at the clouds!", options:["is going to","will","going to","is going"], answer:0, explain:"dựa trên dấu hiệu" },
    { question:"She ___ meet her friends tonight.", options:["is going to","are going to","going","will"], answer:0, explain:"is going to + V" },
    { question:"They ___ move to a new house.", options:["are going to","is going to","will","move"], answer:0, explain:"kế hoạch tương lai" },
    { question:"We ___ have dinner outside.", options:["are going to","is going to","will","having"], answer:0, explain:"am/is/are + going to" },
    { question:"He ___ study English next semester.", options:["is going to","are going to","going","will"], answer:0, explain:"kế hoạch" },
    { question:"I ___ start a new project.", options:["am going to","will","go","going"], answer:0, explain:"am going to" },
    { question:"She ___ call you later.", options:["is going to","are going to","will","calls"], answer:0, explain:"is going to + V" },
    { question:"They ___ buy a new car.", options:["are going to","is going to","going to","will"], answer:0, explain:"kế hoạch có sẵn" },
    { question:"We ___ paint the house.", options:["are going to","is going to","will","painting"], answer:0, explain:"dự định gần" },
    { question:"He ___ visit his parents.", options:["is going to","are going to","going","visits"], answer:0, explain:"is going to + V" },
    { question:"I ___ cook dinner tonight.", options:["am going to","will","cook","going"], answer:0, explain:"am + going to" },
    { question:"She ___ take a photo.", options:["is going to","are going to","takes","taking"], answer:0, explain:"cấu trúc chuẩn" },
    { question:"They ___ watch a movie.", options:["are going to","is going to","watch","will"], answer:0, explain:"are going to" },
    { question:"We ___ start soon.", options:["are going to","is going to","starting","will"], answer:0, explain:"kế hoạch" },
    { question:"He ___ buy flowers for his mom.", options:["is going to","are going to","will","buys"], answer:0, explain:"is going to + V" }
  ]
};

/* ============================
   11. FUTURE CONTINUOUS – 20 câu
   ============================ */

window.quizData["future-continuous"] = {
  title: "Bài tập – Future Continuous",
  desc: "Chọn đáp án đúng cho thì Tương lai tiếp diễn.",
  questions: [
    { question:"I ___ at 8 PM tonight.", options:["will be studying","study","studied","am studying"], answer:0, explain:"will be + V-ing" },
    { question:"She ___ to work tomorrow morning.", options:["will be driving","drives","is driving","drive"], answer:0, explain:"hành động đang diễn ra tại thời điểm tương lai" },
    { question:"They ___ dinner when we arrive.", options:["will be having","have","had","are having"], answer:0, explain:"đang diễn ra trong tương lai" },
    { question:"We ___ the game at this time tomorrow.", options:["will be watching","watch","watched","are watching"], answer:0, explain:"this time tomorrow → TLTD" },
    { question:"He ___ the report all day tomorrow.", options:["will be working on","works on","worked on","is working on"], answer:0, explain:"kéo dài ở tương lai" },
    { question:"She ___ for the exam.", options:["will be studying","studies","studied","is studying"], answer:0, explain:"will be + V-ing" },
    { question:"They ___ the meeting.", options:["will be attending","attend","attended","are attending"], answer:0, explain:"ý diễn ra trong tương lai" },
    { question:"I ___ on the project next week.", options:["will be working","work","worked","am working"], answer:0, explain:"kéo dài tương lai" },
    { question:"He ___ with his friends.", options:["will be playing","play","played","is playing"], answer:0, explain:"will be + V-ing" },
    { question:"We ___ the bus at 9 AM.", options:["will be taking","take","took","are taking"], answer:0, explain:"hành động đang diễn ra tại điểm tương lai" },
    { question:"She ___ when you call her.", options:["will be sleeping","sleep","sleeps","is sleeping"], answer:0, explain:"when + TLTD" },
    { question:"They ___ the house.", options:["will be cleaning","clean","cleaned","are cleaning"], answer:0, explain:"will be + V-ing" },
    { question:"I ___ to music then.", options:["will be listening","listen","listened","am listening"], answer:0, explain:"hành động đang diễn ra" },
    { question:"We ___ our tests tomorrow afternoon.", options:["will be taking","take","took","are taking"], answer:0, explain:"thời điểm xác định tương lai" },
    { question:"He ___ TV when I arrive.", options:["will be watching","watch","watched","is watching"], answer:0, explain:"song song tương lai" },
    { question:"She ___ all day.", options:["will be working","working","works","is working"], answer:0, explain:"kéo dài tương lai" },
    { question:"They ___ lunch at noon.", options:["will be having","have","had","are having"], answer:0, explain:"will be + V-ing" },
    { question:"I ___ my car.", options:["will be fixing","fix","fixed","am fixing"], answer:0, explain:"will be + V-ing" },
    { question:"The kids ___ outside.", options:["will be playing","play","played","are playing"], answer:0, explain:"tương lai tiếp diễn" },
    { question:"He ___ the meeting at that time.", options:["will be attending","attend","attended","is attending"], answer:0, explain:"at that time → TLTD" }
  ]
};


/* ============================
   12. FUTURE PERFECT – 20 câu
   ============================ */

window.quizData["future-perfect"] = {
  title: "Bài tập – Future Perfect",
  desc: "Chọn đáp án đúng cho thì Tương lai hoàn thành.",
  questions: [
    { question:"I ___ the work by tomorrow.", options:["will have finished","finish","finished","am finishing"], answer:0, explain:"will have + V3" },
    { question:"She ___ the letter by 5 PM.", options:["will have written","writes","wrote","is writing"], answer:0, explain:"by + thời điểm → TLHT" },
    { question:"They ___ the project before Friday.", options:["will have completed","complete","completed","are completing"], answer:0, explain:"đã hoàn thành trước tương lai" },
    { question:"We ___ dinner by then.", options:["will have had","have","had","are having"], answer:0, explain:"will have + V3" },
    { question:"He ___ the book by next week.", options:["will have finished","finishes","finished","is finishing"], answer:0, explain:"next week (điểm tương lai)" },
    { question:"The students ___ the test.", options:["will have done","do","did","are doing"], answer:0, explain:"will have + V3" },
    { question:"They ___ the house by summer.", options:["will have built","build","built","are building"], answer:0, explain:"hành động hoàn tất trước tương lai" },
    { question:"I ___ enough money.", options:["will have saved","save","saved","am saving"], answer:0, explain:"will have + V3" },
    { question:"She ___ the report.", options:["will have typed","types","typed","is typing"], answer:0, explain:"đánh máy xong trước tương lai" },
    { question:"We ___ the plan.", options:["will have made","make","made","are making"], answer:0, explain:"will have + V3" },
    { question:"He ___ the car by noon.", options:["will have repaired","repairs","repaired","is repairing"], answer:0, explain:"by noon → TLHT" },
    { question:"They ___ the film by that time.", options:["will have watched","watch","watched","are watching"], answer:0, explain:"hoàn tất trong tương lai" },
    { question:"I ___ all the exercises.", options:["will have done","do","did","am doing"], answer:0, explain:"will have + V3" },
    { question:"She ___ the flowers by evening.", options:["will have watered","waters","watered","is watering"], answer:0, explain:"TLHT" },
    { question:"We ___ the training course.", options:["will have finished","finish","finished","are finishing"], answer:0, explain:"hoàn thành khóa học" },
    { question:"He ___ for 10 years by next month.", options:["will have worked","works","worked","is working"], answer:0, explain:"for + time + by + future → TLHT" },
    { question:"They ___ two cars by next year.", options:["will have bought","buy","bought","are buying"], answer:0, explain:"will have + V3" },
    { question:"I ___ breakfast by then.", options:["will have eaten","eat","ate","am eating"], answer:0, explain:"by then → TLHT" },
    { question:"She ___ all tasks by tomorrow.", options:["will have completed","completes","completed","is completing"], answer:0, explain:"hoàn thành trước tương lai" },
    { question:"We ___ everything we need.", options:["will have prepared","prepare","prepared","are preparing"], answer:0, explain:"will have + V3" }
  ]
};

/* ============================
   13. NEAR FUTURE – 20 câu
   ============================ */

window.quizData["near-future"] = {
  title: "Bài tập – Near Future",
  desc: "Chọn đáp án đúng cho thì Tương lai gần.",
  questions: [
  { question: "She ___ visit her grandmother tomorrow.", options: ["is going to", "will", "go", "is go"], answer: 0, explain: "Dấu hiệu: tomorrow → near future (be going to + V)" },
  { question: "They ___ have a big party next weekend.", options: ["are going to", "will", "are go", "going to"], answer: 0, explain: "S + am/is/are + going to + V" },
  { question: "I ___ buy a new phone. I saved money.", options: ["am going to", "will", "am go to", "going to buy"], answer: 0, explain: "Kế hoạch có trước → be going to" },
  { question: "Look at the clouds! It ___ rain.", options: ["is going to", "will", "rains", "is rain"], answer: 0, explain: "Dự đoán dựa vào dấu hiệu hiện tại → be going to" },
  { question: "We ___ travel to Da Nang this summer.", options: ["are going to", "will to", "go", "are go"], answer: 0, explain: "are going to + V" },
  { question: "He ___ study abroad next year.", options: ["is going to", "will going to", "is go to", "goes"], answer: 0, explain: "is going to + V" },
  { question: "They ___ build a new house.", options: ["are going to", "are build", "will build", "building"], answer: 0, explain: "are going to + V" },
  { question: "I think she ___ be a doctor.", options: ["is going to", "will", "is to", "going"], answer: 0, explain: "Ý định tương lai → be going to" },
  { question: "We ___ have lunch at 12.", options: ["are going to", "will have", "are have", "have"], answer: 0, explain:"are going to + V" },
  { question: "My brother ___ start a new job next month.", options: ["is going to", "will start", "starts", "is start"], answer: 0, explain:"is going to + V" },
  { question: "She ___ take an English course.", options: ["is going to", "will to", "is taking", "take"], answer: 0, explain:"is going to + V" },
  { question: "They ___ move to a new apartment soon.", options: ["are going to", "will moving", "move", "are move"], answer: 0, explain:"are going to + V" },
  { question: "I ___ visit Ho Chi Minh City next month.", options: ["am going to", "will visit", "am visit", "going"], answer: 0, explain:"am going to + V" },
  { question: "He ___ play football this afternoon.", options: ["is going to", "play", "is playing", "will play"], answer: 0, explain:"is going to + V" },
  { question: "They ___ buy some new furniture.", options: ["are going to", "are buy", "buy", "are buying"], answer: 0, explain:"are going to + V" },
  { question: "We ___ watch a movie tonight.", options: ["are going to", "watch", "are watch", "will"], answer: 0, explain:"are going to + V" },
  { question: "She ___ cook dinner after work.", options: ["is going to", "is cooks", "will cook", "cook"], answer: 0, explain:"is going to + V" },
  { question: "I ___ start learning Japanese.", options: ["am going to", "will start", "start", "am start"], answer: 0, explain:"am going to + V" },
  { question: "He ___ meet his friends at 7 PM.", options: ["is going to", "meets", "is meet", "will meet"], answer: 0, explain:"is going to + V" },
  { question: "They ___ open a new restaurant.", options: ["are going to", "open", "will open", "are open"], answer: 0, explain:"are going to + V" }
]
};

/* ============================
   14. Will vs Be going to – 20 câu
   ============================ */

window.quizData["will-vs-going-to"] = {
  title: "Bài tập – Will vs Be going to",
  desc: "Chọn đáp án đúng cho Will vs Be going to.",
  questions: [
  {question: "Look at those clouds! It ___ rain soon.", options: ["will", "is going to", "won’t", "is"], answer: 1, explain: "Dựa vào dấu hiệu rõ ràng → dùng 'be going to'"},
  {question: "I think he ___ pass the exam.", options: ["is going to", "will", "is passing", "passes"], answer: 1, explain: "Dự đoán không có cơ sở → dùng 'will'"},
  {question: "She bought paint. She ___ paint her bedroom.", options: ["is going to", "will", "is", "is going to be"], answer: 0, explain: "Có kế hoạch và chuẩn bị sẵn → dùng 'be going to'"},
  {question: "A: The phone is ringing! B: I ___ answer it.", options: ["am going to", "will", "am", "am answering"], answer: 1, explain: "Quyết định ngay lúc nói → dùng 'will'"},
  {question: "Watch out! That glass ___ fall.", options: ["will", "is going to", "falls", "is"], answer: 1, explain: "Bằng chứng rõ ràng sắp xảy ra → dùng 'be going to'"},
  {question: "We have already packed. We ___ leave now.", options: ["will", "are going to", "go", "will be"], answer: 1, explain: "Có chuẩn bị trước → 'be going to'"},
  {question: "He hopes he ___ find a new job soon.", options: ["will", "is going to", "is", "finds"], answer: 0, explain: "Hy vọng, dự đoán → dùng 'will'"},
  {question: "I’m sure she ___ be happy with the gift.", options: ["will", "is going to", "is", "be going to"], answer: 0, explain: "Ý kiến cá nhân → dùng 'will'"},
  {question: "They ___ get married next month. Everything is planned.", options: ["will", "are going to", "are", "will be"], answer: 1, explain: "Kế hoạch đã định → 'be going to'"},
  {question: "The weather forecast says it ___ be sunny today.", options: ["will", "is going to", "is", "goes to"], answer: 0, explain: "Dự báo thời tiết → dùng 'will'"},
  {question: "A: I’m thirsty. B: I ___ get you some water.", options: ["will", "am going to", "get", "am getting"], answer: 0, explain: "Hành động tự nguyện → dùng 'will'"},
  {question: "He is holding the ball. He ___ throw it.", options: ["is going to", "will", "throws", "is"], answer: 0, explain: "Bằng chứng rõ ràng → 'be going to'"},
  {question: "I think our team ___ win the match.", options: ["is going to", "wins", "will", "is"], answer: 2, explain: "Ý kiến cá nhân → dùng will"},
  {question: "She feels sick. She ___ faint.", options: ["will", "is going to", "is", "may"], answer: 1, explain: "Dấu hiệu nhìn thấy rõ → 'be going to'"},
  {question: "We don’t have milk. I ___ buy some.", options: ["am going to", "will", "am", "might"], answer: 1, explain: "Quyết định ngay khi nói → 'will'"},
  {question: "Tom has decided. He ___ quit his job.", options: ["is going to", "will", "is", "quits"], answer: 0, explain: "Kế hoạch đã quyết định → 'be going to'"},
  {question: "The sky is dark. It ___ rain.", options: ["will", "is going to", "rains", "is"], answer: 1, explain: "Dấu hiệu rõ ràng → 'be going to'"},
  {question: "I’m sure you ___ enjoy the trip.", options: ["will", "are going to", "enjoy", "are enjoy"], answer: 0, explain: "Sự chắc chắn của người nói → 'will'"},
  {question: "We ___ visit our grandparents this weekend. It’s already planned.", options: ["will", "are going to", "visit", "going to"], answer: 1, explain: "Kế hoạch đã định → 'be going to'"},
  {question: "A: I can’t fix this. B: Don’t worry. I ___ help you.", options: ["am going to", "will", "am helping", "help"], answer: 1, explain: "Hứa giúp ngay tại thời điểm nói → 'will'"}
]
};

/* ============================
   15. Phần Nouns - Danh từ
   ============================ */

window.quizData["nouns"] = {
  title: "Bài tập – Danh từ (Nouns)",
  desc: "Chọn đáp án đúng về danh từ.",
  questions: [
    {question: "Which word is a countable noun?", options:["water","rice","apple","music"], answer:2, explain:"Apple là danh từ đếm được."},
    {question: "Which is an uncountable noun?", options:["chair","milk","book","phone"], answer:1, explain:"Milk là danh từ không đếm được."},
    {question: "The plural of 'baby' is…", options:["babys","babies","babys","babys"], answer:1, explain:"y → ies"},
    {question: "'Women' is the plural of…", options:["woman","man","girl","kid"], answer:0, explain:"woman → women"},
    {question: "Which is a proper noun?", options:["city","girl","Vietnam","car"], answer:2, explain:"Tên riêng viết hoa."},
    {question: "The plural of 'dish' is…", options:["dishs","dishes","dishies","dish"], answer:1, explain:"-sh → es"},
    {question: "Which word is a common noun?", options:["London","John","teacher","Vietnam"], answer:2, explain:"teacher là danh từ chung"},
    {question: "Child →", options:["childs","childes","children","child"], answer:2, explain:"child → children"},
    {question: "Which one is uncountable?", options:["juice","apple","banana","dog"], answer:0, explain:"Juice là danh từ không đếm được"},
    {question: "Foot →", options:["foots","feet","feets","foot"], answer:1, explain:"foot → feet"},
    {question: "Which noun is countable?", options:["sugar","music","bread","car"], answer:3, explain:"car đếm được"},
    {question: "Tooth →", options:["tooths","teeth","toothes","teets"], answer:1, explain:"tooth → teeth"},
    {question: "Which is a plural noun?", options:["book","cat","cars","dog"], answer:2, explain:"cars"},
    {question: "Country →", options:["countrys","countries","countryes","countrys"], answer:1, explain:"y → ies"},
    {question: "Which group contains only uncountable nouns?", options:["milk–water–rice","milk–apple–rice","milk–cat–water","apple–rice–water"], answer:0, explain:"milk, water, rice đều không đếm được"},
    {question: "Mouse →", options:["mouses","mices","mice","mouse"], answer:2, explain:"mouse → mice"},
    {question: "Which is a proper noun?", options:["teacher","Asia","city","man"], answer:1, explain:"Asia là tên riêng"},
    {question: "Which of these is NOT countable?", options:["chair","pen","sugar","phone"], answer:2, explain:"sugar không đếm được"},
    {question: "Man →", options:["mans","mens","men","mans"], answer:2, explain:"man → men"},
    {question: "Which noun can be both countable & uncountable?", options:["water","coffee","milk","rice"], answer:1, explain:"coffee → a coffee / coffee (không đếm được)"}
  ]
};

/* ============================
   16. Adjectives - Tính từ
   ============================ */
window.quizData["adjectives"] = {
  title: "Bài tập – Adjectives (Tính từ)",
  desc: "Chọn đáp án đúng cho phần Tính từ.",
  questions: [
    {question:"She is a very ___ girl.", options:["beauty","beautiful","beautify","beautifying"], answer:1, explain:"Tính từ đứng trước danh từ → beautiful"},
    {question:"This food tastes ___.", options:["delicious","deliciously","delight","delighted"], answer:0, explain:"Sau linking verb → adjective"},
    {question:"He looks really ___.", options:["happy","happily","happiness","happier"], answer:0, explain:"Linking verb → adjective"},
    {question:"A ___ cat is sleeping on the sofa.", options:["black small","small black","blackly small","smallly black"], answer:1, explain:"Thứ tự tính từ: size → color"},
    {question:"This is the ___ building in town.", options:["tall","taller","tallest","most tall"], answer:2, explain:"So sánh nhất → tallest"},
    {question:"The movie was ___.", options:["boring","bored","bore","boringly"], answer:0, explain:"Tính từ mô tả tính chất"},
    {question:"She bought a ___ bag.", options:["Italian leather beautiful","beautiful Italian leather","leather Italian beautiful","Italian beautiful leather"], answer:1, explain:"Opinion → origin → material"},
    {question:"He is ___ than his brother.", options:["smart","smarter","smartest","more smart"], answer:1, explain:"So sánh hơn → adjective + -er"},
    {question:"This exercise is the ___ of all.", options:["difficult","more difficult","most difficult","difficultest"], answer:2, explain:"So sánh nhất → most + adj (dài)"},
    {question:"She feels ___.", options:["terrible","terribly","terrified","terrify"], answer:0, explain:"Sau linking verb → dùng adjective"},
    {question:"We need a ___ room.", options:["big clean","clean big","bigly clean","cleanly big"], answer:1, explain:"Opinion → size → tính từ clean trước big không đúng thứ tự 'size → age → color’"},
    {question:"The soup smells ___.", options:["well","good","better","best"], answer:1, explain:"Linking verb smell → adjective"},
    {question:"She is the ___ student in the class.", options:["more intelligent","most intelligent","intelligentest","intelligently"], answer:1, explain:"So sánh nhất không có the more"},
    {question:"This test is ___ than the last one.", options:["hard","harder","hardly","more hard"], answer:1, explain:"So sánh hơn → harder"},
    {question:"He bought something ___.", options:["interest","interested","interesting","interestingly"], answer:2, explain:"Sau 'something' → dùng adjective"},
    {question:"The weather becomes ___.", options:["cold","coldly","colder","coldest"], answer:0, explain:"Sau linking verb → dùng adjective"},
    {question:"That was a very ___ story.", options:["amazing","amazingly","amazed","amazeful"], answer:0, explain:"Tính từ mô tả tính chất"},
    {question:"She has a ___ voice.", options:["sweet","sweetly","sweetest","more sweet"], answer:0, explain:"Adjective + noun"},
    {question:"They adopted a ___ dog.", options:["small cute black","cute black small","cute small black","black small cute"], answer:2, explain:"Opinion → size → color"},
    {question:"He is ___ to finish the work.", options:["able","ability","ably","abling"], answer:0, explain:"able = tính từ"}
  ]
};

/* ============================
   17. Adverbs - Trạng từ
   ============================ */
window.quizData["adverbs"] = {
  title: "Bài tập – Adverbs",
  desc: "Chọn đáp án đúng về trạng từ.",
  questions: [
    {question: "She sings very ___.", options: ["beautiful", "beauty", "beautifully", "more beautiful"], answer: 2, explain: "Trạng từ bổ nghĩa cho động từ 'sings' → beautifully"},
    {question: "He runs ___.", options: ["quick", "quickly", "quicker", "quickness"], answer: 1, explain: "Trạng từ bổ nghĩa cho động từ → quickly"},
    {question: "She works ___.", options: ["hard", "hardly", "harder", "more hard"], answer: 0, explain: "'hard' là trạng từ bất quy tắc"},
    {question: "This coffee is ___ hot.", options: ["very", "too", "enough", "so"], answer: 1, explain: "too + adj"},
    {question: "They ___ wake up early.", options: ["always", "quickly", "well", "beautifully"], answer: 0, explain: "Trạng từ chỉ tần suất"},
    {question: "He speaks English ___.", options: ["fluent", "fluently", "fluency", "more fluent"], answer: 1, explain: "Trạng từ bổ nghĩa cho động từ"},
    {question: "I will see you ___.", options: ["yesterday", "soon", "late", "quick"], answer: 1, explain: "Trạng từ thời gian"},
    {question: "They live ___.", options: ["there", "very", "too", "fastly"], answer: 0, explain: "Trạng từ nơi chốn"},
    {question: "She is ___ tired.", options: ["very", "too", "quite", "almost"], answer: 2, explain: "quite + adj"},
    {question: "He arrived ___.", options: ["early", "earlier", "earliest", "soon"], answer: 0, explain: "Trạng từ mô tả thời gian"}
  ]
};

/* ============================
   18. Pronouns - Đại từ
   ============================ */
window.quizData["pronouns"] = {
  title: "Bài tập – Pronouns (Đại từ)",
  desc: "Chọn đáp án đúng cho đại từ trong câu.",
  questions: [

    {question: "Mary is my sister. ___ is 20 years old.",
     options: ["He", "She", "Her", "They"], answer: 1,
     explain: "Mary → đại từ nhân xưng chủ ngữ (She)."},

    {question: "This is my book. That one is ___.",
     options: ["me", "mine", "my", "ours"], answer: 1,
     explain: "Đại từ sở hữu (mine) đứng cuối câu."},

    {question: "We did it all by ___.",
     options: ["we", "us", "ourselves", "ourself"], answer: 2,
     explain: "Đại từ phản thân: we → ourselves."},

    {question: "Do you know the man ___ is talking to Jane?",
     options: ["who", "whom", "which", "that"], answer: 0,
     explain: "Chủ ngữ của mệnh đề quan hệ → who."},

    {question: "Whose pen is this? – It’s ___.",
     options: ["my", "mine", "me", "ours"], answer: 1,
     explain: "Đại từ sở hữu đứng một mình: mine."},

    {question: "These are my friends. ___ are from Canada.",
     options: ["Them", "They", "Their", "Those"], answer: 1,
     explain: "Chủ ngữ số nhiều → They."},

    {question: "The teacher gave ___ homework today.",
     options: ["we", "our", "us", "ours"], answer: 2,
     explain: "Tân ngữ của động từ 'gave' → us."},

    {question: "___ is your favorite color?",
     options: ["Who", "What", "Whom", "Which"], answer: 1,
     explain: "Hỏi về vật → What."},

    {question: "I don't know ___ to choose.",
     options: ["what", "who", "whom", "when"], answer: 0,
     explain: "Tân ngữ gián tiếp không xác định → what."},

    {question: "She hurt ___ while playing basketball.",
     options: ["herself", "her", "she", "them"], answer: 0,
     explain: "Đại từ phản thân: she → herself."},

    {question: "Is this seat ___?",
     options: ["your", "yours", "you", "yourself"], answer: 1,
     explain: "Cuối câu dùng đại từ sở hữu → yours."},

    {question: "I saw a boy ___ was crying.",
     options: ["who", "whom", "what", "when"], answer: 0,
     explain: "Who dùng cho người làm chủ ngữ."},

    {question: "He didn't tell me ___ he was.",
     options: ["where", "who", "what", "whom"], answer: 0,
     explain: "Hỏi nơi chốn → where."},

    {question: "Tom and I will do it ___.",
     options: ["ourself", "ourselves", "us", "we"], answer: 1,
     explain: "We → ourselves."},

    {question: "___ book is this? – It’s mine.",
     options: ["Whose", "Who", "Which", "What"], answer: 0,
     explain: "Hỏi về sở hữu → Whose."},

    {question: "Give this letter to ___.",
     options: ["she", "her", "hers", "herself"], answer: 1,
     explain: "Tân ngữ → her."},

    {question: "I met a man ___ you talked about.",
     options: ["which", "whom", "who", "that"], answer: 1,
     explain: "Tân ngữ trong mệnh đề quan hệ → whom."},

    {question: "The dog hurt ___ tail.",
     options: ["itself", "it", "its", "it‘s"], answer: 0,
     explain: "Đại từ phản thân: it → itself."},

    {question: "___ of these bags is yours?",
     options: ["What", "Which", "Whose", "Who"], answer: 1,
     explain: "Which dùng khi có lựa chọn rõ ràng."},

    {question: "They enjoyed ___.",
     options: ["themselves", "them", "their", "they"], answer: 0,
     explain: "Đại từ phản thân: they → themselves."}
  ]
};

/* ============================
   19. Articles - Mạo từ
   ============================ */
window.quizData["articles"] = {
  title: "Bài tập – Articles",
  desc: "Chọn mạo từ đúng (a, an, the hoặc zero article).",
  questions: [
    {
      question: "I saw ___ elephant at the zoo.",
      options: ["a", "an", "the", "—"],
      answer: 1,
      explain: "Dùng 'an' trước âm bắt đầu bằng nguyên âm → elephant."
    },
    {
      question: "Can you pass me ___ salt, please?",
      options: ["a", "an", "the", "—"],
      answer: 2,
      explain: "Dùng 'the' khi cả người nói & nghe đều biết vật đó."
    },
    {
      question: "She is ___ teacher.",
      options: ["a", "an", "the", "—"],
      answer: 0,
      explain: "Dùng 'a' trước từ bắt đầu bằng phụ âm → teacher."
    },
    {
      question: "He bought ___ umbrella yesterday.",
      options: ["a", "an", "the", "—"],
      answer: 1,
      explain: "'Umbrella' bắt đầu bằng âm nguyên âm → dùng an."
    },
    {
      question: "We live near ___ ocean.",
      options: ["a", "an", "the", "—"],
      answer: 2,
      explain: "Dùng 'the' trước danh từ duy nhất (unique) → the ocean."
    },
    {
      question: "She goes to ___ school by bus.",
      options: ["a", "an", "the", "—"],
      answer: 3,
      explain: "Dùng zero article với nơi chốn: school, hospital, church."
    },
    {
      question: "This is ___ best day ever!",
      options: ["a", "an", "the", "—"],
      answer: 2,
      explain: "Dùng 'the' trước tính từ so sánh nhất → the best."
    },
    {
      question: "I need ___ new notebook.",
      options: ["a", "an", "the", "—"],
      answer: 0,
      explain: "Notebook bắt đầu bằng phụ âm → dùng 'a'."
    },
    {
      question: "She wants to be ___ engineer.",
      options: ["a", "an", "the", "—"],
      answer: 1,
      explain: "Engineer bắt đầu bằng âm nguyên âm → dùng 'an'."
    },
    {
      question: "He is playing ___ piano.",
      options: ["a", "an", "the", "—"],
      answer: 2,
      explain: "Dùng 'the' trước nhạc cụ → play the piano."
    },
    {
      question: "Do you have ___ pen I can borrow?",
      options: ["a", "an", "the", "—"],
      answer: 0,
      explain: "Pen là vật bất kỳ → dùng 'a'."
    },
    {
      question: "___ Mount Everest is very high.",
      options: ["a", "an", "the", "—"],
      answer: 2,
      explain: "Tên núi dùng 'the'."
    },
    {
      question: "He visited ___ United States last year.",
      options: ["a", "an", "the", "—"],
      answer: 2,
      explain: "Tên nước có 'states' (số nhiều) dùng 'the'."
    },
    {
      question: "I go to ___ bed at 11 p.m.",
      options: ["a", "an", "the", "—"],
      answer: 3,
      explain: "Zero article với go to bed, school, church..."
    },
    {
      question: "She lives in ___ small village.",
      options: ["a", "an", "the", "—"],
      answer: 0,
      explain: "'Small' bắt đầu bằng phụ âm → dùng 'a'."
    },
    {
      question: "He wants to buy ___ iPhone.",
      options: ["a", "an", "the", "—"],
      answer: 1,
      explain: "'iPhone' phát âm /ai/ → âm nguyên âm → dùng 'an'."
    },
    {
      question: "___ sun rises in the east.",
      options: ["a", "an", "the", "—"],
      answer: 2,
      explain: "Dùng 'the' cho vật thể duy nhất → the sun."
    },
    {
      question: "She is reading ___ book I gave her.",
      options: ["a", "an", "the", "—"],
      answer: 2,
      explain: "Xác định cụ thể → book I gave her → dùng 'the'."
    },
    {
      question: "We usually have ___ dinner at 7 p.m.",
      options: ["a", "an", "the", "—"],
      answer: 3,
      explain: "Bữa ăn → dùng zero article (have dinner)."
    },
    {
      question: "He adopted ___ dog from the shelter.",
      options: ["a", "an", "the", "—"],
      answer: 0,
      explain: "Dog là vật chưa được xác định → dùng 'a'."
    }
  ]
};

/* ============================
   19. Conjunctions - Liên từ
   ============================ */
window.quizData["conjunctions"] = {
  title: "Conjunctions",
  desc: "Chọn đáp án đúng cho liên từ (and, but, so, because, although…).",
  questions: [
    {question: "He was tired, ___ he went to bed early.",
     options: ["and", "but", "so", "or"],
     answer: 2,
     explain: "so = nên → chỉ kết quả."},

    {question: "I wanted to go out ___ it was raining.",
     options: ["but", "so", "because", "although"],
     answer: 0,
     explain: "but = nhưng (tương phản)."},

    {question: "She stayed home ___ she was sick.",
     options: ["although", "because", "but", "and"],
     answer: 1,
     explain: "because = bởi vì → chỉ nguyên nhân."},

    {question: "___ it rains, we will stay inside.",
     options: ["If", "Because", "But", "So"],
     answer: 0,
     explain: "If = nếu → điều kiện."},

    {question: "He passed the exam ___ he didn’t study much.",
     options: ["although", "because", "so", "and"],
     answer: 0,
     explain: "although = mặc dù (nhượng bộ)."},

    {question: "She is smart ___ hardworking.",
     options: ["or", "but", "and", "so"],
     answer: 2,
     explain: "and = và → thêm thông tin."},

    {question: "You can have tea ___ coffee.",
     options: ["and", "or", "but", "so"],
     answer: 1,
     explain: "or = hoặc → chọn lựa."},

    {question: "I didn’t go out ___ I was busy.",
     options: ["so", "but", "because", "and"],
     answer: 2,
     explain: "because = bởi vì → nguyên nhân."},

    {question: "He studied hard, ___ he passed the test.",
     options: ["although", "but", "so", "because"],
     answer: 2,
     explain: "so = nên → kết quả."},

    {question: "She is tired ___ she keeps working.",
     options: ["so", "although", "because", "but"],
     answer: 1,
     explain: "although = mặc dù."},

    {question: "I will call you ___ I arrive.",
     options: ["if", "when", "because", "but"],
     answer: 1,
     explain: "when = khi mà → thời gian."},

    {question: "We were late ___ the traffic jam.",
     options: ["because", "so", "but", "although"],
     answer: 0,
     explain: "because = bởi vì."},

    {question: "He didn’t pass the exam, ___ he didn't study.",
     options: ["and", "so", "because", "although"],
     answer: 2,
     explain: "because = bởi vì."},

    {question: "___ it was cold, we went swimming.",
     options: ["So", "Although", "Because", "When"],
     answer: 1,
     explain: "Although = mặc dù."},

    {question: "She likes both cats ___ dogs.",
     options: ["or", "and", "but", "so"],
     answer: 1,
     explain: "both… and = cả… và."},

    {question: "He is not only handsome ___ also smart.",
     options: ["and", "but", "or", "but also"],
     answer: 3,
     explain: "not only… but also = không chỉ… mà còn."},

    {question: "Either you apologize ___ you leave.",
     options: ["and", "or", "but", "so"],
     answer: 1,
     explain: "either… or = hoặc… hoặc."},

    {question: "Neither my sister ___ my brother likes fish.",
     options: ["and", "or", "nor", "but"],
     answer: 2,
     explain: "neither… nor = cả hai đều không."},

    {question: "He stayed up late ___ he was tired.",
     options: ["although", "because", "so", "and"],
     answer: 0,
     explain: "although = mặc dù."},

    {question: "I opened the window ___ it was too hot.",
     options: ["although", "so", "because", "but"],
     answer: 2,
     explain: "because = bởi vì."}
  ]
};

/* ============================
   20. Quantifiers – Định lượng từ
   ============================ */
window.quizData["quantifiers"] = {
  title: "Quantifiers – Định lượng từ",
  desc: "Chọn đáp án đúng cho định lượng từ.",
  questions: [
    {question:"I don’t have ___ time.", options:["many","much","a few","few"], answer:1, explain:"time → uncountable → much"},
    {question:"There are ___ apples left.", options:["much","many","little","no"], answer:1, explain:"apples → countable plural → many"},
    {question:"She has ___ friends. She isn’t lonely.", options:["few","a few","little","much"], answer:1, explain:"a few = một vài (tích cực)"},
    {question:"He drank ___ water.", options:["many","a few","too much","too many"], answer:2, explain:"water → uncountable → too much"},
    {question:"We don’t have ___ chairs for everyone.", options:["much","many","a little","few"], answer:1, explain:"chairs → countable plural → many"},
    {question:"There is ___ noise in this street.", options:["many","much","a few","few"], answer:1, explain:"noise → uncountable → much"},
    {question:"I ate ___ rice.", options:["a little","a few","many","no"], answer:0, explain:"rice → uncountable → a little"},
    {question:"She has ___ books.", options:["too much","too many","little","no"], answer:1, explain:"books → countable plural → too many"},
    {question:"___ of the students passed the test.", options:["Most","Most of","Any","Little"], answer:0, explain:"Most + plural noun"},
    {question:"___ my classmates are friendly.", options:["Most","Most of","Much","Few"], answer:1, explain:"Most of + my + noun"},
    {question:"There is ___ coffee left.", options:["a few","a little","many","few"], answer:1, explain:"coffee → uncountable"},
    {question:"Do you have ___ questions?", options:["some","any","few","little"], answer:1, explain:"Câu hỏi → any"},
    {question:"She has ___ problems today.", options:["too much","too many","a little","little"], answer:1, explain:"problems → plural → too many"},
    {question:"He made ___ mistakes.", options:["a few","a little","little","much"], answer:0, explain:"mistakes → countable plural"},
    {question:"They need ___ money to buy the tickets.", options:["many","much","a few","few"], answer:1, explain:"money → uncountable"},
    {question:"I saw ___ people at the concert.", options:["a little","no","a few","little"], answer:2, explain:"people → plural → a few"},
    {question:"There is ___ hope left.", options:["many","much","a few","little"], answer:1, explain:"hope → uncountable"},
    {question:"She spent ___ time studying.", options:["many","much","a few","no"], answer:1, explain:"time → uncountable"},
    {question:"We ate ___ of the cake.", options:["most","most of","a little","too many"], answer:1, explain:"most of + the"},
    {question:"He has ___ friends.", options:["many","much","little","a little"], answer:0, explain:"friends → plural → many"}
  ]
};
