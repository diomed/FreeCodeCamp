$(document).ready(function() {

    var quotes = [
	{
	    "title":"John Maeda",
	    "content":"Simplicity and complexity need each other.\n"
	},
	{
	    "title":"Andy Warhol",
	    "content":"Being good in business is the most fascinating kind of art. Making money is art and working is art and good business is the best art.\n"
	},
	{
	    "title":"Jonathan Ive",
	    "content":"The word design is everything and nothing. The design and the product itself are inseparable.\n"
	},
	{
	    "title":"Homer Simpson",
	    "content":"If something's hard to do, then it's not worth doing.\n"
	},
	{
	    "title":"Yogi Berra",
	    "content":"You can observe a lot just by watching.\n"
	},
	{
	    "title":"Freeman Thomas",
	    "content":"Good design begins with honesty, asks tough questions, comes from collaboration and from trusting your intuition.\n"
	},
	{
	    "title":"Leonardo da Vinci",
	    "content":"Simplicity is the ultimate sophistication."
	},
	{
	    "title":"Truman Capote",
	    "content":"A work of art is one of mystery, the one extreme magic, everything else is either arithmetic or biology."
	},
	{
	    "title":"Cennydd Bowles",
	    "content":"We explore promising avenues that, days later, become dead ends. Sometimes, we solve a month's problem in an hour."
	},
	{
	    "title":"Don Norman",
	    "content":"Behavioral design is all about feeling in control. Includes: usability, understanding, but also the feel.\n"
	},
	{
	    "title":"Jonathan Ive",
	    "content":"It's very easy to be different, but very difficult to be better.\n"
	},
	{
	    "title":"Piet Zwart",
	    "content":"The more uninteresting the letter, the more useful it is to the typographer.\n"
	},
	{
	    "title":"The Studebaker Brothers",
	    "content":"Always give a little more than you promise.\n"
	},
	{
	    "title":"Brian Eno",
	    "content":"Instead of shooting arrows at somebody else's target, I make my own target around wherever my arrow has happened to have landed.\n"
	},
	{
	    "title":"Joshua Brewer",
	    "content":"Just because something looks good doesn't mean its useful. And just because something is useful does not make it beautiful.\n"
	},
	{
	    "title":"Rachel Hinman",
	    "content":"We are only three decades into one of the most important revolutions the world has ever seen. In design development terms, that is a mere blink.\n"
	},
	{
	    "title":"Larry Marine",
	    "content":"It is far better to adapt the technology to the user than to force the user to adapt to the technology.\n"
	},
	{
	    "title":"Karrie Jacobs",
	    "content":"Graphic design is the design of highly disposable items. It all winds up in the garbage.\n"
	},
	{
	    "title":"Bill Cosby",
	    "content":"I don't know the key to success, but the key to failure is trying to please everybody.\n"
	},
	{
	    "title":"Miguel de Cervantes",
	    "content":"Delay always breeds danger, and to protract a great design is often to ruin it.\n"
	},
	{
	    "title":"Coach John Wooden",
	    "content":"It's the little details that are vital. Little things make big things happen.\n"
	},
	{
	    "title":"Felix Sockwell",
	    "content":"Do what you love and tomorrow will pay the rent.\n"
	},
	{
	    "title":"Paul Watzlawik",
	    "content":"You cannot not communicate.\n"
	},
	{
	    "title":"Gunnar Swanson",
	    "content":"Graphic designers find themselves in a role of visual dishwashers for the Information Architects & chefs.\n"
	},
	{
	    "title":"Andy Rutledge",
	    "content":"The way to \"get your name out there\" is to establish a pattern of excellent work and a reputation for integrity over several years.\n"
	},
	{
	    "title":"Daniel Burka",
	    "content":"The next time you're caught in a room full of smart people doing something dumb (like trying to anticipate what your users will do), tune them out, flip open your laptop, and start prototyping.\n"
	},
	{
	    "title":"Buzz Andersen",
	    "content":"I think most programmers spend the first 5 years of their career mastering complexity, and the rest of their lives learning simplicity.\n"
	},
	{
	    "title":"Rick Tharp",
	    "content":"Never let your clients see you drive a more expensive car than they drive.\n"
	},
	{
	    "title":"Anonymous",
	    "content":"The amount a person uses his imagination is inversely proportional to the amount of punishment he will receive for using it.\n"
	},
	{
	    "title":"Jack Kerouac",
	    "content":"Great things are not accomplished by those who yield to trends and fads and popular opinion.\n"
	}];
    
    function tweet(quote, author) {
	document.getElementById("tweet").href = "https://twitter.com/intent/tweet?text=\"" + quote + "\" - " + author;
    }
    
    function randomQuote() {
	
	var i = Math.floor(Math.random() * quotes.length);
    
	document.getElementById("quote").innerHTML = quotes[i].content;
	document.getElementById("cite").innerHTML = "- " + quotes[i].title;
	tweet(quotes[i].content, quotes[i].title);
    };

    randomQuote();
    
    document.getElementById("generate").addEventListener("click", function() {
    
	randomQuote();
    }, false);
    
});
