// 利用moudle.exports将游戏逻辑导出成一个函数：
module.exports = function (playerAction) {
    var random = Math.random() * 3;
    if (random < 1) {
      var computerAction = "rock";
    } else if (random > 2) {
      var computerAction = "scissor";
    } else {
      var computerAction = "paper";
    }
    console.log('我出了' + computerAction);
  
    if (computerAction === playerAction) {
      console.log("双方平局");
      return 0;
    } else if (
      (computerAction === "rock" && playerAction === "paper") ||
      (computerAction === "scissor" && playerAction === "rock") ||
      (computerAction === "papaer" && playerAction === "scissor")
    ) {
      console.log("你赢了！");
      return -1;
    } else {
      console.log("你输了~");
      return 1;
    }
  };
  