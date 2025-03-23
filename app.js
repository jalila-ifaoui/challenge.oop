
// constructor function

 const Car = function(make,speed){
    this.make = make
    this.speed =speed
 }

  Car.prototype.accelarate =function (){
    console.log(this.speed =+ 10)


  }
  Car.prototype.break =function(){
    console.log(this.speed =-5)
  }
//    const Car1 = new Car ('BMW',120);
//    const Car2 =new Car('Mercedes',95);


//    console.log(Car1)
//    console.log(Car2)


 class Cars{
    constructor(make,speed){
        this.make = make
        this.speed =speed
    }
 
     accelarate(){
        console.log(this.speed =+ 10)
     
     }
    break(){
        console.log(this.speed =-5)
    }
 } 

 const Car1 = new Cars ('BMW',120);
 const Car2 = new Cars ('Mercedes',95);




   console.log(Car1)
   console.log(Car2)
   
