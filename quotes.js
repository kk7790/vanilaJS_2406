const quotes = [
	{
		quote: "Life is no fair. get used to it",author: "\n\n- Bill gates -",
	},{
		quote: "Well done is better than well said",author: "\n\n- Benjamin Franklin -",
	},{
		quote: "Never lose money, and Never forget Rule No.1",author: "\n\n- Warren Edward Buffett -",
	},{
		quote: "A danger foreseen is half avoided",author: "\n\n- English proverb -",
	},{
		quote: "Risk comes from not knowing what you are doing",author: "\n\n- Warren Edward Buffett -",
	},
    {
		quote: "This too shall pass",author: "\n\n- Ethoc transibit -",
	},
    {
		quote: "The die is cast",author: "\n\n- Julius caesar -",
	},{
		quote: "Everything you can imageine is real",author: "\n\n- Pablo Picasso -",
	},{
		quote: "What we think, we become",author: "\n\n- Buddha -",
	},{
		quote: "Yesterday you said tomorros. Just do it!",author: "\n\n- Nike -",
	}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuotes = quotes[Math.floor(Math.random()* quotes.length)];
quote.innerText = todayQuotes.quote;
author.innerText = todayQuotes.author;