


// JSON=====================================================================

    let getdata= async ()=>{
      
      let url="http://localhost:3000/RenterInfo"

      let res= await fetch(url,{method: "GET"})
      let data= await res.json()
      console.log(data);
      pagination(data); //Initialize pagination
    };
    

    
    let showData=(data)=>{

      
      let show= document.querySelector("#r-info")

      data.map((e)=>{

        show.innerHTML+=`
        <tr>
          <td>${e.name}</td>
          <td>${e.dl}</td>
          <td>${e.address}</td>
          <td>${e.contact}</td>
          <td>${e.sdate}</td>
          <td>${e.edate}</td>
          <td>${e.cname}</td>
          <td>${e.price}</td>
          <td onclick="edit('${e.id}')">Edit </td>
          <td onclick="deletee('${e.id}')">Delete </td>
        </tr>
            `
      
      })
    }


    let deletee= (id)=>{

      let url=`http://localhost:3000/RenterInfo/${id}`

      fetch(url,{method: "DELETE"})
    }


    let inserted=()=>{
      
      let inpname=document.querySelector("#name").value;
      let inpdl=document.querySelector("#dlnum").value;
      let inpaddress=document.querySelector("#address").value;
      let inpcontact=document.querySelector("#contactno").value;
      let inpsdate=document.querySelector("#sdate").value;
      let inpedate=document.querySelector("#edate").value;
      let inpcname=document.querySelector("#car").value;


      let url=`http://localhost:3000/RenterInfo`

      fetch(url, 
        {
          method: "POST",
          headers:{
            "Content-Type": "application/json"
          },
          body:JSON.stringify(
            {
              name: inpname,
              dl: inpdl,
              address: inpaddress,
              contact: inpcontact,
              sdate: inpsdate,
              edate: inpedate,
              cname: inpcname,
              price: 1000
            }
          )
        })
        location.href="renter.html"
        location.href="index.html"
        return false
      }

    let edit= async (id)=>{
      let url=`http://localhost:3000/RenterInfo/${id}`
      
      let res= await fetch(url)
      let data= await res.json()

      let datafill=`
      <label for="name">Enter Name:</label>
    <input type="text" id="upname" value="${data.name}">
    <br><br>
    
    <label for="dl-num">Enter Driving Licence No.:</label>
    <input type="text" id="updlnum" value="${data.dl}">
    <br><br>

    <label for="address">Address:</label>
    <input type="text" id="upaddress" value="${data.address}">
    <br><br>

    <label for="contactno">Contact Number:</label>
    <input type="number" id="upcontactno" value="${data.contact}">
    <br><br>

    <label for="sdate">Start date:</label>
    <input type="date" id="upsdate" value="${data.sdate}">

    <label for="edate">End date:</label>
    <input type="date" id="upedate" value="${data.edate}">
    <br><br>

    <label for="car">Select Car:</label>
    <select name="car" id="upcar">
        <option value="Swift" ${data.cname==="Swift"? "selected":""}>Swift</option>
        <option value="Dzire" ${data.cname==="Dzire"? "selected":""}>Dzire</option>
        <option value="Scorpio-S11" ${data.cname==="Scorpio-S11"? "selected":""}>Scorpio S11</option>
        <option value="Waganr" ${data.cname==="Waganr"? "selected":""}>Waganr</option>
        <option value="Defender" ${data.cname==="Defender"? "selected":""}>Defender</option>
        <option value="Range-Rover-Sport" ${data.cname==="Range-Rover-Sport"? "selected":""}>Range Rover Sport</option>
        <option value="Range-Rover-Evoque" ${data.cname==="Range-Rover-Evoque"? "selected":""}>Range Rover Evoque</option>
        <option value="Rolls-Royse-Phantom" ${data.cname==="Rolls-Royse-Phantom"? "selected":""}>Rolls-Royse Phantom</option>
        <option value="Bmw-x5" ${data.cname==="Bmw-x5"? "selected":""}>Bmw x5</option>
        <option value="Mercedez-Benz" ${data.cname==="Mercedez-Benz"? "selected":""}>Mercedez Benz</option>
        <option value="Audi-A4" ${data.cname==="Audi-A4"? "selected":""}>Audi A4</option>
        <option value="Verna" ${data.cname==="Verna"? "selected":""}>Verna</option>
        <option value="Slavia" ${data.cname==="Slavia"? "selected":""}>Slavia</option>
        <option value="Octavia" ${data.cname==="Octavia"? "selected":""}>Octavia</option>
        <option value="Virtus" ${data.cname==="Virtus"? "selected":""}>Virtus</option>
        <option value="Venue" ${data.cname==="Venue"? "selected":""}>Venue</option>
        <option value="Fortuner" ${data.cname==="Fortuner"? "selected":""}>Fortuner</option>
        <option value="Land-Cruiser" ${data.cname==="Land-Cruiser"? "selected":""}>Land Cruiser</option>
        <option value="Toyota-Hilux" ${data.cname==="Toyota-Hilux"? "selected":""}>Toyota Hilux</option>
        <option value="G-wagen" ${data.cname==="G-wagen"? "selected":""}>G-wagen</option>
        <option value="Rolls-Royce-Ghost" ${data.cname==="Rolls-Royce-Ghost"? "selected":""}>Rolls-Royce Ghost</option>
        <option value="Nissan-Gtr" ${data.cname==="Nissan-Gtr"? "selected":""}>Nissan Gtr</option>
        <option value="Ford-Mustang" ${data.cname==="Ford-Mustang"? "selected":""}>Ford Mustang</option>
        <option value="Breeza" ${data.cname==="Breeza"? "selected":""}>Breeza</option>
        <option value="Honda-City" ${data.cname==="Honda-City"? "selected":""}>Honda City</option>
    </select>
    <br><br>
    <lablel for="price">Price:</label>
    <input type="number" id="upprice" value="1000">
    <br><br>
    <input type="submit" value="Update" onclick="return finaledit('${data.id}')">`

    document.querySelector("#formedit").innerHTML=datafill

    }

    let finaledit= (id)=>{

      let upname= document.querySelector("#upname").value;
      let updl= document.querySelector("#updlnum").value;
      let upaddress= document.querySelector("#upaddress").value;
      let upcontact= document.querySelector("#upcontactno").value;
      let upsdate= document.querySelector("#upsdate").value;
      let upedate= document.querySelector("#upedate").value;
      let upcar= document.querySelector("#upcar").value;

      let url=`http://localhost:3000/RenterInfo/${id}`

      fetch(url, {method: "PUT",
        headers:{
          "Content-Type": "application/json"
        },
        body:JSON.stringify(
          {
            name : upname,
            dl: updl,
            address: upaddress,
            contact: upcontact,
            sdate: upsdate,
            edate: upedate,
            cname: upcar,
            price: 1000

          }
        )

      })
      return false;
    }


// pagination
// let pagination = (data) =>{
//   $('#paging').pagination({
//     dataSource: data,
//     pageSize: 5,
//     showSizeChanger: true,
//     callback: function(data, pagination) {
     
//     }

    
//   })
  
// }
let pagination = (data) =>{
$('#paging').pagination({
  dataSource: data,
  pageSize: 5,
  showSizeChanger: true,
  callback: function(data, pagination) {
    showData(data)
  }
})
}