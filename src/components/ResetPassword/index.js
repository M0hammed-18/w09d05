// import React ,{useState} from 'react'
// import axios from 'axios'


// const Index = () => {
//     const BASE_URL = process.env.REACT_APP_BASE_URL;
     

//     const [email , setEmail] = useState('')
//     const checkemail = async (passwordCode) => {
    
//       const result = await axios.post(
//         `${BASE_URL}/check`,
//         {
//           email: email,
//           passwordCode: passwordCode,
//         }
        
//       );
      
//     };

//     return (
//       <ChakraProvider>
//         <Box
         
//           borderRadius="3px"
//           textAlign="center"
//           fontSize="xl"
//           w="300px"
//           mt="70px"
//           w="250px"
//           h="100px"
//         >
//           <h1>Reset Password</h1>
//           <Input
//             mt="20px"
//             textAlign="center"
//             placeholder="Your Email"
//             onChange={e => {
//               setEmail(e.target.value);
//             }}
//           ></Input>
//           <Button onClick={checkemail} mt="20px">
//             Send reset code
//           </Button>
//         </Box>
//       </ChakraProvider>
//     );
// }

// export default Index