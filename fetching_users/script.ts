console.log("---- Employees ----")

interface EmployeeInterface {
    id: number,
    name: string,
    age: number,
    position: string,
    isActive: boolean
}

const employees: EmployeeInterface[] = [
    {
        id: 54,
        name: "John",
        age: 29,
        position: "student",
        isActive: true
    },
    {
        id: 32,
        name: "Tom",
        age: 37,
        position: "captain",
        isActive: false
    },
    {
        id: 5,
        name: "Williams",
        age: 43,
        position: "director",
        isActive: true
    }
]

function addEmployee(id:number, name:string, age:number, position:string, isActive:boolean): EmployeeInterface {
    const newEmployee = {
        id: id,
        name: name,
        age: age,
        position: position,
        isActive: isActive
    }
    employees.push(newEmployee);
    console.log(employees)
    return newEmployee
}

addEmployee(88,"Tim",30,"newbie",true)

function updateEmployee(id:number, name:string, age:number, position:string, isActive:boolean):void {
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].id === id) {
            employees[i].name = name;
            employees[i].age = age;
            employees[i].position = position;
            employees[i].isActive = isActive;
        }
    }
    console.log(employees)
    return
}

updateEmployee(54, "John", 29, "beginner", true)

const activeEmployees: string[] = []

function listActiveEmployees() {
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].isActive) {
            activeEmployees.push(employees[i].name);
        }
    }
    console.log(`Active employees: ${activeEmployees}`)
    return
}

listActiveEmployees()




console.log("---- Weather Data Aggregator ----")

interface WeatherReport {
    city: string, // name of the city
    date: string, // format: YYYY-MM-DD
    temperature: number, // Temperature in Celsius
    conditions: string // Weather conditions (e.g., "sunny", "rainy", "cloudy")
}

const reports: WeatherReport[] = [
    {
        city: "Tokyo",
        date: "2024-12-02",
        temperature: 21,
        conditions: "sunny"
    },
    {
        city: "London",
        date: "2024-12-02",
        temperature: 22,
        conditions: "cloudy"
    },
    {
        city: "Berlin",
        date: "2024-12-02",
        temperature: 14,
        conditions: "rainy"
    }
]

function addWeatherReport(city: string, date: string, temperature: number, conditions: string): WeatherReport {
    const newReport = {
        city: city,
        date: date,
        temperature: temperature,
        conditions: conditions
    }
    reports.push(newReport);
    return newReport
}

addWeatherReport("Kaunas", "2024-12-02", 2, "rainy")
addWeatherReport("Kaunas", "2024-12-01", 5, "cloudy")
addWeatherReport("Kaunas", "2024-12-00", 8, "cloudy")

console.log(reports)

function getAverageTemperature(city: string):number {
    let averageTemp:number = 0
    let reportsSum:number = 0
    for (let i = 0; i < reports.length; i++) {
        if (reports[i].city === city) {
            averageTemp += reports[i].temperature
            reportsSum++
        }
    }
    console.log(`Average Temperature of ${city} is ${averageTemp / reportsSum}`)
    return averageTemp
}

getAverageTemperature("Kaunas")

function getReportsByCondition(condition: string):void {
    let filteredReports = []
    for (let i = 0; i < reports.length; i++) {
        if (reports[i].conditions === condition) {
            filteredReports.push(reports[i])
        }
    }
    console.log(filteredReports)
}

getReportsByCondition("cloudy")




console.log("---- Cinema Booking System ----")

interface MovieShow {
    id: number,
    title: string,
    availableSeats: number,
    bookedSeats: number
}

const movies: MovieShow[] = [
    {
        id: 12,
        title: "Star Wars",
        availableSeats: 0,
        bookedSeats: 90
    },
    {
        id: 18,
        title: "Aladin",
        availableSeats: 84,
        bookedSeats: 6
    },
    {
        id: 15,
        title: "Deadpool",
        availableSeats: 0,
        bookedSeats: 90
    },
    {
        id: 21,
        title: "X-Mens",
        availableSeats: 50,
        bookedSeats: 40
    },
    {
        id: 22,
        title: "Shrek III",
        availableSeats: 52,
        bookedSeats: 38
    }
]

function bookSeats(id:number, bookedSeats:number):void {
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].id === id) {
            movies[i].bookedSeats += bookedSeats
            movies[i].availableSeats -= bookedSeats
        }
    }
    console.log(movies)
}

bookSeats(22, 18)

function getAvailableMovies() {
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].availableSeats > 0) {
            console.log(movies[i].title)
        }
    }
}

getAvailableMovies()

function cancelBooking(id:number, bookedSeats:number):void {
    for (let i = 0; i < movies.length; i++) {
        if(movies[i].id === id) {
            movies[i].bookedSeats -= bookedSeats
            movies[i].availableSeats += bookedSeats
        }
    }
    console.log(movies)
}

cancelBooking(12, 20)



console.log("---- Shopping Cart System ----")

interface CartItem {
    productId: number,
    name: string
    price: number,
    quantity: number
}

let products: CartItem[] = [
    {
        productId: 14,
        name: "Bananas",
        price: 1.50,
        quantity: 5
    },
    {
        productId: 20,
        name: "Apples",
        price: 2.00,
        quantity: 8
    },
    {
        productId: 35,
        name: "Chicken",
        price: 4.59,
        quantity: 1
    }
]

