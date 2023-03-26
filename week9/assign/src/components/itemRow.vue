<script setup>
const props = defineProps(["item", index]);
console.log("the item", props.item);
</script>

<template>
     <tr class="tableRow" v-bind:class="{}">
        <td>{{item.title}}</td>
        <td>{{item.artist}}</td>
        <td>{{item.yearReleased}}</td>
        <td>{{item.genre}}</td>
        <td><button type="button" v-on:click="$emit('deleteItem', item)">Delete</button></td>
    </tr>
</template>