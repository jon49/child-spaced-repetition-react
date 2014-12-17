// Generated by LiveScript 1.2.0
var decks, studentDeck, studentQuiz, students, decksView, studentDeckView, studentList, studentQuizView, m, app;
decks = require('./controllers/decks');
studentDeck = require('./controllers/student-deck');
studentQuiz = require('./controllers/student-quiz');
students = require('./controllers/students');
decksView = require('./views/decks-view');
studentDeckView = require('./views/student-deck-view');
studentList = require('./views/student-list');
studentQuizView = require('./views/student-quiz-view');
m = require('mithril');
app = function(view, controller){
  return {
    view: view,
    controller: controller
  };
};
m.route.mode = 'pathname';
m.route(document, '/', {
  '/app/decks': app(decksView, decks),
  '/app/decks/:id': app(cardsView, cards),
  '/app/students': app(studentList, students),
  '/app/students/:id/quiz': app(studentQuizView, studentQuiz),
  '/app/students/:id/decks': app(studentDeckView, studentDeck)
});