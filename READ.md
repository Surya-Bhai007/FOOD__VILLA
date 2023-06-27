# REACT PROJECT

`CTRL+K V`

## Library and framework

- The key difference between a library and a framework is "Inversion of Control".
- When calling a method from a library, the developer is in control. With a framework, the control is inverted: the framework calls the developer's code.
- The main distinction is that libraries give developers control over the flow of their code and allow them to utilize specific functionalities when needed, whereas frameworks impose a predetermined structure and control the overall flow of the application by invoking the developer's code at specific points.

## IMPORT AND EXPORT

#### Two ways of exporting

1.export default Title;

- we can export one thing using default exporting by name for example

```export const Title = () => (
 <a href="/">
   <img
     className="logo"
     src="https://scontent.fdel46-1.fna.fbcdn.net/v/t1.6435-9/80958074_168682201162684_5502171105554595840_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=jE3mTAN6eBsAX9rGD-N&_nc_ht=scontent.fdel46-1.fna&oh=00_AfCFUP2j6M-FvVuL5raMvtujl8ZLn0kNuifDsQ5xoICK1g&oe=6412A315"
     alt="logo"
     typeof="png"
   />
   </a>
);
```

- in app.js for import
  code: `import {Title} from "./components/Header";`

---

> here Header name can be changed ex.Newheader bcoz it is default

- but "./components/Header" here can't
- ex. import NewHeader from "./components/Header";

- import Header from "./components/Header.js"; this will also work.

- if u want to name as .jsx file name
- ex. import Header from "./components/Header.jsx";
- here Header.jsx is folder name it should match with that folder
- but some of the external libraries track the file using extension in that it may cause some problem but it happens rarely

> Named import

`import { Title } from "./components/Header";`

`import Header ,{ Title } from "./components/Header";`

###### Here Title exported by name and Header by default

- `import { Title ,Header } from "./components/Header";`
  when both are exported by name

---

`Imports all components from  "./components/Header".`

- used as `<Obj.Header/>` it will also work but export should done by name

`import * as Obj from "./components/Header";`

---

### CONFIG DRIVEN UI

- RestaurantCard was here
- Header was here
- Body was her
- footer was here

---

<span style="color: green"> Some green text </span>

## Utilities files CONVENTION

- PUT HARD CODED THINGS IN CONFIG FILES
- REASON:suppose hard coded things such as links etc
- are needed in 15-20 components out of 2000,3000 components : one path as copy that link in every component ,
- other is to import it from one place (kinda GLOBAL PLACE) where links etc things have placed .
- In some companies it is called as "constants.js" file

---

## HOOKS

> why do we use these

- what is statedwaaaa
- what is react hooks? -function
- what is useState

  > Below hooks or routers uses "react-router-dom" package

* useRouteError(): for custom error page
* useParams():for parameter of url passed returned as object
* createBrowserRoute([path:"",element:</>,children:[""],errorElement)
*

### useState()

- state in React is an object that holds data that can change over time
- State is a fundamental concept in React, and is often used to manage data that is specific to a single component
- useState(): returns=>an array [variableName(here searchInput),func to update the variable (here setSearchInput)]
- `const [searchInput, setSearchInput]` this is destructuring the array returned form useState().
- We can do something like this also
  `const searchVar =useState();
const [searchInput, setSearchInput]=searchVar;`

- local state variable in react,
- here is setSearchInput func used for modification of searchInput(it is just normal local variable),given by useState() hook
- THIS IS EQUIVALENT

```
let search_Txt =DEFAULT_VALUE; (in js)
const [searchInput, setSearchInput] = useState(DEFAULT_VALUE);(IN REACT)
 // DEFAULT_VALUE is the type of variable ex. if variable(searchInput here) is array then default_value =[]

```

### useEffect()

- syntax :`useEffect()`
- `
useEffect(() => {
  // console.log("Calls when dependency has changed");
  function();
}, []);`
- EMPTY dependencies array => call_back func called once after render;
- [searchText]=> once after initial render + every-time after re-render (my searchText changes)

---

## JAVASCRIPT USED

### spread syntax

> In JavaScript,`... is the spread syntax`, which is a shorthand way of passing multiple values to a function or component, or combining multiple objects or arrays into a single object or array.

```
1. <RestaurantCard {...restaurant_list[0].data} />
2. <RestaurantCard {...restaurant_list[1].data} />
3. <RestaurantCard {...restaurant_list[2].data} />
```

> different methods
> `<RestaurantCard restaurant={restaurant_list[2]} />` > `{RestaurantCard(restaurant_list[1])} //with normal function call works same as below`

###

## Conditional Rendering

- Rendering according to some conditions ex.
  `if(true)return shimmer
else return(code);`

---

## API

#### What are REST APIs?

<strong>APIs are mechanisms that enable two software components to communicate with each other using a set of definitions and protocols</strong>

#### Types

1. ##### SOAP APIs

   These APIs use Simple Object Access Protocol. Client and server exchange messages using XML.

1. ##### RPC APIs

   These APIs are called Remote Procedure Calls. The client completes a function (or procedure) on the server, and the server sends the output back to the client.

1. ##### Websocket APIs

   Websocket API is another modern web API development that uses JSON objects to pass data. A WebSocket API supports two-way communication between client apps and the server. The server can send callback messages to connected clients, making it more efficient than REST API.

1. ##### REST APIs

   - These are the most popular and flexible APIs found on the web today. The client sends requests to the server as data. The server uses this client input to start internal functions and returns output data back to the client.
   - REST stands for Representational State Transfer. REST defines a set of functions like GET, PUT, DELETE, etc. that clients can use to access server data. Clients and servers exchange data using HTTP.
   - The main feature of REST API is statelessness. Statelessness means that servers do not save client data between requests. Client requests to the server are similar to URLs you type in your browser to visit a website. The response from the server is plain data, without the typical graphical rendering of a web page.

##### Some popular API websites include

> - Rapid API – The largest global API market with over 10,000 public APIs and 1 million active developers on site. RapidAPI allows users to test APIs directly on the platform before committing to purchase.
> - Public APIs – The platform groups remote APIs into 40 niche categories, making it easier to browse and find the right one to meet your needs.
> - APIForThat and APIList – Both these websites have lists of 500+ web APIs, along with in-depth information on how to use them.

##### API gateways

> typically handle common tasks like user authentication, statistics, and rate management that are applicable across all API calls.

####What is GraphQL?

> GraphQL is a query language that was developed specifically for APIs. It prioritizes giving clients exactly the data they request and no more. It is designed to make APIs fast, flexible, and developer-friendly. As an alternative to REST, GraphQL gives front-end developers the ability to query multiple databases, microservices, and APIs with a single GraphQL endpoint. Organizations choose to build APIs with GraphQL because it helps them develop applications faster.
