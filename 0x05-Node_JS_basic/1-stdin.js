console.log("Welcome to Holberton School, what is your name?\n");

process.stdin.on('data', function(data) {
  const name = data.toString().trim();
  console.log(`Your name is: ${name}`);
  console.log("This important software is now closing\n");
  process.exit();
});
