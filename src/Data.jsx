function Data({country}) {
  
  return (
    <>
      {
        country.length?
          <div>
            <p>country name : {country[0].country}</p>
            <p>cases : {country[0].cases}</p>
            <p>deaths : {country[0].deaths}</p>
            <p>recovered : {country[0].recovered}</p>
            <p>cases today : {country[0].casesToday}</p>
            <p>death today : {country[0].deathToday}</p>
            <p>recovered today : {country[0].recoveredToday}</p>
          </div>
        :
        null
      }
    </>
  );
}
  
export default Data;