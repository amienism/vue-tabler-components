<template>
  <div class="alert" role="alert" ref="alert">
    <div class="d-flex">
      <div>
        <!-- Download SVG icon from http://tabler-icons.io/i/check -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon alert-icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          v-if="props.type === 'success'"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M5 12l5 5l10 -10"></path>
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon alert-icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          v-if="props.type === 'warning'"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 9v4"></path>
          <path
            d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z"
          ></path>
          <path d="M12 16h.01"></path>
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon alert-icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          v-if="props.type === 'danger'"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
          <path d="M12 8v4"></path>
          <path d="M12 16h.01"></path>
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon alert-icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          v-if="props.type === 'info'"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
          <path d="M12 9h.01"></path>
          <path d="M11 12h1v4h1"></path>
        </svg>
      </div>
      <div>{{ message }}</div>
      <slot name="message"></slot>
    </div>
    <a class="btn-close" data-bs-dismiss="alert" aria-label="close" v-if="props.dismissible"></a>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps(['type', 'dismissible', 'message', 'important'])
const alert = ref(null)

onMounted(() => {
  switch (props.type) {
    case 'success':
      alert.value.classList.add('alert-success')
      break
    case 'warning':
      alert.value.classList.add('alert-warning')
      break
    case 'danger':
      alert.value.classList.add('alert-danger')
      break
    default:
      alert.value.classList.add('alert-info')
      break
  }

  if (props.dismissible) {
    alert.value.classList.add('alert-dismissible')
  }

  if (props.important) {
    alert.value.classList.add('alert-important')
  }
})
</script>
