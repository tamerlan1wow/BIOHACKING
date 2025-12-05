<template>
  <div class="pixel-warp">
    <video ref="video" autoplay playsinline muted></video>
    <canvas ref="outputCanvas"></canvas>
    <button @click="toggleEffect" class="effect-btn">
      {{ effectActive ? 'DISABLE' : 'BIOHACK' }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'PixelWarp',
  data() {
    return {
      effectActive: false,
      video: null,
      outputCanvas: null,
      ctx: null,
      animationId: null,
      stream: null
    }
  },
  mounted() {
    this.init()
  },
  beforeUnmount() {
    this.cleanup()
  },
  methods: {
    async init() {
      try {
        this.stream = await navigator.mediaDevices.getUserMedia({
          video: {
            width: { ideal: 320 },
            height: { ideal: 240 },
            facingMode: 'user'
          }
        })
        
        this.video = this.$refs.video
        this.outputCanvas = this.$refs.outputCanvas
        this.ctx = this.outputCanvas.getContext('2d')
        
        this.video.srcObject = this.stream
        
        await new Promise((resolve) => {
          this.video.onloadedmetadata = () => {
            this.outputCanvas.width = this.video.videoWidth
            this.outputCanvas.height = this.video.videoHeight
            resolve()
          }
        })
        
        this.startProcessing()
        
      } catch (error) {
        console.error('Init error:', error)
      }
    },
    
    startProcessing() {
      const process = () => {
        this.ctx.clearRect(0, 0, this.outputCanvas.width, this.outputCanvas.height)
        
        if (this.effectActive) {
          this.applyFaceWarp()
        } else {
          // Просто отображаем видео
          this.ctx.save()
          this.ctx.scale(-1, 1)
          this.ctx.drawImage(this.video, -this.outputCanvas.width, 0)
          this.ctx.restore()
        }
        
        this.animationId = requestAnimationFrame(process)
      }
      
      process()
    },
    
    applyFaceWarp() {
      // Создаем временный канвас для обработки
      const tempCanvas = document.createElement('canvas')
      tempCanvas.width = this.outputCanvas.width
      tempCanvas.height = this.outputCanvas.height
      const tempCtx = tempCanvas.getContext('2d')
      
      // Копируем видео
      tempCtx.save()
      tempCtx.scale(-1, 1)
      tempCtx.drawImage(this.video, -tempCanvas.width, 0)
      tempCtx.restore()
      
      // Получаем данные пикселей
      const imageData = tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height)
      const data = imageData.data
      
      // Применяем деформацию
      const warpedData = this.warpImageData(data, tempCanvas.width, tempCanvas.height)
      
      // Создаем новое изображение
      const warpedImageData = new ImageData(warpedData, tempCanvas.width, tempCanvas.height)
      tempCtx.putImageData(warpedImageData, 0, 0)
      
      // Рисуем результат
      this.ctx.drawImage(tempCanvas, 0, 0)
    },
    
    warpImageData(data, width, height) {
      const newData = new Uint8ClampedArray(data.length)
      const centerX = width / 2
      const centerY = height / 2
      
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const idx = (y * width + x) * 4
          
          // Нормализованные координаты
          const nx = (x - centerX) / width
          const ny = (y - centerY) / height
          
          // Применяем деформацию для лица
          let warpedX = x
          let warpedY = y
          
          if (Math.abs(nx) < 0.3 && Math.abs(ny) < 0.4) { // Область лица
            // Расширяем челюсть на 100% (в 2 раза)
            if (ny > 0.1) {
              const jawScale = 1.0 + (ny - 0.1) * 1.0 // 100% шире
              warpedX = centerX + nx * width * jawScale
              warpedY = y // Не меняем высоту
            }
            
            // Сужаем лоб (верхняя часть) - оставляем как в оригинале
            if (ny < -0.1) {
              const foreheadScale = 0.9
              warpedX = centerX + nx * width * foreheadScale
            }
          }
          
          // Клонируем пиксель
          const warpedIdx = (Math.floor(warpedY) * width + Math.floor(warpedX)) * 4
          
          if (warpedIdx >= 0 && warpedIdx < data.length - 4) {
            newData[idx] = data[warpedIdx]     // R
            newData[idx + 1] = data[warpedIdx + 1] // G
            newData[idx + 2] = data[warpedIdx + 2] // B
            newData[idx + 3] = data[warpedIdx + 3] // A
          }
        }
      }
      
      return newData
    },
    
    toggleEffect() {
      this.effectActive = !this.effectActive
    },
    
    cleanup() {
      if (this.animationId) {
        cancelAnimationFrame(this.animationId)
      }
      if (this.stream) {
        this.stream.getTracks().forEach(track => track.stop())
      }
    }
  }
}
</script>

<style scoped>
.pixel-warp {
  position: relative;
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
  background: #000;
  border-radius: 10px;
  overflow: hidden;
}

video, canvas {
  width: 100%;
  height: auto;
  display: block;
}

canvas {
  position: absolute;
  top: 0;
  left: 0;
}

.effect-btn {
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: #2cdf2f;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  z-index: 10;
}
</style>