import refs from "../refs"
const { selektEl, catInfo } = refs

function creatMarkup(data) {
   return  data.map(({ id, name }) => ({ text: name, value: id }))
   
};

function creatMarkupCat(arrey) {
      console.log(arrey);
   return arrey.map( arr =>`<img src="${arr.url}" alt="${arr.breeds[0]
.name}" width ="200" haight ="200" />
      <h1>${arr.breeds[0].
name}</h1>
      <p>${arr.breeds[0].description}</p>
      <p>${arr.breeds[0].temperament}</p>`) 
}

export {creatMarkup, creatMarkupCat}