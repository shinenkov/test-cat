import { mockApi } from '../../../api/mockApi';
import { CatType, GetCatParams } from '../model/types';

export const catApi = mockApi.injectEndpoints({
  endpoints: (build) => ({
    getCatAsync: build.query<CatType[], GetCatParams>({
      query: (body) => ({
        url: `proxy/search?limit=${body.limit}`,
        headers: {
          'x-api-key': process.env.APIKEY,
        },
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetCatAsyncQuery } = catApi;
