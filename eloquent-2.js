/*
Looping a triangle:

I could see how similar this task would be compared to the printing numbers example earlier in the chapter.
I wanted to figure it out in the original syntax the printing numbers example was offered in plus the shorthand we were shown later.
The first one I couldn't get right for ages, I went onto the shorthand and nailed it very quickly, then went back and eventually got
the original code too. Took an hour!
*/
let hashs = "#";
while (hashs.length <= 7) {
  console.log(hashs);
  hashs = hashs += "#";
}

for (let number = 0; number <= 12; number += 2) {
    console.log(number);
  }


/*
Fizz Buzz
This one wasn't too bad. However, for the life of me, I couldn't figure out how to do the end line and had to look at the answer.
It's very difficult to do these when you don't actually know the opperators, what you can do, or how to comand what you would like to do.
*/
for (let number = 1; number <= 100; number = number + 1) {
    let output = "";
    if (number % 3 == 0) output += "Fizz";
    if (number % 5 == 0) output += "Buzz";
    console.log(output || number);
  }


/*
Chessboard
This one had me stumped. I sat and worked through my own logic of how to create the pattern but it didn't work for the expanded conditions.
I looked at the answer, broke that down into the logical steps until I was clear what I was reading, then took my logic map back to the
code and wrote it back out from the psuedo code. Again I found I wouldn't have known how to use the correct opperators.
*/
let size = 8;
let grid = "";
	for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        if ((x + y) % 2 == 0) {
          grid += " ";
        } else {
          grid += "#";
        }
      }
       grid += "\n";
    }
      console.log(grid);