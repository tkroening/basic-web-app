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
  } else if (query.toLowerCase().includes("what is") && query.toLowerCase().includes("plus")) {
      let words = query.split(' ');
      let func = (elem : string) => elem.toLowerCase() == 'plus';
      let idx = words.findIndex(func);
      let left = words[idx - 1];
      let right = words[idx + 1];
      return (
           String(Number(left) + Number(right))
      );
  } else if (query.toLowerCase().includes("which of the following numbers is the largest")) {
      let words = query.toLowerCase().split(' ');
      let nums = words.filter((word : string) => !isNaN(+word));
      let realNums = nums.map((word : string) => Number(word));
      let max = Math.max(...realNums);
      return (
           String(max)
      );
  }

  return "";
}
