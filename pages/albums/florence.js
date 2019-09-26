import "../baseStyles.scss";

function Album() {
  return (
    <div className="albumInside">
Photos from florence:
<br />
<img style={{maxWidth:'100%', height:'auto'}} src="https://mehanigpics.blob.core.windows.net/albums/previews/florence/photo_2019-09-20 12.34.19.jpeg"></img><br/>
<img style={{maxWidth:'100%', height:'auto'}} src="https://mehanigpics.blob.core.windows.net/albums/previews/florence/photo_2019-09-20 12.34.22.jpeg"></img><br/>
<img style={{maxWidth:'100%', height:'auto'}} src="https://mehanigpics.blob.core.windows.net/albums/previews/florence/photo_2019-09-20 12.34.24.jpeg"></img><br/>
    </div>
  );
}
export default Album;

