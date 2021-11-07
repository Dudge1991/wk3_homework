myFunctions = {

  getName(object){
    return object.name;
  },

  getTotalCash(object){
    return object.admin.totalCash;
  },

  addOrRemoveCash(object, cash){
    return object.admin.totalCash += cash;
  },

  getPetsSold(object){
    return object.admin.petsSold;
  },

  increasePetsSold(object, numberPets){
    return object.admin.petsSold += numberPets;
  },

  getStockCount(object){
    return object.pets.length;
  },

  getPetsByBreed(object, breed){
    var countBreed = [];

    for(let pet of object.pets) { 
      if(pet.breed === breed){
        countBreed.push(pet);
      }
    }
    return countBreed.length;
  },

  getPetByName(object, petName){
    var animal;
    for(let pet of object.pets) { 
      if(pet.name === petName){
        animal = pet;
      }
    }
    return animal;
  },

  removePetByName(object, petName){
    for(let i = object.pets.length-1; i >= 0; i--){
      if (object.pets[i].name === petName){
         object.pets.splice(i, 1);
      }
    }
  },

  addPetToStock(object, pet){
    object.pets.push(pet);
  },

  getCustomersCash(person){
    return person.cash;
  },

  getCustomersCashTotal(shoppers){
    var cashCount = 0;
    for(let person of shoppers){
      cashCount += person.cash;
    }
    return cashCount;
  },

  removeCustomerCash(person, payment){
    person.cash -= payment;
  },

  getCustomerPetCount(person){
    return person.pets.length;
  },

  addPetToCustomer(person, pet){
    person.pets.push(pet);
  },

  customerCanAffordPet(person, pet){
    if (person.cash >= pet.price){
      return true;
    }
    else {
      return false;
    }
  },

  sellPetToCustomer(object, petName, person){
    
    for(let i = object.pets.length-1; i >= 0; i--){
      if (object.pets[i] === petName && myFunctions.customerCanAffordPet(person, petName) === true){
        person.pets.push(petName);
        myFunctions.increasePetsSold(object, 1);
        myFunctions.removeCustomerCash(person, petName.price);
        myFunctions.addOrRemoveCash(object, petName.price);
        myFunctions.removePetByName(object, petName.name);
      }
    }
  },




  // Write your functions here
};

module.exports = myFunctions;
