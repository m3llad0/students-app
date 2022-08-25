import ChangeDate from "./changeDate";
import ChangeName from "./changeName";
import GradeToLetter from "./gradeToLetter";

describe('individual functions', () => {
    test('grade conversion', () => {

        expect(GradeToLetter(99)).toBe('A')
        expect(GradeToLetter(92)).toBe('A-')
        expect(GradeToLetter(88)).toBe('B+')
        expect(GradeToLetter(85)).toBe('B')
        expect(GradeToLetter(80)).toBe('B-')
        expect(GradeToLetter(77)).toBe('C+')
        expect(GradeToLetter(75)).toBe('C')
        expect(GradeToLetter(70)).toBe('C-')
        expect(GradeToLetter(65)).toBe('D')
        expect(GradeToLetter(50)).toBe('E')
    })

    test('change date format', () => {
        expect(ChangeDate('24/08/2022')).toBe('08/24/2022')
        expect(ChangeDate('13/02/2002')).toBe('02/13/2002')
        expect(ChangeDate('25/08/2022')).toBe('08/25/2022')

    })

    test('change name format' , () => {
        expect(ChangeName('Diego Mellado Oliveros')).toBe('Diego Mellado')
        expect(ChangeName('Iwalani Amador Piaga')).toBe('Iwalani Amador')
        expect(ChangeName('Tonatiuh Reyes Huerta ')).toBe('Tonatiuh Reyes')
        expect(ChangeName('Manuel López Portillo')).toBe('Manuel López')
    })
}
)