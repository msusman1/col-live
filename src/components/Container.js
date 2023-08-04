const Container = ({data}) => {
    return (
        <>
            <div style={{margin: "auto", maxWidth: 600, width: "100%", paddingTop: 24, paddingBottom: 24}}>
                {
                    data.map(datum => <ClassifiedCard datum={datum}/>)
                }
            </div>
        </>
    )
}
export {Container}


const ClassifiedCard = ({datum}) => {
    return (
        <>
            <div style={{border: "2px solid #ECECEC",overflow:"hidden", padding: 24, marginTop: 8, marginBottom: 8}}>

                <img style={{float: "left", paddingRight: 12, paddingBottom: 0}}
                     src={datum.image_path}
                     width={200}/>
                <p style={{margin: 0, width: "100%", fontSize: 12}}>{datum.ad_postdate}</p>
                <h2 style={{color: "#880000", fontWeight: "bolder", marginTop: 4, marginBottom: 6}}>{datum.ad_title}</h2>
                <p style={{margin: 0, lineHeight: 1.4, fontSize: 14}}>{datum.ad_details}
                </p>


            </div>

        </>
    )
}
