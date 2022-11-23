const quote = document.getElementById('quote');
const quoteId = document.getElementById('quoteId');
// const quoteBtn=document.getElementById('quote-btn');
const dark = document.getElementById('dark-theme');

async function fetchQuote() {

    const res = await fetch("https://type.fit/api/quotes");
    const results = await res.json();
    let randomId = Math.floor(Math.random() * results.length)
    console.log(results[randomId].text);
    const { text } = results[randomId];
    quoteId.innerText = "#" + randomId;
    quote.innerText = text;
}
// fetchQuote();

dark.addEventListener('click', function () {

    document.body.classList.toggle('darktheme');
    if (document.body.classList.contains('darktheme')) {
        dark.classList.replace('fa-moon', 'fa-sun');
    }
    else {
        dark.classList.replace('fa-sun', 'fa-moon');
    }
})