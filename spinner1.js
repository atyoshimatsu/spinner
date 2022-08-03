const loading = '|/-\\|/-\\|';

let delay = 0;
for (const char of loading) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, delay);
  delay += 100;
}

setTimeout(() => {
  process.stdout.write(`\n`);
}, delay);
