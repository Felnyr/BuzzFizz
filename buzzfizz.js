function buzzFizz(n){
let fizzCount=0;
let buzzCount=0;

    for(let i=1; i<=n; i++){
        if(i%3 == 0){
          console.log("fizz");
          fizzCount++
        }else if(i%5 == 0){
          console.log("buzz")
          buzzCount++
        }else{
          console.log(i)
        }
      }
      console.log("Word fizz appeared: " + fizzCount + " times in count to: " + n)
      console.log("Word buzz appeared: " + buzzCount + " times in count to: " + n)
}
// enter how many counts
buzzFizz(100)