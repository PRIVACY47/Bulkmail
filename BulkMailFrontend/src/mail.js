import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import toast from 'react-hot-toast'
import * as Yup from 'yup';
import axios from 'axios';
const Mail = () => {
  toast("sorry")
  return (
  <>
    <Formik
      initialValues={{ subject: '', text: ''}}
      validationSchema={Yup.object({
        subject: Yup.string().required('Required'),
        text: Yup.string().required('Required')
      })}
      onSubmit={async(values)=>{
        const res = await axios.post("http://3.110.31.144/api/sendmail",values)
        
      }}
    >
      <Form className='flex items-center justify-center h-screen'> 

        <div className='flex flex-col space-y-4 items-center justify-center'>

        <div>
        <label htmlFor="subject">Subject</label>
        <Field className="block mb-2 text-sm font-medium text-gray-900  border border-gray-900" name="subject" type="text" />
        <ErrorMessage className="text-red-900 text-xl" name="subject" />
        </div>

      <div>
        <label htmlFor="text">Body</label>
        <Field className="block mb-2 text-sm font-medium text-gray-900   border border-gray-900" name="text" type="text" />
        <ErrorMessage name="text" />

        </div>

        <button type="submit" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Send mail</button>
        </div>

      </Form>
    </Formik>
    </>
  );
};

export default Mail