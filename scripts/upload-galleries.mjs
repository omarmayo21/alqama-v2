import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';

const token = 'skg7VdwoClU3zFF4qiLq1mAwvfbnhaWrwirizfmggP9CvZdb8Nk36ko3XOYfMTi0qVCmkDGSP4iu4j10PBEJDwflnIld3O8FLLAxr4WLlsPKZ9hFr3YLrfW85lEIXFH1L1UJzmQ0rR9NsA9CqA1QCnekhYkNkI553z1A2IYFJvrmHd8olj8b';

const client = createClient({
  projectId: 's4sblwvk',
  dataset: 'production',
  apiVersion: '2024-03-01',
  token: token,
  useCdn: false,
});

const baseDir = path.resolve('public/images');
const galleryFolders = [
  'Gallery 1',
  'Gallery 2',
  'Gallery 3',
  'Gallery 4',
  'Gallery 5',
  'Gallery 6',
  'Gallery 7',
  'Gallery 8',
];

async function uploadFile(filePath, filename) {
  console.log(`  Uploading asset: ${filename} (${(fs.statSync(filePath).size / 1024).toFixed(1)} KB)...`);
  const stream = fs.createReadStream(filePath);
  const asset = await client.assets.upload('image', stream, {
    filename: filename,
  });
  return asset;
}

async function main() {
  console.log('=== STARTING SANITY GALLERY UPLOAD ===\n');

  // Step 1: Deactivate or clean old dummy gallery documents
  const oldDummyDocs = await client.fetch(`*[_type == "galleryImage" && _id in ["galleryImage-g1","galleryImage-g2","galleryImage-g3","galleryImage-g4","galleryImage-g5","galleryImage-g6","galleryImage-g7","galleryImage-g8","galleryImage-g9","drafts.galleryImage-g9"]]`);
  console.log(`Found ${oldDummyDocs.length} old dummy gallery documents to deactivate...`);
  for (const doc of oldDummyDocs) {
    console.log(`  Deactivating old dummy doc: ${doc._id}`);
    await client.patch(doc._id).set({ isActive: false }).commit();
  }

  // Step 2: Upload each folder to Sanity as a separate album
  for (let i = 0; i < galleryFolders.length; i++) {
    const folderName = galleryFolders[i];
    const albumIndex = i + 1;
    const albumId = `galleryImage-album-${albumIndex}`;
    const slugValue = `album-${albumIndex}`;
    const dirPath = path.join(baseDir, folderName);

    console.log(`\n========================================`);
    console.log(`Processing ${folderName} -> Album ${albumIndex} (ID: ${albumId}, Slug: ${slugValue})`);
    console.log(`========================================`);

    if (!fs.existsSync(dirPath)) {
      throw new Error(`Directory does not exist: ${dirPath}`);
    }

    const files = fs.readdirSync(dirPath)
      .filter(f => /\.(jpe?g|png|webp|avif|gif)$/i.test(f))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

    console.log(`Total images found in ${folderName}: ${files.length}`);
    if (files.length === 0) {
      console.warn(`Warning: No images in ${folderName}`);
      continue;
    }

    // Cover image is the 1st image
    const coverFilename = files[0];
    const coverPath = path.join(dirPath, coverFilename);
    console.log(`[Cover Image] ${coverFilename}`);
    const coverAsset = await uploadFile(coverPath, `${folderName}_cover_${coverFilename}`);

    // Remaining images are the album images
    const remainingFiles = files.slice(1);
    console.log(`[Album Images] ${remainingFiles.length} images...`);
    const imageObjects = [];

    for (let j = 0; j < remainingFiles.length; j++) {
      const imgFilename = remainingFiles[j];
      const imgPath = path.join(dirPath, imgFilename);
      const asset = await uploadFile(imgPath, `${folderName}_img${j + 1}_${imgFilename}`);
      imageObjects.push({
        _key: `album_${albumIndex}_img_${j + 1}`,
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: asset._id,
        },
      });
    }

    // Prepare Sanity Album Document
    const albumDoc = {
      _id: albumId,
      _type: 'galleryImage',
      title: {
        _type: 'localizedString',
        ar: '',
        en: '',
      },
      slug: {
        _type: 'slug',
        current: slugValue,
      },
      description: {
        _type: 'localizedText',
        ar: '',
        en: '',
      },
      coverImage: {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: coverAsset._id,
        },
      },
      images: imageObjects,
      category: 'other',
      displayOrder: albumIndex,
      isActive: true,
      isFeatured: false,
    };

    console.log(`Creating/Updating document in Sanity: ${albumId}...`);
    await client.createOrReplace(albumDoc);
    console.log(`✓ Album ${albumIndex} saved successfully (${files.length} total images: 1 cover + ${imageObjects.length} album photos)`);
  }

  console.log('\n=== SANITY GALLERY UPLOAD COMPLETED SUCCESSFULLY ===');
}

main().catch(err => {
  console.error('Fatal error during upload:', err);
  process.exit(1);
});
