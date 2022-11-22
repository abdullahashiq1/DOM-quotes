// Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{

       quote:`"Life isn’t about getting and having, it’s about giving and being."`,
       author:`Kevin Kruse`},
    {
       quote:`"Whatever the mind of man can conceive and believe, it can achieve."`,
       author:`Napoleon Hill`},
    {
       quote:`"Strive not to be a success, but rather to be of value."`,
       author:`Albert Einstein`},
    {
       quote:`"Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference."`,
       author:`Robert Frost`},
    {
       quote:`"I attribute my success to this: I never gave or took any excuse."`,
       author:`Florence Nightingale`},
    {
       quote:`"You miss 100% of the shots you don’t take."`,
       author:`Wayne Gretzky`
    },];

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);
    // console.log(random);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].author;

})   


    