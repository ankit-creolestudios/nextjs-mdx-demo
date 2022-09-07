const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
//The process.cwd() method returns the current working directory of the Node.js process.
const postDirectory = path.join(process.cwd(), "post");

//markdown file extension
const md_file_extension = ".md";

//get all file inside post directory
const getAllFilesinDirectory = () => {
  //fs.readdirSync() reads the contents of the directory.
  const fileNames = fs.readdirSync(postDirectory);

  return fileNames.map((fileName) => {
    //path.parse() returns a object from a path string
    return path.parse(fileName);
  });
};
const getAllMdxFile = () => {
  const allFile = getAllFilesinDirectory();
  return allFile.filter((parsedFile) => parsedFile.ext == md_file_extension);
};
const getAllPostPath = () => {
  const allMdxFile = getAllMdxFile();
  return allMdxFile.map((parsedFile) => {
    return {
      params: {
        id: parsedFile.name,
      },
    };
  });
};
const getPostMetaData = () => {
  const allMdxFile = getAllMdxFile();
  console.log(allMdxFile);
  const postsMetaData = allMdxFile.map((parsedFile) => {
    const fullPath = path.join(postDirectory, parsedFile.base);

    // get mdx metadata and content
    const fileContent = fs.readFileSync(fullPath, "utf8");
    // get metadata, content
    const { data, content } = matter(fileContent);
    console.log(data, content);
    let metadata = data;
    metadata["id"] = parsedFile.name;
    return { metadata: metadata };
  });
  return postsMetaData;
};
const getPostData = (id) => {
  const fullPath = path.join(postDirectory, id + md_file_extension);

  // get MDX metadata and content
  const fileContent = fs.readFileSync(fullPath, "utf8");
  // get metadata, content
  const { data, content } = matter(fileContent);

  let metadata = data;
  metadata["id"] = id;

  return { metadata: metadata, content: content };
};

export { getAllPostPath, getPostMetaData, getPostData };
