import refs from "../refs"
const { selektEl, catInfo } = refs

function creatMarkup(data) {
   return  data.map(({ id, name }) => ({ text: name, value: id }))
   
};

function creatMarkupCat(arr) {
   
   return `<img src="${arr.url}" alt="${arr.name}" width = 300px />
      <h1>${arr.name}</h1>
      <p>${arr.description}</p>
      <p>${arr.temperament}</p>`
}

export {creatMarkup, creatMarkupCat}