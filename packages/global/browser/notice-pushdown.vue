<template>
  <div v-if="!closed" class="pushdown-wrapper" style="background-color:white">
    <div class="text-center p-4 font-size-sm pushdown-inner-container">
      <div class="d-flex justify-content-end">
        <button
          type="button"
          class="btn btn-link font-weight-bold"
          :style="{ color: '#000', fontSize: '24px', padding: 0 }"
          @click="close"
        >
          &times;
        </button>
      </div>
      <img :src="imgSrc" :style="{ width: '200px', marginTop: '-24px' }">
      <hr>
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    closed: {
      type: Boolean,
      required: true,
    },
    message: {
      type: String,
      default: 'The American Heart Association (AHA) does not endorse any commercial products or programs. The links provided within this site are for convenience only, and are not an endorsement of either the linked-to entity, product or service.  AHA makes no warranties of any kind, express or implied, with regard to its third-party vendor websites.',
    },
    imgSrc: {
      type: String,
      default: 'https://img.hub.heart.org/files/base/ascend/hearthub/image/static/aha-logo.jpg',
    },
  },

  mounted() {
    this.$nextTick(() => {
      if (!this.closed) {
        document.getElementsByClassName('document-container')[0].style.paddingTop = '0px';
      }
    });
  },
  methods: {
    close() {
      if (!this.closed) {
        this.closed = true;
        document.getElementsByClassName('document-container')[0].removeAttribute('style');
      }
    },
  },
};
</script>
