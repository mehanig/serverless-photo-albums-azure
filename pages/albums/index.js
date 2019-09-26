import "../baseStyles.scss";

function Albums() {
  return (
    <div className="albumsIndexPage">
      <div className="albumsIndexPageHeader">
        Here is a list of all available memories. Click any blue link to open
        photo gallery:
      </div>
      <div className="albumIndexPageContent">
<span style={{whiteSpace: 'nowrap'}}><a href="/albums/450D.html"> 450D</a></span><br/>
<span style={{whiteSpace: 'nowrap'}}><a href="/albums/Boston_USA_Feb_2016.html"> Boston_USA_Feb_2016</a></span><br/>
<span style={{whiteSpace: 'nowrap'}}><a href="/albums/Montreal_Canada_Pycon2014.html"> Montreal_Canada_Pycon2014</a></span><br/>
<span style={{whiteSpace: 'nowrap'}}><a href="/albums/Montreal_Canada_Pycon2015.html"> Montreal_Canada_Pycon2015</a></span><br/>
<span style={{whiteSpace: 'nowrap'}}><a href="/albums/New_York_USA.html"> New_York_USA</a></span><br/>
<span style={{whiteSpace: 'nowrap'}}><a href="/albums/San-Francisco_Los-Angeles_California_2015_April.html"> San-Francisco_Los-Angeles_California_2015_April</a></span><br/>
<span style={{whiteSpace: 'nowrap'}}><a href="/albums/San-Francisco_USA.html"> San-Francisco_USA</a></span><br/>
<span style={{whiteSpace: 'nowrap'}}><a href="/albums/Seattle,_WA,_USA.html"> Seattle,_WA,_USA</a></span><br/>
<span style={{whiteSpace: 'nowrap'}}><a href="/albums/USA_Boston_2016_August.html"> USA_Boston_2016_August</a></span><br/>
<span style={{whiteSpace: 'nowrap'}}><a href="/albums/USA_Dec_2015_-_Jan 2016.html"> USA_Dec_2015_-_Jan 2016</a></span><br/>
<span style={{whiteSpace: 'nowrap'}}><a href="/albums/USA_NYC_2016_August_September.html"> USA_NYC_2016_August_September</a></span><br/>
<span style={{whiteSpace: 'nowrap'}}><a href="/albums/florence.html"> florence</a></span><br/>
<span style={{whiteSpace: 'nowrap'}}><a href="/albums/italy.html"> italy</a></span><br/>

      </div>
      <div
        style={{
          borderTop: "1px solid #ff00ff",
          transform: "rotate(45deg)"
        }}
      ></div>
      <div className="albumsIndexPageFooter">
        <p className="marquee">
          <span>
            This webisite is hosted on Microsoft Azure. Try it too! This
            webisite is hosted on Microsoft Azure.{" "}
            <a href="https://azure.com">Try it too!</a> &nbsp;
          </span>
        </p>
        <p className="marquee marquee2">
          <span>
            This webisite is hosted on Microsoft Azure. Try it too! This
            webisite is hosted on Microsoft Azure.{" "}
            <a href="https://azure.com">Try it too!</a>&nbsp;
          </span>
        </p>
      </div>
    </div>
  );
}
export default Albums;

