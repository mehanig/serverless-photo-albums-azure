function Albums() {
  return (
    <div
      style={{
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: "x-large",
        maxWidth: "100%",
        overflowX: "hidden",
        textOverflow: "ellipsis"
      }}
    >
      Here is a list of all available memories. Click any blue link to open
      photo gallery:
      <br />
      {/* MehanigTemplateStart
        MehanigTemplateInject="pages_templates/albums_index.mustache"
        MehanigTemplateEnd */}
    </div>
  );
}
export default Albums;
