import axios from "axios"
import toast from "react-hot-toast"
export const newletterSubscription = async (data) => {
    const token="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMzMyMGYzMWJhZmJhYWY4Y2MxZjY1NGY3OGRhNjY4ODc3OWY0ODVmMjhhMWRhZjA5NTc3Yjg3ZTE2OTU5YzBmMGRkMDUyY2QxOWQyZDc2OTQiLCJpYXQiOjE3MDg1ODQ3MTYuMjAxMDYyLCJuYmYiOjE3MDg1ODQ3MTYuMjAxMDY1LCJleHAiOjE3NDAyMDcxMTYuMTk1ODQ5LCJzdWIiOiIxNCIsInNjb3BlcyI6W119.RnAqViQm_ik0n5hO8gZZV_eQWjxqc37xZdmqavj1neFDrKvjUw6mSI9yD8i1HLRyEQbFIvxE9bs5_p6iQH7NHxdV_jotYpYpMI8Y2_g7in3ZCYEvf3TqRPA3VxEGO6uBQljfwab5jx9DftiJQf0_HyRMUs47F1WrQEo9yPVsRnrXWkqo5pyiuk4LEbsBZQs60BDRtilZYgfj__yi6ujbIOGorkzPfyPNZgRsjHC-bcWDp0fFCddoeba7pwQOZYvwhiFypYCcTkdZymP6imt2HVyiGgEki9xODkOZe-jKkjJj55mGPvnLOQ35OiTdvTST8h_4B0T-mH0ArdquGpQqrIC3F-OBnxlgQGGiE0wqXLHKHMraycOlzL-uOnCo7UB22h3dltcBlH1hpNQMBNBIJ6T4wk79V3iNBPS_2iCQ5L0faRrZVwFY5ZzAtz2m8erJq0rU6EwF79i0OG3aiIHuvcN2URQqEc1BRFISxL43DDbBrZAqKeh1du6asHAbMZ1ujmE9XpyIA9dw5o7hqiFPMNtQCUTfocEQEeLujC8G5RpP2KEe9vLUAZMFhQLViYow7c_Nru6g1VKv6WrgxUAuLQYNcw6oNB29U0lYgNHdkJll2aznk42dbYmbDoYWQ8dPBkBVL9064GrcWpmXWoOx3pPa-JeSxIia-CKWJre8heo"
    console.log(data)
    console.log(process.env.REVIEW_BEE_NEXT)
      try {
        // const res = await axios.post(`${process.env.REVIEW_BEE_NEXT}/newsletter/subscribe`, data, { headers:{ 'content-Type' : 'application/json' }})
        const res = await axios.post(`${process.env.NEXT_PUBLIC_REVIEW_BEE_NEXT}/newsletter/subscribe`, data, { headers:{ 'content-Type' : 'application/json', 'Authorization': `Bearer ${token}`}})
        console.log(res)
        return res
      }
      catch (err) {
        return err 
      }
}

