const admin = require('firebase-admin');
// const functions = require('firebase-functions');
const buffer = require('buffer');

module.exports.uploadImage = async (imageMetaData) => {
  await uploadFileMetaData(imageMetaData);
};

/**
 * Uploads metadata related to file
 * @param fileMetaData Object containing metadata of file
 */
function uploadFileMetaData(fileMetaData) {
  return uploadFile(fileMetaData);
}

/**
 * Uploads file to storage bucket
 * @param fileMetaData Object containing data of file
 */
function uploadFile(fileMetaData) {
  // Converts to uploadable file
  const base64Image = fileMetaData.base64Image.replace(/^data:image\/\w+;base64,/, '');
  // const imageBuffer = new buffer.alloc(base64Image, 'base64');

  // Saves file in storage with metadata
  return admin.storage().bucket().file('profile-pictures/' + fileMetaData.id)
    .save(base64Image, {
      gzip: true,
      metadata: {contentType: fileMetaData.type}
    });
}
