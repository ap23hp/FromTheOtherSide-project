import path from 'node:path'
import fs from 'node:fs/promises'

export async function getData() {

try{
    //Build the absolute file path
const filePath=path.join(import.meta.dirname,"../data/data.json")
//Read the file as text
const jsonString = await fs.readFile(filePath, "utf-8");
// Convert JSON string → JS object/array

    const data = JSON.parse(jsonString);
     return data

}catch(err){
    console.log(err)
  return [];
}

 
}