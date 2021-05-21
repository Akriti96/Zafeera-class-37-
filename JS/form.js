class Form {
    constructor() {
        this.title = createElement("h1")
        this.input = createInput("playerName")
        this.button = createButton("play")
        this.greeting = createElement("h2")
    }

    hide() {
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }

    display() {

        this.title.html("Car Racing Game")
        this.title.position(550, 100)
        this.title.style("color", " blue")
        this.title.style("font-size", "25px")

        this.input.position(580, 255)
        this.button.position(630, 300)

        // javascrpit arrow functions 
        // function(){ }
        // ()=>{}
        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            // this.name means entering name to particular player
            player.name = this.input.value();

            // this.index= playerCount 
            //player.index= playerCount 
            // if playerCount =1
            // player1= playerCount
            playerCount += 1;
            player.index = playerCount


            player.updatename();
            player.updateCount(playerCount);

            this.greeting.html("Hello " + player.name);
            this.greeting.position(560, 255);

        })
    }

}