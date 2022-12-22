AFRAME.registerComponent("bird",{
    init: function(){
        for(var i = 0; i < 20; i++){
            var id2 = `birdid${i}`

            var posX =(Math.random() * 3000 + (-1000));      
            var posY = (Math.random() * 2 + (-1));
            var posZ = (Math.random() * 3000 + -1000);
            var position = {x: posX, y: posY, z: posZ};

            this.birds(id2, position)
        }
    },
    birds: function(id2, position){
        var terrain = document.querySelector("#terrain")
        var birdEntity = document.createElement("a-entity");
        birdEntity.setAttribute("id", id2);
        birdEntity.setAttribute("scale", {x: 100, y: 100, z:100})
        birdEntity.setAttribute("position", position)
        birdEntity.setAttribute("gltf-model", "./assets/models/flying_bird/scene.gltf")
        birdEntity.setAttribute("static-body")
        birdEntity.setAttribute("collision", {id:`#${id2}`})
        birdEntity.setAttribute("animation-mixer",{})
        terrain.appendChild(birdEntity)
    },
})
AFRAME.registerComponent("collision",{
    schema:{
        id: {type:"string", default:"#ring1"}
    },
    update: function(){
        this.collided(this.data.id)
        console.log(this.data.id)
    },
    collided: function(id){
        // console.log(id)
            var element = document.querySelector(id)
            element.addEventListener("collide", (items)=>{
                console.log(id)
                if(id.includes("#ring")){
                    element.setAttribute("visible", false);
                    this.update("#score")
                }
                else if(id.includes("#bird")){
                    this.gameOver()
                }
            })
    }
})

