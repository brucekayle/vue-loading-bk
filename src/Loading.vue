<template>
  <div v-bind:class="inner === true ? 'inner-loading-mask' : 'loading-mask'">
    <div id="circle" v-if="type === 'circle'">
      <div v-bind:style="styles" v-bind:class="location">
        <div v-bind:style="innerStyles">
          <svg class="spinner" viewBox="0 0 66 66">
            <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
          </svg>
        </div>
        <div class="loading-text">{{text}}</div>
      </div>
    </div>
    <div id="circle8" v-if="type === 'circle8'">
      <div v-bind:style="styles" v-bind:class="location">
        <div v-bind:style="innerStyles">
          <div class="ball-container">
            <div class="contener_mixte"><div class="ballcolor ball_1">&nbsp;</div></div>
            <div class="contener_mixte"><div class="ballcolor ball_2">&nbsp;</div></div>
            <div class="contener_mixte"><div class="ballcolor ball_3">&nbsp;</div></div>
            <div class="contener_mixte"><div class="ballcolor ball_4">&nbsp;</div></div>
          </div>
        </div>
        <div class="loading-text">{{text}}</div>
      </div>
    </div>
    <div id="circle10" v-if="type === 'circle10'">
      <div v-bind:style="styles" v-bind:class="location">
        <div v-bind:style="innerStyles" class="spinner-inner">
          <div class="loader-xbox"></div>
        </div>
        <div class="loading-text">{{text}}</div>
      </div>
    </div>
    <div id="letterCube" v-if="type === 'letterCube'">
      <div v-bind:style="styles" v-bind:class="location">
        <div v-bind:style="innerStyles" class="spinner-inner">
          <div class="cube panelLoad">
            <div class='cube-face cube-face-front'>L</div>
            <div class='cube-face cube-face-back'>O</div>
            <div class='cube-face cube-face-left'>A</div>
            <div class='cube-face cube-face-right'>D</div>
            <div class='cube-face cube-face-bottom'>I</div>
            <div class='cube-face cube-face-top'>N'</div>
          </div>
        </div>
        <div class="loading-text">{{text}}</div>
      </div>
    </div>
    <div id="mikepad" v-if="type === 'mikepad'">
      <div v-bind:style="styles" class="spinner spinner--mikepad" v-bind:class="location">
        <div v-bind:style="innerStyles" class="spinner-inner">
          <div class="binding"></div>
          <div class="pad">
            <div class="line line1"></div>
            <div class="line line2"></div>
            <div class="line line3"></div>
          </div>
        </div>
        <div class="loading-text">{{text}}</div>
      </div>
    </div>
    <div id="hourGlass" v-if="type === 'hourGlass'">
      <div v-bind:style="styles" v-bind:class="location">
        <div v-bind:style="innerStyles" class="spinner-inner">
          <svg class="hourglass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 206" preserveAspectRatio="none">
            <path class="middle" d="M120 0H0v206h120V0zM77.1 133.2C87.5 140.9 92 145 92 152.6V178H28v-25.4c0-7.6 4.5-11.7 14.9-19.4 6-4.5 13-9.6 17.1-17 4.1 7.4 11.1 12.6 17.1 17zM60 89.7c-4.1-7.3-11.1-12.5-17.1-17C32.5 65.1 28 61 28 53.4V28h64v25.4c0 7.6-4.5 11.7-14.9 19.4-6 4.4-13 9.6-17.1 16.9z"/>
            <path class="outer" d="M93.7 95.3c10.5-7.7 26.3-19.4 26.3-41.9V0H0v53.4c0 22.5 15.8 34.2 26.3 41.9 3 2.2 7.9 5.8 9 7.7-1.1 1.9-6 5.5-9 7.7C15.8 118.4 0 130.1 0 152.6V206h120v-53.4c0-22.5-15.8-34.2-26.3-41.9-3-2.2-7.9-5.8-9-7.7 1.1-2 6-5.5 9-7.7zM70.6 103c0 18 35.4 21.8 35.4 49.6V192H14v-39.4c0-27.9 35.4-31.6 35.4-49.6S14 81.2 14 53.4V14h92v39.4C106 81.2 70.6 85 70.6 103z"/>
          </svg>
        </div>
        <div class="loading-text">{{text}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    size: {
      default: '40px'
    },
    type: {
      default: 'circle10'
    },
    location: {
      default: 'bottom-right'
    },
    inner: {
      default: false
    },
    text: {
      default: 'loading'
    }
  },
  computed: {
    innerStyles () {
      let size = parseInt(this.size)
      if (size > 80) {
        size = 80
      }
      return {
        transform: 'scale(' + (size / 44) + ')',
        marginTop: ((size - 44) / 2) + 'px'
      }
    },
    styles () {
      let size = parseInt(this.size)
      if (size > 80) {
        size = 80
      }
      return {
        width: this.text === '' ? size + 'px' : size + 25 + 'px',
        height: this.text === '' ? size + 'px' : size + 25 + 'px'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  // Import Main styles for this application
  @import './scss/style';
</style>
