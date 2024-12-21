// import React from 'react'


// const products = [
//     { id: 1, title: "Laptop", price: 1200 },
//     { id: 2, title: "Mouse", price: 25 },
//     { id: 3, title: "Keyboard", price: 75 },
//     { id: 4, title: "Monitor", price: 300 },
//   ];
  
// const example = () => {
//     const item = (arr:any, title:string) => {
//         return arr.find((item:any) => item.title === title);
//       };

//       const foundLaptop = item(products,"Mouse");
// console.log("Found Laptop:", foundLaptop);




//   return (
//     <div>example</div>
//   )
// }

// export default example








// pages/index.tsx
// import React from 'react';

// const products = [
//   {
//     category: 'skill',
//     items: [
//       { id: 1, title: 'Laptop', price: 1200 },
//       { id: 2, title: 'Mouse', price: 25 },
//       { id: 3, title: 'Keyboard', price: 75 },
//       { id: 4, title: 'Monitor', price: 300 },
//     ],
//   },
//   {
//     category: 'knowledge',
//     items: [
//       { id: 5, title: 'Book', price: 50 },
//       { id: 6, title: 'Pen', price: 5 },
//     ],
//   },
// ];

// const ProductList: React.FC<{ products: typeof products }> = ({ products }) => {
//   return (
//     <div>
//       {products.map((category) => (
//         <div key={category.category} style={{ marginBottom: '20px' }}>
//           <h2>{category.category.toUpperCase()}</h2>
//           <ul>
//             {category.items.map((product) => (
//               <li key={product.id} style={{ margin: '10px 0' }}>
//                 <strong>{product.title}</strong> - ${product.price}
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// const HomePage: React.FC = () => {
//   return (
//     <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
//       <h1>Product Categories</h1>
//       <ProductList products={products} />
//     </div>
//   );
// };

// export default HomePage;









// const product = [
//   {
//     category: 'Tool',
//     items: [
//       { title: 'Hammer1', price: '%6' },
//       { title: 'Hammer2', price: '%6' },
//       { title: 'Hammer3', price: '%6' },
//       { title: 'Hammer4', price: '%6' },
//       { title: 'Hammer5', price: '%6' },
//       { title: 'Hammer6', price: '%6' },
//     ],
//   },
//   {
//     category: 'Food',
//     items: [
//       { title: 'mer1', price: 62 },
//       { title: 'mer2', price: 98 },
//       { title: 'mer3', price: 98 },
//       { title: 'mer4', price: 98 },
//       { title: 'mer5', price: 98 },
//       { title: 'mer6', price: 98 },
//     ],
//   },
// ];



// const List: React.FC<{product:typeof product}> = ({product}) => {

//   return(
// <div>
// {product.map((category) => ( 
//       <li key={category.category}>   {category.category}


//  <ul>
//   {category.items.map((items,index) => (
             
//              <li key={index}>{items.title} - {items.price} </li>
            
//             ))}
//  </ul>

//       </li>
   
  



//     ))}

// </div>
    
   

//   )
// }





// const Run: React.FC = () => {
//   return (
//     <div>
//       <List product={product} />
//     </div>
//   );
// };

// export default Run;


