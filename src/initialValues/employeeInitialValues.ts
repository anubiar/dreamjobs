
export interface EmployeeProfileCreate{
    name: string,
    lastName: string,
    birthDate: Date | undefined,
    adress: string,
    genderId : number | undefined | string,
    education:{
        institutionName: string,
        institutionAdress : string,
        educationStart: Date | undefined,
        educationEnd : Date | undefined,
        formType: number | undefined
    },
    experience:{
        lastPost:string,
        companyName: string,
        companyAdress: string,
        startDate: Date | undefined,
        endDate: Date | undefined
    }
    languageList:{
        languageNameId: number,
        languageLevelId: number
    }[],

}

export const EmployeeInitialValues : EmployeeProfileCreate = {
    name: '',
    lastName: '',
    birthDate: undefined,
    adress: '',
    genderId: '',
    education:{
        institutionName: '',
        institutionAdress: '',
        educationStart: undefined,
        educationEnd: undefined,
        formType: undefined
    },
    experience:{
        lastPost:'',
        companyName:'',
        companyAdress:'',
        startDate: undefined,
        endDate: undefined
    },
    languageList: []
}