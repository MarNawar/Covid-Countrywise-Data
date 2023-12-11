function Data({country,currentCountry}) {
  console.log(country.country, currentCountry);
  
  return (
    <>
      <div style={{display: (country.country===currentCountry)?'block':'none'}}>
        <p>country name : {country.country}</p>
        <p>cases : {country.cases}</p>
        <p>deaths : {country.deaths}</p>
        <p>recovered : {country.recovered}</p>
        <p>cases today : {country.casesToday}</p>
        <p>death today : {country.deathToday}</p>
        <p>recovered today : {country.recoveredToday}</p>
      </div>

    </>
  );
}
  
export default Data;