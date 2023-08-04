const Navbar = () => {


    return (
        <>
            <div style={{display: "flex", backgroundColor: "#ECECEC", width: "100%", position: "sticky", top: 0}}>
                <div style={{backgroundColor: "#313131", color: "white", padding: 16}}><a
                    style={{color: "white", textDecoration: "none"}} href={"#"}>Classifieds</a></div>
                <div style={{padding: 16}}><a style={{color: "black", textDecoration: "none"}} href={"#"}>For Sales</a>
                </div>
            </div>
        </>
    )
}
export {Navbar}
