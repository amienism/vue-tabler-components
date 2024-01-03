<template>
    <h1>Alerts</h1>
    <t-alert type="success" dismissible="true" important="true">
        <template v-slot:message>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est unde quam dolorem explicabo voluptas. Recusandae, impedit quisquam blanditiis ex ipsum enim quidem nesciunt vero aut laboriosam aliquam maxime cumque facere.
        </template>
    </t-alert>
    <t-alert type="warning" dismissible="true" important="true">
        <template v-slot:message>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est unde quam dolorem explicabo voluptas. Recusandae, impedit quisquam blanditiis ex ipsum enim quidem nesciunt vero aut laboriosam aliquam maxime cumque facere.
        </template>
    </t-alert>
    <t-alert type="danger" dismissible="true" important="true">
        <template v-slot:message>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est unde quam dolorem explicabo voluptas. Recusandae, impedit quisquam blanditiis ex ipsum enim quidem nesciunt vero aut laboriosam aliquam maxime cumque facere.
        </template>
    </t-alert>
    <t-alert type="info" dismissible="true" important="true">
        <template v-slot:message>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est unde quam dolorem explicabo voluptas. Recusandae, impedit quisquam blanditiis ex ipsum enim quidem nesciunt vero aut laboriosam aliquam maxime cumque facere.
        </template>
    </t-alert>
</template>

<script>
import TAlert from '@/components/TAlert.vue';

export default {
    components: {
        TAlert
    }
}

</script>