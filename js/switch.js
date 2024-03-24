let month = 5;

switch(month)
{
    case 1:
        month = "January"
        break;
            
        case 2:
            month = "Febuary"
            break;

            case 3:
                month = "March"
                break;

                case 4:
                    month = "April"
                    break;

                    case 5:
                        month = "May"
                        break;

                        case 6:
                            month = "June"
                            break;

                            case 7:
                                month = "July"
                                break;

                                case 8:
                                    month = "August"
                                    break;

                                    case 9:
                                        month = "September";
                                        break;

                                        case 10:
                                            month = "October"
                                            break;

                                            case 11:
                                                month = "November"
                                                break;


                                                case 12: 
                                                month = "December"
                                                break

                                                default:
                                                    month = "Invalid month"
                                                    break;

}

console.log("Month is :" + month)
document.write("<h1>Month is : " + month, "</h1>")





 day = () => {

    let day = 6;
    
    if (day === 1 || day === "1") {
          day = "Sunday"
    }

    else if (day === 2 || day === "2") {
        day = "Monday"
    }

    else if (day === 3 || day === "3") {
        day = "Tuesday"
    }

    else if (day === 4 || day === "4") {
        day = "Wendesday"
    }

    else if (day === 5 || day === "5") {
        day = "Thursday"
    }

    else if (day === 6 || day === "6") {
        day = "Friday"
    }

    else if (day === 7 || day === "7") {
        day = "Saturday"
    }

    else {
        day = "Invalid Day"
    }

    
    document.write("<h1> Day Is: " + day, "</h1>")
    console.log("Day Is: " + day)
}

day()