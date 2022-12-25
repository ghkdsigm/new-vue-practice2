<template>
  <div v-if="show1 || show2 || show3" class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          {{ headerTitle }}
        </div>
        <div class="modal-body">
          <slot name="body">
            {{ defaultBodyContent }}
          </slot>
        </div>
        <div class="modal-footer">
          <button color="amber" dark rounded small @click="$emit('hide')">
            {{ footerHideTitle }}
          </button>
          <template v-if="footerSubmit">
            <button color="success" rounded small @click="$emit('submit')">
              {{ footerSubmitTitle }}
            </button>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoRoDialog',
  props: {
    show1: Boolean,
    show2: Boolean,
    show3: Boolean,
    footerSubmit: {
      type: Boolean,
      default: true,
    },
    headerTitle: {
      type: String,
      default: '제목',
    },
    footerSubmitTitle: {
      type: String,
      default: '저장',
    },
  },
  data: () => ({
    footerHideTitle: '닫기',
    defaultBodyContent: 'body slot 영역을 작성해주세요.',
  }),
};
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-body img {
  width: 50px;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
