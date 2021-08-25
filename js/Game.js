class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }

    car1 = createSprite(100,200);
    car2 = createSprite(300,200);
    car3 = createSprite(500,200);
    car4 = createSprite(700,200);
    cars = [car1,car2,car3,car4]
  }

  play(){
    form.hide();
    textSize(30);
  

    Player.getPlayerInfo();

    if(allPlayers != undefined){
      
      var index = 0;
      var x ;
      var y;

      for(var plr in allPlayers){
      
       y = displayHeight - allPlayers[plr].distance;
      
       cars[index].y = y;

       if(index+1 === player.index){
          cars[index].shapeColor = "red";
          camera.position.x = width/2;
          camera.position.y = y;
       }

       index = index + 1;
      }
    }
  if(keyDown(UP_ARROW) && player.index!=null){
     player.distance = player.distance + 50
     player.update();
  }
  }
}
