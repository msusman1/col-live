import {Header} from "./components/Header";
import {Navbar} from "./components/Navbar";
import {Container} from "./components/Container";
import loading from "./images/loading.gif";
import {useEffect, useState} from "react";


function App() {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch('https://staging.collive.com/classified-demo.php')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    return (
        <div>
            <Header/>
            <Navbar/>
              {data ? (
                <Container data={data}/>
            ) : (
                <div style={{
                    height: "100vh",
                    width: "100vw",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <img height={64} width={64} src={loading}/>
                </div>
            )}
        </div>
    );
}

export default App;
