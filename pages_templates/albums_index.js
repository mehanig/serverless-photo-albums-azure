import "../baseStyles.scss";

function Albums() {
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
