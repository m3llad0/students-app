function GradeToLetter(grade){

    const grade_ = parseInt(grade)

    if(grade_ >= 93)
    {
        return 'A'
    }
    else if (grade_ >= 90 && grade_ <= 92){
        return 'A-'
    }
    else if(grade_ >= 87 && grade_ <= 89)
    {
        return 'B+'
    }
    else if(grade_ >= 83 && grade_ <= 86)
    {
        return 'B'
    }
    else if(grade_ >= 80 && grade_ <= 82)
    {
        return 'B-'
    }
    else if(grade_ >= 77 && grade_  <= 79)
    {
        return 'C+'
    }
    else if(grade_ >= 73 && grade_ <= 76)
    {
        return 'C'
    }
    else if(grade_ >= 70 && grade_ <= 72)
    {
        return 'C-'
    }
    else if(grade_ >= 67 && grade_ <= 69)
    {
        return 'D+'
    }
    else if(grade_ >= 64 && grade_ <= 66)
    {
        return 'D'
    }else if(grade_ <= 64)
    {
        return 'E'
    }
}

export default GradeToLetter