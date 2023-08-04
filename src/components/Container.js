const Container = ({data}) => {
    return (
        <>
            <div style={{margin: "auto", maxWidth: 800, width: "100%", paddingTop: 24, paddingBottom: 24}}>
                <DepartmantCard
                    img={"https://images1.apartments.com/i2/ThLpNzkwW4BJqFtEVA62aBX0VVWk68NZgrCHT_dDQCY/117/ellwood-at-lake-travis-austin-tx-building-photo.jpg"}
                    title={"Ellwood at Lake Travis"}
                    address={"7655 N Ranch Road 620, Austin, TX 78726"}
                    price={"$1,195 - 2,465"}
                    amenities={"Dog &amp; Cat Friendly Fitness Center Pool In Unit Washer &amp; Dryer Walk-In Closets Clubhouse Stainless Steel Appliances Business Center"}
                    phone={"(737) 237-9124"}
                />
                <DepartmantCard
                    img={"https://images1.apartments.com/i2/PaLjrEmnRlFw2NNOUdOdQHGXPgxP-rKdsw01954f6z0/117/the-district-on-la-frontera-austin-tx-building-photo.jpg"}
                    title={"The District on La Frontera"}
                    address={"2811 La Frontera Blvd, Austin, TX 78728"}
                    price={"$1,256 - 6,365"}
                    amenities={"Dog &amp; Cat Friendly Fitness Center Pool Dishwasher Refrigerator Kitchen In Unit Washer &amp; Dryer Walk-In Closets"}
                    phone={"(844) 225-8941"}
                />
                {
                    data.map(datum => <ClassifiedCard datum={datum}/>)
                }
            </div>
        </>
    )
}
export {Container}


const DepartmantCard = ({img, title, address, price, amenities, phone}) => {
    return (
        <>
            <div style={{border: "2px solid #ECECEC", display: "flex", padding: 16, marginTop: 8, marginBottom: 8}}>
                <div>

                    <img style={{paddingRight: 12}}
                         src={img}
                         width={200}/>
                </div>
                <div>
                    <h2 style={{margin: 0, color: "#880000"}}>{title}</h2>
                    <h4 style={{marginTop: 4, marginBottom: 4, fontWeight: "lighter"}}>{address}</h4>
                    <p style={{margin: 0}}>{price}</p>
                    <p style={{margin: 0, lineHeight: 1.4, fontSize: 14}}>{amenities}</p>
                    <h6 style={{marginTop: 4, marginBottom: 0, lineHeight: 1.4, fontSize: 14}}>{phone}</h6>
                </div>


            </div>
        </>

    )
}
const ClassifiedCard = ({datum}) => {
    return (
        <>
            <div style={{border: "2px solid #ECECEC", overflow: "hidden", padding: 16, marginTop: 8, marginBottom: 8}}>

                <img style={{float: "left", paddingRight: 12, paddingBottom: 0}}
                     src={datum.image_path}
                     width={200}/>
                <p style={{margin: 0, width: "100%", fontSize: 12}}>{datum.ad_postdate}</p>
                <h2 style={{
                    color: "#880000",
                    fontWeight: "bolder",
                    marginTop: 4,
                    marginBottom: 6
                }}>{datum.ad_title}</h2>
                <p style={{margin: 0, lineHeight: 1.4, fontSize: 14}}>{datum.ad_details}
                </p>


            </div>

        </>
    )
}
