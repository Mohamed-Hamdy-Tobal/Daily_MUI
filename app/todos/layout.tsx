// import TodosList from "@/components/Todos/TodosList"
// import { Todo } from "@/components/types/app";

// const url = 'https://jsonplaceholder.typicode.com/todos';
// const getData = async () => {
//     try {
//         const response = await fetch(url, {cache: 'force-cache'});
//         const todosData = await response.json();
//         return todosData
//     } catch (error) {
//         console.error(error);
//     }
// };

// const RootLayout = async ({ children }: { children: React.ReactNode })  => {
    
//     // In Server Side, Everything is on server side even console, jsx, ..
//     // Here no need useEffect because it is on server side , it work automatic, not like react 
//     // in react this part is called on client side, so we need to use useEffect
//     const myTodos:Todo[] = await getData()
//     console.log(myTodos)
//     return (
//         <main>
//             <div><TodosList myTodos={myTodos}/></div>
//             <div>{children}</div>
//         </main>
//     )
// }


// export default RootLayout