rpsFun = (YourChoice) =>{
    HumanChoice = YourChoice.id;
    BotChoice = Choice(RandomNum());
    // console.log(BotChoice);

    result = Winner(HumanChoice,BotChoice);
    // console.log(result);

    message = Message(result);
    // console.log(message);

    rpsFinal(HumanChoice,BotChoice,message);
}

RandomNum = () =>{
    return Math.floor(Math.random() *3);
}

Choice = (Num) =>{
    return ["rock","paper","scissors"][Num];
}

Winner = (HumanChoice,BotChoice) =>{
    rpsDatabasse = {
        "rock":{"paper":0,"scissors":1,"rock":0.5},
        "paper":{"paper":0.5,"scissors":0,"rock":1},
        "scissors":{"paper":1,"scissors":0.5,"rock":0},
    };

    let YourChoice = rpsDatabasse[HumanChoice][BotChoice];
    let ComputerChoice= rpsDatabasse[BotChoice][HumanChoice];
    return [YourChoice,ComputerChoice];
}

Message = ([YourChoice,ComputerChoice]) =>{
    if (YourChoice == 0) {
        return {"message":"You Lost!","color":"red"};
    }else if(YourChoice == 0.5){
        return {"message":"You Tied!","color":"yellow"};
    }else{
        return {"message":"You Won!","color":"green"};
    }
}

rpsFinal = (HumanImageChoice,BotImageChoice,message)=>{
    let image = {
        "rock":document.getElementById("rock").src,
        "paper":document.getElementById("paper").src,
        "scissors":document.getElementById("scissors").src
    };

    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissors").remove();

    HumanDiv = document.createElement("div");
    MessageDiv = document.createElement("div");
    BotDiv = document.createElement("div");

    HumanDiv.innerHTML = "<img src='" + image[HumanImageChoice] + "' width='150px' height='150px' style='box-shadow: 0px 10px 50px rgba(37, 50, 233,1);'>";
    MessageDiv.innerHTML = "<h1 style='color:" + message["color"] + "; font-size:60px; padding:30px;'>" + message["message"] + "</h1>";
    BotDiv.innerHTML = "<img src='" + image[BotImageChoice] + "' width='150px' height='150px' style='box-shadow: 0px 10px 50px rgba(233, 38, 23,1);'>";

    document.getElementById("flex-container").appendChild(HumanDiv);
    document.getElementById("flex-container").appendChild(MessageDiv);
    document.getElementById("flex-container").appendChild(BotDiv);

    RestartDiv = document.createElement("div");
    RestartDiv.innerHTML = "<button type='button' class='btn btn-dark' onclick='restart()'>Restart</button>";
    document.getElementById("restart").appendChild(RestartDiv);
}

restart = () =>{
    location.reload();
}