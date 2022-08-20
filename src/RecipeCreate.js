import React, { useState } from "react";

function RecipeCreate({createRecipe}) {

  const initialState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  }

  const [formData, setFormData] = useState({...initialState});

  const handleChange = function({target}){
    const newData = {...formData, [target.name]: target.value}
    setFormData(newData)
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    createRecipe(formData);
    setFormData({...initialState});
  }

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody className="content_row">
          <tr>
            <td>
              <input 
                    id="name" 
                    type="text" 
                    name="name" 
                    onChange={handleChange} 
                    value={formData.name}
                    required
                    placeholder="Name"
                    />              
                </td>              
                <td>
                  <input 
                    id="cuisine" 
                    type="text" 
                    name="cuisine" 
                    onChange={handleChange} 
                    value={formData.cuisine}
                    required
                    placeholder="Cuisine"
                    />
                </td>
                <td>
                  <input 
                    id="photo" 
                    type="text" 
                    name="photo" 
                    onChange={handleChange} 
                    value={formData.photo}
                    required
                    placeholder="Url"
                    />
                </td>
                <td>
                  <textarea  
                    id="ingredients" 
                    type="text" 
                    name="ingredients" 
                    onChange={handleChange} 
                    value={formData.ingredients}
                    required
                    placeholder="Ingredients"
                    />
                </td>
                <td>
                  <textarea  
                    id="preparation" 
                    type="text" 
                    name="preparation" 
                    onChange={handleChange} 
                    value={formData.preparation}
                    required
                    placeholder="Preparation"
                    />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
