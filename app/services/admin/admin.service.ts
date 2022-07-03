import axios from "@/api/interceptors"
import { getUsersUrl } from "@/config/api.config"

export const adminService = {
  async getCountUsers() {
    return await axios.get<number>(getUsersUrl('count'))
  }
}