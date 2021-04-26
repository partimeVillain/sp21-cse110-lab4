let statistics = {
    red: 1, blue: 3, yellow: 10,
    reen:2, brown: 4, black: 11

};

for ( x in statistics){
    
    if( x[0] === 'r' || statistics[x]%2 === 1  )
            {console.log(statistics[x])}
}