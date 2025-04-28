import validateUser from '../../src/validators/users.validator'

const invalidTestBody = {
    fullName: "John Doe",
    // address missing!
    contactNumber: "1234567890",
    emailAddress: "john@example.com",
    image: "invalid_base64",
    chronicDiagnoses: "Diabetes",
    drId: "not a number", // wrong type!
  };
  
  const result = validateUser(invalidTestBody);
  console.log(result);