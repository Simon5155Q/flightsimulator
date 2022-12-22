AFRAME.registerComponent("timer",{
    init: function(){
        var timings = 120;
        var timerEl = document.querySelector("#timer")
        this.timer(timings, timerEl);
    },
    timer: function(time, timeEl){
        var min, sec;
        setInterval(()=>{
            if(time >= 0){
                min = parseInt(time/60)
                sec = parseInt(time % 60)
            if(min < 10){
                min = "0"+min
            }
            if(sec < 10){
                sec = "0"+sec;
            }        
            timeEl.setAttribute("text", {value: min+":"+sec})
            time -= 1
            // console.log(time)
        }
        else{
           this.gameOver();
        }
        }, 1000)
    },
    gameOver: function(){
        var plane = document.querySelector("#plane_model");
        plane.setAttribute("dynamic-body", {mass: 1})
        var txt = document.querySelector("#gameOver");
        txt.setAttribute("visible", true)
    },
})

AFRAME.registerComponent("scores", {
    schema:{
        id: {type:"string", default:"#ring1"}
    },
    init: function(score1){    
        var score = document.querySelector("#score");
        score.setAttribute("text", score)
        
    },
    update: function(score){
        // var score = document.querySelector("#score");
        // var num = score.getAttribute("text").value
        var num1 = parseInt(score);
        num1 += 1;
        console.log(num)
        score.setAttribute("text", {value: num1}); 
        this.collided(id)
    },
    collided: function(id){
        // console.log(id)
            var element = document.querySelector(id)
            element.addEventListener("collide", (items)=>{
                console.log(id)
                if(id.includes("#ring")){
                    element.setAttribute("visible", false);
                    this.update(element)
                }
                else if(id.includes("#bird")){
                    this.gameOver()
                }
            })
    }
})
