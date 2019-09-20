function Albums() {
  return (
    <div
      style={{
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: "28px"
      }}
    >
      Here is a list of all available memories. Click any blue link to open
      photo gallery:
      <br />
      {/* MehanigTemplateStart
        MehanigTemplateInject="pages_ejs/albums_index.mustache"
        MehanigTemplateEnd */}
    </div>
  );
}
export default Albums;
