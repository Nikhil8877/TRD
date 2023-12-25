function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year; 
  }
  
  const car1 = new Car("Toyota", "Corolla", 2020);
  const car2 = new Car("Ford", "Mustang", 2022);
  
  function mergeCars(car1, car2) {
    return { 
      brand: car1.brand,
      model: car2.model,
      year: car2.year
    };
  }
  
  const mergedCar = mergeCars(car1, car2); 
  
  console.log(mergedCar);