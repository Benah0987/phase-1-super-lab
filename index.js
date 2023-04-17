// Write your classes here

//class Tree
class Tree{
    //constructor that takes in one parameter
    constructor(species){
        this.species = species;
    }
    //static method named definition
    static definition(){
        return 'A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.';
    }
}
//Deciduous class in JavaScript that extends the Tree
class Deciduous extends Tree{
    //takes two parameters, species and name
    constructor(species, name){
        super(species);
        this.name = name;
    }
    static definition(){
        //uses super to access the definition
        return super.definition() + 'Deciduous trees shed their leaves annually.';
    }

}
//Evergreen class  that extends class Tree
class Evergreen extends Tree {
    //constructor takes species and name parameter
    constructor(species, name) {
      super(species);
      this.name = name;
    }
    //uses the super mwhod to access definition
    static definition() {
        return super.definition() + ' Evergreens keep their leaves all year round.';
      }
    
  }
  

//decidous class 
const oakTree = new Deciduous('oak', 'Oak Tree');
console.log(oakTree.species); 
console.log(oakTree.name); 
