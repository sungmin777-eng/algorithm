const input = [
  "This is String",
  "SPACE    1    SPACE",
  " S a M p L e I n P u T     ",
  "0L1A2S3T4L5I6N7E8"
];

for (let str of input) {
  let lowerCount = 0;
  let upperCount = 0;
  let digitCount = 0;
  let spaceCount = 0;
  
  for (let char of str) {
    if (char >= 'a' && char <= 'z') lowerCount++;   // 소문자
    else if (char >= 'A' && char <= 'Z') upperCount++;  // 대문자
    else if (char >= '0' && char <= '9') digitCount++;  // 숫자
    else if (char === ' ') spaceCount++;  // 공백
  }
  
  console.log(`${lowerCount} ${upperCount} ${digitCount} ${spaceCount}`);
}

for (let str of input){
    let lowercount =0;
    let uppercount =0;
    let digit=0;
    let space=0;
    for (let char of str){
        if( char>='a'&& char<='z') lowercount++;
        else if(char>='A'&&char<='Z') uppercount++;
        else if(char>='0'&&char<='9') digit++;
        else if(char ===' ') space++;
    }
    return [lowercount,uppercount,digit,space]
}
console.log(`${lowercount} ${uppercount} ${digit} ${space}`)