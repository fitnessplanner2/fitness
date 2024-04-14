var veg=[];
var fruits=[];
var foodItems=[];
var vegetables=[];
document.getElementById('sugar').addEventListener('change', function() {
const isChecked = this.checked;
const heading = document.getElementById('heading1');

if (isChecked){
heading.innerHTML = "Food Items Suitable for Your Sugar Level";
 veg= [
{
"name": "Carrot",
"blood_pressure_range": { "min": 40, "max": 80 },
"nutrients": { "vitamin_c": "medium", "vitamin_a": "high", "natural_sugars": "high" }
},
{
"name": "Sweet Potato",
"blood_pressure_range": { "min": 60, "max": 100 },
"nutrients": { "vitamin_c": "medium", "vitamin_a": "very high", "natural_sugars": "high" }
},
{
"name": "Beetroot",
"blood_pressure_range": { "min": 80, "max": 120 },
"nutrients": { "vitamin_c": "high", "vitamin_a": "medium", "natural_sugars": "high" }
},
{
"name": "Spinach",
"blood_pressure_range": { "min": 20, "max": 50 },
"nutrients": { "vitamin_c": "medium", "vitamin_a": "very high", "natural_sugars": "low" }
},
{
"name": "Broccoli",
"blood_pressure_range": { "min": 30, "max": 60 },
"nutrients": { "vitamin_c": "high", "vitamin_a": "medium", "natural_sugars": "low" }
},
{
"name": "Cauliflower",
"blood_pressure_range": { "min": 20, "max": 50 },
"nutrients": { "vitamin_c": "medium", "vitamin_a": "low", "natural_sugars": "low" }
}
];



fruits= [
{
"name": "Grapes",
"blood_pressure_range": { "min": 100, "max": 160 },
"nutrients": { "vitamin_c": "medium", "vitamin_a": "low", "natural_sugars": "high" }
},
{
"name": "Banana",
"blood_pressure_range": { "min": 120, "max": 150 },
"nutrients": { "vitamin_c": "low", "vitamin_a": "medium", "natural_sugars": "high" }
},
{
"name": "Pineapple",
"blood_pressure_range": { "min": 80, "max": 130 },
"nutrients": { "vitamin_c": "high", "vitamin_a": "medium", "natural_sugars": "high" }
},
{
"name": "Strawberries",
"blood_pressure_range": { "min": 30, "max": 60 },
"nutrients": { "vitamin_c": "high", "vitamin_a": "medium", "natural_sugars": "low" }
},
{
"name": "Cranberries",
"blood_pressure_range": { "min": 40, "max": 70 },
"nutrients": { "vitamin_c": "medium", "vitamin_a": "low", "natural_sugars": "low" }
},
{
"name": "Avocado",
"blood_pressure_range": { "min": 0, "max": 5 },
"nutrients": { "vitamin_c": "low", "vitamin_a": "medium", "natural_sugars": "low" }
}
];


foodItems= [
{
"name": "Maple Syrup",
"blood_pressure_range": { "min": 150, "max": 200 },
"nutrients": { "vitamin_c": "low", "vitamin_a": "low", "natural_sugars": "high" }
},
{
"name": "Honey",
"blood_pressure_range": { "min": 120, "max": 180 },
"nutrients": { "vitamin_c": "low", "vitamin_a": "low", "natural_sugars": "high" }
},
{
"name": "Dried Fruits (e.g., raisins)",
"blood_pressure_range": { "min": 100, "max": 160 },
"nutrients": { "vitamin_c": "medium", "vitamin_a": "low", "natural_sugars": "high" }
},
{
"name": "Quinoa",
"blood_pressure_range": { "min": 10, "max": 30 },
"nutrients": { "vitamin_c": "low", "vitamin_a": "low", "natural_sugars": "low" }
},
{
"name": "Salmon",
"blood_pressure_range": { "min": 0, "max": 20 },
"nutrients": { "vitamin_c": "low", "vitamin_a": "low", "natural_sugars": "low" }
},
{
"name": "Eggs",
"blood_pressure_range": { "min": 0, "max": 5 },
"nutrients": { "vitamin_c": "low", "vitamin_a": "low", "natural_sugars": "low" }
}
];

vegetable= [
{
"name": "Carrot",
"blood_pressure_range": { "min": 40, "max": 80 },
"nutrients": { "vitamin_c": "medium", "vitamin_a": "high", "natural_sugars": "high" }
},
{
"name": "Sweet Potato",
"blood_pressure_range": { "min": 60, "max": 100 },
"nutrients": { "vitamin_c": "medium", "vitamin_a": "very high", "natural_sugars": "high" }
},
{
"name": "Beetroot",
"blood_pressure_range": { "min": 80, "max": 120 },
"nutrients": { "vitamin_c": "high", "vitamin_a": "medium", "natural_sugars": "high" }
},
{
"name": "Spinach",
"blood_pressure_range": { "min": 20, "max": 50 },
"nutrients": { "vitamin_c": "medium", "vitamin_a": "very high", "natural_sugars": "low" }
},
{
"name": "Broccoli",
"blood_pressure_range": { "min": 30, "max": 60 },
"nutrients": { "vitamin_c": "high", "vitamin_a": "medium", "natural_sugars": "low" }
},
{
"name": "Cauliflower",
"blood_pressure_range": { "min": 20, "max": 50 },
"nutrients": { "vitamin_c": "medium", "vitamin_a": "low", "natural_sugars": "low" }
},
{
"name": "Grapes",
"blood_pressure_range": { "min": 100, "max": 160 },
"nutrients": { "vitamin_c": "medium", "vitamin_a": "low", "natural_sugars": "high" }
},
{
"name": "Banana",
"blood_pressure_range": { "min": 120, "max": 150 },
"nutrients": { "vitamin_c": "low", "vitamin_a": "medium", "natural_sugars": "high" }
},
{
"name": "Pineapple",
"blood_pressure_range": { "min": 80, "max": 130 },
"nutrients": { "vitamin_c": "high", "vitamin_a": "medium", "natural_sugars": "high" }
},
{
"name": "Strawberries",
"blood_pressure_range": { "min": 30, "max": 60 },
"nutrients": { "vitamin_c": "high", "vitamin_a": "medium", "natural_sugars": "low" }
},
{
"name": "Cranberries",
"blood_pressure_range": { "min": 40, "max": 70 },
"nutrients": { "vitamin_c": "medium", "vitamin_a": "low", "natural_sugars": "low" }
},
{
"name": "Avocado",
"blood_pressure_range": { "min": 0, "max": 5 },
"nutrients": { "vitamin_c": "low", "vitamin_a": "medium", "natural_sugars": "low" }
},
{
"name": "Maple Syrup",
"blood_pressure_range": { "min": 150, "max": 200 },
"nutrients": { "vitamin_c": "low", "vitamin_a": "low", "natural_sugars": "high" }
},
{
"name": "Honey",
"blood_pressure_range": { "min": 120, "max": 180 },
"nutrients": { "vitamin_c": "low", "vitamin_a": "low", "natural_sugars": "high" }
},
{
"name": "Dried Fruits (e.g., raisins)",
"blood_pressure_range": { "min": 100, "max": 160 },
"nutrients": { "vitamin_c": "medium", "vitamin_a": "low", "natural_sugars": "high" }
},
{
"name": "Quinoa",
"blood_pressure_range": { "min": 10, "max": 30 },
"nutrients": { "vitamin_c": "low", "vitamin_a": "low", "natural_sugars": "low" }
},
{
"name": "Salmon",
"blood_pressure_range": { "min": 0, "max": 20 },
"nutrients": { "vitamin_c": "low", "vitamin_a": "low", "natural_sugars": "low" }
},
{
"name": "Eggs",
"blood_pressure_range": { "min": 0, "max": 5 },
"nutrients": { "vitamin_c": "low", "vitamin_a": "low", "natural_sugars": "low" }
}
];
}
});
    document.getElementById('blp').addEventListener('change', function() {
const isChecked = this.checked;
const heading = document.getElementById('heading1');

if (isChecked){
heading.innerHTML = "Food Items Suitable for Your Blood Pressure";
     veg = [
        {
            "name": "Spinach",
            "blood_pressure_range": { "min": 70, "max": 90 },
            "nutrients": { "potassium": "high", "magnesium": "moderate", "folate": "high" }
        },
        {
            "name": "Broccoli",
            "blood_pressure_range": { "min": 75, "max": 95 },
            "nutrients": { "fiber": "high", "potassium": "moderate", "antioxidants": "moderate" }
        },
        {
            "name": "Green Peas",
            "blood_pressure_range": { "min": 70, "max": 90 },
            "nutrients": { "vitamin K": "moderate", "vitamin C": "moderate", "fiber": "moderate" }
        },
        {
            "name": "Cucumber",
            "blood_pressure_range": { "min": 75, "max": 95 },
            "nutrients": { "hydrating": "high", "vitamin K": "moderate", "potassium": "moderate" }
        },
        {
            "name": "Sweet Potatoes",
            "blood_pressure_range": { "min": 80, "max": 100 },
            "nutrients": { "beta-carotene": "high", "fiber": "moderate", "vitamin A": "high" }
        },
        {
            "name": "Carrots",
            "blood_pressure_range": { "min": 80, "max": 120 },
            "nutrients": { "vitamin_a": "high", "potassium": "moderate" }
        },
        {
            "name": "Beets",
            "blood_pressure_range": { "min": 90, "max": 130 },
            "nutrients": { "nitrates": "high", "folate": "moderate" }
        },
        {
            "name": "Tomatoes",
            "blood_pressure_range": { "min": 80, "max": 120 },
            "nutrients": { "lycopene": "high", "potassium": "moderate" }
        },
        {
            "name": "Broccoli",
            "blood_pressure_range": { "min": 80, "max": 120 },
            "nutrients": { "vitamin_c": "high", "potassium": "moderate" }
        },
        {
            "name": "Pumpkin",
            "blood_pressure_range": { "min": 80, "max": 120 },
            "nutrients": { "vitamin_a": "high", "potassium": "moderate" }
        }
    ];

     fruits = [
        {
            "name": "Bananas",
            "blood_pressure_range": { "min": 80, "max": 110 },
            "nutrients": { "potassium": "high", "vitamin_c": "moderate" }
        },
        {
            "name": "Berries",
            "blood_pressure_range": { "min": 70, "max": 100 },
            "nutrients": { "antioxidants": "high", "fiber": "moderate" }
        },
        {
            "name": "Watermelon",
            "blood_pressure_range": { "min": 75, "max": 100 },
            "nutrients": { "hydration": "high", "vitamin_a": "moderate" }
        },
        {
            "name": "Oranges",
            "blood_pressure_range": { "min": 75, "max": 100 },
            "nutrients": { "vitamin_c": "high", "potassium": "moderate" }
        },
        {
            "name": "Avocado",
            "blood_pressure_range": { "min": 70, "max": 100 },
            "nutrients": { "potassium": "high", "healthy_fats": "high" }
        },
        {
            "name": "Pomegranate",
            "blood_pressure_range": { "min": 75, "max": 100 },
            "nutrients": { "antioxidants": "high", "vitamin_c": "moderate" }
        },
        {
            "name": "Apples",
            "blood_pressure_range": { "min": 80, "max": 110 },
            "nutrients": { "fiber": "high", "antioxidants": "moderate" }
        },
        {
            "name": "Mango",
            "blood_pressure_range": { "min": 90, "max": 120 },
            "nutrients": { "vitamin_c": "high", "vitamin_a": "high", "natural_sugars": "high" }
        },
        {
            "name": "Pineapple",
            "blood_pressure_range": { "min": 85, "max": 115 },
            "nutrients": { "vitamin_c": "moderate", "natural_sugars": "moderate" }
        },
        {
            "name": "Kiwi",
            "blood_pressure_range": { "min": 88, "max": 118 },
            "nutrients": { "vitamin_c": "high", "potassium": "moderate", "natural_sugars": "moderate" }
        },
        {
            "name": "Pomegranate",
            "blood_pressure_range": { "min": 87, "max": 117 },
            "nutrients": { "antioxidants": "high", "vitamin_c": "moderate", "natural_sugars": "moderate" }
        }
    ];
     foodItems = [
        {
            "name": "Oats",
            "type": "grain",
            "blood_pressure_range": { "min": 70, "max": 90 },
            "nutrients": { "fiber": "high", "beta-glucans": "high", "magnesium": "moderate" }
        },
        {
            "name": "Nuts",
            "type": "nut",
            "blood_pressure_range": { "min": 70, "max": 100 },
            "nutrients": { "potassium": "moderate", "magnesium": "moderate", "healthy_fats": "high" }
        },
        {
            "name": "Dairy",
            "type": "dairy",
            "blood_pressure_range": { "min": 80, "max": 110 },
            "nutrients": { "calcium": "high", "potassium": "moderate", "protein": "moderate" }
        },
        {
            "name": "Seeds",
            "type": "seed",
            "blood_pressure_range": { "min": 70, "max": 100 },
            "nutrients": { "omega-3_fatty_acids": "moderate", "fiber": "moderate", "magnesium": "moderate" }
        },
        {
            "name": "Dark Chocolate",
            "type": "sweet",
            "blood_pressure_range": { "min": 75, "max": 95 },
            "nutrients": { "flavonoids": "high", "antioxidants": "moderate" }
        },
        {
            "name": "Salt",
            "type": "seasoning",
            "blood_pressure_range": { "min": "Varies", "max": "Varies" },
            "nutrients": { "sodium": "high" }
        },
        {
            "name": "Fluids",
            "type": "beverage",
            "blood_pressure_range": { "min": "Varies", "max": "Varies" },
            "nutrients": { "hydration": "essential" }
        },
        {
            "name": "Caffeine",
            "type": "stimulant",
            "blood_pressure_range": { "min": "Varies", "max": "Varies" },
            "nutrients": { "stimulatory_effect": "temporarily raises blood pressure" }
        },
        {
            "name": "Beetroot Juice",
            "type": "beverage",
            "blood_pressure_range": { "min": "Varies", "max": "Varies" },
            "nutrients": { "nitrates": "may help dilate blood vessels" }
        },
        {
            "name": "Tilted Drinks",
            "type": "beverage",
            "blood_pressure_range": { "min": "Varies", "max": "Varies" },
            "nutrients": { "prevents abrupt blood pressure drops": "when changing positions" }
        }
    ];
     vegetable = [
    {
        "name": "Spinach",
        "blood_pressure_range": { "min": 70, "max": 90 },
        "nutrients": { "potassium": "high", "magnesium": "moderate", "folate": "high" }
    },
    {
        "name": "Broccoli",
        "blood_pressure_range": { "min": 75, "max": 95 },
        "nutrients": { "fiber": "high", "potassium": "moderate", "antioxidants": "moderate" }
    },
    {
        "name": "Green Peas",
        "blood_pressure_range": { "min": 70, "max": 90 },
        "nutrients": { "vitamin K": "moderate", "vitamin C": "moderate", "fiber": "moderate" }
    },
    {
        "name": "Cucumber",
        "blood_pressure_range": { "min": 75, "max": 95 },
        "nutrients": { "hydrating": "high", "vitamin K": "moderate", "potassium": "moderate" }
    },
    {
        "name": "Sweet Potatoes",
        "blood_pressure_range": { "min": 80, "max": 100 },
        "nutrients": { "beta-carotene": "high", "fiber": "moderate", "vitamin A": "high" }
    },
    {
        "name": "Carrots",
        "blood_pressure_range": { "min": 80, "max": 120 },
        "nutrients": { "vitamin_a": "high", "potassium": "moderate" }
    },
    {
        "name": "Beets",
        "blood_pressure_range": { "min": 90, "max": 130 },
        "nutrients": { "nitrates": "high", "folate": "moderate" }
    },
    {
        "name": "Tomatoes",
        "blood_pressure_range": { "min": 80, "max": 120 },
        "nutrients": { "lycopene": "high", "potassium": "moderate" }
    },
    {
        "name": "Broccoli",
        "blood_pressure_range": { "min": 80, "max": 120 },
        "nutrients": { "vitamin_c": "high", "potassium": "moderate" }
    },
    {
        "name": "Pumpkin",
        "blood_pressure_range": { "min": 80, "max": 120 },
        "nutrients": { "vitamin_a": "high", "potassium": "moderate" }
    },
    {
        "name": "Bananas",
        "blood_pressure_range": { "min": 80, "max": 110 },
        "nutrients": { "potassium": "high", "vitamin_c": "moderate" }
    },
    {
        "name": "Berries",
        "blood_pressure_range": { "min": 70, "max": 100 },
        "nutrients": { "antioxidants": "high", "fiber": "moderate" }
    },
    {
        "name": "Watermelon",
        "blood_pressure_range": { "min": 75, "max": 100 },
        "nutrients": { "hydration": "high", "vitamin_a": "moderate" }
    },
    {
        "name": "Oranges",
        "blood_pressure_range": { "min": 75, "max": 100 },
        "nutrients": { "vitamin_c": "high", "potassium": "moderate" }
    },
    {
        "name": "Avocado",
        "blood_pressure_range": { "min": 70, "max": 100 },
        "nutrients": { "potassium": "high", "healthy_fats": "high" }
    },
    {
        "name": "Pomegranate",
        "blood_pressure_range": { "min": 75, "max": 100 },
        "nutrients": { "antioxidants": "high", "vitamin_c": "moderate" }
    },
    {
        "name": "Apples",
        "blood_pressure_range": { "min": 80, "max": 110 },
        "nutrients": { "fiber": "high", "antioxidants": "moderate" }
    },
    {
        "name": "Mango",
        "blood_pressure_range": { "min": 90, "max": 120 },
        "nutrients": { "vitamin_c": "high", "vitamin_a": "high", "natural_sugars": "high" }
    },
    {
        "name": "Pineapple",
        "blood_pressure_range": { "min": 85, "max": 115 },
        "nutrients": { "vitamin_c": "moderate", "natural_sugars": "moderate" }
    },
    {
        "name": "Kiwi",
        "blood_pressure_range": { "min": 88, "max": 118 },
        "nutrients": { "vitamin_c": "high", "potassium": "moderate", "natural_sugars": "moderate" }
    },
    {
        "name": "Pomegranate",
        "blood_pressure_range": { "min": 87, "max": 117 },
        "nutrients": { "antioxidants": "high", "vitamin_c": "moderate", "natural_sugars": "moderate" }
    },
    {
        "name": "Oats",
        "type": "grain",
        "blood_pressure_range": { "min": 70, "max": 90 },
        "nutrients": { "fiber": "high", "beta-glucans": "high", "magnesium": "moderate" }
    },
    {
        "name": "Nuts",
        "type": "nut",
        "blood_pressure_range": { "min": 70, "max": 100 },
        "nutrients": { "potassium": "moderate", "magnesium": "moderate", "healthy_fats": "high" }
    },
    {
        "name": "Dairy",
        "type": "dairy",
        "blood_pressure_range": { "min": 80, "max": 110 },
        "nutrients": { "calcium": "high", "potassium": "moderate", "protein": "moderate" }
    },
    {
        "name": "Seeds",
        "type": "seed",
        "blood_pressure_range": { "min": 70, "max": 100 },
        "nutrients": { "omega-3_fatty_acids": "moderate", "fiber": "moderate", "magnesium": "moderate" }
    },
    {
        "name": "Dark Chocolate",
        "type": "sweet",
        "blood_pressure_range": { "min": 75, "max": 95 },
        "nutrients": { "flavonoids": "high", "antioxidants": "moderate" }
    },
    {
        "name": "Salt",
        "type": "seasoning",
        "blood_pressure_range": { "min": "Varies", "max": "Varies" },
        "nutrients": { "sodium": "high" }
    },
    {
        "name": "Fluids",
        "type": "beverage",
        "blood_pressure_range": { "min": "Varies", "max": "Varies" },
        "nutrients": { "hydration": "essential" }
    },
    {
        "name": "Caffeine",
        "type": "stimulant",
        "blood_pressure_range": { "min": "Varies", "max": "Varies" },
        "nutrients": { "stimulatory_effect": "temporarily raises blood pressure" }
    },
    {
        "name": "Beetroot Juice",
        "type": "beverage",
        "blood_pressure_range": { "min": "Varies", "max": "Varies" },
        "nutrients": { "nitrates": "may help dilate blood vessels" }
    },
    {
        "name": "Tilted Drinks",
        "type": "beverage",
        "blood_pressure_range": { "min": "Varies", "max": "Varies" },
        "nutrients": { "prevents abrupt blood pressure drops": "when changing positions" }
    }
];

}
});
function checkBloodPressure() {
    var bp = document.getElementById("bpInput").value;
    var suitableFood = [];

    veg.forEach(function (vegetable) {
        if (bp >= vegetable.blood_pressure_range.min && bp <= vegetable.blood_pressure_range.max) {
            suitableFood.push({
                name: vegetable.name,
                type: "Vegetable",
                nutrients: vegetable.nutrients
            });
        }
    });

    fruits.forEach(function (fruit) {
        if (bp >= fruit.blood_pressure_range.min && bp <= fruit.blood_pressure_range.max) {
            suitableFood.push({
                name: fruit.name,
                type: "Fruit",
                nutrients: fruit.nutrients
            });
        }
    });

    foodItems.forEach(function (foodItem) {
        if (bp >= foodItem.blood_pressure_range.min && bp <= foodItem.blood_pressure_range.max) {
            suitableFood.push({
                name: foodItem.name,
                type: foodItem.type,
                nutrients: foodItem.nutrients
            });
        }
    });

    displayFood(suitableFood);
    generateCharts();
}

