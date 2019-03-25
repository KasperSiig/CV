const admin = require('firebase-admin');
const buffer = require('buffer');

module.exports.uploadImage = async (imageMetaData) => {
  const docRef = await uploadFileMetaData(imageMetaData);
  imageMetaData.id = docRef.id;
  await uploadFile(imageMetaData);
};

/**
 * Uploads metadata related to file
 * @param fileMetaData Object containing metadata of file
 */
function uploadFileMetaData(fileMetaData) {
  return admin.firestore().collection('files').add({
    name: fileMetaData.name,
    type: fileMetaData.type,
    size: fileMetaData.size,
    lastModified: -1
  });
}

/**
 * Uploads file to storage bucket
 * @param fileMetaData Object containing data of file
 */
function uploadFile(fileMetaData) {
  // Converts to uploadable file
  const base64Image = fileMetaData.base64Image.replace(/^data:image\/\w+;base64,/, '');
  const imageBuffer = new Buffer(base64Image, 'base64');

  // Saves file in storage with metadata
  return admin.storage().bucket().file('profile-pictures/' + fileMetaData.id)
    .save(imageBuffer, {
      gzip: true,
      metadata: {contentType: fileMetaData.type}
    });
}
