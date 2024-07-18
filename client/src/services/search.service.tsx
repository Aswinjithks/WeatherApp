import service from "@utils/service";
import API from "@config/api";

const SearchService = {
  search: async (params: any = {}) => {
    try {
      const res = await service.get(`${API.SEARCH}?city=${params}`);
      return res;
    } catch (error) {
      return error;
    }
  },
};

export default SearchService;
