// import React from "react";

// const Contact = () => {
//   return (
    
//       <div style={{width:'250px', height:'100px', display: 'block', justifyContent: 'center', alignItems:'center' }}> Create a simple contact form or information display
//       <form style={{ display: "flex", flexDirection: "column" }}>
//         Name: <input type="text" placeholder="Name" />
//         Email: <input type="email" placeholder="Email" />
//         Subject: <input type="text" placeholder="Subject" />
//         Message: <textarea placeholder="Message"></textarea>
//         <button type="submit" disabled>
//           Submit
//         </button>
//       </form>
//       </div>

//   );
// };

// export default Contact;


import React from "react";

const Contact = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:'5vh'}}>
      <div style={{ width: '250px' }}>
        <div style={{ marginBottom: '20px', fontSize: '18px', textAlign: 'center' }}>Create a simple contact form or information display</div>
        <form style={{ display: "flex", flexDirection: "column" }}>
          Name: <input type="text" placeholder="Name" />
          Email: <input type="email" placeholder="Email" />
          Subject: <input type="text" placeholder="Subject" />
          Message: <textarea placeholder="Message"></textarea>
          <button type="submit" disabled>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