export const addContact = async (data) => {
    console.log(data)
    const token="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMzMyMGYzMWJhZmJhYWY4Y2MxZjY1NGY3OGRhNjY4ODc3OWY0ODVmMjhhMWRhZjA5NTc3Yjg3ZTE2OTU5YzBmMGRkMDUyY2QxOWQyZDc2OTQiLCJpYXQiOjE3MDg1ODQ3MTYuMjAxMDYyLCJuYmYiOjE3MDg1ODQ3MTYuMjAxMDY1LCJleHAiOjE3NDAyMDcxMTYuMTk1ODQ5LCJzdWIiOiIxNCIsInNjb3BlcyI6W119.RnAqViQm_ik0n5hO8gZZV_eQWjxqc37xZdmqavj1neFDrKvjUw6mSI9yD8i1HLRyEQbFIvxE9bs5_p6iQH7NHxdV_jotYpYpMI8Y2_g7in3ZCYEvf3TqRPA3VxEGO6uBQljfwab5jx9DftiJQf0_HyRMUs47F1WrQEo9yPVsRnrXWkqo5pyiuk4LEbsBZQs60BDRtilZYgfj__yi6ujbIOGorkzPfyPNZgRsjHC-bcWDp0fFCddoeba7pwQOZYvwhiFypYCcTkdZymP6imt2HVyiGgEki9xODkOZe-jKkjJj55mGPvnLOQ35OiTdvTST8h_4B0T-mH0ArdquGpQqrIC3F-OBnxlgQGGiE0wqXLHKHMraycOlzL-uOnCo7UB22h3dltcBlH1hpNQMBNBIJ6T4wk79V3iNBPS_2iCQ5L0faRrZVwFY5ZzAtz2m8erJq0rU6EwF79i0OG3aiIHuvcN2URQqEc1BRFISxL43DDbBrZAqKeh1du6asHAbMZ1ujmE9XpyIA9dw5o7hqiFPMNtQCUTfocEQEeLujC8G5RpP2KEe9vLUAZMFhQLViYow7c_Nru6g1VKv6WrgxUAuLQYNcw6oNB29U0lYgNHdkJll2aznk42dbYmbDoYWQ8dPBkBVL9064GrcWpmXWoOx3pPa-JeSxIia-CKWJre8heo"
        try {
        //   const res = await axios.post(`${process.env.REVIEW_BEE_NEXT}/contact-us/add`, data, { headers:{ 'content-Type' : 'application/json' }})
        const res = await axios.post(`${process.env.NEXT_PUBLIC_REVIEW_BEE_NEXT}/contact-us/add`, data, { headers:{ 'content-Type' : 'application/json', 'Authorization': `Bearer ${token}`}})
          console.log(res)
          toast.success(`${res.data.message}`)
          return res
        }
        catch (err) {
            toast.error('Error in Creating  Contact')
          return err 
        }
      }

