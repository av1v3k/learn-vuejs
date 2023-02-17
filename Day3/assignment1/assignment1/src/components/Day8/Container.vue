<script setup>

</script>
<template>
    <div class="container-fluid">
        <header>
            <slot name="header"></slot>
        </header>
        <article>
            <div class="row">
                <slot name="body"></slot>
            </div>
        </article>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>
