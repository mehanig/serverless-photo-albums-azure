const gulp = require("gulp");
const request = require("request");
// const ejs = require("ejs");
const mustache = require("mustache");
const fs = require("fs");
const parseString = require("xml2js").parseString;

const ALBUMS_LIST_URL =
  "https://mehanigpics.blob.core.windows.net/albums?comp=list";

const IMAGE_URL_PREVIEWS_FOLDER =
  "https://mehanigpics.blob.core.windows.net/albums/previews";

const IMG_FILES_EXT = [".jpg", ".gif", ".png", ".tiff", ".jpeg"];

const MEHANIG_TEMPLATE_START = "{/* MehanigTemplateStart";
const MEHANIG_TEMPLATE_END = "MehanigTemplateEnd */}";
const MEHANIG_TEMPLATE_INJECTOR = "MehanigTemplateInject=";
const MUSTASHE_CUSTOM_TAGS = ["<%", "%>"];

const ORIGINAL_FOLDER_NAME = "orig";
const PREVIEWS_FOLDER_NAME = "previews";

const requesAsync = async value =>
  new Promise((resolve, reject) => {
    request(value, (error, response, data) => {
      if (error) reject(error);
      else resolve(data);
    });
  });

function defaultTask(cb) {
  cb();
}

const pictureNameIsImage = pictureName => {
  return IMG_FILES_EXT.map(ext => pictureName.endsWith(ext)).some(
    isTrue => isTrue
  );
};

const renderFileWithMehanigTemplate = fileContent => {
  let newFile = "";
  let insideTemplate = false;
  fileContent = fileContent
    .toString()
    .split("\n")
    .forEach(line => {
      let shoulKeepLine = true;
      if (insideTemplate) {
        shoulKeepLine = false;
        if (line.trim().endsWith(MEHANIG_TEMPLATE_END)) {
          shoulKeepLine = false;
          insideTemplate = false;
        } else if (line.trim().startsWith(MEHANIG_TEMPLATE_INJECTOR)) {
          const fileNameToInject = line
            .split(MEHANIG_TEMPLATE_INJECTOR)[1]
            .split('"')[1];
          const injectedTemplate = fs.readFileSync(fileNameToInject, "utf8");
          newFile += injectedTemplate + "\n";
        }
      } else {
        if (line.trim().startsWith(MEHANIG_TEMPLATE_START) && !insideTemplate) {
          shoulKeepLine = false;
          insideTemplate = true;
        }
      }
      if (shoulKeepLine) {
        newFile += line + "\n";
      }
    });
  return newFile;
};

gulp.task("buildSite", async () => {
  const albumsList = await requesAsync(ALBUMS_LIST_URL);
  parseString(albumsList, function(err, result) {
    const blobNames = result["EnumerationResults"]["Blobs"][0]["Blob"].map(
      blob => blob["Name"][0]
    );
    const albums = {};
    blobNames.forEach(blobName => {
      const folderName = blobName.split("/")[0];
      const albumName = blobName.split("/")[1];
      const pictureName = blobName.split("/")[2];
      if (
        folderName === PREVIEWS_FOLDER_NAME &&
        albumName &&
        pictureName &&
        pictureNameIsImage(pictureName)
      ) {
        if (!albums[albumName]) {
          albums[albumName] = {};
        }
        albums[albumName][pictureName] = true;
      }
    });
    console.log(albums);
    const fileContent = renderFileWithMehanigTemplate(
      fs.readFileSync("pages_ejs/albums_index.js", "utf8")
    );
    const compliledTemplate = mustache.render(
      fileContent,
      {
        albums: Object.keys(albums)
      },
      undefined,
      MUSTASHE_CUSTOM_TAGS
    );
    fs.writeFileSync("pages/albums/index.js", compliledTemplate);

    Object.keys(albums).forEach(albumName => {
      const fileContent = renderFileWithMehanigTemplate(
        fs.readFileSync("pages_ejs/album_named.js", "utf8")
      );
      const compliledAlbumTemplate = mustache.render(
        fileContent,
        {
          name: albumName,
          photos: Object.keys(albums[albumName]),
          imageUrlPreviewsFolder: `${IMAGE_URL_PREVIEWS_FOLDER}/${albumName}`
        },
        undefined,
        MUSTASHE_CUSTOM_TAGS
      );
      fs.writeFileSync(`pages/albums/${albumName}.js`, compliledAlbumTemplate);
    });
  });
});

exports.default = defaultTask;
