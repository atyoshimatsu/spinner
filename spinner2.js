const loading = '|/-\\|/-\\|';
let delay = 0;
for (const char of loading.split('').map(c => c + '   ').concat(['\n'])) {
  setTimeout(() => {
    process.stdout.write(`\r${char}`);
  }, delay);
  delay += 100;
}
