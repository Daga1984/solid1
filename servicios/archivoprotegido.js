import fs from 'fs';

export class archivoprotegido {
  save(data) {
    fs.writeFileSync('orderData.json', JSON.stringify(data));
  }
}