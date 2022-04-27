class Cat {
    #hunger;
    #loneliness;
    #tiredness;
    constructor( hunger,loneliness,tiredness){
        this.#hunger = hunger,
        this.#loneliness = loneliness,
        this.#tiredness = tiredness
    }

    getHunger(){
        return this.#hunger;
    }
    getLoneliness(){
        return this.#loneliness;
    }
    getTiredness(){
        return this.#tiredness;
    }

    sleeping() {
        if(this.getTiredness() >=0)
            this.#tiredness--;          
    } 

    eat(){
        if(this.getHunger() > 0){
            this.#hunger--;
            console.log(`Hunger reduce to ${this.getHunger()}`)
        }
        else{
            console.log('cat is full')
        }
    }

    play(){
        if(this.getHunger() < 10)
            this.#hunger++;
        if(this.getTiredness() < 10)
            this.#tiredness++;  
    }

    catState(){
        console.log(` State of the cat
        The Hunger is ${this.getHunger()} 
        The loneliness is ${this.getLoneliness()}
        The tiredness is ${this.getTiredness()}`);
    }

    catNeed(){
        if(this.hunger <= 3){
            console.log(`Hunger is: ${this.getHunger()}, feed the cat!`);
        }else if(this.loneliness <= 3){
            console.log(`loneliness is: ${this.getLoneliness()}, be with the cat :(`);
        }else if(this.tiredness <= 3){
            console.log(`tiredness is: ${this.getTiredness()}, let the cat rest`);
        }else{
            console.log(`cat is happy, no problemo :)`);
        }
    }

  

    static feedCats(...cats){
        cats.forEach((kitty) => kitty.eat());
    }


}

var gatico = new Cat(3,4,5);
var gatico2 = new Cat(0,2,3);
var gatico3 = new Cat(4,5,6);
var gatico4 = new Cat(7,8,9);
Cat.feedCats(gatico,gatico2,gatico3,gatico4);

//gatico.catState();
//console.log(gatico);


