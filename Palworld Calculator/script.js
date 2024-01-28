function calculateResources() {
    // Get the selected resource type
    var resourceType = document.getElementById("resourceType").value;

    // Get the input value
    var resourceInput = document.getElementById("resourceInput").value;

    // Initialize calculatedResources variable
    var calculatedResources;

    switch (resourceType) {
        case "option1":
            calculatedResources = calculateOption1(resourceInput);
            break;
        case "option2":
            calculatedResources = calculateOption2(resourceInput);
            break;
        case "option3":
            calculatedResources = calculateOption3(resourceInput);
            break;
        case "option4":
            calculatedResources = calculateOption4(resourceInput);
            break;
        case "option5":
            calculatedResources = calculateOption5(resourceInput);
            break;
        case "option6":
            calculatedResources = calculateOption6(resourceInput);
            break;
        default:
            calculatedResources = "Invalid resource type";
    }

    // Display the result
    document.getElementById("result").innerHTML = "Calculated Resources: " + calculatedResources;
}

function calculateOption1(input) {
    // Calculate resources for Option 1: Paldium, Wood, Stone
    var paldium = input * 1;  // Modify this calculation based on actual Palworld mechanics
    var wood = input * 3;
    var stone = input * 3;

    return "Paldium: " + paldium + ", Wood: " + wood + ", Stone: " + stone;
}

function calculateOption2(input) {
    // Calculate resources for Option 2 and Option 3: Paldium, Ingot, Wood, Stone
    var paldium = input * 1;  // Modify this calculation based on actual Palworld mechanics
    var ingot = input * 1;
    var wood = input * 5;
    var stone = input * 5;

    return "Paldium: " + paldium + ", Ingot: " + ingot + ", Wood: " + wood + ", Stone: " + stone;
}

function calculateOption3(input) {
    // Calculate resources for Option 2 and Option 3: Paldium, Ingot, Wood, Stone
    var paldium = input * 2;  // Modify this calculation based on actual Palworld mechanics
    var ingot = input * 2;
    var wood = input * 7;
    var stone = input * 7;

    return "Paldium: " + paldium + ", Ingot: " + ingot + ", Wood: " + wood + ", Stone: " + stone;
}

function calculateOption4(input) {
    // Calculate resources for Option 4: Paldium, Ingot, Wood, Cement
    var paldium = input * 3;  // Modify this calculation based on actual Palworld mechanics
    var ingot = input * 3;
    var wood = input * 10;
    var cement = input * 2;

    return "Paldium: " + paldium + ", Ingot: " + ingot + ", Wood: " + wood + ", Cement: " + cement;
}

function calculateOption5(input) {
    // Calculate resources for Option 5: Paldium, Refined Ingot, Carbon Fiber, Cement
    var paldium = input * 5;  // Modify this calculation based on actual Palworld mechanics
    var refinedIngot = input * 5;
    var carbonFiber = input * 2;
    var cement = input * 3;

    return "Paldium: " + paldium + ", Refined Ingot: " + refinedIngot + ", Carbon Fiber: " + carbonFiber + ", Cement: " + cement;
}

function calculateOption6(input) {
    // Calculate resources for Option 6: Paldium, Pal Metal, Carbon Fiber, Cement
    var paldium = input * 10;  // Modify this calculation based on actual Palworld mechanics
    var palMetal = input * 5;
    var carbonFiber = input * 3;
    var cement = input * 5;

    return "Paldium: " + paldium + ", Pal Metal: " + palMetal + ", Carbon Fiber: " + carbonFiber + ", Cement: " + cement;
}

function calculateIngotResources() {
    // Get the selected resource type
    var ingotResourceType = document.getElementById("ingotResourceType").value;

    // Get the input value
    var ingotResourceInput = document.getElementById("ingotResourceInput").value;

    // Initialize calculatedResources variable
    var calculatedIngotResources;

switch (ingotResourceType) {
    case "option7":
        calculatedIngotResources = calculateOption7(ingotResourceInput);
        break;
    case "option8":
        calculatedIngotResources = calculateOption8(ingotResourceInput);
        break;
    case "option9":
        calculatedIngotResources = calculateOption9(ingotResourceInput);
        break;
        default:
            calculatedIngotResources = "Invalid resource type";
}
            document.getElementById("ingotResult").innerHTML = "Calculated Resources: " + calculatedIngotResources;

}

function calculateOption7(input) {
    // Calculate resources for Option 6: Paldium, Pal Metal, Carbon Fiber, Cement
    var ore = input * 2;  // Modify this calculation based on actual Palworld mechanics


    return "Ore: " + ore;
}

function calculateOption8(input) {
    // Calculate resources for Option 6: Paldium, Pal Metal, Carbon Fiber, Cement
    var ore = input * 2;  // Modify this calculation based on actual Palworld mechanics
    var coal = input * 2;

    return "Ore: " + ore + ", coal: " + coal;
}

