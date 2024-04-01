"use client"

import { addCompany, addIntegration, listCompany } from '@/services';
import { useEffect, useRef, useState } from 'react';




import { Toaster } from 'react-hot-toast';

import { Form } from 'react-bootstrap';
import { DataGrid } from '@mui/x-data-grid';
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const schema = yup
  .object({
    name: yup.string().required("First Name is Required"),
    // logo: yup.object().required("Last Name is Required"),
    status: yup.string().required("Email is Required"),
  })
  .required();
 const Company = () => {
  const [companyData, setCompanyData]=useState([])
  const {register,handleSubmit,setValue, formState: { errors } , reset,control,
} = useForm({
  defaultValues: {},
  resolver: yupResolver(schema),
});

const onSubmit=async(data)=>{
  console.log(data.logo)
  let form=new FormData()
  form.append("company_name", data.name);
  form.append("logo",data.logo)
  form.append("status", data.status)
   console.log(form,"dd")
  const form_data={
    name: data.name,
  logo: data.logo,
    status: data.status,
    total_review:23
  // password: data.password,
    // phone_no: data.phone,
    // company: data.company,
    // status: 1
  }
   try {
     await addCompany(form_data).then((res)=>{
      console.log(res)
      // if(res.status===200){
      //   reset()
      //   router.push('/login');
      // }

     })
   } catch (err) {
    console.log(err)
   }
console.log(data)
}
const fetchCompanyList=()=>{
  listCompany().then((res)=>{
    console.log(res)
    setCompanyData(res?.data?.data)
  })
}
useEffect(()=>{
  fetchCompanyList()
},[])
console.log(companyData)
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    // { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    // { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    // { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    // { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    // { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];
  const columns = [
    // { field: 'id', headerName: 'ID', },
    { field: 'company_name', headerName: 'Company Name', width: 130, },
    { field: 'firstName', headerName: 'Logo'},
    {
      field: 'status',
      headerName: 'Status',
      // type: 'number',
      // width: 90,
    },
    {
      field: 'Action',
      headerName: 'Action',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      // width: 160,
      valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
  ];
  // console.log(value)
    return (
      <>
                <Toaster
        position="top-center"
        reverseOrder={false}
        />
        <main className="main-content">
    <div className="container-fluid">
    <div className="mb-3">
        <h2 className="page-title my-3">
          Company  Information
        </h2>
        <div className="col-12 col-lg-8 px-0">
          <p className="secondary-color">
            Connect your Facebook and Instagram accounts, customize the post template and start sharing reviews from the
            Reviews section by clicking Share on Social.
          </p>
        </div>
      </div>
      <div className="row pt-3">
   
        <div className="col-12 col-md-7 col-lg-8" >
        <div class="card p-4 mb-3">
        {/* <Table responsive="md">
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Logo</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        </tbody>
      </Table> */}
      <DataGrid
        rows={companyData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        // checkboxSelection
      />
          </div>
        </div>
        <div className="col-12 col-md-5 col-lg-4">
          <form className="card p-4 mb-3" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <Form.Label htmlFor="inputPassword5">Company*</Form.Label>
              <Form.Control
                type="text"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
                placeholder='company name....'
                {...register("name")}
              />
               {errors.name && (<p className="error" style={{ color: "red" }}>{errors.name.message}</p>)}
            </div>
            <div className="mb-3">
            <Form.Label htmlFor="inputPassword5">Logo*</Form.Label>
              {/* <Form.Control
                type="file"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
                {...register("logo")}
                onClick={(e)=>e.target.files[0]}
              /> */}
                      <Controller
                                name="logo"
                                control={control}
                                // defaultValue={null}
                                render={({ field }) => (
                                  <input
                                    type="file"
                                    className="form-control mb-0"
                                    onChange={(e) => {
                                      field.onChange(e.target.files[0]);
                                    }}
                                  />
                                )}
                              />
               {errors.logo && (<p className="error" style={{ color: "red" }}>{errors.logo.message}</p>)}
            </div>
            <div className="mb-3">
              <label className="form-label">Status*</label>
              <Form.Select  {...register("status")}>
                  <option value="">Choose</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </Form.Select>
                 {errors.status && (<p className="error" style={{ color: "red" }}>{errors.status.message}</p>)}
            </div>
            <div className="text-center mt-4">
              <button className="btn btn-secondary px-3 py-2 w-100" type='submit'>
               Submit
              </button>
            </div>

            {/* <div className='my-3'>
            <button onClick={handleInsertSpan}>Insert Span</button>
      <ReactQuill
        ref={quillRef}
        theme="snow"
      />
            </div> */}
  
          </form>
        </div>
      </div>
    </div>
  </main>

      </>

    )
}
export default Company