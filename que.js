let queens=[{
    "startposition":[0,3],
     "direction":"W",
     "move":1
  },
   {
     "startposition":[3,3],
     "direction":"E",
     "move":4
   },
    {
     "startposition":[7,3],
     "direction":"W",
     "move":4
   }
    ];
  let len=queens.length;
  function call(arr,ob,len,index){
    var result=false;
  for(var i=0;i<len;i++)
  {
    if(index==0){
      var start=ob[i].startposistion
       result=(arrcompare(start,arr));
      temp=result;
    }
    else if(index>0&&index<(len-1)){
    if(i<index){
    var final=ob[i].finalposition;
    result=(arrcompare(final,arr));
    result=result||temp;
    var temp=result;
    }
    else{
    var final=ob[i].startposition;
    result=(arrcompare(final,arr));
    result=result||temp;
    var temp=result;
    }
    }
    else{
      var start=ob[i].finalposition;
       result=(arrcompare(start,arr));
      temp=result;
    }
  }
   return temp;
  }
  function arrcompare(arr1,arr2){
    var result;
      result=(JSON.stringify(arr1)==JSON.stringify(arr2))
    return result;
  }
  // Checkpoint 2 | Turning the queen
  function moment(position,dir,moves){
    var x=position[0];
    var y=position[1];
    if(x>=8||y>=8||x<0||y<0){
      console.log("Check Your Start Poistion ")
    }
    else{
  switch(dir){
    case "S":
         y=y+moves;
      break;
    case "W":
      x=x-moves;
      break;
    case "E":
      x=x+moves;
      break;
    case "N":
      y=y-moves;
      break;
    case "NE":
      x=x+moves;
      y=y-moves;
      break;
    case "NW":
      x=x-moves;
      y=y-moves;
      break;
    case "SE":
      x=x+moves;
      y=y+moves;
      break;
    case "SW":
      x=x-moves;
      y=y+moves;
      break;
    default:
      console.log("Check your direction!");
  }
      var arr=[x,y];
    if(((x>=8)||(x<0))||((y<0)||(y>=8))){
      console.log("Oops! This move is out the chess board !")
    }
    else{
    return arr;}
    }
  }
  function updatePosition(arr){
  positionLog =
            [["a8","b8","c8","d8","e8","f8","g8","h8"],
              ["a7","b7","c7","d7","e7","f7","g7","h7"],
             ["a6","b6","c6","d6","e6","f6","g6","h6"],
             ["a5","b5","c5","d5","e5","f5","g5","h5"],
             ["a4","b4","c4","d4","e4","f4","g4","h4"],
             ["a3","b3","c3","d3","e3","f3","g3","h3"],
             ["a2","b2","c2","d2","e2","f2","g2","h2"],
             ["a1","b1","c1","d1","e1","f1","g1","h1"]];
    return (positionLog[arr[1]][arr[0]]);
  }
  // Checkpoint 3 | Moving the queen
  for(i=0;i<queens.length;i++){
  var moves=queens[i].move;
  // Checkpoint 4 | Jump move the queen
  var arr=moment(queens[i].startposition,queens[i].direction,moves)
  // Checkpoint 5 |  Tracking the position
  if(arr!=null){
    var final=call(arr,queens,len,i);
    if(final==true){
      console.log("Already One Queen is there Please Check your moves");
    }
    else{
     console.log(updatePosition(arr));
    queens[i].finalposition=arr;
    }
  }
  }
  // Bonus 1 - Gotta keep her in the battle!
  