export const RegisterUser = async (data) => {
console.log(data)
// const token="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMDMwYmJmOWI4YmI4YmRhMjRmM2RmN2RkZmViYzczMGM4ODVlYjYwYTFjN2ZjNTEwY2QzNzM4ZjZkNmQ0ODYxNzFlZTQ4NDExMzYxOGFhMDIiLCJpYXQiOjE3MDc0ODYyNjIuMDQ4NzM1LCJuYmYiOjE3MDc0ODYyNjIuMDQ4NzM3LCJleHAiOjE3MzkxMDg2NjIuMDQyOTAzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.dKrgo8ay05aNZjSu-wRZKgldXYPIdMigQb-WkwC4aQ-vzzCg70Kn90NkKZaNp5fwX0a6PjhkvHxdYsD83u6al2F1LgKaklQevgSslULjaXMLoThcIbnI7NQTkY25R0PRi9PMqJHUWCkzlUoYVBzVfrSdTHiY3GhlTFEgNJqw-m8-_o0ik7SSEdx0TnG3RXIqrvatrpMBBXVc5Ei3jt1VBsQlajm_9N61aEZbsg0kWhYgjPiDIvJozV0vc_DheZ3WqwOPl38sW2kGwUwW1PYy1_2I6F-H5q55KMYP-uj5QCyY2_OKhkZjAkDrij37a_Ed6-X_LhtmFTNtFLDk14-8QilyTX-Qbbu4wioO82xV_2cU9eP8lT5XKSoa4yyZlGMnmXsIU6PshAsiSQxHvuzHa1K_c1PJ2ro8UVA0RT7LtVvU-lGcFGg6h298rGwTJ1TxeXPC-7GfOhIeaxxXR94te-qdaIp4nGw3A6sDTFJVL_HmU22afcJ4rJ2D_3W5AlFAhaMO52cgvbv1lisRtT7UMB4rveNnawYwx_E2fgJSxkzhRGio0zJY-OuneP_XnHwxEIHyFPoX6Vtk0BlCd4HaqITULG8H_CWwyWjKIzhHqTdjbd7msf6Ld7WWcFpb9O3sdmF0-5XEOBAM-_MLS1glsklViGGSw74M-dPej00fmw8"
    try {
    //   const res = await axios.post(`${process.env.REVIEW_BEE_NEXT}/contact-us/add`, data, { headers:{ 'content-Type' : 'application/json' }})
    const res = await axios.post(`${process.env.NEXT_PUBLIC_REVIEW_BEE_NEXT}/create-user`, data, { headers:{ 'content-Type' : 'application/json',}})
      console.log(res)
      toast.success(`${res.data.message}`)
      return res
    }
    catch (err) {
        toast.error(`${err.response.data.message}`)
      return err 
    }
  }
  export const LoginUser = async (data) => {
    console.log(data)
    // const token="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMDMwYmJmOWI4YmI4YmRhMjRmM2RmN2RkZmViYzczMGM4ODVlYjYwYTFjN2ZjNTEwY2QzNzM4ZjZkNmQ0ODYxNzFlZTQ4NDExMzYxOGFhMDIiLCJpYXQiOjE3MDc0ODYyNjIuMDQ4NzM1LCJuYmYiOjE3MDc0ODYyNjIuMDQ4NzM3LCJleHAiOjE3MzkxMDg2NjIuMDQyOTAzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.dKrgo8ay05aNZjSu-wRZKgldXYPIdMigQb-WkwC4aQ-vzzCg70Kn90NkKZaNp5fwX0a6PjhkvHxdYsD83u6al2F1LgKaklQevgSslULjaXMLoThcIbnI7NQTkY25R0PRi9PMqJHUWCkzlUoYVBzVfrSdTHiY3GhlTFEgNJqw-m8-_o0ik7SSEdx0TnG3RXIqrvatrpMBBXVc5Ei3jt1VBsQlajm_9N61aEZbsg0kWhYgjPiDIvJozV0vc_DheZ3WqwOPl38sW2kGwUwW1PYy1_2I6F-H5q55KMYP-uj5QCyY2_OKhkZjAkDrij37a_Ed6-X_LhtmFTNtFLDk14-8QilyTX-Qbbu4wioO82xV_2cU9eP8lT5XKSoa4yyZlGMnmXsIU6PshAsiSQxHvuzHa1K_c1PJ2ro8UVA0RT7LtVvU-lGcFGg6h298rGwTJ1TxeXPC-7GfOhIeaxxXR94te-qdaIp4nGw3A6sDTFJVL_HmU22afcJ4rJ2D_3W5AlFAhaMO52cgvbv1lisRtT7UMB4rveNnawYwx_E2fgJSxkzhRGio0zJY-OuneP_XnHwxEIHyFPoX6Vtk0BlCd4HaqITULG8H_CWwyWjKIzhHqTdjbd7msf6Ld7WWcFpb9O3sdmF0-5XEOBAM-_MLS1glsklViGGSw74M-dPej00fmw8"
        try {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_REVIEW_BEE_NEXT}/login`, data, { headers:{ 'content-Type' : 'application/json',}})     
          console.log(res)
          // toast.success('Successfully Added')
          return res
        }
        catch (err) {
          console.log(err.response.data.message)
            toast.error(`${err.response.data.message}`)
          return err 
        }
      }

export const getListBlog = async (data) => {
   console.log(data)
        const token="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMzMyMGYzMWJhZmJhYWY4Y2MxZjY1NGY3OGRhNjY4ODc3OWY0ODVmMjhhMWRhZjA5NTc3Yjg3ZTE2OTU5YzBmMGRkMDUyY2QxOWQyZDc2OTQiLCJpYXQiOjE3MDg1ODQ3MTYuMjAxMDYyLCJuYmYiOjE3MDg1ODQ3MTYuMjAxMDY1LCJleHAiOjE3NDAyMDcxMTYuMTk1ODQ5LCJzdWIiOiIxNCIsInNjb3BlcyI6W119.RnAqViQm_ik0n5hO8gZZV_eQWjxqc37xZdmqavj1neFDrKvjUw6mSI9yD8i1HLRyEQbFIvxE9bs5_p6iQH7NHxdV_jotYpYpMI8Y2_g7in3ZCYEvf3TqRPA3VxEGO6uBQljfwab5jx9DftiJQf0_HyRMUs47F1WrQEo9yPVsRnrXWkqo5pyiuk4LEbsBZQs60BDRtilZYgfj__yi6ujbIOGorkzPfyPNZgRsjHC-bcWDp0fFCddoeba7pwQOZYvwhiFypYCcTkdZymP6imt2HVyiGgEki9xODkOZe-jKkjJj55mGPvnLOQ35OiTdvTST8h_4B0T-mH0ArdquGpQqrIC3F-OBnxlgQGGiE0wqXLHKHMraycOlzL-uOnCo7UB22h3dltcBlH1hpNQMBNBIJ6T4wk79V3iNBPS_2iCQ5L0faRrZVwFY5ZzAtz2m8erJq0rU6EwF79i0OG3aiIHuvcN2URQqEc1BRFISxL43DDbBrZAqKeh1du6asHAbMZ1ujmE9XpyIA9dw5o7hqiFPMNtQCUTfocEQEeLujC8G5RpP2KEe9vLUAZMFhQLViYow7c_Nru6g1VKv6WrgxUAuLQYNcw6oNB29U0lYgNHdkJll2aznk42dbYmbDoYWQ8dPBkBVL9064GrcWpmXWoOx3pPa-JeSxIia-CKWJre8heo"
            try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_REVIEW_BEE_NEXT}/blog-post/list?page=${data.page}&page_size=${data.page_size}`, null, { headers:{ 'content-Type' : 'application/json','Authorization': `Bearer ${token}`}})     
              console.log(res)
              // toast.success('Successfully Added')
              return res
            }
            catch (err) {
                // toast.error('error')
              return err 
            }
          }
