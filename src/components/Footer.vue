<template>
    <div class="footer">
        <div class="logo">
            <img class="logoPng" src="@/assets/images/logo.png" alt="">
        </div>
        <h1 class="nomeSite"> Twitter(exemplo) </h1>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .footer{
        position: static;
        bottom: 0;
        background: #242222;
        width: 100%;
        height: 100px;
    }
    .logo{
        position: relative;
    }
    .logoPng{
        position: absolute;
        width:5%;
    }
    .nomeSite{
        color: white;
        font-size: 1em;
        font-weight: 700;
    }
</style>