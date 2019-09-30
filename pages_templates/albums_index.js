import "../baseStyles.scss";

function Albums() {
  const lineNumber = Math.floor(Math.random() * 10 + 1);
  const lines = [];
  for (let i = 0; i < lineNumber; i++) {
    const randomRotate = Math.floor(Math.random() * 180 + 1);
    const randomMarginLeft = Math.floor(Math.random() * 4000 - 2000);
    const randomMarginTop = Math.floor(Math.random() * 4000 - 2000);
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
          randomMarginTop: `${randomMarginTop}px`
        }}
      ></div>
    );
  }
  return (
    <div className="albumsIndexPage">
      <div className="albumsIndexPageHeader">
        Here is a list of all available memories. Click any blue link to open
        photo gallery:
      </div>
      <div className="albumIndexPageContent">
        {/* MehanigTemplateStart
        MehanigTemplateInject="pages_templates/albums_index.mustache"
        MehanigTemplateEnd */}
      </div>
      <div>{lines}</div>
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
