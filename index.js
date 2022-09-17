//create a function to create an element using CreateElement
function CreateNode(element){
    return document.createElement(element)
}

//function to append an element to parent element
function append(parent,child){
    return parent.appendChild(child);
}

//selection of an element
const div = document.getElementById("container");
const url ="https://restcountries.com/v3.1/all";


fetch(url)
.then((response)=>response.json())
.then((data)=>{
    let country = data;
    console.log(country)
    return country.map((country)=>{
        let li = CreateNode("li");
        let h3 = CreateNode("h3");
        let h4 = CreateNode("h4");
        let region = CreateNode("h4")
        let img = CreateNode("img")
        h3.innerHTML = `Name: ${country.name.common}`
        h4.innerHTML = `Capital: ${country.capital}`
        region.innerHTML = `Region: ${country.region}`
        img.src=`${country.flags.png}`
        append(li,h3)
        append(li,h4)
        append(li,region)
        append(li,img)
        append(div,li)
    })
})