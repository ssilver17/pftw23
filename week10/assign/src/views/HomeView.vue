<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
    <div>
        <section>
            <div class="home-container">
            <img src="/covers/player.png" alt="record player" />
            
            <p>Sunt ius, ut laces diti dolum harchictium fugiae volor alita quist, alictem dolupta quamet faccaerfere necerunt, odi adis re nienis sitas voloreicius dolesed ulpa doloruptas magnimo luptaturia nos rest, cor sunt quiam archil ea aut estrum cor arcidemo cus eum landaerum accae odia doluptati debisque dolorehendae samet volumqui comnia nis et, ute eos ipsapid ellibus, simpelignat aliquo tent.</p>
            <RouterLink class="see-collection" to="/albums">See my vinyl collection</RouterLink>
        </div>
        </section>
    </div>
</template>
<style>
    .home-container {
        max-width: 600px;
        margin: 0 auto;
        font-size: 22px;
        line-height: 1.2;
    }

    .see-collection {
        font-size: 25px;
    }
</style>