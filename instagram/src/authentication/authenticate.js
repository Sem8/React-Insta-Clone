import React from 'react';
// import React from "react";

const authenticate = firstClassComponent => secondClassComponent => props => {
    if(localStorage.getItem('user')) {
        return <firstClassComponent />;
    }

    return <secondClassComponent />;     
}

// class extends React.Component {
//     render() {
//       return <firstClassComponent />;
//     }
//   };
  

export default authenticate
// export default authenticate(firstClassComponent)(secondClassComponent)