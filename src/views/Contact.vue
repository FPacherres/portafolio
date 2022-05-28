<template>
    <section>
        <div class="title"><span>Contact</span></div>
        <fform class="form" />
        <div class="snippet">Snippet</div>
        <ffooter class="footer" />
    </section>
</template>

<script>
import ffooter from "../components/global/FFooter.vue";
import fform from "../components/global/FForm.vue";
export default {
    name: 'Contact',
    components: { ffooter, fform },
    data() {
        return {}
    },
}
</script>

<style scoped>
section {
    padding: 80px 0 0px;
    box-sizing: border-box;
    display: grid;
    grid-template-areas: "title title""form snippet""footer footer";
    grid-template-columns: 1.2fr 1fr;
    grid-template-rows: 60px 1fr 40px;
    column-gap: 20px;
    row-gap: 40px;
}

.title {
    grid-area: title;
    padding-top: 1px;
}

.form {
    grid-area: form;
}

.snippet {
    border: 1px solid #f132f1;
    grid-area: snippet;
}

.footer {
    grid-area: footer;
}
.title span {
    color: var(--bg-2);
    font-size: 40px;
}

@media (max-width: 870px) {
    section {
        padding: 70px 0 0px;
        grid-template-areas: "title" "form" "snippet" "footer";
        grid-template-columns: 1fr;
        grid-template-rows: 40px 1fr 100px 30px;
        column-gap: 20px;
        row-gap: 20px;
    }
    .title span {
        font-size: 25px;
    }
}
</style>
