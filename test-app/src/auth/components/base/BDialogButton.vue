<script setup>
import { ref, defineProps } from 'vue'

defineProps({
  showToolbar: {
    required: false,
    type: Boolean,
    default: false
  },
  toolbarText: {
    required: false,
    type: String,
    default: null
  }
})

const dialogComponent = ref()

defineExpose({
  hide: (...props) => dialogComponent.value.hide(...props),
  show: (...props) => dialogComponent.value.show(...props)
})

const showDialog = ref(false)
</script>

<template>
  <q-btn @click="showDialog = true">
    <q-dialog
      v-bind="$attrs"
      ref="dialogComponent"
      v-model="showDialog"
    >
      <q-toolbar v-if="showToolbar || toolbarText">
        <q-toolbar-title v-if="toolbarText">
          {{ toolbarText }}
        </q-toolbar-title>
        <q-btn
          v-close-popup
          icon="close"
          flat
          round
        />
      </q-toolbar>
      <q-card>
        <slot name="default" />
      </q-card>
    </q-dialog>
  </q-btn>
</template>
