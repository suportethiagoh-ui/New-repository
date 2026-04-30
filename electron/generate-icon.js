#!/usr/bin/env node

/**
 * Script para gerar ícone a partir do logo IG azul
 * Executa: node electron/generate-icon.js
 */

const fs = require('fs');
const path = require('path');

// Se houver sharp instalado, usar ele
try {
  const sharp = require('sharp');
  generateIconWithSharp();
} catch (e) {
  console.log('sharp não instalado, usando método alternativo...');
  generateIconWithCanvas();
}

async function generateIconWithSharp() {
  const assetDir = path.join(__dirname, 'assets');
  if (!fs.existsSync(assetDir)) {
    fs.mkdirSync(assetDir, { recursive: true });
  }

  const svg = `<svg width="256" height="256" xmlns="http://www.w3.org/2000/svg">
    <rect width="256" height="256" fill="#2563eb" rx="24"/>
    <text x="128" y="140" font-family="Arial, sans-serif" font-size="100" font-weight="bold" fill="white" text-anchor="middle">IG</text>
  </svg>`;

  const svgPath = path.join(assetDir, 'icon.svg');
  fs.writeFileSync(svgPath, svg);

  // Converter SVG para PNG (256x256)
  await sharp(svgPath)
    .png()
    .toFile(path.join(assetDir, 'icon.png'));

  console.log('✅ icon.png criado');

  // Para ICO, usar conversão png-to-ico
  try {
    const pngToIco = require('png-to-ico');
    await pngToIco(path.join(assetDir, 'icon.png')).then(buf => {
      fs.writeFileSync(path.join(assetDir, 'icon.ico'), buf);
    });
    console.log('✅ icon.ico criado');
  } catch (e) {
    console.log('⚠️  png-to-ico não disponível, usando método alternativo...');
    // Copiar PNG como fallback
    const png = fs.readFileSync(path.join(assetDir, 'icon.png'));
    fs.writeFileSync(path.join(assetDir, 'icon.ico'), png);
    console.log('⚠️  icon.ico criado como PNG (use ferramenta online para converter ICO verdadeiro)');
  }
}

function generateIconWithCanvas() {
  const { createCanvas } = require('canvas');
  const assetDir = path.join(__dirname, 'assets');
  
  if (!fs.existsSync(assetDir)) {
    fs.mkdirSync(assetDir, { recursive: true });
  }

  // Criar canvas 256x256
  const canvas = createCanvas(256, 256);
  const ctx = canvas.getContext('2d');

  // Fundo azul
  ctx.fillStyle = '#2563eb';
  ctx.fillRect(0, 0, 256, 256);

  // Arredonda cantos
  ctx.fillStyle = '#2563eb';
  ctx.beginPath();
  ctx.moveTo(24, 0);
  ctx.lineTo(256 - 24, 0);
  ctx.quadraticCurveTo(256, 0, 256, 24);
  ctx.lineTo(256, 256 - 24);
  ctx.quadraticCurveTo(256, 256, 256 - 24, 256);
  ctx.lineTo(24, 256);
  ctx.quadraticCurveTo(0, 256, 0, 256 - 24);
  ctx.lineTo(0, 24);
  ctx.quadraticCurveTo(0, 0, 24, 0);
  ctx.fill();

  // Texto "IG" branco
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 100px Arial, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('IG', 128, 128);

  // Salvar como PNG
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(path.join(assetDir, 'icon.png'), buffer);
  console.log('✅ icon.png criado com canvas');

  // ICO é mais complexo, use ferramenta online ou instale png-to-ico
  fs.copyFileSync(path.join(assetDir, 'icon.png'), path.join(assetDir, 'icon.ico'));
  console.log('⚠️  icon.ico criado (copiar PNG - recomenda-se usar ferramenta online para ICO real)');
}

console.log('Gerando ícone INFOGERAL...');
