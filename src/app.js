import $ from 'jquery';
import Rx from 'rxjs/Rx';
/*
// Referenciamos el btn que esta en el html
const btn = $('#btn')
// Creamos un observable desde el evento de click
const btnStream$ = Rx.Observable.fromEvent(btn, 'click')

btnStream$.subscribe(function (e) {
  console.log("Click");
}, function (err) {
  console.log("Error");
}, function () {
  console.log("Complete");
});

const input = $('#input');
const output = $('#output');

// Creamos un Observable del evento de keyup a nuestro input
const inputStream$ = Rx.Observable.fromEvent(input, 'keyup');
inputStream$.subscribe(function (e) {
  // console.log(e.currentTarget.value);
  output.text(e.target.value);
}, function (err) {

}, function () {

});

const moveStream$ = Rx.Observable.fromEvent(document, 'mousemove');
moveStream$.subscribe(function (e) {
  output.html('<h1>x: ' + e.clientX + ' y: ' + e.clientY + '</h1>' );
}, function (err) {

}, function () {

});
*/

/*
const numbers = [1, 2, 3, 4, 56, 456789, 321, 3]
const numbers$ = Rx.Observable.from(numbers)
numbers$.subscribe(function (e) {
  console.log(e);
});

const postElement = $('#posts');
const posts = [
  {title: 'Post uno', body: 'Este es el cuerpo'},
  {title: 'Post dos', body: 'Cuerpo'},
  {title: 'Post tres', body: 'Cuerpecito'}
];

const postsStream$ = Rx.Observable.from(posts);
postsStream$.subscribe(
  post => {
    postElement.append('<li><h3>' + post.title + '</h3><p>' + post.body + '</p></li>');
  }
);

const set = new Set(['Hello', 44, {algo: 'something'}]);
const set$ = Rx.Observable.from(set);
set$.subscribe(
  value => console.log(value),
);

const map = new Map([[1, 2], [3, 4], [5, 6]]);
const map$ = Rx.Observable.from(map)
  .subscribe(
    value => {
      // Iterando como una matriz
      Rx.Observable.from(value)
        .subscribe(
          e => console.log(e),
        )
    }
  );
*/

// Rx from Scratch
/*
const source$ = new Rx.Observable(
  observer => {
    observer.next("Hello world")
    observer.next("Otro valor")
    // Cuando ocurre el error, se desuscribe
    observer.error("Something went wrong")
    setTimeout(() => {
      observer.next("Todavía falta otro valor")
      observer.complete()
    }, 2000);
  }
);

source$
  .catch(err => Rx.Observable.of(err))
  .subscribe(
    x => console.log('x', x),
    err => console.log('err', err),
    complete => console.log("Complete"),
  )
*/

/*
// Rx from Promise
const myPromise = new Promise((resolve, reject) => {
  console.log("Creando promesa...");
  setTimeout(() => {
    resolve("Hello world desde promesa")
  }, 3000)
});

myPromise.then(
  x => {
    console.log(x);
  }
)

Rx.Observable.fromPromise(myPromise)
  .subscribe( x => {
    console.log(x);
  });
*/

/*
function getUser(username) {
  return $.ajax({
    url: 'https://api.github.com/users/' + username,
    dataType: 'json',
  }).promise();
};

// getUser('ramrodo')
//   .then(x => {
//     console.log(x);
//   })

Rx.Observable.fromEvent($('#username'), 'keyup')
  .subscribe(x => Rx.Observable.fromPromise(getUser(x.target.value))
  .subscribe(user => {
    console.log(user);
    $('#name').text(user.name)
    $('#blog').text(user.blog)
    $('#repos').text(user.public_repos)
  }))
*/

Rx.Observable.range(15, 500)
  .take(5)
  .filter(x => (x % 2 == 0))
  .subscribe(x => console.log(x))

Rx.Observable.from(["Jhon", "Paco", "Luis"])
  .map(value => value.toUpperCase())
  .map(value => "Hello I'm " + value.toUpperCase())
  .subscribe(x => console.log(x))
