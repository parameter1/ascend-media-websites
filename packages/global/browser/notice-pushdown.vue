<template>
  <div v-if="!isClosed" class="notice-pushdown">
    <div class="text-center p-4 font-size-sm notice-pushdown--inner-container">
      <div class="d-flex justify-content-end">
        <button
          type="button"
          class="btn btn-link font-weight-bold"
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
      default: 'The American Heart Association/American Stroke Association (AHA/ASA) does not endorse any commercial products or programs. The links provided within this site are for convenience only, and are not an endorsement of either the linked-to entity, product or service. AHA/ASA makes no warranties of any kind, express, or implied, with regard to its third-party vendor websites. Paid advertisements are not reviewed by the AHA/ASA for scientific accuracy.',
    },
    imgSrc: {
      type: String,
      default: 'https://img.hub.heart.org/files/base/ascend/hearthub/image/static/aha-logo.jpg',
    },
  },

  data: () => ({
    isClosed: null,
  }),

  mounted() {
    this.isClosed = this.closed;
    this.$nextTick(() => {
      if (!this.isClosed) {
        document.getElementsByClassName('document-container')[0].style.paddingTop = '0px';
      }
    });
  },
  methods: {
    close() {
      if (!this.isClosed) {
        this.isClosed = true;
        document.getElementsByClassName('document-container')[0].removeAttribute('style');
      }
    },
  },
};
</script>
