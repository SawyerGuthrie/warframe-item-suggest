const warframeItems = require('warframe-items');
const options = {
    category: ['Primary'],
}
const Items = new warframeItems(options);
const userResource = {
    "Alloy Plate": 10000000,
    "Argon Crystal":10000000,
    "Circuts": 10000000,
    'Control Module': 10000000,
    'Cryotic': 10000000,
    'Detonite Injector': 10000000,
    'Ferrite': 10000000,
    'Fieldron': 10000000,
    "Forma": 10000000,
    'Gallium': 10000000,
    "Morphics": 10000000,
    "Mutagen Mass": 10000000,
    "Mutagen Mass": 10000000,
    "Nano Spores": 10000000,
    "Neural Sensors": 10000000,
    "Neurodes": 10000000,
    'Nitain Extract': 10000000,
    "Orokin Cell": 10000000,
    "Oxium": 10000000,
    "Polymer Bundle": 10000000,
    "Plastids": 10000000,
    "Rubedo": 10000000,
    "Salvage": 10000000,
    "Tellerium": 10000000,
}
// console.log(Items);
const allWeaponsThatCanBeCrafted = (userResource) => {
   let listRegular = Items.filter(item => {
       if(!item.name.includes('Prime') && !item.name.includes('Wraith') && !item.name.includes('Vandal') && !item.name.includes('Miter')) {
           return item;
       }
   });
//    console.log(listRegular);
    // console.log(resource);
    const result = listRegular.filter((item, index) => {
       if(item.components) {
           let check = true;
           item.components.forEach(component => {
                // console.log(item);
                if(userResource[component.name] < component.itemCount) {
                    check = false;
                }
        });
        if(check) return item;
       }
   });
	return result;
}

console.log(allWeaponsThatCanBeCrafted(userResource));

