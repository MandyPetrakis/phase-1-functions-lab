function distanceFromHqInBlocks(location) {
    let blocks;
    if (location < 42) {
    return blocks = 42 - location
} else if (location > 42) {
    return blocks = location - 42
}
}

function distanceFromHqInFeet(val) {
    return distanceFromHqInBlocks(val) * 264
}

function distanceTravelledInFeet(start, destination) {
    let feet;
    if (start < destination) {
        return  feet = (destination - start) * 264
} else if (start > destination) {
    return  feet = (start - destination) * 264
}
}

function calculatesFarePrice(start, destination) {
    let fare;
    if (distanceTravelledInFeet(start, destination) < 400) {
        return fare = 0
    } else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) <2000) {
        return fare = (distanceTravelledInFeet(start, destination) - 400) * .02
    } else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500) {
        return fare = 25
    } else if (distanceTravelledInFeet(start, destination) > 2500) {
        return "cannot travel that far"
    }
}