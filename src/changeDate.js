
function ChangeDate(inputDate){

    const _date =inputDate.split("/")

    const day = _date[0]
    const month = _date[1]
    const year = _date[2]
    
    const newDate = month +'/' + day + '/' + year

    return newDate
}

export default ChangeDate