function displayFood(foodList) {
    var tableBody = document.getElementById("foodBody");
    tableBody.innerHTML = "";

    foodList.forEach(function (food) {
        var row = "<tr><td>" + food.name + "</td><td>" + food.type + "</td><td>";

        for (var nutrient in food.nutrients) {
            row += nutrient + ": " + food.nutrients[nutrient] + "<br>";
        }

        row += "</td></tr>";
        tableBody.innerHTML += row;
    });
}
var chartsContainer = document.getElementById('chartsContainer');

// Function to create a donut chart for each vegetable
function createDonutChart(vegetable) {
    var chartDiv = document.createElement('div');
    chartDiv.classList.add('chart-item');
    chartsContainer.appendChild(chartDiv);

    // Title for the vegetable
    var title = document.createElement('h3');
    title.textContent = vegetable.name;
    chartDiv.appendChild(title);

    // Canvas for the chart
    var canvas = document.createElement('canvas');
    canvas.id = "myCanvas"
    canvas.width = 200;
    canvas.height = 200;
    var ctx = canvas.getContext('2d');
    // Set the text color
    ctx.fillStyle = 'blue'; 
    chartDiv.appendChild(canvas);

    new Chart(canvas.getContext('2d'), {
        type: 'doughnut',
        data: {
            labels: Object.keys(vegetable.nutrients),
            datasets: [{
                data: Object.values(vegetable.nutrients).map(nutrient => 1),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(255, 159, 64, 0.7)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: false
        }
    });
}

function generateCharts() {
    var minBP = parseInt(document.getElementById('bpInput').value);

    // Clear previous charts
    chartsContainer.innerHTML = '';

    // Filter vegetables based on blood pressure range
    var filteredVegetables = vegetable.filter(function (vegetable) {
        return minBP >= vegetable.blood_pressure_range.min && minBP <= vegetable.blood_pressure_range.max;
    });

    // Create charts for filtered vegetables
    filteredVegetables.forEach(function (vegetable) {
        createDonutChart(vegetable);
    });
}
// Function to generate PDF from canvas data
         function generatePDF() {
                // Get the HTML elements to convert to PDF
                const charts = document.getElementById('chartsContainer');
                const table = document.getElementById('foodTable');

                // Create a container element to hold both table and charts
                const container = document.createElement('div');

                // Append the table and charts to the container
                container.appendChild(table); // Cloning to avoid moving the original table
                container.appendChild(charts); // Cloning to avoid moving the original charts

                // Options for the PDF generation
                const options = {
                    filename: 'table_and_charts.pdf',
                    image: { type: 'jpeg', quality: 0.98 },
                    html2canvas: { scale: 2 },
                    jsPDF: {
                        unit: 'in',
                        format: 'letter',
                        orientation: 'portrait',
                        margin: { top: 0.5, right: 0.5, bottom: 0.5, left: 0.5 } // Adjust margins as needed
                    }
                };

                // Use html2pdf to generate PDF
                html2pdf().from(container).set(options).save();
            } 