export const getBlogDetails = async (data) => {
console.log(data)
      const token="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMDMwYmJmOWI4YmI4YmRhMjRmM2RmN2RkZmViYzczMGM4ODVlYjYwYTFjN2ZjNTEwY2QzNzM4ZjZkNmQ0ODYxNzFlZTQ4NDExMzYxOGFhMDIiLCJpYXQiOjE3MDc0ODYyNjIuMDQ4NzM1LCJuYmYiOjE3MDc0ODYyNjIuMDQ4NzM3LCJleHAiOjE3MzkxMDg2NjIuMDQyOTAzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.dKrgo8ay05aNZjSu-wRZKgldXYPIdMigQb-WkwC4aQ-vzzCg70Kn90NkKZaNp5fwX0a6PjhkvHxdYsD83u6al2F1LgKaklQevgSslULjaXMLoThcIbnI7NQTkY25R0PRi9PMqJHUWCkzlUoYVBzVfrSdTHiY3GhlTFEgNJqw-m8-_o0ik7SSEdx0TnG3RXIqrvatrpMBBXVc5Ei3jt1VBsQlajm_9N61aEZbsg0kWhYgjPiDIvJozV0vc_DheZ3WqwOPl38sW2kGwUwW1PYy1_2I6F-H5q55KMYP-uj5QCyY2_OKhkZjAkDrij37a_Ed6-X_LhtmFTNtFLDk14-8QilyTX-Qbbu4wioO82xV_2cU9eP8lT5XKSoa4yyZlGMnmXsIU6PshAsiSQxHvuzHa1K_c1PJ2ro8UVA0RT7LtVvU-lGcFGg6h298rGwTJ1TxeXPC-7GfOhIeaxxXR94te-qdaIp4nGw3A6sDTFJVL_HmU22afcJ4rJ2D_3W5AlFAhaMO52cgvbv1lisRtT7UMB4rveNnawYwx_E2fgJSxkzhRGio0zJY-OuneP_XnHwxEIHyFPoX6Vtk0BlCd4HaqITULG8H_CWwyWjKIzhHqTdjbd7msf6Ld7WWcFpb9O3sdmF0-5XEOBAM-_MLS1glsklViGGSw74M-dPej00fmw8"
          try {
          const res = await axios.get(`${process.env.NEXT_PUBLIC_REVIEW_BEE_NEXT}/blog-post/edit/${data}`,  { headers:{ 'content-Type' : 'application/json','Authorization': `Bearer ${token}`}})     
            console.log(res)
            // toast.success('Successfully Added')
            return res
          }
          catch (err) {
              // toast.error('error')
            return err 
          }
        }

