<script setup lang="ts">
import { ref } from 'vue';
import { Modal } from 'bootstrap';
defineProps<{
  name:     string,
  title:    string,
  decision: string,
  disabled: boolean,
  isForm:   boolean
}>()
const emit = defineEmits([
  'acceptAction',
  'cancelAction'
]);
const modalRef = ref(null as any);
const closeModal = () => {
  Modal.getInstance(modalRef.value)?.hide();
};
const openModal = () => {
  Modal.getInstance(modalRef.value)?.show();
};
defineExpose({
  closeModal,
  openModal
});
</script>

<template>
<div ref="modalRef" class="modal fade" :id="name" tabindex="-1" :aria-labelledby="`${ name }Label`" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5
          class="modal-title"
          :id="`${ name }Label`"
        >
          {{ title }}
        </h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
          @click="emit( 'cancelAction' )"
        >
        </button>
      </div>
      <div class="modal-body">
        <slot name="main"></slot>
      </div>
      <div v-if="isForm" class="modal-footer">
        <button
          type="button"
          class="btn btn-secondary"
          @click="closeModal(); emit( 'cancelAction' )"
        >
          Cerrar
        </button>
        <button
          type="button"
          class="btn btn-primary"
          :disabled="disabled"
          @click="emit( 'acceptAction' )"
        >
          {{ decision }}
        </button>
      </div>
    </div>
  </div>
</div>
</template>