import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
const cryptoAPINews = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '8deb780d12msh733b2f36721c73ep1e8e63jsna2534949c3e5'
}

const baseUrl = "https://bing-news-search1.p.rapidapi.com"

const createRequest = (url) => ({url, headers: cryptoAPINews})

export const cryptoNewsAPI = createApi({
    reducerPath: 'cryptoNewsAPI',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) =>({
        getCryptoNews: builder.query({
            query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
});
export const { useGetCryptoNewsQuery } = cryptoNewsAPI;