export const getPricePlan = async (data) => {
  console.log(data)
        const token="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMzMyMGYzMWJhZmJhYWY4Y2MxZjY1NGY3OGRhNjY4ODc3OWY0ODVmMjhhMWRhZjA5NTc3Yjg3ZTE2OTU5YzBmMGRkMDUyY2QxOWQyZDc2OTQiLCJpYXQiOjE3MDg1ODQ3MTYuMjAxMDYyLCJuYmYiOjE3MDg1ODQ3MTYuMjAxMDY1LCJleHAiOjE3NDAyMDcxMTYuMTk1ODQ5LCJzdWIiOiIxNCIsInNjb3BlcyI6W119.RnAqViQm_ik0n5hO8gZZV_eQWjxqc37xZdmqavj1neFDrKvjUw6mSI9yD8i1HLRyEQbFIvxE9bs5_p6iQH7NHxdV_jotYpYpMI8Y2_g7in3ZCYEvf3TqRPA3VxEGO6uBQljfwab5jx9DftiJQf0_HyRMUs47F1WrQEo9yPVsRnrXWkqo5pyiuk4LEbsBZQs60BDRtilZYgfj__yi6ujbIOGorkzPfyPNZgRsjHC-bcWDp0fFCddoeba7pwQOZYvwhiFypYCcTkdZymP6imt2HVyiGgEki9xODkOZe-jKkjJj55mGPvnLOQ35OiTdvTST8h_4B0T-mH0ArdquGpQqrIC3F-OBnxlgQGGiE0wqXLHKHMraycOlzL-uOnCo7UB22h3dltcBlH1hpNQMBNBIJ6T4wk79V3iNBPS_2iCQ5L0faRrZVwFY5ZzAtz2m8erJq0rU6EwF79i0OG3aiIHuvcN2URQqEc1BRFISxL43DDbBrZAqKeh1du6asHAbMZ1ujmE9XpyIA9dw5o7hqiFPMNtQCUTfocEQEeLujC8G5RpP2KEe9vLUAZMFhQLViYow7c_Nru6g1VKv6WrgxUAuLQYNcw6oNB29U0lYgNHdkJll2aznk42dbYmbDoYWQ8dPBkBVL9064GrcWpmXWoOx3pPa-JeSxIia-CKWJre8heo"
            try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_REVIEW_BEE_NEXT}/pricing-plan/list`, null, { headers:{ 'content-Type' : 'application/json','Authorization': `Bearer ${token}`}})     
              console.log(res)
              // toast.success('Successfully Added')
              return res
            }
            catch (err) {
                // toast.error('error')
              return err 
            }
          }

export const sendReview = async (data) => {
console.log(data)
const token="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMzMyMGYzMWJhZmJhYWY4Y2MxZjY1NGY3OGRhNjY4ODc3OWY0ODVmMjhhMWRhZjA5NTc3Yjg3ZTE2OTU5YzBmMGRkMDUyY2QxOWQyZDc2OTQiLCJpYXQiOjE3MDg1ODQ3MTYuMjAxMDYyLCJuYmYiOjE3MDg1ODQ3MTYuMjAxMDY1LCJleHAiOjE3NDAyMDcxMTYuMTk1ODQ5LCJzdWIiOiIxNCIsInNjb3BlcyI6W119.RnAqViQm_ik0n5hO8gZZV_eQWjxqc37xZdmqavj1neFDrKvjUw6mSI9yD8i1HLRyEQbFIvxE9bs5_p6iQH7NHxdV_jotYpYpMI8Y2_g7in3ZCYEvf3TqRPA3VxEGO6uBQljfwab5jx9DftiJQf0_HyRMUs47F1WrQEo9yPVsRnrXWkqo5pyiuk4LEbsBZQs60BDRtilZYgfj__yi6ujbIOGorkzPfyPNZgRsjHC-bcWDp0fFCddoeba7pwQOZYvwhiFypYCcTkdZymP6imt2HVyiGgEki9xODkOZe-jKkjJj55mGPvnLOQ35OiTdvTST8h_4B0T-mH0ArdquGpQqrIC3F-OBnxlgQGGiE0wqXLHKHMraycOlzL-uOnCo7UB22h3dltcBlH1hpNQMBNBIJ6T4wk79V3iNBPS_2iCQ5L0faRrZVwFY5ZzAtz2m8erJq0rU6EwF79i0OG3aiIHuvcN2URQqEc1BRFISxL43DDbBrZAqKeh1du6asHAbMZ1ujmE9XpyIA9dw5o7hqiFPMNtQCUTfocEQEeLujC8G5RpP2KEe9vLUAZMFhQLViYow7c_Nru6g1VKv6WrgxUAuLQYNcw6oNB29U0lYgNHdkJll2aznk42dbYmbDoYWQ8dPBkBVL9064GrcWpmXWoOx3pPa-JeSxIia-CKWJre8heo"
    try {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_REVIEW_BEE_NEXT}/review-link/add`, data, { headers:{ 'Content-Type': 'multipart/form-data','Authorization': `Bearer ${token}`}})     
      console.log(res)
      // toast.success('Successfully Added')
      return res
    }
    catch (err) {
        // toast.error('error')
      return err 
    }
  }


