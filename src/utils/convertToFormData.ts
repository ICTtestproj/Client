export default function convertToFormData <T> (params: T): FormData {
    const formData = new FormData();
    
    for(const [key, value] of Object.entries(params)){
        formData.append(key, value);
    }

    return formData;
}