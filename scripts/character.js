export default class Character{
    health;
    isRunning;
    constructor(health, isRunning){
        this.health = health;
        this.isRunning = isRunning;
    }

    Born(){
        console.log({
            health: this.health,
            isRunning: this.isRunning,
        })
    }
}

new Character()