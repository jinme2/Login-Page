const quoteList = [
    {
        quote: "I never dreamed about success, I worked for it.",
        author: "-Estee Lauder",
    },
    {
        quote: "Do not try to be original, just try to be good.",
        author: "-Paul Rand",
    },
    {
        quote: "If you really want to do something, you\’ll find a way. If you do not, you\’ll find an excuse.",
        author: "-Jim Rohn",
    },
    {
        quote: "Success is going from failure to failure without a loss of enthusiasm.",
        author: "-Winston Churchill",
    },
    {
        quote: "Don\’t be afraid to give up the good to go for the great.",
        author: "-John D. Rockefeller",
    },
    {
        quote: "The course of true love never did run smooth.",
        author: "-William Shakespeare",
    },
    {
        quote: "The supreme happiness in life is the conviction that we are loved.",
        author: "-Victor Hugo",
    },
    {
        quote: "If you would be loved, love and be lovable.",
        author: "-Benjamin Franklin",
    },
    {
        quote: "Despite the forecast, live like it\’s spring.",
        author: "-Lilly Pulitzer",
    },
    {
        quote: "You will face many defeats in life, but never let yourself be defeated.",
        author: "-Maya Angelou",
    },
]
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quoteList[Math.floor(Math.random()*quoteList.length)]; //type :object

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;