let deckOfCards = ['2', 
'3', 
'4', 
'5',
'6', 
'7', 
'8', 
'9',
'10',
'J', 
'Q', 
'K', 
'A'
];
   
let card = gets();
let index = 0;
do {
    let face = deckOfCards[index];
    print(face + ' of spades, ' + face + ' of clubs, ' + face + ' of hearts, ' + face + ' of diamonds');
} while (deckOfCards[index++] !== card);



// Another solution 

/*

let cardSign = gets();

let deckOfCards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
let i = 0;
do {
    let card = deckOfCards[i];
    print(card + ' of spades, ' + card + ' of clubs, ' + card + ' of hearts, ' + card + ' of diamonds');

} while (cardSign !== deckOfCards[i++]);


// Another solution


let sign = gets().toUpperCase(); //ensures Input is case insensitive
let cards = [
             ['2','3','4','5','6','7','8','9','10','J','Q','K','A'],
             ['spades','clubs','hearts','diamonds']
            ];

let index = cards[0].indexOf(sign); //gives card a numerical value in case it's J, Q, K and A;
let message = ''
for(i=0; i<=index; i++) { //runs through all card values from 2 to given Input;
    
	for(n=0; n<=cards[1].length-1; n++) { //runs every card suit for every value before and including Input;
    	
    	if  (n === cards[1].length-1) { //starts a new line after card value reaches the last suit;
    		message += (cards[0][i] + ' of ' + cards[1][n] + '\n');
    		print(message);
    		message = '';
    	} else {
        	message += cards[0][i] + ' of ' + cards[1][n] + ', '
    			}
    }
}

*/