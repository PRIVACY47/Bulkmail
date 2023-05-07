import React from 'react';
import * as XLSX from 'xlsx';
import axios from 'axios';

const displayfile = (e)=>{
    document.getElementById("filename").classList.remove("hidden")
    const file = document.querySelector(".ip").files[0]
    document.getElementById("filename").innerHTML = file.name
 

}
function Usersupload() {
    const handleFileChange = (e) => {
        e.preventDefault();
        const file = document.querySelector(".ip").files[0]
    
   
    console.log(file)
    const reader = new FileReader();
    reader.onload = async(event) => {
      const workbook = XLSX.read(event.target.result, { type: 'binary' });
      const worksheet = workbook.Sheets['Sheet1'];
      const data = XLSX.utils.sheet_to_json(worksheet);
      console.log(data)
      
        const res = await axios.post("http://localhost:8000/mail",data)
      console.log(res)
    };
    reader.readAsBinaryString(file);
  };

  return (


<div>
<div class="h-screen font-sans text-gray-900 bg-gray-300 border-box">
    <div class="flex justify-center w-full mx-auto sm:max-w-lg">

        <div class="flex flex-col items-center justify-center w-full h-auto my-20 bg-white sm:w-3/4 sm:rounded-lg sm:shadow-xl">
            <div class="mt-10 mb-10 text-center">
                <h2 class="text-2xl font-semibold mb-2">Drop file</h2>
                <p class="text-xs text-gray-500">File should be of format .csv or .xlsx</p>
            </div>
            <form onSubmit={handleFileChange} class="relative w-4/5 h-32 max-w-xs mb-10 pb-6 bg-white bg-gray-100 rounded-lg shadow-inner">
                <input  onChange={displayfile}  type="file" id="file-upload" className="hidden ip"/>
                <label htmlFor="file-upload" class="z-20 flex flex-col-reverse items-center justify-center w-full h-full cursor-pointer">
                    <p class="z-10 text-xs font-light text-center text-gray-500">Drag & Drop your files here</p>
                    <svg class="z-10 w-8 h-8 text-indigo-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
                    </svg>
                </label>
                <div className='flex justify-center '>
            <button type="submit" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Upload users</button>
            </div> </form>
            <div className='hidden' id="filename">.</div>
        </div>
    </div>
</div>
</div>



  )



}

export default Usersupload;