export const getReview = async (data) => {
console.log(data)
const token="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNWQxMTllNDdhZDRjMmUxNGQ2YWE3Njc5YjVkYzQ1MzFhNTA3YTgwZGJkNDFmMDQyOThkYmFjMjM1MDIwYzIxNzY4YzVkZTBmODhiNzQ4ODciLCJpYXQiOjE3MTEwNDQwNjAuNTk4ODgsIm5iZiI6MTcxMTA0NDA2MC41OTg4ODMsImV4cCI6MTc0MjU4MDA2MC41ODYyNjcsInN1YiI6IjE1Iiwic2NvcGVzIjpbXX0.IEd7gYcXLc7XafrxwarIJ10xg3Cbmy5R2fX4Z9CD9ZMi2sojRUzrFL5ONvZjFZZ-srQgH_CsIGOhwrVH0T7HDfHcv26YGxcRdpwdxFqWnJuOU9fhCCh8g8TZboQBWOSZ1l5JfYirPh-s7hjQH8Mktie5fsyxJUAE5-oJ2lrLs1S_cCKqSnork6GdC3tZRqAcDQO22oFwqGyBbqIo6FwT-maP6xPTXr3bARF-P8QnOVUydMNT3Aow_OrlwYeWKx9Yk1WwLYARi3z1Vv9-Bagv9d0FQy7t_SdKjKCyE74-4lKk75cIDTrFveQkNqOxmq06gJbZxhExTfGCrJef0yvlSN7xHq6YgeTcrI2ecdYRxYQJDacnmeXoQt4qqPxgiD7HkOMlUKs6aU3PMRtVWBy-eQqEOJM8BZYGB7MibaNdccZlaWCjl0fXf8qIx_IH8KWPaLT2Yey-5lj1CYSPzyY8gZQ4MDQzetL5_ahk6xLxF41YxH-3OpvIS5gqn1MtyjrYWtKy_7zA4_WgWsOdB7DKaNXh5wKDfk3RKSowI9vDO7YQDBJ_upydNrTXemBLvaKv3o8jHOcXU5tfO22g04aPzWOCIeEDVL-4lHcG1IUEgtv8E8C4fVz0CufsozWsKgnDeNDkU9EnocosfasxjsztnsBw7NQdJUk4fZ-e_8DcTXk"
  try {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_REVIEW_BEE_NEXT}/review-link/list`,{ headers:{ 'Authorization': `Bearer ${token}`}})     
    console.log(res)
    // toast.success('Successfully Added')
    return res
  }
  catch (err) {
      // toast.error('error')
    return err 
  }
}        

export const updateReviewLink = async (data) => {
  const { data:{token} } = JSON.parse(localStorage.getItem("userInfo"));
        // const token="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMzMyMGYzsMWJhZmJhYWY4Y2MxZjY1NGY3OGRhNjY4ODc3OWY0ODVmMjhhMWRhZjA5NTc3Yjg3ZTE2OTU5YzBmMGRkMDUyY2QxOWQyZDc2OTQiLCJpYXQiOjE3MDg1ODQ3MTYuMjAxMDYyLCJuYmYiOjE3MDg1ODQ3MTYuMjAxMDY1LCJleHAiOjE3NDAyMDcxMTYuMTk1ODQ5LCJzdWIiOiIxNCIsInNjb3BlcyI6W119.RnAqViQm_ik0n5hO8gZZV_eQWjxqc37xZdmqavj1neFDrKvjUw6mSI9yD8i1HLRyEQbFIvxE9bs5_p6iQH7NHxdV_jotYpYpMI8Y2_g7in3ZCYEvf3TqRPA3VxEGO6uBQljfwab5jx9DftiJQf0_HyRMUs47F1WrQEo9yPVsRnrXWkqo5pyiuk4LEbsBZQs60BDRtilZYgfj__yi6ujbIOGorkzPfyPNZgRsjHC-bcWDp0fFCddoeba7pwQOZYvwhiFypYCcTkdZymP6imt2HVyiGgEki9xODkOZe-jKkjJj55mGPvnLOQ35OiTdvTST8h_4B0T-mH0ArdquGpQqrIC3F-OBnxlgQGGiE0wqXLHKHMraycOlzL-uOnCo7UB22h3dltcBlH1hpNQMBNBIJ6T4wk79V3iNBPS_2iCQ5L0faRrZVwFY5ZzAtz2m8erJq0rU6EwF79i0OG3aiIHuvcN2URQqEc1BRFISxL43DDbBrZAqKeh1du6asHAbMZ1ujmE9XpyIA9dw5o7hqiFPMNtQCUTfocEQEeLujC8G5RpP2KEe9vLUAZMFhQLViYow7c_Nru6g1VKv6WrgxUAuLQYNcw6oNB29U0lYgNHdkJll2aznk42dbYmbDoYWQ8dPBkBVL9064GrcWpmXWoOx3pPa-JeSxIia-CKWJre8heo"
  try {
  const res = await axios.post(`${process.env.NEXT_PUBLIC_REVIEW_BEE_NEXT}/review-link/update`, data, { headers:{ 'content-Type' : 'application/form-data','Authorization': `Bearer ${token}`}})     
    console.log(res)
    toast.success('Update Sussesfully')
    return res
  }
  catch (err) {
      toast.error('error')
    return err 
  }
   }

export const getReviewLink = async (data) => {
  const { data:{token} } = JSON.parse(localStorage.getItem("userInfo"));
  try {
  const res = await axios.post(`${process.env.NEXT_PUBLIC_REVIEW_BEE_NEXT}/review-link/list`, data, { headers:{ 'content-Type' : 'application/form-data','Authorization': `Bearer ${token}`}})     
    console.log(res)
    // toast.success('Update Sussesfully')
    return res
  }
  catch (err) {
      // toast.error('error')
    return err 
  }
  }

export const addIntegration = async (data) => {
const { data:{token} } = JSON.parse(localStorage.getItem("userInfo"));
          try {
          const res = await axios.post(`${process.env.NEXT_PUBLIC_REVIEW_BEE_NEXT}/integration/add`, data, { headers:{ 'content-Type' : 'application/json','Authorization': `Bearer ${token}`}})     
            console.log(res)
            toast.success('Integrated Successfully')
            return res
          }
          catch (err) {
              toast.error('error')
            return err 
          }
}

export const getIntegraton = async (data) => {
  const { data:{token} } = JSON.parse(localStorage.getItem("userInfo"));
            try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_REVIEW_BEE_NEXT}/integration/get-integration`, data, { headers:{ 'content-Type' : 'application/json','Authorization': `Bearer ${token}`}})     
              console.log(res)
              // toast.success('Integrated Successfully')
              return res
            }
            catch (err) {
                // toast.error('error')
              return err 
            }
 }                              
