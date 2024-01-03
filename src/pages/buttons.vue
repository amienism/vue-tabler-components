<style scoped>

.button-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

</style>

<template>
    <h1>Buttons</h1>
    <div class="button-wrapper">
        <t-button color="primary" label="Normal"></t-button>
        <t-button color="secondary" label="Normal"></t-button>
        <t-button disabled="true" color="warning" label="Normal"></t-button>
        <t-button type="outline" color="danger" label="Outline"></t-button>
        <t-button type="outline" color="dark" label="Outline"></t-button>
        <t-button disabled="true" type="outline" color="primary" label="Outline"></t-button>
        <t-button type="ghost" color="primary" label="Ghost"></t-button>
        <t-button type="ghost" color="secondary" label="Ghost"></t-button>
        <t-button disabled="true" type="ghost" color="warning" label="Ghost"></t-button>
        <t-button square="true" color="danger" label="Square"></t-button>
        <t-button square="true" color="dark" label="Square"></t-button>
        <t-button disabled="true" square="true" color="primary" label="Square"></t-button>
        <t-button pill="true" color="primary" label="Pill"></t-button>
        <t-button pill="true" color="secondary" label="Pill"></t-button>
        <t-button disabled="true" pill="true" color="warning" label="Pill"></t-button>
    </div>
</template>

<script setup>

import TButton from '@/components/TButton.vue';

</script>