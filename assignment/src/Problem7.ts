{
    /** 
     Problem 7:
    Create a TypeScript class Car with properties make, model, and year. Include
     a method getCarAge that returns the car's age based on the current year.
    */
//    Create a  class Car 
     class Car {
        make: string;
        model: string;
        year: number;
      
        constructor(make: string, model: string, year: number) {
          this.make = make;
          this.model = model;
          this.year = year;
        }
      
        getCarAge(): number {
          const currentYear = 2024;
          return currentYear - this.year;
        }
      }
      
      
    const car = new Car("Honda", "Civic", 2018);
    const result = car.getCarAge();
    console.log(result);
      
}