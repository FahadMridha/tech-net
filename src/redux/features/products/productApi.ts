import { api } from "@/redux/api/apiSlice";

const productApi=api.injectEndpoints({
    endpoints:(builder)=>({
        getProduct:builder.query({
            query:()=>"/products"
        }),
        getSingleProduct:builder.query({
            query:(id)=>`/product/${id}`
        }),
        postComment:builder.mutation({
            query:({id,data})=>({
                url:`/comment/${id}`,
                method:"POST",
                body:data
            }),
            invalidatesTags:["comments"]
        }),
        getComment:builder.query({
            query:(id)=>`/comment/${id}`,
            providesTags:["comments"]
        }),
    })

})


export const {useGetProductQuery,useGetCommentQuery,useGetSingleProductQuery,usePostCommentMutation}=productApi