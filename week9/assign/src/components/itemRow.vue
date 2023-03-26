<script setup>
const props = defineProps(["item"]);
console.log("the item", props.item);
</script>

<template>
     <tr>
        <td>{{item.title}}</td>
        <td>{{item.artist}}</td>
        <td>{{item.yearReleased}}</td>
        <td>{{item.genre}}</td>
        <td><button type="button" v-on:click="deleteItem(item)">Delete</button></td>
    </tr>
</template>