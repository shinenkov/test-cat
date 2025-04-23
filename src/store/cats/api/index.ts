import { mockApi } from '../../../api/mockApi';
import { CatType, GetCatParams } from '../model/types';

export const catApi = mockApi.injectEndpoints({
  endpoints: (build) => ({
    getCatAsync: build.query<CatType[], GetCatParams>({
      query: (body) => ({
        url: `${process.env.MOCK_HOST}search?limit=${body.limit}&api_key=${process.env.APIKEY}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetCatAsyncQuery } = catApi;
