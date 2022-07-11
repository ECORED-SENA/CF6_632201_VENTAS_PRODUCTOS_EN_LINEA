<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.colr
        span 4
      h1  Objeciones en un plan de mercadeo

    figure.position-relative.mb-5(data-aos="zoom-in-up")
      img(src='@/assets/curso/tema4/t4-1.png', alt='introducción')
      .row.justify-content-center
        .col-12.col-md-10
          .bgr_2
            p.m-0.p-4.text-bold Para llevar a cabo un plan de mercadeo o de comunicación digital es importante tener en cuenta dos factores de objeción que pueden comprometer el desarrollo efectivo de estas. Es vital analizar las ventajas y desventajas del plan, compararlo con otros que ya se hayan llevado a cabo en el pasado, pero sobretodo hacer una revisión juiciosa de los dos siguientes puntos:
    
    .row.mb-5
      .col-12.col-md-4.mb-3.mb-md-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema4/t4-2.png', alt='img')
      .col-12.col-md-8(data-aos="fade-left")
        LineaTiempoD.color-primario
          .row(numero="1" titulo="No derivar al cliente a un canal de comunicación diferente")
            .col-md-2.mb-3.mb-md-0.mt-3.mt-md-0
              figure.d-flex.justify-content-center
                img.img120(src='@/assets/curso/tema4/t4-3.svg', alt='Texto que describa la imagen')
            .col-md-10.mb-4.mb-md-0
              p.text-small Para mejorar la experiencia de compra, servicio técnico, comunicación, etc., es necesario no derivar a un cliente a otro canal de comunicación cuando éste contacta a la compañía. Por ejemplo, si se recibe un DM en <em>instagram</em> o en <em>facebook</em>, tratar de no desviar o derivar al cliente a contactar a la organización por teléfono, o correo electrónico, ni recomendarle otro canal de comunicación. Lo importante es atenderle en la inmediatez sin generar un paso adicional dentro de la cadena de comunicación, ya que se podrán perder ventas potenciales y se le estará agregando un paso más al cliente dentro de la cadena productiva. A menos de que sea estrictamente necesario derivarlo a otro canal de comunicación se debe tratar a toda costa de resolver las necesidades o inquietudes del cliente en ese mismo momento.
          .row(numero="2" titulo="Facilitar el acceso del cliente a todos los canales de comunicación")
            .col-md-2.mb-3.mb-md-0.mt-3.mt-md-0
              figure.d-flex.justify-content-center
                img.img120(src='@/assets/curso/tema4/t4-4.svg', alt='Texto que describa la imagen')
            .col-md-10.mb-4.mb-md-0
              p.text-small Cada cliente tiene una preferencia diferente para los canales de comunicación digital y medios de <em>marketing</em> que prefiere. Algunos prefieren comunicarse vía correo electrónico, otros prefieren comunicación vía portales <em>web</em>, otros prefieren atención personalizada en <em>chats</em>, otros prefieren <em>bots</em> de respuesta automatizada, etc. Es muy importante que la compañía cuente con la mayor cantidad de canales de comunicación que pueda y permita el acceso sin restricciones a estos por parte del público objetivo y los clientes. Además se debe hacer un gran esfuerzo para que la comunicación sea homogénea y comparta un mismo tono en todos los canales disponibles. 

    .bloque-texto-a.bgr_20.p-4.p-md-5.mb-5(data-aos="flip-up")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-12
          .bloque-texto-a__texto.p-4
            p.mb-0 Para complementar el concepto revisado hasta ahora se procede a compartir unas buenas prácticas en el uso de la comunicación digital, por favor revisar el siguiente video:

    figure.mb-5(data-aos="flip-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/NFSHACFssI0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)  
    
    .row.bgr_21.p-4(data-aos="zoom-in")
      .col-12.col-md-1.mb-3.mb-md-0
        figure.d-flex.justify-content-center
          img.img80(src='@/assets/curso/tema4/t4-5.svg', alt='Texto que describa la imagen')
      .col-12.col-md-11
        span.text-bold Es así como se puede ver cómo se relacionan los conceptos de estrategia de comunicación, <em>marketing</em> digital, comunicación digital y experiencia de compra. Es de vital importancia para una compañía que haya cohesión y apoyo mutuo entre las áreas que manejan estos componentes productivos ya que su correcta utilización puede traer beneficios que impacten directamente sobre las ventas y la utilidad de la compañía. 
        span Existen muchas alternativas de plataformas con y sin alojamiento propio, con diferentes costos y herramientas que pueden ayudar a cumplir esta tarea. Sin embargo es responsabilidad de cada organización elegir la más adecuada según sus necesidades de ventas, el perfil de sus clientes y la compatibilidad que tenga con las diferentes estrategias que atañen al área de mercadeo.
            
            
         
    
    
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