function addItemToCart(id:number, name:string, price:number, quantity:number):CartItem[] | undefined {
    let newProduct: CartItem[] = [
        {
        productId: id,
        name: name,
        price: price,
        quantity: quantity
        }
    ]
    for (let i = 0; i < products.length; i++) {
        if(products[i].productId === id) {
            products[i].quantity += quantity
            console.log(products)
            return products
        }
    }
    products.push(newProduct[0])
    newProduct.shift()
    console.log(products)
}


addItemToCart(14,"Brown bananas", 2.50, 10)
addItemToCart(30,"Turkey", 6.50, 5)

function removeItemFromCart(id:number):CartItem[] {
    products = products.filter(item => item.productId !== id)
    console.log(products)
    return products;
}

removeItemFromCart(30)

function calculateTotal():number {
    let totalPrice:number = 0
    for (let i = 0; i < products.length; i++) {
        totalPrice += products[i].price * products[i].quantity
    }
    console.log(products)
    console.log("Total cart price: " + totalPrice + "$")
    return totalPrice
}

calculateTotal()


console.log("---- Quiz Management System ----")

interface Question {
    id: number,
    text: string
    options: string [],
    correctOption: number
}

let questions: Question[] = [
    {
        id: 1,
        text: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris"],
        correctOption: 3
    },
    {
        id: 2,
        text: "Which gas do plants primarily use for photosynthesis?",
        options: ["Carbon Dioxide", "Oxygen", "Nitrogen"],
        correctOption: 1
    },
    {
        id: 3,
        text: "What is the largest planet in our solar system?",
        options: ["Earth", "Jupiter", "Saturn"],
        correctOption: 2
    },
    {
        id: 4,
        text: "Who wrote the play Romeo and Juliet?",
        options: ["William Shakespeare", "Charles Dickens", "Mark Twain"],
        correctOption: 1
    },
    {
        id: 5,
        text: "What is the chemical symbol for water?",
        options: ["H₂O", "JO₂", "CO₂"],
        correctOption: 1
    }
]


function addQuestion(id:number, text: string, options: string[], correctOption: number):Question[] {
    let newQuestion: Question[] = [
        {
            id: id,
            text: text,
            options: options,
            correctOption: correctOption
        }
    ]
    questions.push(newQuestion[0])
    newQuestion.shift()
    console.log(questions)
    return questions;
}

addQuestion(6,"What is the tallest mountain?", ["Everest", "Amazon", "Bobr"], 1)

let score:number = 0
let result:string = ""

function attemptQuestion(id:number, answer:number):string | undefined {
    for (let i = 0; i < questions.length; i++) {
        if (questions[i].id === id && questions[i].correctOption === answer) {
            result = "The answer is correct!"
            console.log(`${result} : ${questions[i].options[answer-1]}`)
            score++
            return result;
        }
        else {
            result = "The answer is incorrect."
        }

    }
    console.log(result)
    return result;
}

attemptQuestion(3,2)
attemptQuestion(1,3)
attemptQuestion(2,2)

function calculateScore() {
    console.log(`Total score: ${score}`)
}

calculateScore()


console.log("---- Employee Attendance Tracker ----")


interface AttendanceRecord {
    employeeId: number,
    name: string,
    datePresent: string[],
}

let employeeRecords: AttendanceRecord[] = [
    {
        employeeId: 1,
        name: "John",
        datePresent: ["2024-12-01", "2024-12-02", "2024-12-03"],
    },
    {
        employeeId: 2,
        name: "Tom",
        datePresent: ["2024-11-30", "2024-12-01", "2024-12-03"],
    },
    {
        employeeId: 3,
        name: "Williams",
        datePresent: ["2024-11-28", "2024-11-29", "2024-12-02"],
    },
    {
        employeeId: 4,
        name: "Teddy",
        datePresent: ["2024-11-25", "2024-11-28", "2024-11-29"],
    },
    {
        employeeId: 5,
        name: "Tim",
        datePresent: ["2024-11-25", "2024-12-02", "2024-12-03"],
    }
]

function markAttendance(name:string, date:string):AttendanceRecord[] {
    for (let i = 0; i < employeeRecords.length; i++) {
        if (employeeRecords[i].name === name) {
            employeeRecords[i].datePresent.push(date)
        }
    }
    console.log(employeeRecords)
    return employeeRecords
}

markAttendance("Tim","2024-12-04")
markAttendance("Teddy","2024-12-04")
markAttendance("Teddy","2024-12-05")

function getAttendance(name:string):string[] | undefined {
    for (let i = 0; i < employeeRecords.length; i++) {
        if (employeeRecords[i].name === name) {
            console.log(employeeRecords[i].datePresent)
            return employeeRecords[i].datePresent
        }
    }
}

getAttendance("Tim")

function getMostPresentEmployee():string {
    let mostPresents:number = 0
    let mostPresentEmployee:string = ""
    for (let i = 0; i < employeeRecords.length; i++) {
        if (employeeRecords[i].datePresent.length + 1 > mostPresents){
            mostPresents = employeeRecords[i].datePresent.length
            mostPresentEmployee = employeeRecords[i].name
        }
    }
    console.log("The most present employee is: " + mostPresentEmployee)
    return mostPresentEmployee
}

getMostPresentEmployee()