// import React from 'react'

// function Counter(props) {
//     //destructuring
//     const {title, count} =props
//     return (    
//         <div>
//             <h1>{title} {count} </h1>
//         </div>
//     )
// }

// export default Counter

import React from 'react'

function Counter({title, count}) {

    return (    
        <div>
            <h1>{title} {count} </h1>
        </div>
    )
}

export default Counter
