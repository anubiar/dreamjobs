
export const createUpdateEmployerProfileFormData = ({companyRepresentant,companyName,fiscalCode,companyNumber,companyAdress,typeId,imagePath} : any) => {
    const formData = new FormData();
    formData.append('nume',companyRepresentant);
    formData.append('compania',companyName);
    formData.append('codfiscal',fiscalCode);
    formData.append('companynumber',companyNumber);
    formData.append('companyadress',companyAdress);
    formData.append('formid',typeId);
    if(imagePath) {
        console.log('image')
        formData.append('image', imagePath[0])
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