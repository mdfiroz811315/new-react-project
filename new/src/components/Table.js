import Footer from "./Footer";
function Table() {
    return (
        <div>
            <h2> Text field</h2>
           <form action="/action_page.html">
                <label for="fname">First name:</label><br></br>
                <input type="text" id="fname" name="fname" value="Mirza" /><br></br>
                <label for="lname">Last name:</label><br></br>
                <input type="text" id="lname" name="lname" value="Firoz" /><br></br>
                <label type="mmail" >Mail id:</label><br></br>
                <input type="text" id="mname" mail="mmail" value="email id" /><br></br>
                <input type="submit" value="Submit"/>
            </form> 
        </div>
  )
  }
  
  export default Table;