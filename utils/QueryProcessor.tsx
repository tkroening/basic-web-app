function isPrime(n : number) {
    if (n < 2) {
        return false;
    }

    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }

    return true;
}

export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  } else if (query.toLowerCase().includes("what is your andrew id")) {
      return (
           "tkroenin"
      );
  } else if (query.toLowerCase().includes("what is your name")) {
      return (
           "theo"
      );
  } else if (query.toLowerCase().includes("plus")) {
      let words = query.split(' ');
      let func = (elem : string) => elem.toLowerCase() == 'plus';
      let idx = words.findIndex(func);
      let left = words[idx - 1];
      let right = words[idx + 1];
      return (
           String(Number(left) + Number(right))
      );
  } else if (query.toLowerCase().includes("largest")) {
      let colonIdx = query.search(":");
      let words = query.slice(colonIdx).split(', ');
      let nums = words.filter((word : string) => !isNaN(+word));
      let realNums = nums.map((word : string) => Number(word));
      let max = Math.max(...realNums);
      return (
           String(max)
      );
  }  else if (query.toLowerCase().includes("multiplied by")) {
      let words = query.toLowerCase().split(' ');
      let nums = words.filter((word : string) => !isNaN(+word));
      let realNums = nums.map((word : string) => Number(word));
      let result = realNums.reduce((a, b) => a * b);
      return (
           String(result)
      );
  }  else if (query.toLowerCase().includes("both a square and a cube")) {
      let colonIdx = query.search(":");
      let words = query.slice(colonIdx).split(', ');
      let nums = words.filter((word : string) => !isNaN(+word));
      let realNums = nums.map((word : string) => Number(word));
      let result = realNums.filter((a) => Number.isInteger(Math.pow(a, 1 / 2)) && Number.isInteger(Math.pow(a, 1 / 3)) );
      return (
           String(result)
      );
  }  else if (query.toLowerCase().includes("minus")) {
      let words = query.split(' ');
      let func = (elem : string) => elem.toLowerCase() == 'minus';
      let idx = words.findIndex(func);
      let left = words[idx - 1];
      let right = words[idx + 1];
      return (
           String(Number(left) - Number(right))
      );
  }  else if (query.toLowerCase().includes("power")) {
      let words = query.split(' ');
      let nums = words.filter((word : string) => !isNaN(+word));
      let realNums = nums.map((word : string) => Number(word));
      let result = Math.pow(realNums[0], realNums[1]);
      return (
           String(result)
      );
  }   else if (query.toLowerCase().includes("primes")) {
      let colonIdx = query.search(":");
      let words = query.slice(colonIdx).split(', ');
      let nums = words.filter((word : string) => !isNaN(+word));
      let realNums = nums.map((word : string) => Number(word));
      let result = realNums.filter((a) => isPrime(a));
      return (
           String(result)
      );
  } 

  return "";
}
