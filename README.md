# What?

This beautify: https://mehanigpics.z16.web.core.windows.net/albums.html

# How it works:

It's generated list of Next.js pages, which are then server-side rendered and pushed to Azure Blob.
There is no server at all. It's just a list of html and js files.

At build time, builder is asking azure blobs for albums schema and generates paths and code, and after it, builds created project.
Here is a schema which should be in Azure Blob:

Blobs:

```
/index.html
/albums
	/index.html
 	/orig
		/name-1
			/img.jpg
			/img2.jpg
			/img3.jpg
			/img4.jpg
		/name-2
			…
		/otherName
			….
	/previews
		/name-1
			/index.html
			/img.jpg
			/img2.jpg
		/name-2
			…
		/otherName
			…
```

`orig` folder is used to store original files of photos which can be loaded when clicked on picture.
`previews` folder is used to store compressed preview, usually used in album view.

Pages are generated from JS files with inlined templates at build time using mustache and then put into pages folder using gulp.

# How to build locally

- `npm install`
- `gulp buildSite`
- `yarn dev`

# How to build production version

- `yarn export`

# How to deploy

Just move all the content of `out` folder into Azure Blobs Container usually called `$web` for serving it as static pages

## MehanigTemplates

Since there is a lot of code sharing between pages, there is an idea of tempates inside comments used in this project.
_MehanigTemplates_ a very simple type of comment which allows to inject any other file inside js at build time, without breaking VSCode autocompletion.
Here is an example of template:

```
      {/* MehanigTemplateStart
        MehanigTemplateInject="pages_ejs/album_named.mustache"
        MehanigTemplateEnd */}
```
