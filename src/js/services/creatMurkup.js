import refs from "../refs"
const { selektEl } = refs

export default function creatMarkup(data) {
   return  data.map(({ id, name }) => ({ text: name, value: id }))
   
};