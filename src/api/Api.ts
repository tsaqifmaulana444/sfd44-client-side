import axios from "axios"

export const getAllMenus = async () => {
    const data = await axios.get("http://127.0.0.1:8000/menus")
    return data
}