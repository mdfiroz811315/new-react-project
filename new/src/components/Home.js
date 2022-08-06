import treeImage from '../image/img_tree.png'
function Home() {
    return (
       
      <div style={{backgroundImage: `url(${treeImage})`}}>
            <h2> Text field</h2>
            {/* <img src={treeImage}></img> */}
           <form action="/action_page.html">
                <label for="fname" >First name:</label><br></br>
                <input type="text" id="fname" name="fname" value="Mirza" /><br></br>
                <label for="lname" >Last name:</label><br></br>
                <input type="text" id="lname" name="lname" value="Firoz" /><br></br>
                <label for="mmail" >Mail id:</label><br></br>
                <input type="text" id="mname" mail="mmail" value="email id" /><br></br>
                <label for="ddob"  >Dob:</label><br></br>
                <input type="text" id="dname" dob="ddob" value="dd/mm/yy" /><br></br><br></br>
                <input type="submit" value="Submit"/>
            </form> 
        </div>
   
  )
  }
  
  export default Home;