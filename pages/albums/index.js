import * as React from "react";
import "../baseStyles.scss";

function Albums() {
  const [linesToDraw, setLinesToDraw] = React.useState([]);

  React.useEffect(() => {
    const lines = [];
    const innerWidth = window.innerWidth;
    const innerHeight = window.innerHeight;
    const lineNumber = Math.floor(Math.random() * 10 + 1);
    for (let i = 0; i < lineNumber; i++) {
      const randomRotate = Math.floor(Math.random() * 180 + 1);
      const randomMarginLeft = Math.floor(
        Math.random() * innerWidth - innerWidth / 2
      );
      const randomMarginTop = Math.floor(
        Math.random() * innerHeight - innerHeight / 2
      );
      // from 00 to 99, so it's not to colorish
      const randomGreenColor = `${Math.floor(Math.random() * 10)}${Math.floor(
        Math.random() * 10
      )}`;
      lines.push(
        <div
          key={i}
          style={{
            borderTop: `1px solid #ff${randomGreenColor}ff`,
            transform: `rotate(${randomRotate}deg)`,
            marginLeft: `${randomMarginLeft}px`,
            marginTop: `${randomMarginTop}px`
          }}
        ></div>
      );
    }
    setLinesToDraw(lines);
  }, []);

  return (
    <div className="albumsIndexPage">
      <div className="albumsIndexPageHeader">
        Here is a list of all available memories. Click any blue link to open
        photo gallery:
      </div>
      <div className="albumIndexPageContent">
<span style={{whiteSpace: 'nowrap'}}><a href="/albums/1315_22_Feb_2011_V_Club_Graffiti_Rap_Party_Russia_Spb.html"> 1315_22_Feb_2011_V_Club_Graffiti_Rap_Party_Russia_Spb</a></span><br/>
<span style={{whiteSpace: 'nowrap'}}><a href="/albums/15_04DuscheHELL_O_HILLTERVEET_KADET_Fin_DOTTIE_DANGER.html"> 15_04DuscheHELL_O_HILLTERVEET_KADET_Fin_DOTTIE_DANGER</a></span><br/>
<span style={{whiteSpace: 'nowrap'}}><a href="/albums/2010_2.html"> 2010_2</a></span><br/>
<span style={{whiteSpace: 'nowrap'}}><a href="/albums/24_06_PaybackPass_the_RubiconMonkeywrench.html"> 24_06_PaybackPass_the_RubiconMonkeywrench</a></span><br/>
<span style={{whiteSpace: 'nowrap'}}><a href="/albums/450D.html"> 450D</a></span><br/>
<span style={{whiteSpace: 'nowrap'}}><a href="/albums/BMX_Russia.html"> BMX_Russia</a></span><br/>
<span style={{whiteSpace: 'nowrap'}}><a href="/albums/Born_to_hate_Esp__Next_round_Self_defense_at_V_Club.html"> Born_to_hate_Esp__Next_round_Self_defense_at_V_Club</a></span><br/>
<span style={{whiteSpace: 'nowrap'}}><a href="/albums/Boston_USA_Feb_2016.html"> Boston_USA_Feb_2016</a></span><br/>
<span style={{whiteSpace: 'nowrap'}}><a href="/albums/Cadillac_DeVille_59.html"> Cadillac_DeVille_59</a></span><br/>
<span style={{whiteSpace: 'nowrap'}}><a href="/albums/Cadillac_Eldorado_Biarritz_1978.html"> Cadillac_Eldorado_Biarritz_1978</a></span><br/>
<span style={{whiteSpace: 'nowrap'}}><a href="/albums/Changes_Transilvanian_310111_V_Club.html"> Changes_Transilvanian_310111_V_Club</a></span><br/>
<span style={{whiteSpace: 'nowrap'}}><a href="/albums/Engage_At_Will_170710.html"> Engage_At_Will_170710</a></span><br/>
<span style={{whiteSpace: 'nowrap'}}><a href="/albums/FInland_Estonia_2016.html"> FInland_Estonia_2016</a></span><br/>
<span style={{whiteSpace: 'nowrap'}}><a href="/albums/Finland_27_03_2011.html"> Finland_27_03_2011</a></span><br/>
<span style={{whiteSpace: 'nowrap'}}><a href="/albums/Finland_Oy_Cars_and_other.html"> Finland_Oy_Cars_and_other</a></span><br/>
<span style={{whiteSpace: 'nowrap'}}><a href="/albums/FootBox_01042011_Element_Emerald_presentation_Moscow_Mall.html"> FootBox_01042011_Element_Emerald_presentation_Moscow_Mall</a></span><br/>
<span style={{whiteSpace: 'nowrap'}}><a href="/albums/Garage_Sale_Loft_Project_20_02_11.html"> Garage_Sale_Loft_Project_20_02_11</a></span><br/>
<span style={{whiteSpace: 'nowrap'}}><a href="/albums/H2O_Engage_At_Will.html"> H2O_Engage_At_Will</a></span><br/>
<span style={{whiteSpace: 'nowrap'}}><a href="/albums/Konev1.html"> Konev1</a></span><br/>
<span style={{whiteSpace: 'nowrap'}}><a href="/albums/Kopen_bar_25_02_2011_Cheerleader_party.html"> Kopen_bar_25_02_2011_Cheerleader_party</a></span><br/>
<span style={{whiteSpace: 'nowrap'}}><a href="/albums/Montreal_Canada_Pycon2014.html"> Montreal_Canada_Pycon2014</a></span><br/>
<span style={{whiteSpace: 'nowrap'}}><a href="/albums/Montreal_Canada_Pycon2015.html"> Montreal_Canada_Pycon2015</a></span><br/>
<span style={{whiteSpace: 'nowrap'}}><a href="/albums/New_York_USA.html"> New_York_USA</a></span><br/>
<span style={{whiteSpace: 'nowrap'}}><a href="/albums/New_year_2011.html"> New_year_2011</a></span><br/>
<span style={{whiteSpace: 'nowrap'}}><a href="/albums/Next_Round_VeganClub_12_12_10.html"> Next_Round_VeganClub_12_12_10</a></span><br/>
<span style={{whiteSpace: 'nowrap'}}><a href="/albums/Novosibirsk_2012.html"> Novosibirsk_2012</a></span><br/>
<span style={{whiteSpace: 'nowrap'}}><a href="/albums/OVISHI_FEST.html"> OVISHI_FEST</a></span><br/>
<span style={{whiteSpace: 'nowrap'}}><a href="/albums/Poland_Finland.html"> Poland_Finland</a></span><br/>
<span style={{whiteSpace: 'nowrap'}}><a href="/albums/Portland_Oregon_USA.html"> Portland_Oregon_USA</a></span><br/>
<span style={{whiteSpace: 'nowrap'}}><a href="/albums/Project_365.html"> Project_365</a></span><br/>
<span style={{whiteSpace: 'nowrap'}}><a href="/albums/San-Francisco_Los-Angeles_California_2015_April.html"> San-Francisco_Los-Angeles_California_2015_April</a></span><br/>
<span style={{whiteSpace: 'nowrap'}}><a href="/albums/San-Francisco_USA.html"> San-Francisco_USA</a></span><br/>
<span style={{whiteSpace: 'nowrap'}}><a href="/albums/Seattle,_WA,_USA.html"> Seattle,_WA,_USA</a></span><br/>
<span style={{whiteSpace: 'nowrap'}}><a href="/albums/Stone_Island_x_Black_Metal_Project.html"> Stone_Island_x_Black_Metal_Project</a></span><br/>
<span style={{whiteSpace: 'nowrap'}}><a href="/albums/Till_I_Die_Reunion_10_years_Zoccolo_Club_14052011.html"> Till_I_Die_Reunion_10_years_Zoccolo_Club_14052011</a></span><br/>
<span style={{whiteSpace: 'nowrap'}}><a href="/albums/USA_Boston_2016_August.html"> USA_Boston_2016_August</a></span><br/>
<span style={{whiteSpace: 'nowrap'}}><a href="/albums/USA_Dec_2015_-_Jan 2016.html"> USA_Dec_2015_-_Jan 2016</a></span><br/>
<span style={{whiteSpace: 'nowrap'}}><a href="/albums/USA_NYC_2016_August_September.html"> USA_NYC_2016_August_September</a></span><br/>
<span style={{whiteSpace: 'nowrap'}}><a href="/albums/VW_Passat_TrueFitment.html"> VW_Passat_TrueFitment</a></span><br/>
<span style={{whiteSpace: 'nowrap'}}><a href="/albums/Volga_Around_Europe_Party_LJ_shots_studio_08042011.html"> Volga_Around_Europe_Party_LJ_shots_studio_08042011</a></span><br/>
<span style={{whiteSpace: 'nowrap'}}><a href="/albums/Youth_Of_Today_16_03_2011_V_Club.html"> Youth_Of_Today_16_03_2011_V_Club</a></span><br/>
<span style={{whiteSpace: 'nowrap'}}><a href="/albums/florence.html"> florence</a></span><br/>
<span style={{whiteSpace: 'nowrap'}}><a href="/albums/italy.html"> italy</a></span><br/>
<span style={{whiteSpace: 'nowrap'}}><a href="/albums/onenighttrip.html"> onenighttrip</a></span><br/>
<span style={{whiteSpace: 'nowrap'}}><a href="/albums/something_usual_1.html"> something_usual_1</a></span><br/>
<span style={{whiteSpace: 'nowrap'}}><a href="/albums/truefitment_End_of_season.html"> truefitment_End_of_season</a></span><br/>

      </div>
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
          zIndex: "-1"
        }}
      >
        {linesToDraw}
      </div>
      <div className="albumsIndexPageFooter">
        <p className="marquee">
          <span>
            This website is hosted on Microsoft Azure. Try it too! This webisite
            is hosted on Microsoft Azure.{" "}
            <a href="https://azure.com">Try it too!</a>&nbsp;
          </span>
        </p>
        <p className="marquee marquee2">
          <span>
            This website is hosted on Microsoft Azure. Try it too! This webisite
            is hosted on Microsoft Azure.{" "}
            <a href="https://azure.com">Try it too!</a>&nbsp;
          </span>
        </p>
      </div>
    </div>
  );
}
export default Albums;

