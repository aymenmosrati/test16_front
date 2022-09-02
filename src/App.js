import './App.css';
import './Component/Search/Search.css';
import Nav from "./Component/Nav/Nav";
// import Search from "./Component/Search/Search";
import Ingredient from "./Component/Ingredient/Ingredient";
import Cards from "./Component/card/Cards";
import Card_time from "./Component/Card_time/Card_time";
import { useState, useEffect } from 'react';
import API from "./api/index";
import Cardsearch from './Component/Search/Cardsearch';

function App() {

  const [formData, setFormData] = useState({
    ingredient: "",
    day: "1",
  });
  const [suggest, setsuggest] = useState([]);
  const [ingredient, setingredient] = useState([]);
  const [Searchby, setSearchby] = useState();
  const [ClassName, setClassName] = useState();


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handelClick = (e) => {
    e.preventDefault();
    // console.log(formData);
    if (formData.ingredient == "") {
      API.get(`/suggest/${formData.day}`).then(function (result) {
        setsuggest(result?.data);
        setingredient(result?.data?.Ingredients)
        setClassName('SearchView')
        setSearchby(`Recipes suggestions for the ${formData.day} day`)
        console.log(result?.data)
      });
    } else {
      API.get(`ingredient/${formData.ingredient}`).then(function (res) {
        if (res?.data?.name_Ingredient.toLowerCase().includes(formData.ingredient.toLowerCase())) {
            // console.log(res?.data)  
            API.get(`sud/${res?.data?.SuggestionId}`).then(function (res) {
              setClassName('SearchView')
              setsuggest(res?.data);
              setingredient(res?.data?.Ingredients)
              setSearchby(`${formData.ingredient} recipes suggestions for the ${formData.day} day`)
            // console.log(res?.data)  
            })
        }else{
          setSearchby("Not Data Found")
        }
      }).catch((err) => {
        setSearchby("Not Data Found")
      });
    }
  }

  const [suggest_c, setsuggest_c] = useState([]);
  const [ingredient_c, setingredient_c] = useState([]);
  useEffect(() => {
    API.get(`Allsuggest`).then(function (result) {
      // console.log(result?.data)
      setsuggest_c(result?.data);
    });
  }, [])

  useEffect(() => {
    API.get(`Allingredient`).then(function (res) {
      // console.log(res?.data)
      setingredient_c(res?.data);
    });
  }, [])

  return (
    <>
      <Nav />
      <div className="search">
        <div className="form-outline i-group" id="search-autocomplete">
          <spam className="l-search">
            <img src="./assets/Search.svg" className="img-search" />
          </spam>
          <input type="text" name="ingredient" className="i-search" placeholder="Search by ingredient" onChange={handleChange} />
        </div>
        <div className="i-date">
          <select name="day" className='i-day' onChange={handleChange}>
            <option value="1">01/09/2022</option>
            <option value="2">02/09/2022</option>
            <option value="3">03/09/2022</option>
            <option value="4">04/09/2022</option>
            <option value="5">05/09/2022</option>
            <option value="6">06/09/2022</option>
            <option value="7">07/09/2022</option>
            <option value="8">08/09/2022</option>
            <option value="9">09/09/2022</option>
            <option value="10">10/09/2022</option>
            <option value="11">11/09/2022</option>
            <option value="12">12/09/2022</option>
            <option value="13">13/09/2022</option>
            <option value="14">14/09/2022</option>
            <option value="15">15/09/2022</option>
            <option value="16">16/09/2022</option>
            <option value="17">17/09/2022</option>
            <option value="18">18/09/2022</option>
            <option value="19">19/09/2022</option>
            <option value="20">20/09/2022</option>
            <option value="21">21/09/2022</option>
            <option value="22">22/09/2022</option>
            <option value="23">23/09/2022</option>
            <option value="24">24/09/2022</option>
            <option value="25">25/09/2022</option>
            <option value="26">26/09/2022</option>
            <option value="27">27/09/2022</option>
            <option value="28">28/09/2022</option>
            <option value="29">29/09/2022</option>
            <option value="30">30/09/2022</option>
          </select>
        </div>
        <button className='b-search' onClick={(e) => { handelClick(e) }}>Search</button>
      </div>
      <div className={ClassName}>
        {ClassName === 'SearchView' ? <Cardsearch title={Searchby} suggest={suggest} ingredient={ingredient}  /> : <Ingredient />}
      </div>
      <Cards title="Today suggestions" suggest={suggest_c} ingredient={ingredient_c} />
      <Card_time className="container-time"/>
    </>
  );
}

export default App;


