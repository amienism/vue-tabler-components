<template>
  <a href="#" class="btn w-100" ref="button"> {{ props.label }} </a>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const button = ref(null)
const props = defineProps(['type', 'color', 'label', 'disabled', 'square', 'pill'])

onMounted(() => {
  switch (props.color) {
    case 'primary':
      button.value.classList.add(`btn-${props.type ? props.type + '-' : ''}primary`);
      break
    case 'secondary':
      button.value.classList.add(`btn-${props.type ? props.type + '-' : ''}secondary`);
      break
    case 'success':
      button.value.classList.add(`btn-${props.type ? props.type + '-' : ''}success`);
      break
    case 'warning':
      button.value.classList.add(`btn-${props.type ? props.type + '-' : ''}warning`);
      break
    case 'danger':
      button.value.classList.add(`btn-${props.type ? props.type + '-' : ''}danger`);
      break
    case 'dark':
      button.value.classList.add(`btn-${props.type ? props.type + '-' : ''}dark`);
      break
    case 'light':
      button.value.classList.add(`btn-${props.type ? props.type + '-' : ''}light`);
      break
    default:
      button.value.classList.add(`btn-${props.type ? props.type + '-' : ''}info`);
      break
  }

  if (props.disabled) {
    button.value.classList.add('disabled')
  }

  if (props.square) {
    button.value.classList.add('btn-square')
  }

  if (props.pill) {
    button.value.classList.add('btn-pill')
  }
})
</script>
