import axios from 'axios';
const BASE_URL = "http://localhost:3001/"

export const SearchData = async(filters = { })=> {
    const defaultPayload = {
        "artists": ["01jxz1n9nqpxgf6xgnkdtt427c", "01jxz1p8hhrf8bp1whmrayk38x"],
        "lineages": null,
        "regions": null,
        "categories": null,
        "techniques": null,
        "years": null
    };

    try{
        const response = await axios.post(`${BASE_URL}api/search`,{ ...defaultPayload, ...filters })
        return response.data;
    }
    catch (error) {
    console.error("Error fetching search results:", error);
    throw error;
  }
}