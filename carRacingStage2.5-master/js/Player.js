class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = null;
  }
//ayuda a la programacion local para saber cuantos jugadores hay
  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }
//funcion que ayuda a actualizar la cantidad de jugadores en la firebase
  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }
//ayuda a conocer los detalles de todos los jugadores
  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }
//funcion que recoge los datos de form y los envia a firebase
  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
//propiedad que ayudara a saber en que posicion llegaste
  getCarsAtEnd(){
    database.ref('CarsAtEnd').on("value", (data)=>{
      this.rank = data.val();
    });
  }
//refiere a la firebase para que los resultados sean visibles ahi mismo
  static updateCarsAtEnd(rank){
    database.ref('/').update({
      CarsAtEnd:rank
    })    
  }
}
