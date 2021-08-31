function firstObject(){

    let players = {
        ivo123:100,
        asq456:150,
        gosho:200,
    };

    let points = Object.values(players);

    let sortedPoints = points.sort((a,b)=>{
        return b - a;
    });
    console.log(sortedPoints);

}
firstObject();