<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.colr
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.mb-5.justify-content-center
      .col-12.col-md-1.d-flex.align-items-center
        figure
          img(src='@/assets/curso/1.svg', alt='Texto que describa la imagen')
      .col-12.col-md-9
        p.mb-0 La comunicación digital llegó para quedarse por un buen tiempo y la misión del comercial en línea es trabajarla a favor de los objetivos comerciales de las empresas como se verá a continuación:
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/oHYwOrT0pNQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
  
    h4 Éxitos en este nuevo proceso de formación. 
    
   
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
