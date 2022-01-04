module.exports = function reverse (n) {
    if (n<0){
        n=(-n);
      }
    n+="";
    let num = "";
    for(let i=n.length-1; i>=0;i--){
      num=num+n[i];
    }
    return num;
  
}
