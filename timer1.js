const args = process.argv.slice(2);
let goodArgs = args.filter((arg) => {
  if (!(isNaN(Number(arg)))) {
    if (Number(arg) < 0) {
      return false;
    } else {
      return true;
    }
  }
});

for (let i = 0; i < goodArgs.length; i++) {
  let delay = Number(goodArgs[i]) * 1000;
  console.log(delay);
  setTimeout(() => {
    process.stdout.write('\x07');
  }, delay)
};

