
export const createUpdateEmployerProfileFormData = ({nume,compania,codFiscal,companyNumber,companyAdress,formId,imagePath} : any) => {
    const formData = new FormData();
    formData.append('nume',nume);
    formData.append('compania',compania);
    formData.append('codfiscal',codFiscal);
    formData.append('companyNumber',companyNumber);
    formData.append('companyAdress',companyAdress);
    formData.append('formId',formId);
    if(imagePath) {
        console.log('ImagePath')
        formData.append('imagePath', imagePath[0])
    }
    return formData
}

export const createUpdateEmployeeProfileFormData = ({name,userName,phone,imagePath,lastName,birthDate,adress,genderId} : any) => {
    const formData = new FormData();
    formData.append('name',name);
    formData.append('username',userName);
    formData.append('phone',phone);
    formData.append('lastname',lastName);
    formData.append('birthdate',birthDate);
    formData.append('adress',adress);
    formData.append('genderid',genderId);
    if(imagePath) {
        console.log('ImagePath')
        formData.append('imagePath', imagePath[0])
    }
    return formData
}