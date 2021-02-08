import * as yup from 'yup';



export default [
    yup.object().shape({
        name: yup.string()
        .label('name')
        .required('Name Rquired')
        .max(50,"Maximum 50 characters")
        .min(5,"Minimum 5 characters"),
        lastName: yup.string()
        .label('lastName')
        .required("Last Name required")
        .min(5,"Minimum 5 characters")
        .max(50,"Maximum 50 characters"),
        birthDate : yup.date()
        .required("BirthDate required")
        .label('bithDate'),
        adress: yup.string()
        .label('adress')
        .required("Adress required")
        .min(10,"Minimum 10")
        .max(50,"maximum 50"),
        genderId: yup.number()
        .required('gender required')
    }),
    yup.object().shape({
        institutionName: yup.string()
        .label('institutionName')
        .required("institution name required")
        .min(5,"Minimum 5 characters")
        .max(50,"Maximum 50 characters"),
        institutionAdress : yup.string()
        .label('institutionAdress')
        .required("institution adress required")
        .min(5,"Minimum 5 characters")
        .max(50,"Maximum 50 characters"),
        educationStart: yup.date().required("date required"),
        educationEnd: yup.date().required("date required")
    }),
    yup.object().shape({
        lastPost:  yup.string()
        .label('lastPost')
        .required("Last POst required")
        .min(5,"Minimum 5 characters")
        .max(50,"Maximum 50 characters"),
        companyName: yup.string()
        .label('companyName')
        .required("company name required")
        .min(5,"Minimum 5 characters")
        .max(50,"Maximum 50 characters"),
        companyAdress: yup.string()
        .label('companyAdress')
        .required("company Adress required")
        .min(5,"Minimum 5 characters")
        .max(50,"Maximum 50 characters"),
        startDate: yup.date().required("date required"),
        endDate: yup.date().required("date required")
    }),
    yup.object().shape({
        languageName: yup.number()
        .required('required'),
        languageLevel : yup.number()
        .required('required')
    })
]