export const getViewUrl = async (data) => {
  const { data:{token} } = JSON.parse(localStorage.getItem("userInfo"));
            try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_REVIEW_BEE_NEXT}/review-link/get-view-url`, data, { headers:{ 'content-Type' : 'application/json','Authorization': `Bearer ${token}`}})     
              console.log(res)
              // toast.success('Integrated Successfully')
              return res
            }
            catch (err) {
                // toast.error('error')
              return err 
            }
}

export const getAllReview = async (data) => {
  const { data:{token} } = JSON.parse(localStorage.getItem("userInfo"));
            try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_REVIEW_BEE_NEXT}/integration/get-all-review`, null, { headers:{ 'content-Type' : 'application/json','Authorization': `Bearer ${token}`}})     
              console.log(res,"mlk214")
              // toast.success('Integrated Successfully')
              return res
            }
            catch (err) {
                // toast.error('error')
              return err 
            }
}

export const storeGoogleReview = async () => {
  const { data:{token} } = JSON.parse(localStorage.getItem("userInfo"));
            try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_REVIEW_BEE_NEXT}/integration/store-google-review`, null, { headers:{ 'content-Type' : 'application/json','Authorization': `Bearer ${token}`}})     
              console.log(res)
              // toast.success('Integrated Successfully')
              toast.success(`${res.data.message}`);
              return res
            }
            catch (err) {
              toast.error(`${err.response.data.errors}`);
                // toast.error('error')
              return err 
            }
}

export const addSocialTemplate = async (data) => {
  const { data:{token} } = JSON.parse(localStorage.getItem("userInfo"));
            try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_REVIEW_BEE_NEXT}/social-template/add`, data, { headers:{ 'content-Type' : 'application/json','Authorization': `Bearer ${token}`}})     
              console.log(res)
              // toast.success('Integrated Successfully')
              toast.success(`${res.data.message}`);
              return res
            }
            catch (err) {
              toast.error(`${err.response.data.errors}`);
                // toast.error('error')
              return err 
            }
}

