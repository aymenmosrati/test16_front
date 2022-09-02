// import './Search.css';
// import { useState, useEffect } from 'react';
// import API from "../../api/index";

// function Search() {

//   const [formData, setFormData] = useState({
//     ingredient: "",
//     day: "1",
//   });
//   const [suggest, setsuggest] = useState([]);
//   const [ingredient, setingredient] = useState([]);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handelClick = (e) => {
//     e.preventDefault();
//     // console.log(formData);
//     if (formData.ingredient == "") {
//       API.get(`/suggest/${formData.day}`).then(function (result) {
//         setsuggest(result?.data);
//         console.log(result?.data)
//       });
//     } else {
//       API.get(`ingredient/${formData.ingredient}`).then(function (res) {
//         if (res?.data?.name_Ingredient.toLowerCase().includes(formData.ingredient.toLowerCase())) {
//           API.get(`cooktime/${res?.data?.name_Ingredient}/${formData.day}`).then(function (ing_res) {
//             console.log(ing_res)
//           })
//         } 
//       }).catch((err)=>{
//         setingredient("aucun seach by this")
//       });
//     }
//   }
//   return (
//     <div className="search">

//       <div className="form-outline i-group" id="search-autocomplete">
//         <spam className="l-search">
//           <img src="./assets/Search.svg" className="img-search" />
//         </spam>
//         <input type="text" name="ingredient" className="i-search" placeholder="Search by ingredient" onChange={handleChange} />
//       </div>

//       <div className="i-date">
//         <select name="day" className='i-day' onChange={handleChange}>
//           <option value="1" >01/03/2200</option>
//           <option value="2">02/03/2200</option>
//           <option value="3">03/03/2200</option>
//           <option value="4">04/03/2200</option>
//           <option value="5">05/03/2200</option>
//           <option value="6">06/03/2200</option>
//           <option value="7">07/03/2022</option>
//           <option value="8">08/03/2022</option>
//           <option value="9">09/03/2022</option>
//           <option value="10">10/03/2022</option>
//           <option value="11">11/03/2022</option>
//           <option value="12">12/03/2022</option>
//           <option value="13">13/03/2022</option>
//           <option value="14">14/03/2022</option>
//           <option value="15">15/03/2022</option>
//           <option value="16">16/03/2022</option>
//           <option value="17">17/03/2022</option>
//           <option value="18">18/03/2022</option>
//           <option value="19">19/03/2022</option>
//           <option value="20">20/03/2022</option>
//           <option value="21">21/03/2022</option>
//           <option value="22">22/03/2022</option>
//           <option value="23">23/03/2022</option>
//           <option value="24">24/03/2022</option>
//           <option value="25">25/03/2022</option>
//           <option value="26">26/03/2022</option>
//           <option value="27">27/03/2022</option>
//           <option value="28">28/03/2022</option>
//           <option value="29">29/03/2022</option>
//           <option value="30">30/03/2022</option>
//         </select>
//       </div>
//       <button className='b-search' onClick={(e) => { handelClick(e) }}>Search</button>
//     </div>
//   );
// }

// export default Search;