function calculateOption9(input) {
    // Calculate resources for Option 6: Paldium, Pal Metal, Carbon Fiber, Cement
    var paldium = input * 2;  // Modify this calculation based on actual Palworld mechanics
    var ore = input * 4;

    return "Ore: " + ore + ", Paldium: " + paldium;
}

function calculateOtherResources() {
    // Get the selected resource type
    var otherResourceType = document.getElementById("otherResourceType").value;

    // Get the input value
    var otherResourceInput = document.getElementById("otherResourceInput").value;

    // Initialize calculatedResources variable
    var calculatedOtherResources;

switch (otherResourceType) {
    case "option10":
        calculatedOtherResources = calculateOption10(otherResourceInput);
        break;
    case "option11":
        calculatedOtherResources = calculateOption11(otherResourceInput);
        break;
        default:
            calculatedOtherResources = "Invalid resource type";
}
            document.getElementById("otherResult").innerHTML = "Calculated Resources: " + calculatedOtherResources;

}

function calculateOption10(input) {
    // Calculate resources for Option 6: Paldium, Pal Metal, Carbon Fiber, Cement
    var stone = input * 50;  // Modify this calculation based on actual Palworld mechanics
    var bone = input * 1;
    var fluids = input * 1;

    return "Stone: " + stone + ", Bone: " + bone + ", Pal Fluids: " + fluids;
}

function calculateOption11(input) {
    // Calculate resources for Option 6: Paldium, Pal Metal, Carbon Fiber, Cement
    var charcoal = input * 5;  // Modify this calculation based on actual Palworld mechanics
    var coal = input * 2;

    return "charcoal: " + charcoal + " OR " + " coal: " + coal;
}

// Define the items and their connections
const items = [
    { name: 'Item 1', connectedItems: ['Paldium', 'Wood', 'Stone'], quantities: [1, 3, 3] },
    { name: 'Item 2', connectedItems: ['Paldium', 'Ingot', 'Wood', 'Stone'], quantities: [1, 1, 5, 5] },
    { name: 'Item 3', connectedItems: ['Paldium', 'Ingot', 'Wood', 'Stone'], quantities: [2, 2, 7, 7] },
    { name: 'Item 4', connectedItems: ['Paldium', 'Ingot', 'Wood', 'Cement'], quantities: [3, 3, 10, 2] },
    { name: 'Item 5', connectedItems: ['Paldium', 'Refined Ingot', 'Carbon Fiber', 'Cement'], quantities: [5, 5, 2, 3] },
    { name: 'Item 6', connectedItems: ['Paldium', 'Pal Metal', 'Carbon Fiber', 'Cement'], quantities: [10, 5, 3, 5] }
];

function updateConnectedItems() {
    var mainItem = document.getElementById('mainItem').value;
    var connectedItemSelect = document.getElementById('connectedItem');

    // Clear existing options
    connectedItemSelect.innerHTML = '';

    // Find the selected main item in the items array
    var selectedItemObj = items.find(item => item.name === mainItem);

    // Add options for connected items based on the selected main item
    selectedItemObj.connectedItems.forEach(connectedItem => {
        var option = document.createElement('option');
        option.value = connectedItem;
        option.text = connectedItem;
        connectedItemSelect.add(option);
    });
}

function calculateQuantities() {
    var mainItem = document.getElementById('mainItem').value;
    var inputQuantity = parseFloat(document.getElementById('inputQuantity').value);
    var selectedConnectedItem = document.getElementById('connectedItem').value;

    // Find the selected main item in the items array
    var selectedItemObj = items.find(item => item.name === mainItem);

    // Check if the selected connected item is valid for the given main item
    if (selectedItemObj.connectedItems.includes(selectedConnectedItem)) {
        // Find the index of the selected connected item
        const connectedItemIndex = selectedItemObj.connectedItems.indexOf(selectedConnectedItem);

        // Calculate the quantity for each connected item based on specific relationships
        const result = {};
        selectedItemObj.connectedItems.forEach((connectedItem, index) => {
            const quantity = inputQuantity * (selectedItemObj.quantities[index] / selectedItemObj.quantities[connectedItemIndex]);
            result[connectedItem] = quantity;
        });

        // Display the result
        displayResult(result);
    } else {
        console.error(`Invalid connected item: ${selectedConnectedItem} for main item: ${mainItem}`);
    }
}

function displayResult(result) {
    var resultDiv = document.getElementById('needResult'); // Update the id to "needResult"
    resultDiv.innerHTML = '';

    var resultHeader = document.createElement('h3');
    resultHeader.textContent = 'Calculated Quantities:';
    resultDiv.appendChild(resultHeader);

    for (var connectedItem in result) {
        var resultItem = document.createElement('p');
        resultItem.textContent = `${connectedItem}: ${result[connectedItem]} units`;
        resultDiv.appendChild(resultItem);
    }
}