export const getSocialTemplate = async (data) => {
  const { data:{token} } = JSON.parse(localStorage.getItem("userInfo"));
  try {
  const res = await axios.post(`${process.env.NEXT_PUBLIC_REVIEW_BEE_NEXT}/social-template/list`, data, { headers:{ 'content-Type' : 'application/json','Authorization': `Bearer ${token}`}})     
    console.log(res)
    // toast.success('Integrated Successfully')
    // toast.success(`${res.data.message}`);
    return res
  }
  catch (err) {
    // toast.error(`${err.response.data.errors}`);
      // toast.error('error')
    return err 
  }
}

export const deleteIntegration = async (data) => {
  const { data:{token} } = JSON.parse(localStorage.getItem("userInfo"));
  try {
  const res = await axios.post(`${process.env.NEXT_PUBLIC_REVIEW_BEE_NEXT}/integration/delete`, data, { headers:{ 'content-Type' : 'application/json','Authorization': `Bearer ${token}`}})     
    console.log(res)
    // toast.success('Integrated Successfully')
    toast.success(`${res.data.message}`);
    return res
  }
  catch (err) {
    toast.error(`${err.response.data.errors}`);
      // toast.error('error')
    return err 
  }
}

export const addCompany = async (data) => {
  const { data:{token} } = JSON.parse(localStorage.getItem("userInfo"));
  let form=new FormData()
  form.append("company_name", data.name);
  form.append("logo",data.logo)
  form.append("status", data.status)
  form.append("total_review", data.total_review)
   console.log(form,"dd")
  try {
  const res = await axios.post(`${process.env.NEXT_PUBLIC_REVIEW_BEE_NEXT}/company/add`, form, { headers:{ 'content-Type' : 'application/form-data','Authorization': `Bearer ${token}`}})     
    console.log(res)
    // toast.success('Integrated Successfully')
    toast.success(`${res.data.message}`);
    return res
  }
  catch (err) {
    toast.error(`${err.response.data.errors}`);
      // toast.error('error')
    return err 
  }
}

export const listCompany = async (data) => {
  const { data:{token} } = JSON.parse(localStorage.getItem("userInfo"));
  // let form=new FormData()
  // form.append("company_name", data.name);
  // form.append("logo",data.logo)
  // form.append("status", data.status)
  // form.append("total_review", data.total_review)
  //  console.log(form,"dd")
  try {
  const res = await axios.post(`${process.env.NEXT_PUBLIC_REVIEW_BEE_NEXT}/company/list`, null, { headers:{ 'content-Type' : 'application/form-data','Authorization': `Bearer ${token}`}})     
    console.log(res)
    // toast.success('Integrated Successfully')
    // toast.success(`${res.data.message}`);
    return res
  }
  catch (err) {
    // toast.error(`${err.response.data.errors}`);
      // toast.error('error')
    return err 
  }
}