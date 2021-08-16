const main = () => {
  const args = process.argv.slice(2);

  if(args.length === 0){
    return;
  }

  let seconds = 0;

  setInterval(function() {
    seconds = seconds + 1000;
  
    if(args.includes(`${seconds / 1000}`)){
      process.stdout.write('\x07');
      process.stderr.write('\x07')
    }
  
  }, 1000);

}


main();




