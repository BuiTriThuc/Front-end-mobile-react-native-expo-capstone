import AxiosClient from "../../config/AxiosConfig";

// Function to construct the query string based on non-null values
export function constructQueryString(params) {
    const queryStringParts = [];
    for (const [key, value] of Object.entries(params)) {
        if (value !== null && value !== undefined && value !== "") {
            if (Array.isArray(value) && value.length > 0) {
                queryStringParts.push(`${key}=${value.join(',')}`);
            } else if(!Array.isArray(value)) {
                queryStringParts.push(`${key}=${value}`);
            }
        }
    }
    return queryStringParts.join('&');
}


const ApartmentForRentsApis = {
    getAll: () => AxiosClient.get("/apartment-for-rent?guest=1&numberBedsRoom=1&numberBathRoom=1&pageNo=0&pageSize=10&sortBy=id&sortDirection=asc"),
    getAllBySearchParams: (params) => AxiosClient.get(`/apartment-for-rent?${constructQueryString(params)}`),
};

export default ApartmentForRentsApis;

