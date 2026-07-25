const zlib = require('zlib');
const fs = require('fs');
const path = require('path');

const OUT_DIR = __dirname;

// CRC32
const crcTable = (() => {
  const t = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let j = 0; j < 8; j++) c = (c & 1) ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[i] = c;
  }
  return t;
})();
function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = crcTable[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function makeChunk(type, data) {
  const typeBytes = Buffer.from(type, 'ascii');
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length);
  const crcBuf = Buffer.concat([typeBytes, data]);
  const crcVal = Buffer.alloc(4); crcVal.writeUInt32BE(crc32(crcBuf));
  return Buffer.concat([len, typeBytes, data, crcVal]);
}

function makePNG(size) {
  const w = size, h = size;

  // IHDR
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(w, 0); ihdr.writeUInt32BE(h, 4);
  ihdr[8] = 8; ihdr[9] = 2; ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0;

  const bg   = [0x1a, 0x1a, 0x1a];
  const gold = [0xc8, 0x96, 0x3e];

  // 5x7 bitmap for "F"
  const F = [
    [1,1,1,1,1],
    [1,0,0,0,0],
    [1,1,1,1,0],
    [1,0,0,0,0],
    [1,0,0,0,0],
    [1,0,0,0,0],
    [1,0,0,0,0],
  ];
  // 5x7 bitmap for "K"
  const K = [
    [1,0,0,0,1],
    [1,0,0,1,0],
    [1,0,1,0,0],
    [1,1,0,0,0],
    [1,0,1,0,0],
    [1,0,0,1,0],
    [1,0,0,0,1],
  ];

  // Scale glyphs to ~60% of icon height
  const glyphH = 7, glyphW = 5;
  const scale = Math.floor(size * 0.60 / glyphH);
  const gap = Math.floor(scale * 1.2); // gap between F and K

  const totalW = glyphW * scale * 2 + gap;
  const totalH = glyphH * scale;
  const startX = Math.floor((w - totalW) / 2);
  const startY = Math.floor((h - totalH) / 2);

  // Build pixel grid
  const pixels = Array.from({length: h}, () => Array.from({length: w}, () => [...bg]));

  function drawGlyph(glyph, offsetX) {
    for (let row = 0; row < glyphH; row++) {
      for (let col = 0; col < glyphW; col++) {
        if (glyph[row][col]) {
          for (let dy = 0; dy < scale; dy++) {
            for (let dx = 0; dx < scale; dx++) {
              const px = startX + offsetX + col * scale + dx;
              const py = startY + row * scale + dy;
              if (px >= 0 && px < w && py >= 0 && py < h) {
                pixels[py][px] = [...gold];
              }
            }
          }
        }
      }
    }
  }

  drawGlyph(F, 0);
  drawGlyph(K, glyphW * scale + gap);

  // Build raw scanlines
  const raw = [];
  for (let y = 0; y < h; y++) {
    raw.push(0); // filter byte
    for (let x = 0; x < w; x++) {
      raw.push(...pixels[y][x]);
    }
  }

  const rawBuf = Buffer.from(raw);
  const compressed = zlib.deflateSync(rawBuf, { level: 9 });

  const sig = Buffer.from([137,80,78,71,13,10,26,10]);
  return Buffer.concat([
    sig,
    makeChunk('IHDR', ihdr),
    makeChunk('IDAT', compressed),
    makeChunk('IEND', Buffer.alloc(0)),
  ]);
}

const png192 = makePNG(192);
const png512 = makePNG(512);

fs.writeFileSync(path.join(OUT_DIR, 'icon-192.png'), png192);
fs.writeFileSync(path.join(OUT_DIR, 'icon-512.png'), png512);

console.log('icon-192.png written:', png192.length, 'bytes');
console.log('icon-512.png written:', png512.length, 'bytes');
