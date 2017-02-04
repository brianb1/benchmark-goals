const rl = require( 'readline-sync' )
 const random = Math.floor(Math.random() * ( 100 - 1 )) + 1
 let guessCount = 0;
 let guess = -1

while ( guess !== random ) {

 let guess = rl.question( 'Guess the magic number between 1-100.... ')
 guessCount+

 console.log(random);

 if ( guess > random ) {
   console.log( "Too High" + " , you have " + (5 - guessCount) + " remaining..." );
   guessCount++

 } else if (guess < random ) {
   console.log( "Too Low" + " , you have " + (5 - guessCount) + " remaining..." );
   guessCount++

 } else if (guess === "exit") {
   console.log( "see you next time!");
   return

 } else {
   console.log("great guess" + ", you HAD " + (5 - guessCount) + " remaining...");
   guessCount++
   return
 }

  if (guessCount === 5 ) {
  console.log( "You're out tries, the answer is: " + " " + random );
  return
}

}
