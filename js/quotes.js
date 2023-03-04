const quotes = [
    {
        quote: "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.",
        author: "Steve jobs"
    },
    {
        quote: "Success is not final; failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "Business opportunities are like buses, there’s always another one coming.",
        author: "Richard Branson"
    },
    {
        quote: "you only have to do a few things right in your life so long as you don’t do too many things wrong.",
        author: "Warren Buffett"
    },
    {
        quote: "Success usually comes to those who are too busy to be looking for it.",
        author: "Henry David Thoreau"
    }
]

function randomQuote() {
    const quote = document.querySelector(".quote");
    const author = document.querySelector(".author");
    const randomQ = Math.floor(Math.random() * quotes.length);
    quote.innerText = `${quotes[randomQ].quote}`;
    author.innerText = `${quotes[randomQ].author}`;
} 

randomQuote();