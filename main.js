const createChassis = () => {
    
    const chassisObj = {}
    
    return chassisObj
};

const newCar = createChassis()


const addWheels = (chassisObj) => {
    
    chassisObj.wheels = 4

    return chassisObj
};

const addedWheels = addWheels(newCar);


const addEngine = (chassisObj) => {
    
    chassisObj.engine = "4.8L"

    return chassisObj
};

const addedEngine = addEngine(newCar)


const addSteeringWheel = (chassisObj) => {

    chassisObj.steeringWheel = "Tilting"

    return chassisObj
};

const addedSteeringWheel = addSteeringWheel(newCar)

const addBody = (chassisObj) => {

    chassisObj.body = "Fever"

    return chassisObj
};

const addedBody = addBody(newCar)

const addDriveTrain = (chassisObj) => {

    chassisObj.driveTrain = "Two wheel drive"

    return chassisObj
};

const addedDriveTrain = addDriveTrain(newCar)

console.log(newCar)



